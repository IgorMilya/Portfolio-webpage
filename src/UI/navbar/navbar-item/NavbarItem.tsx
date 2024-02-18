import { FC } from 'react'
import Link from 'next/link'
import { firstLetterUpperCase } from '@/utils'
import { LinkItemType } from '@/types'

interface NavbarItemProps {
  data: LinkItemType
}

const NavbarItem: FC<NavbarItemProps> = ({ data }) => {
  const { title, link } = data;
  const titleUpper = firstLetterUpperCase(title);

  return (
    <Link href={link} className="text-[#ADB7BE] sm:text-xl  hover:text-white">
      <div className="phone:w-[100%]">
        {titleUpper}
      </div>
    </Link>
  )
}

export default NavbarItem