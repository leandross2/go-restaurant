'use client'
import Image from "next/image"
import aoMolho from "@/assets/images/dishes/ao-molho.png"
import { Text, actionButtons, actionsBar, cardDescription, container, imageDish } from "./styles.css"

import { IDishe } from "@/core/types/IDishe"
import { Button } from "@/_components/elements/Button"
import { Switch } from "@/_components/elements/Switch"
import { PiPencilSimpleLineThin, PiTrashThin } from "react-icons/pi"
import { formatCurrency } from "@/core/helpers/formatCurrency"
import { useModal } from "@/core/hooks/useModal"
import { useDishes } from "@/core/hooks/useDishes"


interface CardProps{
  dishe: IDishe
}
export const Card:React.FC<CardProps> = ({dishe}) => {
  const {toggleModal, setInitialData} = useModal()
  const {getItem} = useDishes()
  
  const handleEdit = async ()=>{
    toggleModal()

    const data = await getItem(dishe.id)
    
    setInitialData(data)
  }

  return (
    <div className={container}>
      <Image src={aoMolho} alt={dishe.name} className={imageDish}/>
      
      <div className={`${cardDescription}`}> 
        <p className={Text.title}>{dishe.name}</p>
        <p className={Text.description}>{dishe.description}</p>
        <p className={Text.emphasis}>{formatCurrency(dishe.price)}</p>
      </div>

      <div className={actionsBar}>
        <div className={actionButtons}>
          <Button onClick={handleEdit} >
            <PiPencilSimpleLineThin size={25}/>
          </Button>

          <Button>
            <PiTrashThin size={25}/>
          </Button>
        </div>

        <Switch/>
      </div>
    </div>
  )
}

