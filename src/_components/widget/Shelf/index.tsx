import { Card } from "@/_components/widget/Card"
import { container } from "./styles.css"
import { useDishes } from "@/core/hooks/useDishes"
 
export const Shelf:React.FC = async () => {
  const { getAll } = useDishes()

  const body = await getAll()

  return (
    <div className={container}>
      {body.map(dishe => <Card key={dishe.id} dishe={dishe}/>)}
    </div>
  )
}
