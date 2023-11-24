import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import { api } from '@/lib/api'
import usePregnance from '@/stores/pregnance'
import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const PregnanceTestCard = ({ test }) => {
  const { pregnance, setPregnance } = usePregnance()

  let statusColor

  // selecting risk color
  switch (test.risco) {
    case 'ALTO':
      statusColor = 'border-l-red-500'
      break
    case 'MEDIO':
      statusColor = 'border-l-yellow-500'
      break
    default:
      statusColor = 'border-l-emerald-500'
      break
  }

  // is open
  const [isOpen, setIsOpen] = useState(false)

  // handle delete pregnance
  const deletePregnance = async (id) => {
    try {
      await api.delete(`/dados/gravidez/${id}`)

      const pregnanceIndex = pregnance.findIndex(
        (item) => item.idDadosGravidez === id,
      )

      if (pregnanceIndex !== -1) {
        const updatedPregnance = [
          ...pregnance.slice(0, pregnanceIndex),
          ...pregnance.slice(pregnanceIndex + 1),
        ]

        setPregnance(updatedPregnance)
      }
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        console.log(error)

        toast.error('Erro ao excluir dado.')
      }
    }
  }

  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={` cursor-pointer border-l-4 ${statusColor} border w-full p-3 rounded-t hover:shadow`}
      >
        <header className="flex justify-between">
          <div className="flex gap-10">
            <div>
              <Text className="text-base">RISCO:</Text>
              <Title className="text-xl">{test.risco}</Title>
            </div>
            <div>
              <Text className="text-base">DATA DA AVALIAÇÃO:</Text>
              <Text className="text-xl font-bold text-black">
                {test.dataDaAvaliacao}
              </Text>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="cursor-pointer transition-all active:scale-[0.96] p-1 flex justify-center items-center rounded-full hover:bg-neutral-100 text-primary">
              <HiChevronDown
                className={`transition-all ${isOpen ? 'rotate-180' : ''}`}
                size={27}
              />
            </div>
          </div>
        </header>
      </div>
      {isOpen && (
        <div
          className={`transition-all  duration-300 animate-scale-in max-h-0 overflow-hidden ${
            isOpen && 'max-h-[800px]'
          } p-3 rounded-b border shadow flex-col gap-6`}
        >
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <div>
                <Text className="text-base">IDADE GESTANTE:</Text>
                <Text className="text-lg font-bold">{test.idadeGestante}</Text>
              </div>
              <div>
                <Text className="text-base">PRESSÃO SANG. SISTÓLICA:</Text>
                <Text className="text-lg font-bold">
                  {test.pressaoSanguineaSistolica}
                </Text>
              </div>
              <div>
                <Text className="text-base">PRESSÃO SANG. DIASTÓLICA:</Text>
                <Text className="text-lg font-bold">
                  {test.pressaoSanguineaDiastolica}
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <Text className="text-base">NÍVEL GLICOSE SANGUE:</Text>
                <Text className="text-lg font-bold">
                  {test.nivelGlicoseSangue}
                </Text>
              </div>
              <div>
                <Text className="text-base">FREQUÊNCIA CARDÍACA:</Text>
                <Text className="text-lg font-bold">
                  {test.frequenciaCardiaca}
                </Text>
              </div>
              <div>
                <Text className="text-base">
                  TEMPERATURA CORPORAL GRAVIDEZ:
                </Text>
                <Text className="text-lg font-bold">
                  {test.temperaturaCorporalGravidez}
                </Text>
              </div>
            </div>
          </div>
          <div className="max-w-[200px] mt-10">
            <Button
              onClick={() => deletePregnance(test.idDadosGravidez)}
              variant="danger"
            >
              Excluir
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PregnanceTestCard
