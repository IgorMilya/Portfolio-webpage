import { FC, MouseEvent } from 'react'
import { firstLetterUpperCase } from '@/utils'

interface TabItemProps {
  data: string
  active: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void}

const TabItem: FC<TabItemProps> = ({ data, active, onClick }) => {
  const dataUpper = firstLetterUpperCase(data)
  const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'

  return (
    <button onClick={onClick} className={`mr-3 font-semibold hover:text-white text-white ${buttonClasses}`}  >
      {dataUpper}
    </button>
  )
}

export default TabItem