import { Button } from "@/_components/elements/Button"
import { Input } from "@/_components/elements/Input"
import { Modal } from "@/_components/elements/Modal"
import { IDishe } from "@/core/types/IDishe"
import { FormEvent, useRef } from "react"

interface  ModalProps{
  initialData?: IDishe
}
export const CreateDishModal:React.FC<ModalProps> =() => {
  const inputNameRef = useRef(null)
  const inputDescriptionRef = useRef(null)
  const inputPriceRef = useRef(null)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  return (
    <Modal title="Criar Prato">

      <form onSubmit={handleSubmit}>
        <Input name="name" ref={inputNameRef} placeholder="Nome do Prato"/>
        <Input name="description" ref={inputDescriptionRef} placeholder="Descrição"/>
        <Input name="price" ref={inputPriceRef} placeholder="Preço"/>

        <Button type="submit">Enviar</Button>
      </form>
    </Modal>
  )
}

