'use client'

import Container from '@/components/layout/Container'
import Divider from '@/components/layout/Divider'
import React, { useEffect, useState } from 'react'
import Section from './components/Section'
import Title from '@/components/ui/Title'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import EmptySection from './components/EmptySection'
import Card from '@/components/shared/Card'
import useUser from '@/stores/user'
import HiPlus from 'react-icons/hi'
import useModal from '@/stores/modal'
import CreatePatientModal from './modals/CreatePatientModal'
import { api } from '@/lib/api'
import PatientsList from './components/PatientsList'
import LoadingDots from '@/components/shared/LoadingDots'

const Boarding = () => {
  const { user } = useUser()
  const { setModal } = useModal()

  const [patients, setPatients] = useState([])

  // patients loading state
  const [isPatientsLoading, setIsPatientsLoading] = useState(true)

  const fetchPatients = () => {
    setIsPatientsLoading(true)

    api.get(`/gestante`).then((response) => {
      setPatients(response.data)

      setIsPatientsLoading(false)
    })
  }

  useEffect(() => {
    fetchPatients()

    console.log(patients)
  }, [])

  return (
    <main className="bg-neutral-100 min-h-screen pb-[200px]">
      <Divider image="https://images.pexels.com/photos/8203609/pexels-photo-8203609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div className="absolute -bottom-[260px] -right-[200px] h-[600px] w-[600px] bg-primary opacity-60 blur-3xl rounded-full" />
      </Divider>

      <Container className="relative pt-[80px] z-20">
        <Title className="text-4xl text-white mb-10">
          Olá, {user?.nome?.split(' ')[0]}.
        </Title>

        <div className="flex flex-col gap-8">
          <Section
            header={
              !isPatientsLoading && (
                <div className="max-w-[300px]">
                  <Button
                    onClick={() =>
                      setModal({
                        title: 'Adicionar paciente',
                        content: <CreatePatientModal />,
                      })
                    }
                    icon={HiPlus}
                  >
                    Adicionar paciente
                  </Button>
                </div>
              )
            }
            title={
              isPatientsLoading
                ? ''
                : patients.length > 0
                ? 'Pacientes'
                : 'Você ainda não tem nenhum paciente'
            }
          >
            {isPatientsLoading ? (
              <LoadingDots variant="primary" />
            ) : (
              <div className="mt-8 flex flex-col gap-8">
                {!patients.length && (
                  <>
                    <Text>Você poderá ver todos os seus pacientes aqui.</Text>

                    <div className="max-w-[300px]">
                      <Button
                        onClick={() =>
                          setModal({
                            title: 'Adicionar paciente',
                            content: <CreatePatientModal />,
                          })
                        }
                        icon={HiPlus}
                      >
                        Adicionar paciente
                      </Button>
                    </div>
                  </>
                )}

                <PatientsList patients={patients} />
              </div>
            )}
          </Section>

          <EmptySection title="Alimentação saudável na gravidez">
            <div className="flex gap-10">
              <Card
                title="Frutas e vegetais"
                content="As frutas e vegetais são ricos em vitaminas, minerais e fibras. São uma ótima fonte de antioxidantes, que ajudam a proteger as células do corpo dos danos. As frutas e vegetais também são uma boa fonte de água, que é importante para a hidratação."
                image="https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card
                title="Proteínas"
                content="As proteínas são essenciais para a construção e o reparo de tecidos. As gestantes precisam de mais proteínas do que as mulheres não grávidas."
                image="https://images.pexels.com/photos/600615/pexels-photo-600615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card
                title="Laticínios"
                content="Os laticínios são uma boa fonte de cálcio, que é importante para a saúde dos ossos e dentes. As gestantes também precisam de mais cálcio do que as mulheres não grávidas."
                image="https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1600"
              />
            </div>
          </EmptySection>
        </div>
      </Container>
    </main>
  )
}

export default Boarding
