import React from 'react';
import { FaMobileAlt, FaLaptopCode, FaLock, FaChartLine, FaLightbulb, FaHandshake } from 'react-icons/fa';

export const WhyChooseMeSection = () => {
    return (
        <section className="min-h-screen px-8 md:px-16 py-16 w-full bg-section-gradient-top grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="col-span-3 md:col-span-2">
                <h2 className="mb-8 text-2xl">WHY CHOOSE ME?</h2>
                <h2 className="text-5xl md:text-7xl font-semibold text-heading-base mb-20">
                    We&apos;ll Build a Website That Works.
                </h2>
                <p className="text-heading-base text-xl pr-16">
                    We understand how frustrating it can be when your website doesn’t work — whether
                    it’s not bringing in sales, lacking impact or getting hacked. We started this web
                    design company in Singapore to focus on one thing: building and enabling
                    successful websites.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                    <FaMobileAlt className="text-detail-primary text-7xl mb-4" />
                    <h3 className="text-lg font-semibold text-heading-base">Responsive Design</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaLaptopCode className="text-detail-primary text-7xl mb-4" />
                    <h3 className="text-lg font-semibold text-heading-base">Modern Development</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaLock className="text-detail-primary text-7xl mb-4" />
                    <h3 className="text-lg font-semibold text-heading-base">Security First</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaChartLine className="text-detail-primary text-7xl mb-4" />
                    <h3 className="text-lg font-semibold text-heading-base">Growth Focused</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaLightbulb className="text-detail-primary text-7xl mb-4" />
                    <h3 className="text-lg font-semibold text-heading-base">Creative Solutions</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaHandshake className="text-detail-primary text-7xl mb-4" />
                    <h3 className="text-lg font-semibold text-heading-base">Collaborative Approach</h3>
                </div>
            </div>
        </section>
    );
};
