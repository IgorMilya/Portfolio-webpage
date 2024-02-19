'use client'

import { FC, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button } from '@/UI'

interface MobileMenuProps {
  mobileMenu: boolean,
  onClick: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ mobileMenu, onClick }) => {

  return (
    <div className="mobile-menu block md:hidden">
      {!mobileMenu ? (
        <Button onClick={onClick}
                className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white">
          <Bars3Icon className="h-5 w-5" />
        </Button>
      ) : (
        <Button onClick={onClick}
                className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white">
          <XMarkIcon className="h-5 w-5" />
        </Button>
      )
      }
    </div>
  )
}

export default MobileMenu