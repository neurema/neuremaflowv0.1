'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Float, Decal } from '@react-three/drei';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppModel(props: any) {
    const group = useRef<THREE.Group>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { nodes } = useGLTF('/iphone-optimized.glb') as any; // Type casting for convenience
    const screenTexture = useTexture('/screen.jpg');

    // 1. CONFIG: Fix the texture direction
    screenTexture.flipY = true;
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    const UNIT_SCALE = 99;

    // 3. LOGIC: Find the specific screen node automatically
    // We memoize this so it doesn't run every frame
    const screenGeometry = useMemo(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const screenNode = Object.values(nodes).find((node: any) =>
            node.isMesh && node.material.name === '4130c6244c49c5d5712e'
        ) as THREE.Mesh;

        return screenNode ? screenNode.geometry : null;
    }, [nodes]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.x = Math.sin(t * 0.2) * 0.05;
            group.current.rotation.y = Math.sin(t * 0.3) * 0.05;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>

                {/* RENDER 1: The Phone Body (Everything EXCEPT the screen) */}
                {/* We filter out the screen mesh to avoid Z-fighting (two screens in same place) */}
                <primitive
                    object={nodes.Scene || nodes.iphone_body} // Adjust based on your root node name
                    scale={0.25}
                    visible={true}
                />

                {/* RENDER 2: The Screen (Manual Control) */}
                {/* We render the screen manually so we can put the Decal INSIDE it */}
                {screenGeometry && (
                    <mesh
                        geometry={screenGeometry}
                        scale={0.25} // Must match the primitive scale above!
                    >
                        {/* Base black screen material */}
                        <meshStandardMaterial color="black" roughness={0.2} />

                        {/* The Image Sticker */}
                        <Decal
                            // debug // <--- UNCOMMENT THIS to see a yellow box helper around the decal
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                            // Scale: Width, Height, Depth
                            scale={[
                                0.071 * UNIT_SCALE,
                                0.147 * UNIT_SCALE,
                                1
                            ]}
                            map={screenTexture}
                        />
                    </mesh>
                )}

            </Float>
        </group>
    );
}

useGLTF.preload('/iphone-optimized.glb');