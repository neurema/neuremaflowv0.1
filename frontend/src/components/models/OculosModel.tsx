'use client';

import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OculosModel(props: any) {
    const materials = useLoader(MTLLoader, '/oculos.mtl');
    const obj = useLoader(OBJLoader, '/oculos.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (group.current) {
            // Gentle floating animation
            group.current.position.y = Math.sin(t * 0.5) * 0.1;
            // Gentle rotation base
            // group.current.rotation.y = Math.sin(t * 0.3) * 0.1;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={obj} />
        </group>
    );
}
