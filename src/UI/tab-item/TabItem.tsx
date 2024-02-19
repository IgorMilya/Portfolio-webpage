import { FC, MouseEvent } from 'react'
import { firstLetterUpperCase } from '@/utils'
import { Button } from '@/UI'

interface TabItemProps {
  data: string
  className: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const TabItem: FC<TabItemProps> = ({ data, className, onClick }) => {
  const dataUpper = firstLetterUpperCase(data)

  return (
    <Button onClick={onClick} className={`cursor-pointer ${className}`}  >
      {dataUpper}
    </Button>
  )
}

export default TabItem