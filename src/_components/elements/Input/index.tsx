import { InputHTMLAttributes } from "react"
import { Text } from "../Text"
import { Container, Input as InputStyle, InputArea } from "./styles.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
export const Input:React.FC<InputProps> = ({...rest}) => {
  return (
    <div className={Container}>
      <div className={InputArea}>
        <input className={InputStyle} type="text" name="teste" {...rest}/>
      </div>
    </div>
  )
}
