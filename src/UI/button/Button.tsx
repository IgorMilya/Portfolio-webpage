import { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'

interface ButtonProps extends PropsWithChildren {
  icon?: ReactNode | ReactElement,
  disabled?: boolean,
}

const Button: FC<ButtonProps> = ({ disabled, children, icon }) => {

  return (
    <button disabled={disabled}>
      {icon && icon}
      {children}
    </button>
  )
}

export default Button