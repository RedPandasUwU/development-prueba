"use client";

import { useEffect, useState } from "react";

export default function ParticlesBackground() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Background layer - moves slowly */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    transform: `translateY(${scrollY * 0.1}px)`,
                }}
            >
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00E676" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Far background particles - move very slowly */}
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={`far-${i}`}
                    className="absolute w-1 h-1 bg-[#00E676] rounded-full opacity-30"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `translateY(${scrollY * 0.05}px)`,
                        animation: `float ${20 + Math.random() * 10}s infinite linear`,
                        animationDelay: `${Math.random() * 10}s`,
                    }}
                />
            ))}

            {/* Mid background particles - move at medium speed */}
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={`mid-${i}`}
                    className="absolute w-2 h-2 bg-[#00E676] rounded-full opacity-50"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `translateY(${scrollY * 0.2}px)`,
                        animation: `float ${15 + Math.random() * 8}s infinite linear`,
                        animationDelay: `${Math.random() * 8}s`,
                    }}
                />
            ))}

            {/* Foreground particles - move faster */}
            {Array.from({ length: 25 }).map((_, i) => (
                <div
                    key={`fore-${i}`}
                    className="absolute w-3 h-3 bg-[#00E676] rounded-full opacity-70 animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        transform: `translateY(${scrollY * 0.4}px)`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Connection lines that move with parallax */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    transform: `translateY(${scrollY * 0.15}px)`,
                }}
            >
                <svg className="w-full h-full">
                    {Array.from({ length: 15 }).map((_, i) => {
                        const x1 = Math.random() * 100;
                        const y1 = Math.random() * 100;
                        const x2 = Math.random() * 100;
                        const y2 = Math.random() * 100;
                        return (
                            <line
                                key={`line-${i}`}
                                x1={`${x1}%`}
                                y1={`${y1}%`}
                                x2={`${x2}%`}
                                y2={`${y2}%`}
                                stroke="#00E676"
                                strokeWidth="0.5"
                                opacity="0.6"
                            />
                        );
                    })}
                </svg>
            </div>
        </div>
    );
} 