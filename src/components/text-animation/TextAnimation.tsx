'use client'

import { FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Sequence } from 'react-type-animation/dist/cjs/components/TypeAnimation/index.types'

interface TextAnimationProps {
  sequence: Sequence,
  breakText?: boolean
}

const TextAnimation: FC<TextAnimationProps> = ({ sequence, breakText = false }) => {
  return (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-primary-blue-600 to-cyan-300">Hello,
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm{' '}</span>
      {breakText && <br />}
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </>
  )
}

export default TextAnimation