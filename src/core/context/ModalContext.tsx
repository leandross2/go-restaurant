'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState, useReducer } from "react";
import { IDishe } from "../types/IDishe";
import { CreateDishModal } from "@/_components/widget/Modal/CreateDishModal";
import { ControlModalActionsEnum, ControlModalsActions, ControlModalsState } from "../types/reducers/ModalReducer";
import { UpdateDishModal } from "@/_components/widget/Modal/UpdateDishModal";

interface ModalContextData{
  controlModalsState: ControlModalsState
  controlModalDispatch: Dispatch<ControlModalsActions>
}

export const ModalContext = createContext<ModalContextData>({} as ModalContextData)

interface ModalProviderProps{
  children: ReactNode
}

const initialState = { 
  modalCreate: {isOpen: false}, 
  modalUpdate: {isOpen: false, defaultValue: {} as IDishe} 
}
const controlModalReducer = (state: ControlModalsState, action:ControlModalsActions): ControlModalsState=>{
  
  switch (action.type) {
    case ControlModalActionsEnum.toggleModalCreate:
      return { ...state, modalCreate: {isOpen: !state.modalCreate.isOpen} }
      
    case ControlModalActionsEnum.toggleModalUpdate:
      return { ...state, modalUpdate: {isOpen: !state.modalCreate.isOpen, defaultValue: action.payload || {} as IDishe} }
  }
}

export const ModalProvider = ({ children }:ModalProviderProps)=>{
  const [controlModalsState, controlModalDispatch] = useReducer(controlModalReducer, initialState)

  return(
    <ModalContext.Provider value={{ controlModalsState, controlModalDispatch }}>
      <button onClick={() => controlModalDispatch({type: ControlModalActionsEnum.toggleModalUpdate, payload: {name: "teste"} as IDishe})}>tsss</button>
      {children}

      {controlModalsState.modalCreate.isOpen && <CreateDishModal />}
      {controlModalsState.modalUpdate.isOpen && <UpdateDishModal defaultValue={controlModalsState.modalUpdate.defaultValue} />}
    </ModalContext.Provider>
  )
}