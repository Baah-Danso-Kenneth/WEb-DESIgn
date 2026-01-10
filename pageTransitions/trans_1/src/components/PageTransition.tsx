"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement>(null);
    const logoOverlayyRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<SVGSVGElement>(null);
    const blocksRef = useRef<HTMLDivElement[]>([]);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const createBlocks = () => {
            if (!overlayRef.current) return;
            overlayRef.current.innerHTML = "";
            blocksRef.current = [];

            for (let i = 0; i < 20; i++) {
                const block = document.createElement("div");
                block.className = "block";
                overlayRef.current.appendChild(block);
                blocksRef.current.push(block);
            }
        };

        createBlocks();

        gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

        if (logoRef.current) {
            const path = logoRef.current.querySelector("path");
            if (path) {
                const length = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    fill: "transparent",
                });
            }
        }

        revealPage();

        const handleLinkClick = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute("href");

            if (href && href.startsWith("/") && href !== pathname) {
                e.preventDefault();
                if (isTransitioning.current) return;
                isTransitioning.current = true;
                coverPage(href);
            }
        };

        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach((link) => {
            link.addEventListener("click", handleLinkClick as EventListener);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", handleLinkClick as EventListener);
            });
        };
    }, [pathname]);

    const coverPage = (url: string) => {
        if (!logoRef.current || !logoOverlayyRef.current) return;

        const path = logoRef.current.querySelector("path");
        if (!path) return;

        const tl = gsap.timeline({
            onComplete: () => router.push(url),
        });

        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left",
        })
            .set(logoOverlayyRef.current, { opacity: 1 }, "-=0.2")
            .set(
                path,
                {
                    strokeDashoffset: path.getTotalLength(),
                    fill: "transparent",
                },
                "-=0.25"
            )
            .to(
                path,
                {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: "power2.inOut",
                },
                "-=0.5"
            )
            .to(
                path,
                {
                    fill: "#e3e4d8",
                    duration: 1,
                    ease: "power2.out",
                },
                "-=0.5"
            )
            .to(logoOverlayyRef.current, {
                opacity: 0,
                duration: 0.25,
                ease: "power2.out",
            });
    };

    const revealPage = () => {
        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
        // Ensure logo overlay is hidden when revealing
        if (logoOverlayyRef.current) {
            gsap.set(logoOverlayyRef.current, { opacity: 0 });
        }

        gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false;
            },
        });
    };

    return (
        <>
            <div ref={overlayRef} className="transition-overlay"></div>
            <div ref={logoOverlayyRef} className="logo-overlay">
                <div className="logo-container">
                    <Logo ref={logoRef} />
                </div>
            </div>
            {children}
        </>
    );
};

export default PageTransition;