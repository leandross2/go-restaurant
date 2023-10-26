'use client'
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import { fetchApi } from "../services/api/fetch"
import { IDishe } from "../types/IDishe"


export const useModal = () => {
  const context = useContext(ModalContext)
  
  if(!context){
    console.warn("ModalContext is not found")
  }

  const toggleModal = () => context.setIsVisible(!context.isVisible)

  return {...context, toggleModal}
}