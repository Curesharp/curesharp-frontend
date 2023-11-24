import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import useAnalysis from '@/stores/analysis'
import useModal from '@/stores/modal'
import FetusModal from './modals/FetusModal'
import FetusCard from './components/FetusCard'
import { useSearchParams } from 'next/navigation'
import useFetus from '@/stores/fetus'
import { useEffect, useState } from 'react'
import LoadingDots from '@/components/shared/LoadingDots'
import { api } from '@/lib/api'
import FetusTestCard from './components/FetusTestCard'

const Fetus = () => {
  const { setAnalysisStep } = useAnalysis()
  const { fetus, setFetus } = useFetus()
  const { setModal } = useModal()

  const searchParams = useSearchParams()
  const patientId = searchParams.get('id')

  // loading state
  const [isFetusLoading, setIsFetusLoading] = useState(true)

  const [fetusFormData, setFetusFormData] = useState({})

  const handleInputChange = (e) => {
    setFetusFormData({
      ...fetusFormData,
      [e.target.name]: Number(e.target.value),
    })
  }

  // fetch fetus data
  const fetchFetusData = () => {
    api.get(`/gestante/${patientId}`).then((response) => {
      api.get(`/feto/gestante/rg/${response.data.rg}`).then((response) => {
        if (response.data) {
          setFetus(response.data)
        }

        setIsFetusLoading(false)
      })
    })
  }

  // fetch fetus analysis
  const [fetusAnalysisItems, setFetusAnalysisItems] = useState({})

  const fetchFetusAnalysis = () => {
    api
      .get(`/dados/feto/gestante/id/${patientId}`)
      .then((response) => {
        console.log(response)

        if (response.data.length > 0) {
          setFetusAnalysisItems(response.data)
        }
      })
      .catch(() => {})
  }

  // make fetus analysis
  const fetusAnalysis = () => {
    const formData = {
      ...fetusFormData,
      idFeto: fetus[0].idFeto,
      idade: fetus[0].idade,
    }

    api
      .post(`/dados/feto`, formData)
      .then(() => {
        fetchFetusAnalysis()
      })
      .catch(() => {})
  }

  // fetch data when page loads
  useEffect(() => {
    fetchFetusData()
    fetchFetusAnalysis()
  }, [])

  return (
    <div>
      {isFetusLoading ? (
        <LoadingDots variant="primary" />
      ) : (
        <>
          {!fetus.length > 0 ? (
            <div className="pt-[50px] flex flex-col gap-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <Title className="text-2xl">Nenhum feto encontrado</Title>
                <Text className="text-lg">
                  Você precisa adicionar um feto para continuar
                </Text>
              </div>
              <div className="min-w-[240px]">
                <Button
                  onClick={() =>
                    setModal({
                      title: 'Adicionar feto',
                      content: <FetusModal fetchFetusData={fetchFetusData} />,
                    })
                  }
                >
                  Adicionar feto
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full">
              {fetus.map((item, index) => (
                <FetusCard
                  fetchFetusData={fetchFetusData}
                  key={index}
                  fetus={item}
                />
              ))}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-10 h-full flex flex-col"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="aceleracoes"
                      onChange={handleInputChange}
                      value={fetusFormData?.aceleracoes}
                      label="Acelerações"
                    />
                    <Input
                      type="number"
                      name="frequenciaCardiaca"
                      onChange={handleInputChange}
                      value={fetusFormData?.frequenciaCardiaca}
                      label="Frequência cardíaca"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="movimentoFetalPorSegundo"
                      onChange={handleInputChange}
                      value={fetusFormData?.movimentoFetalPorSegundo}
                      label="Movimento fetal por segundo"
                    />
                    <Input
                      type="number"
                      name="contracoes"
                      onChange={handleInputChange}
                      value={fetusFormData?.contracoes}
                      label="Contrações"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="desaceleracoes"
                      onChange={handleInputChange}
                      value={fetusFormData?.desaceleracoes}
                      label="Desacelerações"
                    />
                    <Input
                      type="number"
                      name="desaceleracoesSeveras"
                      onChange={handleInputChange}
                      value={fetusFormData?.desaceleracoesSeveras}
                      label="Desacelerações Severas"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="desaceleracoesProlongadas"
                      onChange={handleInputChange}
                      value={fetusFormData?.desaceleracoesProlongadas}
                      label="Desacelerações Prolongadas"
                    />
                    <Input
                      type="number"
                      name="variacaoAnormalCurtoPrazo"
                      onChange={handleInputChange}
                      value={fetusFormData?.variacaoAnormalCurtoPrazo}
                      label="Variação anormal (curto prazo)"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="variacaoMediaCurtoPrazo"
                      onChange={handleInputChange}
                      value={fetusFormData?.variacaoMediaCurtoPrazo}
                      label="Variação média (curto prazo)"
                    />
                    <Input
                      type="number"
                      name="porcentagemTempoVariacaoAnormal"
                      onChange={handleInputChange}
                      value={fetusFormData?.porcentagemTempoVariacaoAnormal}
                      label="Porcentagem tempo variação anormal"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="mediaVariacaoLongoPrazo"
                      onChange={handleInputChange}
                      value={fetusFormData?.mediaVariacaoLongoPrazo}
                      label="Média variação (longo prazo)"
                    />
                    <Input
                      type="number"
                      name="larguraHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.larguraHistograma}
                      label="Largura histograma"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="valorMinimoHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.valorMinimoHistograma}
                      label="Valor mínimo histograma"
                    />
                    <Input
                      type="number"
                      name="valorMaximoHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.valorMaximoHistograma}
                      label="Valor máximo histograma"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="tendenciaHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.tendenciaHistograma}
                      label="Tendência histograma"
                    />

                    <Input
                      type="number"
                      name="numeroPicosHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.numeroPicosHistograma}
                      label="Número picos histograma"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="numeroZerosHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.numeroZerosHistograma}
                      label="Número zeros histograma"
                    />
                    <Input
                      type="number"
                      name="moduloHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.moduloHistograma}
                      label="Módulo histograma"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="mediaHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.mediaHistograma}
                      label="Média histograma"
                    />
                    <Input
                      type="number"
                      name="medianaHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.medianaHistograma}
                      label="Mediana histograma"
                    />
                  </div>
                  <div className="flex gap-8">
                    <Input
                      type="number"
                      name="varianciaHistograma"
                      onChange={handleInputChange}
                      value={fetusFormData?.varianciaHistograma}
                      label="Variancia histograma"
                    />
                  </div>
                </div>
                <div className="flex gap-4 py-10">
                  <Button
                    onClick={() => {
                      fetusAnalysis()
                    }}
                  >
                    Analisar
                  </Button>
                </div>
              </form>

              {fetusAnalysisItems.length > 0 && (
                <div>
                  <Title className="text-2xl mb-8">
                    Análises já realizadas{' '}
                    <span className="font-inter text-primary">
                      ({fetusAnalysisItems.length})
                    </span>
                  </Title>
                  <div className="flex flex-col gap-3">
                    {fetusAnalysisItems.map((item, index) => (
                      <FetusTestCard
                        list={fetusAnalysisItems}
                        setList={setFetusAnalysisItems}
                        key={index}
                        test={item}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Fetus
