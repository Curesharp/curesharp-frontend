import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import { api } from '@/lib/api'
import usePregnance from '@/stores/pregnance'
import { AxiosError } from 'axios'
import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const FetusTestCard = ({ list, setList, test }) => {
  let statusColor

  // selecting risk color
  switch (test.saudeFeto) {
    case 'SUSPEITO':
      statusColor = 'border-l-red-500'
      break
    case 'NORMAL':
      statusColor = 'border-l-yellow-500'
      break
    default:
      statusColor = 'border-l-emerald-500'
      break
  }

  // is open
  const [isOpen, setIsOpen] = useState(false)

  // handle delete pregnance
  const deleteFetusAnalysis = async (id) => {
    try {
      await api.delete(`/dados/feto/${id}`)

      const fetusIndex = list.findIndex((item) => item.idDadosFeto === id)

      if (fetusIndex !== -1) {
        const updatedFetusAnalysisList = [
          ...list.slice(0, fetusIndex),
          ...list.slice(fetusIndex + 1),
        ]

        setList(updatedFetusAnalysisList)
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
              <Text className="text-base">SAÚDE FETO:</Text>
              <Title className="text-xl">{test.saudeFeto}</Title>
            </div>
            <div>
              <Text className="text-base">DATA DA AVALIAÇÃO:</Text>
              <Text className="text-xl font-bold text-black">
                {test.dataAvaliacao}
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
          className={`transition-all overflow-y-scroll duration-300 animate-scale-in max-h-0 overflow-hidden ${
            isOpen && 'max-h-[600px]'
          } p-3 rounded-b border shadow flex-col gap-6`}
        >
          <div className="flex flex-col gap-4">
            <div>
              <Text className="text-base">IDADE DO FETO:</Text>
              <Text className="text-lg font-bold">{test.idade}</Text>
            </div>
            <div>
              <Text className="text-base">ACELERAÇÕES:</Text>
              <Text className="text-lg font-bold">{test.aceleracoes}</Text>
            </div>
            <div>
              <Text className="text-base">MOVIMENTO FETAL POR SEGUNDO:</Text>
              <Text className="text-lg font-bold">
                {test.movimentoFetalPorSegundo}
              </Text>
            </div>

            <div>
              <Text className="text-base">CONTRAÇÕES:</Text>
              <Text className="text-lg font-bold">{test.contracoes}</Text>
            </div>
            <div>
              <Text className="text-base">DESACELERAÇÕES:</Text>
              <Text className="text-lg font-bold">{test.desaceleracoes}</Text>
            </div>
            <div>
              <Text className="text-base">DESACELERAÇÕES SEVERAS:</Text>
              <Text className="text-lg font-bold">
                {test.desaceleracoesSeveras}
              </Text>
            </div>

            <div>
              <Text className="text-base">DESACELERAÇÕES PROLONGADAS:</Text>
              <Text className="text-lg font-bold">
                {test.desaceleracoesProlongadas}
              </Text>
            </div>
            <div>
              <Text className="text-base">VARIAÇÃO ANORMAL A CURTO PRAZO:</Text>
              <Text className="text-lg font-bold">
                {test.variacaoAnormalCurtoPrazo}
              </Text>
            </div>
            <div>
              <Text className="text-base">VARIAÇÃO MÉDIA A CURTO PRAZO:</Text>
              <Text className="text-lg font-bold">
                {test.variacaoMediaCurtoPrazo}
              </Text>
            </div>

            <div>
              <Text className="text-base">
                PORCENTAGEM TEMPO VARIAÇÃO ANORMAL:
              </Text>
              <Text className="text-lg font-bold">
                {test.porcentagemTempoVariacaoAnormal}
              </Text>
            </div>
            <div>
              <Text className="text-base">MEDIA VARIAÇÃO A LONGO PRAZO:</Text>
              <Text className="text-lg font-bold">
                {test.mediaVariacaoLongoPrazo}
              </Text>
            </div>
            <div>
              <Text className="text-base">LARGURA HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.larguraHistograma}
              </Text>
            </div>

            <div>
              <Text className="text-base">VALOR MÍNIMO HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.valorMininoHistograma}
              </Text>
            </div>
            <div>
              <Text className="text-base">VALOR MÁXIMO HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.valorMaximoHistograma}
              </Text>
            </div>
            <div>
              <Text className="text-base">NÚMERO DE PICOS HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.numeroPicosHistograma}
              </Text>
            </div>

            <div>
              <Text className="text-base">MÓDULO HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">{test.moduloHistograma}</Text>
            </div>
            <div>
              <Text className="text-base">MÉDIA HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">{test.mediaHistograma}</Text>
            </div>
            <div>
              <Text className="text-base">MEDIANA HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.medianaHistograma}
              </Text>
            </div>

            <div>
              <Text className="text-base">VARIANCIA HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.varianciaHistograma}
              </Text>
            </div>
            <div>
              <Text className="text-base">TENDÊNCIA HISTOGRAMA:</Text>
              <Text className="text-lg font-bold">
                {test.tendenciaHistograma}
              </Text>
            </div>
          </div>

          <div className="max-w-[200px] mt-10">
            <Button
              onClick={() => deleteFetusAnalysis(test.idDadosFeto)}
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

export default FetusTestCard
