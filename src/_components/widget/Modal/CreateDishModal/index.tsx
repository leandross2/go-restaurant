import { Modal } from "@/_components/elements/Modal"
import { useModal } from "@/core/hooks/useModal"
import { CreateDishForm } from "../../Forms/CreateDishForm"

export const CreateDishModal:React.FC =() => {
  const { toggleCreateModal }= useModal()

  return (
    <Modal title="Criar Prato" onClose={toggleCreateModal}>
      <CreateDishForm afterSubmit={toggleCreateModal}/>
    </Modal>
  )
}

