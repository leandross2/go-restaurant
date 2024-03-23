import { areaSwitch, checkbox, container, switchContainer, switcher } from "./styles.css"
import { Text } from "../Text"

interface SwitchProps{
  id: string
}
export const Switch:React.FC<SwitchProps> = ({ id }) => {
  
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

