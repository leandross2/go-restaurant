import React, { InputHTMLAttributes, forwardRef } from "react"
import { Container, InputArea, Input as InputStyle, ErrorMessage, Label } from "./styles.css"
import InputMask from 'react-input-mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  isError?: boolean
  label: string
  errorMessage?: string | null
  mask?: boolean
}
const InputComponent:React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ isError, errorMessage, label, mask, value, ...rest }, ref) => {
  return (
    <div className={Container}>
      <label className={Label}>{label}</label>
        
      <div className={InputArea}>
        {
          mask ? 
            <InputMask
              className={InputStyle}
              mask={["/\d/, /\d/, /\d/, /\d/, /\d/, /\d/"]}
              maskChar={null}
              prefix="$"
              inputRef={ref}
              {...rest}
            />:
            <input className={InputStyle} type="text" name="teste"  title={label} ref={ref} {...rest}/> 
        }
      </div>

      {isError && <p className={ErrorMessage}>{errorMessage}</p>}
    </div>
  )
}

export const Input = forwardRef(InputComponent)