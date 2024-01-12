import { ReactNode } from 'react'
import { container } from './styles.css'
import { poppins, roboto } from '@/app/fonts'

interface TextProps{
  type?: keyof typeof container
  children: ReactNode
  font?: "roboto" | "poppins"
  disabled?: boolean
}

export const Text:React.FC<TextProps> = ({ type="regular",font="Roboto",disabled, children }) => {
  return (
    <p className={`${container[type]} ${font === "Roboto" ? roboto.className : poppins.className} ${disabled ? 'disabled' : ''}`}>
      {children}
    </p>
  )
}
