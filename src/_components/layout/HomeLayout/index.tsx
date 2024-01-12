import { Header } from '@/_components/widget/Header'
import { Shelf } from '@/_components/widget/Shelf'
import { shelfContainer } from './style.css'

export const HomeLayout:React.FC = () => {
  return (
    <>
      <Header/>
      
      <main className={shelfContainer}>
      	<Shelf/>
      </main>
    </>
  )
}

