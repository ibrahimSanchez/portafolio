import { projects } from "@/seed";
import ProjectCarousel from "../ui/carousel/ProjectCarousel";
import Link from "next/link";

interface Props {
    className?: string;
}


export const ProjectSection = ({ className = '' }: Props) => {
    return (
        <section className={`py-16 px-8 bg-heading-base text-background-primary ${className}`}>

            {/* 
// TODO: ------------------------------------------------------------------------------------------
*/}
            <p className="mb-16">
                aqui hay que poner los tipos de projectos que se realizan, luego los ejemplos
            </p>
            {/* 
// TODO: ------------------------------------------------------------------------------------------
*/}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                {projects.map((project) => (
                    <ProjectCarousel
                        key={project.id}
                        items={project}
                    />
                ))}
            </div>

            <div className="w-full text-center">

                <Link
                    href="https://github.com/yourusername"
                    className="btn-primary">
                    Go to github
                </Link>
            </div>

        </section>
    )
}
