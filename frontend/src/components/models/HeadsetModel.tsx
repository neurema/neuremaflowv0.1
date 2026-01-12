'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

export function HeadsetModel(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            // Gentle floating animation
            group.current.position.y = Math.sin(t * 0.5) * 0.1;
            // Gentle rotation
            group.current.rotation.y = Math.sin(t * 0.3) * 0.1;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Main Visor Body */}
            <mesh position={[0, 0, 0]}>
                <capsuleGeometry args={[0.5, 1, 4, 16]} />
                <meshPhysicalMaterial
                    color="#f0f0f0"
                    roughness={0.1}
                    metalness={0.1}
                    clearcoat={1}
                />
                {/* Rotation to make capsule horizontal-ish visor */}
                <group rotation={[0, 0, Math.PI / 2]}>
                    <mesh position={[0, -0.1, 0.3]}>
                        <boxGeometry args={[1.6, 0.7, 0.5]} />
                        <meshStandardMaterial color="#ffffff" roughness={0.2} />
                    </mesh>

                    {/* Front Glass */}
                    <mesh position={[0, -0.1, 0.56]}>
                        <boxGeometry args={[1.55, 0.65, 0.1]} />
                        <MeshTransmissionMaterial
                            backside
                            samples={4}
                            thickness={0.2}
                            chromaticAberration={0.05}
                            anisotropy={0.1}
                            distortion={0.1}
                            distortionScale={0.1}
                            temporalDistortion={0.1}
                            iridescence={1}
                            iridescenceIOR={1}
                            iridescenceThicknessRange={[0, 1400]}
                            resolution={1024}
                        />
                    </mesh>
                </group>
            </mesh>

            {/* Strap */}
            <mesh position={[0, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.6, 0.05, 16, 100, Math.PI]} />
                <meshStandardMaterial color="#ddd" />
            </mesh>

            {/* Back Strap */}
            <mesh position={[0, 0, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.6, 0.08, 16, 50]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Connecting Arms */}
            <mesh position={[0.8, 0, -0.4]} rotation={[0, Math.PI / 2, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
            <mesh position={[-0.8, 0, -0.4]} rotation={[0, Math.PI / 2, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                <meshStandardMaterial color="#fff" />
            </mesh>
        </group>
    );
}
