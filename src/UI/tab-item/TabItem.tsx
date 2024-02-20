import { FC, MouseEvent, ReactNode } from 'react'
import { Button } from '@/UI'
import { firstLetterUpperCase } from '@/utils'

interface TabItemProps {
  data: string
  className: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  children?: ReactNode
}

const TabItem: FC<TabItemProps> = ({ data, className, onClick, children }) => {
  const dataUpper = firstLetterUpperCase(data)

  return (
    <Button onClick={onClick} className={`cursor-pointer ${className}`}>
      {dataUpper}
      {children && children}
    </Button>
  )
}

export default TabItem