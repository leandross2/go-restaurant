'use client'
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import { ControlModalActionsEnum } from "../types/reducers/ModalReducer"
import { IDishe } from "../types/IDishe"

export const useModal = () => {
  const context = useContext(ModalContext)
  
  if(!context){
    console.warn("ModalContext is not found")
  }

  const toggleCreateModal = () => context.controlModalDispatch({type: ControlModalActionsEnum.toggleModalCreate})
  
  const toggleUpdateModal = (dish: IDishe) => context.controlModalDispatch({type: ControlModalActionsEnum.toggleModalUpdate, payload: dish})

  return { ...context, toggleCreateModal, toggleUpdateModal }
}