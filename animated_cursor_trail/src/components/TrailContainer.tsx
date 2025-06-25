'use client'

import React, { useEffect, useRef } from 'react'

function TrailContainer() {
    const trailContainerRef = useRef<HTMLDivElement>(null);
    const animationStateRef = useRef<number | null>(null);
    const trailRef = useRef<Array<{
        element: HTMLDivElement;
        maskLayers: HTMLDivElement[];
        imageLayers: HTMLDivElement[];
        removeTime: number;
    }>>([]);
    const currentImageIndexRef = useRef(0);
    const mousePosRef = useRef({x: 0, y: 0});
    const lastMousePosRef = useRef({x: 0, y: 0});
    const interpolatedMousePosRef = useRef({x: 0, y: 0});
    const isDesktopRef = useRef(false);

    useEffect(() => {
        const config = {
            imageLifespan: 1000,
            mouseThreshold: 150,
            inDuration: 750,
            outDuration: 1000,
            staggerIn: 100,
            staggerOut: 25,
            slideDuration: 1000,
            slideEasing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            easing: "cubic-bezier(0.87, 0, 0.13, 1)"
        };

        const trailImageCount = 11;
        const images = Array.from(
            {length: trailImageCount},
            (_, i) => `/images/img${i + 1}.jpg`
        );
        const trailContainer = trailContainerRef.current;

        if (!trailContainer) return;

        isDesktopRef.current = window.innerWidth > 1000;

        const MathUtils = {
            lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
            distance: (x1: number, y1: number, x2: number, y2: number) => Math.hypot(x2 - x1, y2 - y1),
        };

        const getMouseDistance = () =>
            MathUtils.distance(
                mousePosRef.current.x,
                mousePosRef.current.y,
                lastMousePosRef.current.x,
                lastMousePosRef.current.y
            );
        
        const isInTrailContainer = (x: number, y: number) => {
            const rect = trailContainer.getBoundingClientRect();
            return (
                x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
            );
        };

        const createTrailImage = () => {
            console.log("Creating trail image at:", mousePosRef.current); // Debug log
            
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("trail-img");

            const imgSrc = images[currentImageIndexRef.current];
            console.log("Using image:", imgSrc); // Debug log
            currentImageIndexRef.current = (currentImageIndexRef.current + 1) % trailImageCount;

            const rect = trailContainer.getBoundingClientRect();
            const startX = interpolatedMousePosRef.current.x - rect.left - 87.5;
            const startY = interpolatedMousePosRef.current.y - rect.top - 87.5;
            const targetX = mousePosRef.current.x - rect.left - 87.5;
            const targetY = mousePosRef.current.y - rect.top - 87.5; // Fixed: was assigning instead of subtracting

            imgContainer.style.left = `${startX}px`;
            imgContainer.style.top = `${startY}px`;

            imgContainer.style.transition = `left ${config.slideDuration}ms ${config.slideEasing}, top ${config.slideDuration}ms ${config.slideEasing}`; // Fixed: removed extra }

            const maskLayers: HTMLDivElement[] = [];
            const imageLayers: HTMLDivElement[] = [];

            for (let i = 0; i < 10; i++) {
                const layer = document.createElement("div");
                layer.classList.add("mask-layer");

                const imageLayer = document.createElement("div");
                imageLayer.classList.add("image-layer");
                imageLayer.style.backgroundImage = `url(${imgSrc})`;

                const startYPercent = i * 10;
                const endYPercent = (i + 1) * 10;

                // Start with collapsed clip-path (middle line)
                layer.style.clipPath = `polygon(50% ${startYPercent}%, 50% ${startYPercent}%, 50% ${endYPercent}%, 50% ${endYPercent}%)`;
                layer.style.transition = `clip-path ${config.inDuration}ms ${config.easing}`;
                layer.style.transform = "translateZ(0)";
                layer.style.backfaceVisibility = "hidden";

                layer.appendChild(imageLayer);
                imgContainer.appendChild(layer);

                maskLayers.push(layer);
                imageLayers.push(imageLayer);
            }

            trailContainer.appendChild(imgContainer);

            requestAnimationFrame(() => {
                imgContainer.style.left = `${targetX}px`;
                imgContainer.style.top = `${targetY}px`;

                maskLayers.forEach((layer, i) => {
                    const startYPercent = i * 10;
                    const endYPercent = (i + 1) * 10;
                    const distanceFromMiddle = Math.abs(i - 4.5);

                    const delay = distanceFromMiddle * config.staggerIn;

                    setTimeout(() => {
                        // Expand to show full strip
                        layer.style.clipPath = `polygon(0% ${startYPercent}%, 100% ${startYPercent}%, 100% ${endYPercent}%, 0% ${endYPercent}%)`;
                    }, delay);
                });
            });

            trailRef.current.push({
                element: imgContainer,
                maskLayers: maskLayers,
                imageLayers: imageLayers,
                removeTime: Date.now() + config.imageLifespan,
            });
        };

        const removeOldImages = () => {
            const now = Date.now();
            if (trailRef.current.length === 0) return;

            const oldestImage = trailRef.current[0];
            if (now >= oldestImage.removeTime) {
                const imgToRemove = trailRef.current.shift();
                if (!imgToRemove) return;

                imgToRemove.maskLayers.forEach((layer, i) => {
                    const startYPercent = i * 10;
                    const endYPercent = (i + 1) * 10;
                    const distanceFromEdge = 4.5 - Math.abs(i - 4.5);
                    const delay = distanceFromEdge * config.staggerOut;

                    layer.style.transition = `clip-path ${config.outDuration}ms ${config.easing}`;

                    setTimeout(() => {
                        // Collapse back to middle line
                        layer.style.clipPath = `polygon(50% ${startYPercent}%, 50% ${startYPercent}%, 50% ${endYPercent}%, 50% ${endYPercent}%)`;
                    }, delay);
                });

                imgToRemove.imageLayers.forEach((imageLayer) => { 
                    imageLayer.style.transition = `opacity ${config.outDuration}ms ${config.easing}`; // Fixed: was 'opactity'
                    imageLayer.style.opacity = "0.25";
                });

                setTimeout(() => {
                    if (imgToRemove.element.parentNode) {
                        imgToRemove.element.parentNode.removeChild(imgToRemove.element);
                    }
                }, config.outDuration + 100);
            }
        };

        const render = () => {
            if (!isDesktopRef.current) return;

            const distance = getMouseDistance();

            interpolatedMousePosRef.current.x = MathUtils.lerp(
                interpolatedMousePosRef.current.x || mousePosRef.current.x,
                mousePosRef.current.x,
                0.1
            );

            interpolatedMousePosRef.current.y = MathUtils.lerp(
                interpolatedMousePosRef.current.y || mousePosRef.current.y,
                mousePosRef.current.y,
                0.1
            );

            if (distance > config.mouseThreshold && isInTrailContainer(mousePosRef.current.x, mousePosRef.current.y)) {
                createTrailImage();
                lastMousePosRef.current = {...mousePosRef.current};
            }

            removeOldImages();
            animationStateRef.current = requestAnimationFrame(render);
        };

        const startAnimation = () => {
            if (!isDesktopRef.current) return null;

            const handleMouseMove = (e: MouseEvent) => {
                mousePosRef.current = { x: e.clientX, y: e.clientY};
            };

            document.addEventListener("mousemove", handleMouseMove);
            animationStateRef.current = requestAnimationFrame(render);

            return () => {
                document.removeEventListener("mousemove", handleMouseMove);
            };
        };

        const stopAnimation = () => {
            if (animationStateRef.current) {
                cancelAnimationFrame(animationStateRef.current);
                animationStateRef.current = null;
            }

            trailRef.current.forEach((item) => {
                if (item.element.parentNode) {
                    item.element.parentNode.removeChild(item.element);
                }
            });

            trailRef.current.length = 0;
        };

        const handleResize = () => {
            const wasDesktop = isDesktopRef.current;
            isDesktopRef.current = window.innerWidth > 1000;

            if (isDesktopRef.current && !wasDesktop) {
                cleanupMouseListener = startAnimation();
            } else if (!isDesktopRef.current && wasDesktop) {
                stopAnimation();

                if (cleanupMouseListener) {
                    cleanupMouseListener();
                    cleanupMouseListener = null;
                }
            }
        };

        let cleanupMouseListener: (() => void) | null = null;

        window.addEventListener("resize", handleResize);

        if (isDesktopRef.current) {
            cleanupMouseListener = startAnimation();
        }

        return () => {
            stopAnimation();
            if (cleanupMouseListener) {
                cleanupMouseListener();
            }
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='trail-container' ref={trailContainerRef}>
            TrailContainer
        </div>
    );
}

export default TrailContainer;