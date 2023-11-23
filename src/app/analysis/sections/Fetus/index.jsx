import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import useAnalysis from '@/stores/analysis'
import useModal from '@/stores/modal'
import FetusModal from './modals/FetusModal'
import FetusCard from './components/FetusCard'

const Fetus = () => {
  const { setAnalysisStep } = useAnalysis()
  const { setModal } = useModal()

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="h-full flex flex-col justify-between"
    >
      {/* no fetus <div className="pt-[50px] flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col items-center">
          <Title className="text-2xl">Nenhum feto encontrado</Title>
          <Text className="text-lg">
            Você precisa adicionar um feto para continuar
          </Text>
        </div>
        <div className="min-w-[240px]">
          <Button
            onClick={() =>
              setModal({ title: 'Adicionar feto', content: <FetusModal /> })
            }
          >
            Adicionar feto
          </Button>
        </div>
      </div> */}

      <div className="w-full">
        <FetusCard />
      </div>

      <div className="flex gap-4 py-10">
        <Button
          onClick={() => {
            setAnalysisStep('pregnance')
          }}
          variant="outline"
        >
          Voltar
        </Button>
        <Button
          onClick={() => {
            setAnalysisStep('fetus')
          }}
        >
          Próximo
        </Button>
      </div>
    </form>
  )
}

export default Fetus
