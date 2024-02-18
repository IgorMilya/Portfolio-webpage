import { FC } from 'react'
import Link from 'next/link'

interface LogoProps {

}

const Logo: FC<LogoProps> = () => {

  return (
    <Link href={'/'} className="text-4xl md:text-5xl text-white font-semibold">
      LOGO
    </Link>
  )
}

export default Logo