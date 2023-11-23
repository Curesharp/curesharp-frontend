'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { api } from '@/lib/api'
import useAnalysis from '@/stores/analysis'
import usePregnance from '@/stores/pregnance'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Pregnance = () => {
  const { analysisStep, setAnalysisStep } = useAnalysis()
  const { pregnance, setPregnance } = usePregnance()
  const searchParams = useSearchParams()

  const patientId = searchParams.get('id')

  // buttons loading states
  const [isNextButtonLoading, setIsNextButtonLoading] = useState(false)

  const handleInputChange = (e) => {
    setPregnance({ ...pregnance, [e.target.name]: Number(e.target.value) })

    console.log(pregnance)
  }

  // fetch pregnance data
  const fetchPregnanceData = () => {
    api.get(`/dados/gravidez/gestante/id/${patientId}`).then((response) => {
      if (!response.data.length) {
        return
      } else {
        setPregnance(response.data)
      }
    })
  }

  const updatePregnanceData = () => {
    const formData = { ...pregnance, idGestante: Number(patientId) }

    setIsNextButtonLoading(true)

    api
      .post(`/dados/gravidez`, formData)
      .then(() => {
        setAnalysisStep('fetus')
        setIsNextButtonLoading(false)
      })
      .catch(() => {
        setIsNextButtonLoading(false)
      })
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="h-full flex flex-col justify-between"
    >
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <Input
            type="number"
            name="idadeGestante"
            onChange={handleInputChange}
            value={pregnance?.idadeGestante}
            label="Idade da gestante"
          />
          <Input
            type="number"
            name="frequenciaCardiaca"
            onChange={handleInputChange}
            value={pregnance?.frequenciaCardiaca}
            label="Frequência cardíaca"
          />
        </div>
        <div className="flex gap-8">
          <Input
            type="number"
            name="pressaoSanguineaSistolica"
            onChange={handleInputChange}
            value={pregnance?.pressaoSanguineaSistolica}
            label="Pressão sanguínea sistólica"
          />
          <Input
            type="number"
            name="pressaoSanguineaDiastolica"
            onChange={handleInputChange}
            value={pregnance?.pressaoSanguineaDiastolica}
            label="Pressão sanguínea diastólica"
          />
        </div>
        <div className="flex gap-8">
          <Input
            type="number"
            name="nivelGlicoseSangue"
            onChange={handleInputChange}
            value={pregnance?.nivelGlicoseSangue}
            label="Nível de glicose no sangue"
          />
          <Input
            type="number"
            name="temperaturaCorporalGravidez"
            onChange={handleInputChange}
            value={pregnance?.temperaturaCorporalGravidez}
            label="Temperatura corporal"
          />
        </div>
      </div>
      <div className="flex gap-4 py-10">
        <Button isLoading={isNextButtonLoading} onClick={updatePregnanceData}>
          Próximo
        </Button>
      </div>
    </form>
  )
}

export default Pregnance
