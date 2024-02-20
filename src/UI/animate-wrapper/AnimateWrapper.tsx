import { FC, ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { TransitionType } from './animateWrapperType'

interface AnimateWrapperProps {
  variants: Variants,
  animate: string,
  className?: string,
  children?: ReactNode,
  initial?: string,
  transition?: TransitionType
}

const AnimateWrapper: FC<AnimateWrapperProps> = ({ className, children, variants, animate, initial, transition }) => {

  return (
    <motion.div className={className && className} variants={variants} initial={initial && initial} animate={animate} transition={transition && transition}>
      {children && children}
    </motion.div>
  )
}

export default AnimateWrapper