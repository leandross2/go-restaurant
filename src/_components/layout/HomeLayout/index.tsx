import { Header } from '@/_components/widget/Header'
import { Shelf } from '@/_components/widget/Shelf'
import { shelfContainer } from './style.css'
import { Input } from '@/_components/elements/Input'
import { Modal } from '@/_components/widget/Modal'
import { useModal } from '@/core/hooks/useModal'

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

