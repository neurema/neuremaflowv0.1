'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppModel(props: any) {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            // Floating animation
            group.current.rotation.x = Math.sin(t * 0.2) * 0.05;
            group.current.rotation.y = Math.sin(t * 0.3) * 0.05;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Phone Body */}
                <RoundedBox args={[1.5, 3, 0.1]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.8} />
                </RoundedBox>

                {/* Screen */}
                <mesh position={[0, 0, 0.06]}>
                    <planeGeometry args={[1.4, 2.9]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>

                {/* UI Elements Mockup */}
                <group position={[0, 0, 0.07]}>
                    {/* Header */}
                    <mesh position={[0, 1.2, 0]}>
                        <planeGeometry args={[1.2, 0.3]} />
                        <meshBasicMaterial color="#8347dd" />
                    </mesh>

                    {/* Content Cards */}
                    <mesh position={[0, 0.5, 0.01]}>
                        <planeGeometry args={[1.2, 0.8]} />
                        <meshBasicMaterial color="#f4fffb" />
                    </mesh>
                    <mesh position={[0, -0.5, 0.01]}>
                        <planeGeometry args={[1.2, 0.8]} />
                        <meshBasicMaterial color="#f4fffb" />
                    </mesh>

                    {/* Text */}
                    <Text
                        position={[0, 1.2, 0.02]}
                        fontSize={0.15}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                    >
                        Neurema
                    </Text>
                    <Text
                        position={[0, 0.5, 0.02]}
                        fontSize={0.1}
                        color="#333"
                        maxWidth={1}
                        textAlign="center"
                        anchorX="center"
                        anchorY="middle"
                    >
                        BrainStorm Mode
                    </Text>
                </group>
            </Float>
        </group>
    );
}
