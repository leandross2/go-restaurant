import { formatCurrency } from "../helpers/formatCurrency"
import { fetchApi } from "../services/api/fetch"
import { IDishe } from "../types/IDishe"

export const useDishes = ()=>{
  const getAll = async ()=>{
    const data = await fetchApi<IDishe[]>({ url: `/dishes`, options:{ cache: "no-cache" } })
    return data.body.map(dish => ({
      ...dish,
      priceFormated: formatCurrency(dish.price)
    }))
  }

  const getItem = async (id:number)=>{
    const data = await fetchApi<IDishe>({ url: `/dishes/${id}`,options:{ cache: "no-cache" } })
    return { ...data.body, priceFormated: formatCurrency(data.body.price) }
  }

  const createItem = async (dish:Omit<IDishe,'id'| 'priceFormated'>)=>{
    const data = await fetchApi<IDishe>({ url: `/dishes`,options:{ method: "post", cache: "no-cache", body: JSON.stringify(dish) } })

    return { ...data.body, priceFormated: formatCurrency(data.body.price) }
  }

  return { getItem, getAll, createItem }
}