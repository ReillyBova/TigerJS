import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeContainer() {
    const ref = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const [width, height] = [
            ref.current.parentElement.clientWidth,
            ref.current.parentElement.clientHeight,
        ];
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

        function handleResize() {
            if (!ref || !ref.current || !ref.current.parentElement) {
                return;
            }

            const { clientWidth, clientHeight } = ref.current.parentElement;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        }

        window.addEventListener('resize', handleResize, false);
        handleResize();

        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div style={{ position: 'absolute' }} ref={ref} />;
}

export default ThreeContainer;
