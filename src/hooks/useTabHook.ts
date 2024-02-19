import { MouseEvent, useState } from 'react'
import { firstLetterLowerCase } from '@/utils'

export const useTabHook = (initialValue: string) => {
  const [value, setValue] = useState<string | undefined>(initialValue)

  const handleTabChange = (e: MouseEvent<HTMLButtonElement>) => {
    const initialValue = firstLetterLowerCase(e.currentTarget.textContent)
    setValue(initialValue)
  }

  return {value, handleTabChange}
}