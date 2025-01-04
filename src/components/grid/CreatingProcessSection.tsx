import React from 'react'
import { CreatingProcessCard } from '../ui/card/CreatingProcessCard'




export const CreatingProcessSection = () => {

  // const data = {}

  return (

    <div className='min-h-screen bg-heading-base text-center text-background-primary px-8 md:px-16 py-16 w-full'>

      <div className="flex justify-center">
        <p className="cursor-default bg-detail-secondary text-detail-primary px-10 py-2 rounded-full font-bold mb-6">
          CO-CREATING PROCESS
        </p>
      </div>
      {/* <h2 className="mb-8 text-2xl">CO-CREATING PROCESS</h2> */}
      <h2 className="text-5xl md:text-5xl font-semibold mb-20">
        Our Proven Web Design & Development Formula
      </h2>


      <div className='grid xl:grid-cols-4 lg:grid-cols-2 gap-8'>

        <CreatingProcessCard
          className='bg-section-gradient-top hover:bg-background-secondary'
          index='1'
          title='DISCOVER'
          itemsList={[
            'Discover your business and customer needs',
            'Understand your brand&apos;s value proposition',
            'Research current trends and competition'
          ]}
        />

        <CreatingProcessCard
          className='bg-section-gradient-top hover:bg-background-secondary'
          index='2'
          title='DESIGN'
          itemsList={[
            'Propose information architecture',
            'Propose UX design concepts and wireframes',
            'Craft impactful copy',
            'Design illustrations, icons and mockups'
          ]}
        />

        <CreatingProcessCard
          className='bg-section-gradient-top hover:bg-background-secondary'
          index='3'
          title='DEVELOP'
          itemsList={[
            'Develop your website based on best practices',
            'Develop CMS theme',
            'Develop page templates',
            'Optimise for high performance',
            'Optimise SEO & security'
          ]}
        />

        <CreatingProcessCard
          className='bg-section-gradient-top hover:bg-background-secondary'
          index='4'
          title='MAINTAIN & SECURE'
          itemsList={[
            'Implement tracking codes',
            'Improve Google PageSpeed',
            'Maintain & edit website content',
            'Keep website safe and secure'
          ]}
        />

      </div>



    </div>


  )
}
