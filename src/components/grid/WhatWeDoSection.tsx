import React from 'react'
import { SimpleCard } from '../ui/card/SimpleCard'
import { FaDesktop, FaServer, FaTachometerAlt } from 'react-icons/fa'



export const WhatWeDoSection = () => {
    return (
        <section className="min-h-screen px-8 md:px-16 py-16 bg-background-tertiary w-full bg-section-gradient-bottom">
            <div>
                <div className='flex'>
                    <p className="bg-detail-secondary text-detail-primary px-10 py-2 rounded-full font-bold mb-6">
                        WHAT WE DO
                    </p>
                </div>
                <h2 className="text-5xl md:text-4xl font-semibold text-heading-base">
                    A Web Design & Development Company That Builds & Develops Successful Websites.
                </h2>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SimpleCard
                        className='bg-section-gradient-top hover:bg-background-secondary'
                        title="Responsive Design"
                        description="I ensure that your website looks great on all devices, from mobile phones to desktops, by creating responsive layouts."
                        icon={<FaDesktop />}
                    />
                    <SimpleCard
                        className='bg-section-gradient-top hover:bg-background-secondary'
                        title="Full-Stack Development"
                        description="From front-end to back-end, I develop complete web applications using modern technologies such as React, Node.js, and MongoDB."
                        icon={<FaServer />}
                    />
                    <SimpleCard
                        className='bg-section-gradient-top hover:bg-background-secondary'
                        title="Performance Optimization"
                        description="I focus on optimizing the performance of your website by improving loading times and making sure everything runs smoothly."
                        icon={<FaTachometerAlt />}
                    />
                </div>
            </div>
        </section>
    )
}
