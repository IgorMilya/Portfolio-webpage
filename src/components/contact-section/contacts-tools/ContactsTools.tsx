import { FC } from 'react'
import Link from 'next/link'
import { Github, Linkedin } from '@/assets/icon'


const ContactsTools: FC = () => {

  return (
    <div className="w-[50%] phone:w-full">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h5 className="text-xl font-bold text-white my-2"> Let's Connect</h5>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="text-secondary mb-4 max-w-md">I'm currently looking for new opportunities, my inbox is always
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/IgorMilya" target="_blank">
          <Github className="h-[48px] w-[48px]" />
        </Link>
        <Link href="https://www.linkedin.com/in/ihor-milevskyi-407342263/" target="_blank">
          <Linkedin className="h-[48px] w-[48px]" />
        </Link>
      </div>
    </div>
  )
}

export default ContactsTools