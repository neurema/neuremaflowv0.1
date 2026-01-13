'use client';

import React, { useMemo, useLayoutEffect, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AppModel(props: any) {
    const obj = useLoader(OBJLoader, '/iphone17.obj') as THREE.Group;
    // Using app1.png as fallback since app12.png was not found in the workspace
    const texture = useLoader(TextureLoader, '/app1.png');

    const scene = useMemo(() => obj.clone(true), [obj]);

    // Internal transforms to center and normalize size
    const [internalTransform, setInternalTransform] = useState({
        position: new THREE.Vector3(),
        scale: new THREE.Vector3(1, 1, 1)
    });

    useLayoutEffect(() => {
        // 1. Reset visibility
        scene.traverse((child) => {
            child.visible = true;
        });

        // 2. Identify "Target" (Grey/Titanium Phone) Bounds
        const targetBox = new THREE.Box3();
        let foundTarget = false;

        scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const mat = mesh.material as THREE.Material;
                const matName = mat.name || '';

                // Identify the main body of the variant we want (Grey/Black)
                if (matName.toLowerCase().includes('grey') || matName.toLowerCase().includes('black') || matName.toLowerCase().includes('titanium')) {
                    if (mesh.geometry) {
                        mesh.geometry.computeBoundingBox();
                        const box = mesh.geometry.boundingBox!.clone();
                        box.applyMatrix4(mesh.matrix); // Transform to parent space
                        targetBox.union(box);
                        foundTarget = true;
                    }
                }
            }
        });

        // If we found the Grey phone, filter everything else by position
        if (foundTarget) {
            // Expand box slightly to include attached parts (cameras, buttons) that might stick out
            const keepBox = targetBox.clone().expandByScalar(0.2);

            scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    // Check if mesh center is inside keepBox
                    if (mesh.geometry) {
                        mesh.geometry.computeBoundingBox();
                        const center = new THREE.Vector3();
                        mesh.geometry.boundingBox!.getCenter(center);
                        center.applyMatrix4(mesh.matrix); // To Parent Space

                        if (!keepBox.containsPoint(center)) {
                            mesh.visible = false;
                        }
                    }
                }
            });
        }

        // 3. Apply Materials to Visible Meshes
        scene.traverse((child) => {
            if (child.visible && (child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                const mat = mesh.material as THREE.Material;
                const matName = mat.name || '';

                if (matName.includes('Display') && !matName.includes('Borders')) {
                    // SCREEN
                    mesh.material = new THREE.MeshStandardMaterial({
                        map: texture,
                        roughness: 0.2,
                        metalness: 0.1,
                        emissive: new THREE.Color(0xffffff),
                        emissiveMap: texture,
                        emissiveIntensity: 0.2,
                        name: 'DisplayMaterial'
                    });
                    (mesh.material as THREE.MeshStandardMaterial).color.set(0xffffff);
                } else if (matName.includes('Body') || matName.includes('Metal') || matName.includes('Grey') || matName.includes('Side')) {
                    // BODY - Dark Titanium look
                    mesh.material = new THREE.MeshStandardMaterial({
                        color: new THREE.Color('#2A2A2A'),
                        roughness: 0.4,
                        metalness: 0.8,
                        name: 'BodyMaterial'
                    });
                } else if (matName.includes('Glass') || matName.includes('Cam')) {
                    // GLASS / CAMERAS
                    mesh.material = new THREE.MeshStandardMaterial({
                        color: new THREE.Color('#111111'),
                        roughness: 0.1,
                        metalness: 0.9,
                        transparent: true,
                        opacity: 0.9,
                        name: 'GlassMaterial'
                    });
                }
            }
        });

        // 4. Compute Bounding Box of ONLY visible parts for centering
        const finalBox = new THREE.Box3();
        scene.traverse((child) => {
            if (child.visible && (child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                if (mesh.geometry) {
                    mesh.geometry.computeBoundingBox();
                    const box = mesh.geometry.boundingBox!.clone();
                    box.applyMatrix4(mesh.matrix);
                    finalBox.union(box);
                }
            }
        });

        if (!finalBox.isEmpty()) {
            const center = finalBox.getCenter(new THREE.Vector3());
            const size = finalBox.getSize(new THREE.Vector3());

            // Center: Negative of center
            const pos = center.clone().negate();

            // Scale: Target height ~3 units (matching previous box)
            const targetHeight = 3;
            // Avoid division by zero
            const s = (size.y > 0.001) ? (targetHeight / size.y) : 1;

            // Correct position calculation:
            // We want the resulting center to be 0,0,0.
            // Current center is C.
            // We apply scale S. Center becomes S*C.
            // We need to translate by -S*C.
            setInternalTransform({
                scale: new THREE.Vector3(s, s, s),
                position: center.multiplyScalar(-s)
            });
        }

    }, [scene, texture]);

    return (
        <group {...props}>
            <primitive
                object={scene}
                scale={internalTransform.scale}
                position={internalTransform.position}
            />
        </group>
    );
}
