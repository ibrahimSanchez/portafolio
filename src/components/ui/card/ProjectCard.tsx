import React from "react";

interface ProjectCardProps {
    title: string;
    image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, image }) => {
    return (
        <div className="relative group w-full h-64 rounded-lg overflow-hidden shadow-md">
            <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-50"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Contenido al hacer hover */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-background-primary/70">
                <h3 className="text-text-base text-3xl font-bold">{title}</h3>
            </div>
        </div>
    );
};
