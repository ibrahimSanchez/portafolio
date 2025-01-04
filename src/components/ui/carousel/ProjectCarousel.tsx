'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Project } from '@/interfaces';

interface Props {
    items: Project
}

export default function ProjectCarousel({ items }: Props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const { id, images, title } = items;

    return (
        <>
            <Slider {...settings}>
                {images.map((item) => (
                    <div key={item + id} className="relative group w-full">
                        <Image
                            width={1000}
                            height={200}
                            src={item}
                            alt={title}
                            className="w-full rounded-lg shadow-lg"
                        />

                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-background-primary/70 rounded-lg">
                            <h3 className="text-text-base text-3xl font-bold">{title}</h3>
                        </div>
                    </div>

                ))}
            </Slider>
        </>
    );
}
