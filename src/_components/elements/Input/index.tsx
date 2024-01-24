import React, { InputHTMLAttributes, forwardRef } from "react"
import { Container, Input as InputStyle, InputArea } from "./styles.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
const component:React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ ...rest }, ref) => {
  return (
    <div className={Container}>
      <div className={InputArea}>
        <input className={InputStyle} type="text" name="teste" {...rest} ref={ref}/>
      </div>
    </div>
  )
}

export const Input = forwardRef(component)