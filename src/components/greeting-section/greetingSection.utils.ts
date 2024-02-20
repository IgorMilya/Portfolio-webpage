import { Sequence } from 'react-type-animation/dist/cjs/components/TypeAnimation/index.types'

export const textAnimationSequence: Sequence = [
  'Ihor',
  1000,
  'Web Developer',
  1000,
  'FrontEnd Developer',
  1000,
]

export const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
}