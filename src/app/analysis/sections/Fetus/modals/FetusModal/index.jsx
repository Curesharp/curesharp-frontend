import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SelectMenu from '@/components/ui/SelectMenu'
import React, { useState } from 'react'
import { genderMenu } from './data/modalData'
import { api } from '@/lib/api'
import { useSearchParams } from 'next/navigation'
import useModal from '@/stores/modal'
import { AxiosError } from 'axios'

const FetusModal = ({ fetchFetusData, fetus, edit }) => {
  const searchParams = useSearchParams()
  const patientId = searchParams.get('id')

  const { setModal } = useModal()

  const [fetusFormData, setFetusFormData] = useState(
    edit
      ? {
          nome: fetus.nome,
          idade: fetus.idade,
          sexo: fetus.sexo,
        }
      : {
          nome: '',
          sobrenome: '',
          idade: 0,
          sexo: 'MASCULINO',
        },
  )

  const handleInputChange = (e) => {
    setFetusFormData({ ...fetusFormData, [e.target.name]: e.target.value })
  }

  const handleCreateFetus = () => {
    const formData = {
      idGestante: patientId,
      nome: fetusFormData.nome + ' ' + fetusFormData.sobrenome,
      idade: fetusFormData.idade,
      sexo: fetusFormData.sexo.toUpperCase(),
    }

    api
      .post('/feto', formData)
      .then(() => {
        setModal(undefined)
        fetchFetusData()
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

  const handleEditFetus = () => {
    const formData = {
      nome: fetusFormData.nome,
      idade: fetusFormData.idade,
      sexo: fetusFormData.sexo.toUpperCase(),
    }

    api
      .put(`/feto/${fetus.idFeto}`, formData)
      .then(() => {
        setModal(undefined)
        fetchFetusData()
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

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-6">
          <Input
            onChange={(e) => handleInputChange(e)}
            value={edit && fetusFormData.nome}
            name="nome"
            label="Nome"
          />
          {!edit && (
            <Input
              onChange={(e) => handleInputChange(e)}
              name="sobrenome"
              label="Sobrenome"
            />
          )}

          <Input
            value={edit && fetusFormData.idade}
            onChange={(e) => handleInputChange(e)}
            name="idade"
            label="Idade (semanas)  "
          />

          <SelectMenu
            onChange={(item) =>
              setFetusFormData({ ...fetusFormData, sexo: item.id })
            }
            defaultOption={
              edit
                ? genderMenu.find((item) => item.id === fetus.sexo)
                : genderMenu[0]
            }
            menu={genderMenu}
            label="Gênero"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => (edit ? handleEditFetus() : handleCreateFetus())}
          >
            {edit ? 'Editar' : 'Adicionar'}
          </Button>
          <Button variant="outline">Limpar</Button>
        </div>
      </form>
    </div>
  )
}

export default FetusModal
