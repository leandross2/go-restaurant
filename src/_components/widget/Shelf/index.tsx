import { Card } from "@/_components/widget/Card"
import { container } from "./styles.css"
import { fetchApi } from "@/core/services/api/fetch"
import { IDishe } from "@/core/types/IDishe"

 
export const Shelf:React.FC = async () => {
  const {body} = await fetchApi<IDishe[]>({url:'/dishes', options:{
    cache:"no-store",
  }})

  return (
    <div className={container}>
      {body.map(dishe => <Card key={dishe.id} dishe={dishe}/>)}
    </div>
  )
}
