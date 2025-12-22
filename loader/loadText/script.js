import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // DOM Elements
    const stickySection = document.querySelector('.sticky');
    const logo = document.querySelector('.logo');
    const header1 = document.querySelector('.header-1');
    const header2 = document.querySelector('.header-2');

    // Select ALL faces of ALL cubes for multi-image mapping
    const allCubeFaces = document.querySelectorAll('.cube > div');

    const stickyHeight = window.innerHeight * 5;

    // Image Setup - Multi-Image Mapping
    const availableImages = [
        './e-ac-1.jpg',
        './e-ac-3.jpg',
        './e-ac-4.jpg',
        './landa2.jpg',
        './mexico-b.jpg',
        './mexico-ex.jpg'
    ];

    // Assign a unique image to EVERY face
    let imageCounter = 0;
    allCubeFaces.forEach((face) => {
        const img = document.createElement('img');
        // Cycle through images for variety
        img.src = availableImages[imageCounter % availableImages.length];
        img.alt = `Cube Face Image ${imageCounter + 1}`;
        face.appendChild(img);
        imageCounter++;
    });

    // Interpolation Helper
    const interpolate = (start, end, progress) => {
        return start + (end - start) * progress;
    };

    // Animation Data
    // Final rotations must be multiples of 90 to show "one dimension" (flat face)
    const cubesData = {
        "cube-1": {
            final: { top: 25, left: 25, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
        },
        "cube-2": {
            final: { top: 25, left: 75, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
        },
        "cube-3": {
            final: { top: 50, left: 15, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
        },
        "cube-4": {
            final: { top: 50, left: 85, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
        },
        "cube-5": {
            final: { top: 75, left: 25, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
        },
        "cube-6": {
            final: { top: 75, left: 75, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
        }
    };

    // Main Scroll Animation
    ScrollTrigger.create({
        trigger: stickySection,
        start: 'top top',
        end: `+=${stickyHeight}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,

        onUpdate: (self) => {
            const progress = self.progress;

            // Phase 1: Logo Animation (0% - 100%)
            // Logo moves UP from center to top position as a SOLID unit
            const logoMoveProgress = Math.min(progress * 2, 1);
            const currentLogoTop = interpolate(35, 25, logoMoveProgress); // Move from 35% to 25% top
            const currentLogoScale = interpolate(1, 0.7, logoMoveProgress);

            logo.style.top = `${currentLogoTop}%`;
            logo.style.transform = `translate(-50%, -50%) scale(${currentLogoScale})`;
            logo.style.opacity = 1;
            // No particle scattering - blocks stay in place


            // Phase 2: Header 1 Fade Out (0% - 20%)
            const header1Progress = Math.min(progress * 5, 1);
            header1.style.opacity = 1 - header1Progress;
            header1.style.filter = `blur(${header1Progress * 10}px)`;
            header1.style.transform = `translate(-50%, -50%) scale(${1 + header1Progress})`;

            // Phase 3: Cubes Entry & Rotation (10% - 100%)
            const cubeProgress = Math.max(0, (progress - 0.1) / 0.9);

            const easedCubeProgress = cubeProgress < 0.5
                ? 2 * cubeProgress * cubeProgress
                : 1 - Math.pow(-2 * cubeProgress + 2, 2) / 2;

            Object.entries(cubesData).forEach(([cubeClass, data]) => {
                const cube = document.querySelector(`.${cubeClass}`);
                const { final } = data;

                // Start from Center (50, 50)
                const startTop = 50;
                const startLeft = 50;
                const startZ = -1000;

                const top = interpolate(startTop, final.top, easedCubeProgress);
                const left = interpolate(startLeft, final.left, easedCubeProgress);

                // Rotation Logic
                let rotateX, rotateY, rotateZ;

                if (cubeClass === 'cube-5' || cubeClass === 'cube-6') {
                    // Bottom cubes rotate 720deg (2 spins) and land on 0
                    rotateX = interpolate(720, 0, easedCubeProgress);
                    rotateY = interpolate(720, 0, easedCubeProgress);
                    rotateZ = interpolate(0, 0, easedCubeProgress);
                } else {
                    // Other cubes rotate 360deg and land on 0
                    rotateX = interpolate(360, 0, easedCubeProgress);
                    rotateY = interpolate(360, 0, easedCubeProgress);
                    rotateZ = interpolate(45, 0, easedCubeProgress);
                }

                const z = interpolate(startZ, final.z, easedCubeProgress);

                const scale = Math.min(cubeProgress * 1.5, 1);
                const opacity = Math.min(cubeProgress * 3, 1);

                cube.style.top = `${top}%`;
                cube.style.left = `${left}%`;
                cube.style.transform = `translate(-50%, -50%) translateZ(${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
                cube.style.opacity = opacity;
            });

            // Phase 4: Header 2 Fade In (60% - 100%)
            const header2Start = 0.6;
            const header2Progress = Math.max(0, (progress - header2Start) / (1 - header2Start));

            header2.style.opacity = header2Progress;
            header2.style.filter = `blur(${(1 - header2Progress) * 10}px)`;
            header2.style.top = '60%';
            header2.style.transform = `translate(-50%, -50%) scale(${0.8 + (header2Progress * 0.2)})`;
        }
    });
});
