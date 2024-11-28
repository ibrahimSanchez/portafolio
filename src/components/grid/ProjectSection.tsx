import { ProjectCard } from "@/components";
import { projects } from "@/seed";

interface Props {
    className?: string;
}


export const ProjectSection = ({ className = '' }: Props) => {
    return (
        <section className={`py-16 px-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-heading-base text-background-primary ${className}`}>
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                />
            ))}
        </section>
    )
}
