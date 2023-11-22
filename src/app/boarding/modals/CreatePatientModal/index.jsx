import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SelectMenu from '@/components/ui/SelectMenu'
import React, { useState } from 'react'
import { genderMenu, raceMenu } from './data/menuData'
import { api } from '@/lib/api'
import useUser from '@/stores/user'

const CreatePatientModal = () => {
  const { user } = useUser()

  const [patientFormData, setPatientFormData] = useState({
    nome: '',
    sobrenome: '',
    rg: '',
    contato: Number(''),
    raca: '',
    sexo: '',
  })

  const handleCreatePatient = () => {
    const formData = {
      idUsuario: user.idUsuario,
      nome: patientFormData.nome + ' ' + patientFormData.sobrenome,
      rg: patientFormData.rg,
      contato: patientFormData.contato,
      raca: patientFormData.raca,
      sexo: patientFormData.sexo,
    }

    api.post('/gestante', formData)
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
          <SelectMenu
            menu={genderMenu}
            onChange={(item) =>
              setPatientFormData({ ...patientFormData, sexo: item.id })
            }
            defaultOption={genderMenu[0]}
            label="Sexo"
          />
        </div>

        <div>
          <Button onClick={handleCreatePatient}>Adicionar</Button>
          <Button variant="outline">Limpar</Button>
        </div>
      </form>
    </div>
  )
}

export default CreatePatientModal
