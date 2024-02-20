'use client'
import { FC, useRef } from 'react'
import { useInView } from 'framer-motion'
import { AnimateWrapper, ProjectCard, TabItem } from '@/UI'
import { useTabHook } from '@/hooks'
import { TabCardData } from '@/types'
import { variantCard } from './tabProjects.utils'

interface TabProjectsProps {
  titleTab: string[]
  tabCardData: TabCardData[]
}

const TabProjects: FC<TabProjectsProps> = ({ titleTab, tabCardData }) => {
  const { value, handleTabChange } = useTabHook('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  const activeTab = 'text-white border-primary-darkBlue rounded-full border-2 px-6 py-3 text-xl'
  const notActiveTab = 'text-secondary border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl'
  const filteredCardData = tabCardData.filter(({ tag, ...rest }) => !!value && tag.includes(value))

  return (
    <div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {titleTab.map(item =>
          <TabItem key={item}
                   data={item}
                   className={value === item ? activeTab : notActiveTab}
                   onClick={handleTabChange} />,
        )}
      </div>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
        {filteredCardData.map(({ tag, ...rest }, index) =>
          (<li key={`${index}${rest.image}`}>
              <AnimateWrapper variants={variantCard} animate={isInView ? 'animate' : 'initial'} initial="initial"
                              transition={{ duration: 0.3, delay: index * 0.4 }}
                              className="opacity: 1; transform: none;">
                <ProjectCard {...rest} />
              </AnimateWrapper>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default TabProjects