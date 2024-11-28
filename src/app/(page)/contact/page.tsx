import { ContactForm } from "@/components";




export default function Contact() {
    return (
        <section className="min-h-screen bg-section-gradient-top">
            <div className="opacity-0 animate-fade-in">

                <div className="h-[40vh] bg-section-gradient-top flex flex-col items-center justify-center">

                    <p className="bg-detail-secondary text-detail-primary px-10 py-2 rounded-full font-bold mb-6">
                        CONTACT US
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold text-heading-base">
                        Keen to Work With Us?
                    </h2>

                </div>

                <div className=" bg-heading-base text-background-primary p-8 lg:p-16 flex justify-center">

                    <div className="lg:w-[60vw]">
                        <p className="text-xl font-bold mb-2">
                            Hello 🖐🏻
                        </p>
                        <p className="text-xl mb-4">
                            Don&apos;t hesitate to tell me how I can help you. Email me at <span className="text-detail-primary cursor-pointer">
                                sanchezibrahim296@gmail.com
                            </span> or use the form below.
                        </p>

                        <ContactForm />

                    </div>

                </div>

            </div>
        </section>
    )
}
