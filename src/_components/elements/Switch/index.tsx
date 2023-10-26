import { useId } from "react"
import { container, switchContainer, checkbox, areaSwitch, switcher } from "./styles.css"
import { Text } from "../Text"

export const Switch:React.FC = () => {
  const id = useId()
  
  return (
    <div className={container}>
      <label className={switchContainer} htmlFor={id}>
        <Text type="regular">Disponível</Text>
        <input type="checkbox" id={id} className={checkbox}/>
        <div className={areaSwitch}>
          <div className={switcher}></div>
        </div>
      </label>
    </div>
  )
}

