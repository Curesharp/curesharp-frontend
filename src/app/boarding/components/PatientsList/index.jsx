import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import { api } from '@/lib/api'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const PatientsList = ({ setPatients, patients }) => {
  const router = useRouter()

  const deletePatient = async (id) => {
    try {
      await api.delete(`/gestante/${id}`)

      const patientIndex = patients.findIndex((item) => item.idGestante === id)

      if (patientIndex !== -1) {
        const updatedPatients = [
          ...patients.slice(0, patientIndex),
          ...patients.slice(patientIndex + 1),
        ]

        setPatients(updatedPatients)
      }
    } catch (error) {
      console.log(error)

      if (error instanceof AxiosError) {
        if (error.response.data.erro.includes('FOREIGN KEY')) {
          toast.warn('Apague os dados desse paciente antes de apagá-lo.')
        }
      }
    }
  }

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {patients.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center transition-all p-4 rounded-lg border hover:shadow"
          >
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

            <div className="flex gap-3 items-center">
              <Button
                onClick={() => router.push(`/analysis?id=${item.idGestante}`)}
                variant="neutral"
              >
                Análise de risco
              </Button>
              <Button
                onClick={() => deletePatient(item.idGestante)}
                variant="neutral-danger"
              >
                Excluir
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PatientsList
