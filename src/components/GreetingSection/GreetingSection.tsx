import { FC } from 'react'
import Image from 'next/image'

interface GreetingSectionProps {

}

const GreetingSection: FC<GreetingSectionProps> = () => {

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Ihor</h1>
          <p className="text-description text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid amet cumque distinctio fugiat quaerat,
            rerum?</p>
        </div>
        <div className="col-span-5">
          <div className="relative flex justify-center">
          <Image className="rounded-full bg-[#181818] h-300 object-contain" src="/Me-avatar.png" alt="My Avatar" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreetingSection