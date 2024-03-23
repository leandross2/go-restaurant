import { FormEvent, useReducer, useRef } from 'react'
import { Input } from '@/_components/elements/Input'
import { useDishes } from '@/core/hooks/useDishes'
import { Button } from '@/_components/elements/Button'
import { createDishValidations } from './validations/createDishValidations'
import { PiPlusSquare } from 'react-icons/pi'

interface InputControlState{
  Name: string | null,
  Description: string | null,
  Price: string | null,
}

export enum InputControlActionsEnum {
  name = "inputNameMessage" ,
  description = "inputDescriptionMessage",
  price = "inputPriceMessage"
}

interface InputControlActions {
  type: InputControlActionsEnum
  payload: string | null
}

const initialErrorsInputs = {
  Name: null,
  Description: null,
  Price: null,
}

const controlInputsErrors = (state: InputControlState, action:InputControlActions)=>{
  console.log({ state })
  switch(action.type){
  case InputControlActionsEnum.name:
    return { ...state, Name: action.payload }
    
  case InputControlActionsEnum.description:
    return { ...state, Description: action.payload }

  case InputControlActionsEnum.price:
    return { ...state, Price: action.payload }
  }
}

interface CreateDishFormProps{
  afterSubmit: () => void
}

export const CreateDishForm:React.FC<CreateDishFormProps> = ({ afterSubmit }) => {
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputDescriptionRef = useRef<HTMLInputElement>(null)
  const inputPriceRef = useRef<HTMLInputElement>(null)
  
  const [controlInputErrorsState, controlInputErrorsDispatch]= useReducer(controlInputsErrors, initialErrorsInputs)

  const { createItem } = useDishes()
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const fieldsWithErrors = createDishValidations([inputNameRef?.current, inputDescriptionRef?.current, inputPriceRef?.current])
    
      if(fieldsWithErrors){
        // @ts-ignore FIXME::arrumar tipagens
        Object.keys(fieldsWithErrors).forEach((fieldName: 'name' | 'description' | 'price') =>
          controlInputErrorsDispatch({ type: InputControlActionsEnum[fieldName], payload: fieldsWithErrors[fieldName] })
        )
        return
      }
      
      await createItem({
        name: inputNameRef?.current?.value as string, 
        description: inputDescriptionRef?.current?.value as string, 
        price:Number(inputPriceRef?.current?.value),
        available: true
      })
      
      afterSubmit()
    }catch(err){
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        name="name" 
        ref={inputNameRef} 
        label="Nome do Prato" 
        isError={!!controlInputErrorsState?.Name} 
        errorMessage={controlInputErrorsState?.Name}
      />

      <Input name="description" ref={inputDescriptionRef} label="Descrição" isError={!!controlInputErrorsState?.Description} errorMessage={controlInputErrorsState?.Description}/>
      <Input name="price" mask ref={inputPriceRef} label="Preço" isError={!!controlInputErrorsState?.Price} errorMessage={controlInputErrorsState?.Price}/>

      <Button type="submit" variant="create" icon={<PiPlusSquare size={24}/>}>Novo Prato</Button>
    </form>
  )
}

