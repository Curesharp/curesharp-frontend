import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SelectMenu from '@/components/ui/SelectMenu'
import React from 'react'
import { genderMenu } from './data/modalData'

const FetusModal = ({ fetus, edit }) => {
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-6">
          <Input name="nome" label="Nome" />
          <Input name="sobrenome" label="Sobrenome" />
          <Input name="idade" label="Idade" />

          <SelectMenu
            defaultOption={genderMenu[0]}
            menu={genderMenu}
            label="Etnia"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button>Adicionar</Button>
          <Button variant="outline">Limpar</Button>
        </div>
      </form>
    </div>
  )
}

export default FetusModal
