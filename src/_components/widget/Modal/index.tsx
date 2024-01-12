import { Input } from "@/_components/elements/Input"
import { modal, overlay } from "./style.css"
import { Text } from "@/_components/elements/Text"
import { IDishe } from "@/core/types/IDishe"
import { useRef } from "react"

interface  ModalProps{
  initialData?: IDishe
}
export const Modal:React.FC<ModalProps> =({ initialData }) => {
  
  const formRef = useRef<HTMLFormElement>(null)
  
  const handleSubmit = (e: any)=>{
    e.preventDefault()
  }

  return (
    <div className={overlay}>
      <div className={modal}>
        <Text type="title">Criar Novo</Text>
        <form onSubmit={handleSubmit} ref={formRef}>

          <Input defaultValue={initialData?.name} />
          <Input defaultValue={initialData?.description} />
          <Input defaultValue={initialData?.priceFormated} />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

