'use client'
import { FC, useState } from 'react'
import { LinkItemType } from '@/types'
import { Logo, MobileMenu, Navbar } from '@/UI'

interface HeaderProps {
  dataLinks: LinkItemType[]
}

const Header: FC<HeaderProps> = ({ dataLinks }) => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

  const handleBurger = () => setNavbarOpen(!navbarOpen)

  return (
    <header className="fixed border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-blackPhon">
      <div className="flex flex-wrap items-center justify-between mx-auto lg:py-4 px-4 py-2">
        <Logo />
        <MobileMenu mobileMenu={navbarOpen} onClick={handleBurger} />
        <Navbar data={dataLinks} mobileMenu={navbarOpen} />
      </div>
    </header>
  )
}

export default Header