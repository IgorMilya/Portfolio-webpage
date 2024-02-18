'use client'

import { FC, useState, MouseEvent } from 'react'
import { TabItem, TabText } from '@/UI'
import { firstLetterLowerCase } from '@/utils'
import { TabTextTypes } from '@/types/ComponentsItemTypes'

interface TabContextProps {
  titleTab: string[]
  tabTextData: TabTextTypes[]
}

const TabContext: FC<TabContextProps> = ({ titleTab, tabTextData }) => {
  const [value, setValue] = useState<string | undefined>('skills')

  const handleTabChange = (e: MouseEvent<HTMLButtonElement>) => {
    const initialValue = firstLetterLowerCase(e.currentTarget.textContent)
    setValue(initialValue)
  }

  return (
    <>
      <div className="flex flex-row justify-start mt-8">
        {titleTab.map(item =>
          <TabItem key={item}
                   data={item}
                   active={value === item}
                   onClick={handleTabChange} />,
        )}
      </div>

      <ul className="mt-8 list-disc pl-6">
        {tabTextData.map(({ text, tabValue }) => (
          tabValue === value && (<TabText key={`text${text}`} text={text} value={value} />)
        ))}
      </ul>
    </>
  )
}

export default TabContext