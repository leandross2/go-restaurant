import { fetchApi } from "../services/api/fetch"
import { IDishe } from "../types/IDishe"

export const useDishes = ()=>{
  const getItem = async (id:number)=>{
    const data = await fetchApi<IDishe>({url: `/dishes/${id}`})
    return data.body
  }

  return {getItem}
}