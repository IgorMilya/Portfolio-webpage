'use client'
import { FC } from 'react'
import { ProjectCard, TabItem } from '@/UI'
import { useTabHook } from '@/hooks'
import { TabCardData } from '@/types'

interface TabProjectsProps {
  titleTab: string[]
  tabCardData: TabCardData[]
}

const TabProjects: FC<TabProjectsProps> = ({ titleTab, tabCardData }) => {
  const { value, handleTabChange } = useTabHook('all')

  const activeTab = 'text-white border-[#4C10BE] rounded-full border-2 px-6 py-3 text-xl'
  const notActiveTab = 'text-[#ADB7BE] border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 text-xl'
  const filteredCardData = tabCardData.filter(({ tag, ...rest }) => !!value && tag.includes(value))

  return (
    <>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {titleTab.map(item =>
          <TabItem key={item}
                   data={item}
                   className={value === item ? activeTab : notActiveTab}
                   onClick={handleTabChange} />,
        )}
      </div>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredCardData.map(({ tag, ...rest }) =>
          <ProjectCard key={rest.image} {...rest} />)
        }
      </ul>
    </>
  )
}

export default TabProjects