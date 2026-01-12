'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { HeadsetModel } from './models/HeadsetModel';
import { AppModel } from './models/AppModel';

interface ThreeDSceneProps {
    activeSlide: number;
    mousePos: { x: number, y: number };
}

export default function ThreeDScene({ activeSlide, mousePos }: ThreeDSceneProps) {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }} // Pointer events handled by parent wrapper optionally, but we want interaction
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} shadow-mapSize={2048} castShadow />

            <Suspense fallback={null}>
                <Environment preset="city" />

                {/* Adjusted position to define "Product Side" (Right) */}
                <group position={[2.2, 0, 0]} rotation={[mousePos.y * 0.05, mousePos.x * 0.05, 0]}>
                    <group visible={activeSlide === 0}>
                        <HeadsetModel scale={1.2} />
                    </group>

                    <group visible={activeSlide === 1}>
                        {/* App model might need different rotation */}
                        <group rotation={[0, -0.3, 0]}>
                            <AppModel scale={0.8} />
                        </group>
                    </group>
                </group>

                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
            </Suspense>
        </Canvas>
    );
}
