'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Title from '@/components/ui/Title'
import { api } from '@/lib/api'
import useAnalysis from '@/stores/analysis'
import usePregnance from '@/stores/pregnance'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PregnanceTestCard from './components/PregnanceTestCard'

const Pregnance = () => {
  const { pregnance, setPregnance } = usePregnance()
  const searchParams = useSearchParams()

  const patientId = searchParams.get('id')

  // pregnance form data
  const [pregnanceFormData, setPregnanceFormData] = useState({})

  // buttons loading states
  const [isAnalysisButtonLoading, setIsAnalysisButtonLoading] = useState(false)

  const handleInputChange = (e) => {
    setPregnanceFormData({
      ...pregnanceFormData,
      [e.target.name]: Number(e.target.value),
    })
  }

  // check if fields are empty
  const [isFormEmpty, setIsFormEmpty] = useState(true)

  useEffect(() => {
    const isEmpty = Object.values(pregnanceFormData).every(
      (value) => value === null || value === undefined || value === '',
    )
    setIsFormEmpty(isEmpty)
  }, [pregnanceFormData])

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
    const formData = { ...pregnanceFormData, idGestante: Number(patientId) }

    setIsAnalysisButtonLoading(true)

    api
      .post(`/dados/gravidez`, formData)
      .then(() => {
        setIsAnalysisButtonLoading(false)

        fetchPregnanceData()
      })
      .catch(() => {
        setIsAnalysisButtonLoading(false)
      })
  }

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="h-full flex flex-col"
      >
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <Input
              type="number"
              name="idadeGestante"
              onChange={handleInputChange}
              value={pregnanceFormData?.idadeGestante}
              label="Idade da gestante"
            />
            <Input
              type="number"
              name="frequenciaCardiaca"
              onChange={handleInputChange}
              value={pregnanceFormData?.frequenciaCardiaca}
              label="Frequência cardíaca"
            />
          </div>
          <div className="flex gap-8">
            <Input
              type="number"
              name="pressaoSanguineaSistolica"
              onChange={handleInputChange}
              value={pregnanceFormData?.pressaoSanguineaSistolica}
              label="Pressão sanguínea sistólica"
            />
            <Input
              type="number"
              name="pressaoSanguineaDiastolica"
              onChange={handleInputChange}
              value={pregnanceFormData?.pressaoSanguineaDiastolica}
              label="Pressão sanguínea diastólica"
            />
          </div>
          <div className="flex gap-8">
            <Input
              type="number"
              name="nivelGlicoseSangue"
              onChange={handleInputChange}
              value={pregnanceFormData?.nivelGlicoseSangue}
              label="Nível de glicose no sangue"
            />
            <Input
              type="number"
              name="temperaturaCorporalGravidez"
              onChange={handleInputChange}
              value={pregnanceFormData?.temperaturaCorporalGravidez}
              label="Temperatura corporal"
            />
          </div>
        </div>
        <div className="flex gap-4 py-10">
          <Button
            disabled={isFormEmpty}
            isLoading={isAnalysisButtonLoading}
            onClick={updatePregnanceData}
          >
            Analisar
          </Button>
        </div>
      </form>

      {pregnance.length > 0 && (
        <div>
          <Title className="text-2xl mb-8">
            Análises já realizadas{' '}
            <span className="font-inter text-primary">
              ({pregnance.length})
            </span>
          </Title>
          <div className="flex flex-col gap-3">
            {pregnance.map((item, index) => (
              <PregnanceTestCard test={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Pregnance
