// 'use client';
// import { useState, useEffect } from "react";
import Link from "next/link";

export const WelcomeSection = () => {
    // const [visibleWords, setVisibleWords] = useState<string[]>([]);
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const words = ["Design", "Build", "Maintain"];

    //     if (index < words.length) {
    //         const timeout = setTimeout(() => {
    //             setVisibleWords((prev) => [...prev, words[index]]);
    //             setIndex((prevIndex) => prevIndex + 1);
    //         }, 1300); // Cada palabra aparece después de 1.3 segundos.

    //         return () => clearTimeout(timeout);
    //     }
    // }, [index]);

    return (
        <section className="flex flex-col md:flex-row items-center justify-between sectionPage shadow-2xl shadow-white bg-section-gradient-top">
            <div className="opacity-0 animate-fade-in text-center md:text-left">
                <h1 className="text-5xl md:text-8xl font-bold text-heading-base antialiased my-10 tracking-tight">
                    We{" "}
                    <span className="gradient-text md:text-7xl">
                        Craft, Design, Build, Maintain
                        {/* {visibleWords.map((word, idx) => (
                            <span
                                key={idx}
                                className={`inline-block ml-2`}
                            >
                                , {word}
                            </span>
                        ))} */}
                    </span>
                    <br />
                    Bespoke Websites.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-text-base">
                    I&apos;m a web developer passionate about building interactive and visually stunning web experiences.
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <Link href="/projects" className="btn-primary">
                        View Projects
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
};
