import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import useModal from '@/stores/modal'
import React from 'react'
import { IoFemale, IoMale } from 'react-icons/io5'
import FetusModal from '../../modals/FetusModal'

const FetusCard = ({ fetus, fetchFetusData }) => {
  const { setModal } = useModal()

  return (
    <div className="p-2 rounded border flex gap-4">
      <div
        className={`${
          fetus.sexo === 'MASCULINO' ? 'text-blue-400' : 'text-pink-400'
        }`}
      >
        {fetus.sexo === 'MASCULINO' ? (
          <IoMale size={30} />
        ) : (
          <IoFemale size={30} />
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-8">
          <div className="min-w-[150px]">
            <Title className="text-md">Nome:</Title>
            {fetus.nome}
          </div>
          <div className="min-w-[150px]">
            <Title className="text-md">Idade:</Title>
            {fetus.idade} semanas
          </div>
        </div>
        <div>
          <Button
            onClick={() =>
              setModal({
                title: 'Editar feto',
                content: (
                  <FetusModal
                    fetchFetusData={fetchFetusData}
                    fetus={fetus}
                    edit
                  />
                ),
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
