import { Input } from "@/_components/elements/Input"
import { Modal } from "@/_components/elements/Modal"
import { IDishe } from "@/core/types/IDishe"
import { FormEvent, useRef } from "react"

interface  ModalProps{
  defaultValue: IDishe
}

export const UpdateDishModal:React.FC<ModalProps> =({ defaultValue }) => {
  const inputNameRef = useRef(null)
  const inputDescriptionRef = useRef(null)
  const inputPriceRef = useRef(null)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }

  return (
    <Modal title="Editar Prato">

      <form onSubmit={handleSubmit}>
        <Input defaultValue={defaultValue?.name} name="name" ref={inputNameRef} label="Nome do Prato"/>
        <Input defaultValue={defaultValue?.description} name="description" ref={inputDescriptionRef} label="Descrição"/>
        <Input defaultValue={defaultValue?.priceFormated} name="price" ref={inputPriceRef} label="Preço"/>

        <button type="submit">Enviar</button>
      </form>
    </Modal>
  )
}

