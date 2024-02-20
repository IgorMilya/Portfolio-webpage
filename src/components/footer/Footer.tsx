import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {

  return (
    <footer className="footer border-t z-10 border-t-[#33353F] text-white">
      <div className="container p-12 flex justify-between m-auto">
        <span className="z-10">LOGO</span>
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer