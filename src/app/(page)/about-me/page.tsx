import { TechnologiesSection } from "@/components";
import Image from "next/image";


export default function AboutMe() {

    return (
        <div className="bg-text-base opacity-0 animate-fade-in">
            <section className="bg-section-gradient-top min-h-screen px-8 md:px-16 py-8 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="col-span-2 mb-8">
                    <div className="flex">
                        <p className="bg-detail-secondary text-detail-primary px-10 py-2 rounded-full font-bold mb-6">
                            ABOUT ME
                        </p>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-heading-base mb-6">
                        Full-Stack Developer with a Passion for Scalable Applications
                    </h2>
                </div>


                <Image
                    className=""
                    alt="image"
                    src="/images/about.png"
                    width={400}
                    height={200}
                />


            </section>

            {/* 
            <section className="text-background-primary lg:h-[40vh] px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2">


            </section> */}


            <TechnologiesSection />


            <section className="min-h-screen px-8 md:px-16 py-24 bg-section-gradient-botto bg-text-base">
                {/* Habilidades y Experiencia */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Habilidades técnicas */}
                    <div>
                        <h3 className="text-3xl font-bold text-background-primary mb-4">Technical Skills</h3>
                        <ul className="text-lg text-background-tertiary space-y-8 list-disc list-inside border-l-4 border-button-primary pl-3">
                            <li>Programming Languages: JavaScript, TypeScript, SQL</li>
                            <li>Frameworks: React.js, Next.js, Express.js</li>
                            <li>Styling: Bootstrap, Tailwind CSS</li>
                            <li>Databases: PostgreSQL, MySQL, MongoDB</li>
                            <li>Tools: Git, Visual Studio Code, Postman</li>
                        </ul>
                    </div>

                    {/* Experiencia */}
                    <div>
                        <h3 className="text-3xl font-bold text-background-primary mb-4">Experience Highlights</h3>
                        <ul className="text-lg text-background-tertiary space-y-8 list-disc list-inside border-l-4 border-button-primary pl-3">
                            <li>Developed reusable components and responsive designs using React.js and Tailwind CSS.</li>
                            <li>Built robust REST APIs with Express.js and handled database integrations.</li>
                            <li>Freelance experience with remote work, digital tools, and time management.</li>
                            <li>Key Projects: <span className="text-detail-primary">TransferWeb</span> and <span className="text-detail-primary">Cutb</span>.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
