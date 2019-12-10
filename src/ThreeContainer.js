import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ResizeObserver from 'resize-observer-polyfill';

function ThreeContainer() {
    const ref = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const [width, height] = [ref.current.parentElement.clientWidth, ref.current.parentElement.clientHeight];
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        ref.current.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        const animate = function() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        const ro = new ResizeObserver((entries) => {
            if (entries.length < 1) {
                return;
            }
            const {width, height} = entries[0].contentRect;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        });
        ro.observe(ref.current.parentElement);
    }, []);

    return <div style={{position: 'absolute'}} ref={ref} />;
}

export default ThreeContainer;
