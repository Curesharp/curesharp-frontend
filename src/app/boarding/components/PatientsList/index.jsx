import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import React from 'react'

const PatientsList = ({ patients }) => {
  console.log(patients)

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {patients.map((item, index) => (
          <li className="flex justify-between items-center transition-all p-4 rounded-lg border hover:shadow">
            <div className="flex gap-10">
              <div className="min-w-[150px]">
                <Title className="text-md">Nome:</Title>
                {item.nome}
              </div>
              <div className="min-w-[100px]">
                <Title className="text-md">Telefone:</Title>
                {item.contato}
              </div>
              <div>
                <Title className="text-md">RG:</Title>
                {item.rg}
              </div>
            </div>

            <div>
              <Button variant="neutral">Análise de risco</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PatientsList
