import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {

  return (
    <footer className="footer border-t z-10 border-t-[#33353F] text-white">
      <div className="container p-12 flex justify-between m-auto">
        <a href="https://freelancehunt.com/freelancer/IgorMilya.html?from=shield&r=vYkGO" target="_blank"><img
          src="https://freelancehunt.com/shields/display/id/989321/type/reviews?style=flat&amp;lang=ru"
          alt="Freelancehunt — простой и честный фриланс" /></a>
        <p className="text-slate-600">All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer