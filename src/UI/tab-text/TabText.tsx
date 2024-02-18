import { FC } from 'react'
import Link from 'next/link'

interface TabTextProps {
  text: string[],
  value: string
}

const TabText: FC<TabTextProps> = ({text, value}) => {

  return (
    <>
      {
        text.map(text =>
          (
            <li key={text}>
              {value === "certificates" ? <Link className="underline" target="_blank" href="https://dan-it.com.ua/certificates/frontend/ihor-milevskyi/">{text}</Link> :text}
            </li>
          ))
      }
    </>
  )
}

export default TabText