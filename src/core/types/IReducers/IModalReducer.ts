import { IDishe } from "../IDishe";

// @ts-ignore
export enum ControlModalActionsEnum {
  toggleModalCreate = "toggleModalCreate",
  toggleModalUpdate = "toggleModalUpdate"
}

export interface ControlModalsState{
  modalCreate:  {isOpen: boolean}, 
  modalUpdate: {isOpen: boolean, defaultValue: IDishe},
}

export interface ControlModalsActions{
  type: ControlModalActionsEnum,
  payload?: IDishe
}
