import { Input } from "@/_components/elements/Input"
import { modal } from "./style.css"
import { Text } from "@/_components/elements/Text"
import { IDishe } from "@/core/types/IDishe"
import { RefObject, useRef } from "react"

interface  ModalProps{
  initialData?: IDishe
}
export const Modal:React.FC<ModalProps> =({initialData}) => {
  console.log({initialData})
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(formRef.current){
      const ts = new FormData(formRef.current)

      console.log({ts: ts.values()})
    }

  }
  return (
    <div className={modal}>
      <Text type="title">Criar Novo</Text>
      <form onSubmit={handleSubmit} ref={formRef}>

        <Input defaultValue={initialData?.name} />
        <Input defaultValue={initialData?.description} />
        <Input defaultValue={initialData?.price} />
        <button type="submit">asdasd</button>
      </form>
    </div>
  )
}

