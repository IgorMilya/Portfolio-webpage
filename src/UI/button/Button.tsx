import { FC, PropsWithChildren, ReactElement, ReactNode, MouseEvent } from 'react'

interface ButtonProps extends PropsWithChildren {
  className: string,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode | ReactElement,
  disabled?: boolean,
  linkageToForm?: string,
  type?: "submit" | "reset" | "button"
}

const Button: FC<ButtonProps> = ({
  disabled,
  children,
  icon,
  linkageToForm,
  onClick,
  className,
  type
}) => {

  return (
    <button type={type || "button"} className={className} disabled={disabled} form={linkageToForm} onClick={onClick} >
      {icon && icon}
      {children}
    </button>
  )
}

export default Button