'use client'
import { Button } from "@/_components/elements/Button"
import { PiPlusSquare } from "react-icons/pi"
import { Logo } from "@/_components/elements/Logo"
import { content, header } from "./styles.css"
import { useModal } from "@/core/hooks/useModal"

export const Header:React.FC = () => {
  const { toggleCreateModal } = useModal()
  return (
    <header className={header}>
      <div className={content}>
        <Logo />
        <Button onClick={toggleCreateModal} variant="create" icon={<PiPlusSquare size={24}/>}>Novo Prato</Button>
      </div>
    </header>
  )
}

