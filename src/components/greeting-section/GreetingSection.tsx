import { FC } from 'react'
import Image from 'next/image'
import { TextAnimation } from '@/components'
import { textAnimationSequence } from './greetingSection.utils'

interface GreetingSectionProps {

}


const GreetingSection: FC<GreetingSectionProps> = () => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[80px] lg:leading-normal font-extrabold">
            <TextAnimation sequence={textAnimationSequence} breakText={true} />
          </h1>
          <p className="text-description text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum dolor sit amet, consectetur
            adipisicing
            elit.
            Aliquid amet cumque distinctio fugiat quaerat,
            rerum?</p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-400 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button
              className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-300 hover:bg-slate-800 mt-3">
              <span className="block bg-blackPhon hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/Me-avatar.png"
              alt="My Avatar"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreetingSection