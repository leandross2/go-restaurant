'use client'

import { Modal } from "@/_components/widget/Modal";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { IDishe } from "../types/IDishe";
interface ModalContextData{
  isVisible:boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
  setInitialData: Dispatch<SetStateAction<IDishe | undefined>>

}
export const ModalContext = createContext<ModalContextData>({} as ModalContextData)

interface ModalProviderProps{
  children: ReactNode
}

export const ModalProvider = ({children}:ModalProviderProps)=>{
  const [isVisible, setIsVisible] = useState(false)
  const [initialData, setInitialData] = useState<IDishe>()

  return(
    <ModalContext.Provider value={{isVisible, setIsVisible,setInitialData}}>
      {children}
      {isVisible && <Modal initialData={initialData} />}
    </ModalContext.Provider>
  )
}