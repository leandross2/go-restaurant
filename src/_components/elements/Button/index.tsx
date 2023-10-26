import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'
import { IconBaseProps } from 'react-icons'
import { container, icon as iconStyle } from './styles.css'
import { Text } from '@/_components/elements/Text'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: keyof typeof container
  children: ReactNode
  icon?: ReactElement<IconBaseProps>
}

export const Button:React.FC<ButtonProps> = ({variant="default", icon, children, ...rest}) => {
  return (
    <button className={container[variant]} {...rest}>
      <Text>{children}</Text>
      
      {!!icon && <div className={iconStyle}>{icon}</div>}
      
    </button>
  )
}

