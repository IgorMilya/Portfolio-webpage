import { FC } from 'react'
import Image from 'next/image'
import { TabAbout } from '@/components'
import { tabItemsData, tabTextData } from './aboutSection.utils'

const AboutSection: FC = () => {

  return (
    <section id="about" className="text-white flex flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-[150px] xl:gap-28 lg:gap-[80px] 2xl:pt-24 xl:pt-24 lg:pt-24 pt-20" >
      <div className="lg:w-[50%] md:w-[80%] w-[100%]">
        <Image
          src="/images/about-me.jpg"
          alt="My Avatar"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="lg:w-[50%] w-full">
        <h1 className="xl:text-4xl  text-4xl font-bold text-white mb-4 lg:mt-0 mt-[50px] phone:text-center">About</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-base xl:text-lg phone:text-center"> I'm a motivated and dedicated front-end developer with a
          strong focus on creating user-friendly interfaces and
          developing cutting-edge web applications. I am currently
          pursuing my second-grade studies at Vilnius University,
          Kaunas Faculty of Information Systems and Cyber
          Security. My career goals involve leveraging your frontend
          development skills, knowledge of information systems, and
          cybersecurity to contribute to the development of cutting-edge web applications.</p>

        <TabAbout titleTab={tabItemsData} tabTextData={tabTextData} />
      </div>
    </section>
  )
}

export default AboutSection