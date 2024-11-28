import Link from 'next/link'
import React from 'react'

export const ContactUsSection = () => {
    return (
        <section className='min-h-screen bg-text-base flex justify-center items-center px-8 lg:px-16 py-16 w-full'>

            <div className='bg-section-gradient-top px-10 py-16 w-full rounded-xl text-center shadow-[0 35px 60px -15px #fc7622]'>

                <h2 className='mb-4 text-5xl font-bold'>
                    Need Help With Your Website?
                </h2>
                <p className="text-xl font-semibold mb-14">
                    Speak to our website specialist today.
                </p>

                <Link href='/contact' className='btn-primary'>
                    CONTACT US
                </Link>
            </div>

        </section>
    )
}
