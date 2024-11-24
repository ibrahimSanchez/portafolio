'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


export const WelcomeSection = () => {

    const words = ["Craft", "Design", "Build", "Maintain"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsFading(false);
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, [words.length]);
    return (
        <section className="flex flex-col md:flex-row items-center justify-between sectionPage shadow-2xl shadow-white">
            <div className="max-w-2xl text-center md:text-left">

                <h1 className="text-5xl md:text-8xl font-bold text-heading-base antialiased my-10 tracking-tight">
                    We{" "}
                    <span
                        className={`gradient-text transition-all duration-500 ${isFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
                            }`}
                    >
                        {words[currentWordIndex]}
                    </span>{" "}
                    Bespoke Websites.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-text-base">
                    I&apos;m a web developer passionate about building interactive and visually stunning web experiences.
                </p>
                <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <Link
                        href="/projects"
                        className="btn-primary">
                        View Projects
                    </Link>
                    <button className="btn-secondary">
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Imagen */}
            <div className="mt-8 md:mt-0 bounce-updown">
                <Image
                    src="/images/image3.png"
                    alt="Personal image"
                    width={400}
                    height={150}
                    className=""
                />
            </div>
        </section>
    );
}

