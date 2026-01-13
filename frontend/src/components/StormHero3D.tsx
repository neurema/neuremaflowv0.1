'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls } from '@react-three/drei';
import { OculosModel } from './models/OculosModel';

export default function StormHero3D() {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 6], fov: 45 }}
                style={{ width: '100%', height: '100%' }}
            >
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} shadow-mapSize={2048} castShadow />

                <Suspense fallback={null}>
                    <group rotation={[0, -Math.PI / 2, 0]} position={[0, -0.5, 0]}>
                        <OculosModel scale={3.6} />
                    </group>

                    <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                </Suspense>
            </Canvas>
        </div>
    );
}
