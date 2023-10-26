import { Button } from "@/_components/elements/Button"
import { PiPlusSquare } from "react-icons/pi"
import { Logo } from "@/_components/elements/Logo"
import { content, header } from "./styles.css"


export const Header:React.FC = () => {
  return (
    <header className={header}>
      <div className={content}>
        <Logo />
        <Button variant="create" icon={<PiPlusSquare size={24}/>}>Novo Prato</Button>
      </div>
    </header>
  )
}

