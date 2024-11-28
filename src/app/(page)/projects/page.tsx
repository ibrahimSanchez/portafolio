import { ProjectSection } from "@/components";


export default function Project() {
    return (
        <div className="min-h-screen bg-section-gradient-top">
            
            <section className="h-[70vh] px-8 md:px-16 py-24 ">
                <div className="opacity-0 animate-fade-in">
                    <div className="flex">
                        <p className="bg-detail-secondary text-detail-primary px-10 py-2 rounded-full font-bold mb-6">
                            OUR PORTFOLIO
                        </p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-heading-base mb-4">
                        Driven by Creativity.
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-bold text-heading-base">
                        Shaped by Challenges.
                    </h2>
                </div>
            </section>


            <ProjectSection className="opacity-0 animate-fade-in" />


        </div>


    )
}
