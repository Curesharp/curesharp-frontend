import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SelectMenu from '@/components/ui/SelectMenu'
import { api } from '@/lib/api'
import useUser from '@/stores/user'
import { useState } from 'react'
import { raceMenu } from './data/menuData'
import useModal from '@/stores/modal'
import { AxiosError } from 'axios'

const CreatePatientModal = ({ fetchPatients }) => {
  const { user } = useUser()
  const { setModal } = useModal()

  const [patientFormData, setPatientFormData] = useState({
    nome: '',
    sobrenome: '',
    rg: '',
    contato: Number(''),
    raca: 'BRANCA',
  })

  const handleCreatePatient = () => {
    const formData = {
      idUsuario: user.idUsuario,
      nome: patientFormData.nome + ' ' + patientFormData.sobrenome,
      rg: patientFormData.rg,
      contato: patientFormData.contato,
      raca: patientFormData.raca.toUpperCase(),
    }

    api
      .post('/gestante', formData)
      .then(() => {
        setModal(undefined)
        fetchPatients()
      })
      .then((error) => {
        if (error instanceof AxiosError) {
          if (error.response.status === 400) {
            toast.error('Existem campos inválidos')
          } else {
            toast.error('Algo deu errado, tente novamente mais tarde!')
          }
        }
      })
  }

  const handleInputChange = (e) => {
    setPatientFormData({ ...patientFormData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-6">
          <Input onChange={handleInputChange} name="nome" label="Nome" />
          <Input
            onChange={handleInputChange}
            name="sobrenome"
            label="Sobrenome"
          />
          <Input onChange={handleInputChange} name="rg" label="RG" />
          <Input onChange={handleInputChange} name="contato" label="Contato" />
          <SelectMenu
            menu={raceMenu}
            onChange={(item) =>
              setPatientFormData({ ...patientFormData, raca: item.id })
            }
            defaultOption={raceMenu[0]}
            label="Etnia"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button onClick={handleCreatePatient}>Adicionar</Button>
          <Button variant="outline">Limpar</Button>
        </div>
      </form>
    </div>
  )
}

export default CreatePatientModal
