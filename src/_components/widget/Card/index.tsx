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
import { ControlModalActionsEnum } from "@/core/types/reducers/ModalReducer"

interface CardProps{
  dishe: IDishe
}
export const Card:React.FC<CardProps> = ({ dishe }) => {
  const { toggleUpdateModal,  } = useModal()
  const { getItem } = useDishes()
  
  const handleUpdate = async ()=>{

    const data = await getItem(dishe.id)

    toggleUpdateModal(data)
  }
  
  return (
    <div className={container}>
      <Image loading={'lazy'} src={aoMolho} alt={dishe.name} className={imageDish} width={352} height={198} placeholder="blur" />
      
      <div className={`${cardDescription}`}> 
        <p className={Text.title}>{dishe.name}</p>
        <p className={Text.description}>{dishe.description}</p>
        <p className={Text.emphasis}>{formatCurrency(dishe.price)}</p>
      </div>

      <div className={actionsBar}>
        <div className={actionButtons}>
          <Button onClick={handleUpdate} >
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

