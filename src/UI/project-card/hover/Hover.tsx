import { FC } from 'react'
import Link from 'next/link'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid'

interface HoverProps {
  gitUrl: string,
  previewUrl: string
}

const Hover: FC<HoverProps> = ({gitUrl, previewUrl}) => {

  return (
    <div
      className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-background-gray bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
      <Link href={gitUrl} target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-secondary hover:border-white group/link">
        <CodeBracketIcon
          className="h-10 w-10 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"></CodeBracketIcon>
      </Link>
      <Link href={previewUrl} target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-secondary hover:border-white group/link">
        <EyeIcon
          className="h-10 w-10 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"></EyeIcon>
      </Link>
    </div>
  )
}

export default Hover