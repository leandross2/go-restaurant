import { modal, overlay } from "./style.css"
import { Text } from "@/_components/elements/Text"
import { ReactNode } from "react"

interface  ModalProps{
  children: ReactNode
  title: string;
}
export const Modal:React.FC<ModalProps> =({ children, title }) => {

  return (
    <dialog className={overlay}>
      <div className={modal}>
        <header>
          <Text type="title" >{title}</Text>
        </header>

        {children}
      </div>
    </dialog>
  )
}

