import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import useModal from '@/stores/modal'
import React from 'react'
import { IoMale } from 'react-icons/io5'
import FetusModal from '../../modals/FetusModal'

const FetusCard = ({ fetus }) => {
  const { setModal } = useModal()

  return (
    <div className="p-2 rounded border flex gap-4">
      <div className="text-blue-400">
        <IoMale size={30} />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-8">
          <div className="min-w-[150px]">
            <Title className="text-md">Nome:</Title>
            Joãozinho Andrade
          </div>
          <div className="min-w-[150px]">
            <Title className="text-md">Idade:</Title>2 semanas
          </div>
        </div>
        <div>
          <Button
            onClick={() =>
              setModal({
                title: 'Editar feto',
                content: <FetusModal fetus={fetus} edit />,
              })
            }
            variant="neutral"
          >
            Editar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FetusCard
