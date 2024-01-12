'use client'
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

export const useModal = () => {
  const context = useContext(ModalContext)
  
  if(!context){
    console.warn("ModalContext is not found")
  }

  const toggleModal = () => context.setIsVisible(!context.isVisible)

  return { ...context, toggleModal }
}