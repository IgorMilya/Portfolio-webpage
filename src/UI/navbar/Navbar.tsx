import { FC } from 'react'
import { LinkItemType } from '@/types'
import { NavbarItem } from './navbar-item'

interface NavbarProps {
  data: LinkItemType[],
  mobileMenu: boolean
}

const Navbar: FC<NavbarProps> = ({ data, mobileMenu }) => {

  return (
    <nav
      className={`menu md:w-auto phone:w-[100%] phone:absolute phone:top-14 phone:left-1/2 phone:transform phone:-translate-x-1/2 phone:bg-background-black ${!mobileMenu && 'phone:hidden'}`}
      id="navbar">
      <ul className="flex pt-4 md:p-0 md:flex-row md:space-x-8 mt-0 phone:flex-col phone:pt-0">
        {data.map(item => (
          <li className="text-center py-2 pl-3 pr-4 rounded phone:active:bg-[#2563eb] " key={item.link}>
            <NavbarItem
              data={item}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar