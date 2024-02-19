'use client'

import { FC } from 'react'
import { TabItem, TabContext } from '@/UI'
import { TabTextTypes } from '@/types'
import { useTabHook } from '@/hooks'

interface TabAboutProps {
  titleTab: string[]
  tabTextData: TabTextTypes[]
}

const TabAbout: FC<TabAboutProps> = ({ titleTab, tabTextData }) => {
  const { value, handleTabChange } = useTabHook('skills')
  const activeTab = 'mr-3 hover:text-white font-semibold text-white border-b border-purple-500';
  const notActiveTab = 'mr-3 hover:text-white text-[#ADB7BE]';

  return (
    <>
      <div className="flex flex-row justify-start mt-8">
        {titleTab.map(item =>
          <TabItem key={item}
                   data={item}
                   className={value === item ? activeTab : notActiveTab}
                   onClick={handleTabChange} />,
        )}
      </div>

      <ul className="mt-8 list-disc pl-6">
        {tabTextData.map(({ text, tabValue }) => (
          !!value && tabValue.includes(value) && (<TabContext key={`text${text}`} text={text} value={value} />)
        ))}
      </ul>
    </>
  )
}

export default TabAbout