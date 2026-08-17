"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent font-sans md:px-10 transition-colors duration-300"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white max-w-4xl font-bold tracking-tight">
                    Changelog from my journey
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
                    A visual timeline tracking key milestones, leadership experiences, and projects across my career.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-36 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center border border-gray-200/80 dark:border-slate-700/80 shadow-md">
                                <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border border-blue-300 dark:border-cyan-200 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-700 dark:text-gray-300">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-300 dark:via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-cyan-400 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    />
                </div>
            </div>
        </div>
    );
};
