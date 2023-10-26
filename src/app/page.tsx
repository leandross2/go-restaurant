
import { HomeLayout } from "@/_components/layout/HomeLayout"
import { ModalProvider } from "@/core/context/ModalContext"

export default async function Home() {
  return (
    <ModalProvider>
      <HomeLayout />
    </ModalProvider>
  )
}
