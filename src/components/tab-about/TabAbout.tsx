'use client'
import { FC } from 'react'
import { TabItem, TabContext, AnimateWrapper } from '@/UI'
import { TabTextTypes } from '@/types'
import { useTabHook } from '@/hooks'
import { tabContextVariants, variant } from './tabAbout.utils'

interface TabAboutProps {
  titleTab: string[]
  tabTextData: TabTextTypes[]
}

const TabAbout: FC<TabAboutProps> = ({ titleTab, tabTextData }) => {
  const { value, handleTabChange } = useTabHook('skills')
  const activeTab = 'mr-3 hover:text-white font-semibold text-white'
  const notActiveTab = 'mr-3 hover:text-white text-secondary'

  return (
    <>
      <div className="flex flex-row justify-start mt-8">
        {titleTab.map(item =>
          <TabItem key={item}
                   data={item}
                   className={value === item ? activeTab : notActiveTab}
                   onClick={handleTabChange}>
            <AnimateWrapper className="border-b border-primary-darkBlue" variants={variant}
                            animate={value === item ? 'active' : 'default'} />
          </TabItem>,
        )}
      </div>

      <ul className="mt-8 list-disc pl-6">
        {tabTextData.map(({ text, tabValue }) => (
          !!value && tabValue.includes(value) && (
            <AnimateWrapper key={`text${text}`} variants={tabContextVariants} animate="animate" initial="initial"
                            transition={{ duration: 0.5 }}>
              <TabContext text={text} value={value} />
            </AnimateWrapper>
          )
        ))}
      </ul>
    </>
  )
}

export default TabAbout