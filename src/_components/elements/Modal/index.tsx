import { modal, overlay, header } from "./style.css"
import { Text } from "@/_components/elements/Text"
import { ReactNode } from "react"

interface  ModalProps{
  children: ReactNode
  title: string;
  onClose: () => void;
}
export const Modal:React.FC<ModalProps> =({ children, title, onClose }) => {
  return (
    <dialog className={overlay} onClick={onClose}>
      <div className={modal} onClick={e => e.stopPropagation()}>
        <header className={header}>
          <Text type="title">{title}</Text>
        </header>

        {children}
      </div>
    </dialog>
  )
}

