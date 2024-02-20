'use client'
import { FC } from 'react'
import Image from 'next/image'
import { TextAnimation } from '@/components'
import { textAnimationSequence, variants } from './greetingSection.utils'
import { AnimateWrapper, Button } from '@/UI'
import Link from 'next/link'


const GreetingSection: FC = () => {

  const handleDownload = () => {
    const pdfUrl = 'images/IHOR_MILEVSKYI_FRONTEND_CV.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'IHOR_MILEVSKYI_FRONTEND_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">

        <AnimateWrapper className="col-span-7 place-self-center text-center sm:text-left" variants={variants}
                        initial={'initial'} animate={'animate'} transition={{ duration: 0.5 }}>
          <h1
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-[80px] lg:leading-normal font-extrabold 2xl:h-full lg:h-[360px] sm:h-[144px] ph:h-[120px]">
            <TextAnimation sequence={textAnimationSequence} breakText={true} />
          </h1>
          <p className="text-secondary text-base sm:text-lg mb-6 lg:text-xl">He crafts responsive websites where
            technologies meet creativity. With great power comes great electricity bill</p>
          <div>
            <Button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-indigo-900 via-primary-blue-700 to-cyan-400 hover:bg-slate-200 text-white">
              <Link href="#contacts">Hire Me</Link>
            </Button>
            <Button onClick={handleDownload}
                    className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-indigo-500 via-primary-blue-600 to-cyan-300 hover:bg-slate-800 mt-3">
              <span className="block bg-background-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </Button>
          </div>
        </AnimateWrapper>

        <AnimateWrapper className="col-span-5 place-self-center mt-4 lg:mt-0" variants={variants}
                        initial={'initial'} animate={'animate'} transition={{ duration: 0.5 }}>
          <div className="relative rounded-full bg-background-gray w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/Me-avatar.png"
              alt="My Avatar"
              width={300}
              height={300}
            />
          </div>
        </AnimateWrapper>

      </div>
    </section>
  )
}

export default GreetingSection