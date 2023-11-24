'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import LoadingScreen from './components/LoadingScreen'
import { api } from '@/lib/api'
import usePregnance from '@/stores/pregnance'
import useAnalysis from '@/stores/analysis'
import Pregnance from './sections/Pregnance'
import Title from '@/components/ui/Title'
import { HiArrowLeft } from 'react-icons/hi'
import Fetus from './sections/Fetus'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const Analysis = () => {
  const searchParams = useSearchParams()
  const { setPregnance } = usePregnance()
  const { analysisStep } = useAnalysis()
  const router = useRouter()

  const patientId = searchParams.get('id')

  // is screen loading?
  const [isScreenLoading, setIsScreenLoading] = useState(true)

  const fetchPregnanceData = () => {
    api
      .get(`/dados/gravidez/gestante/id/${patientId}`)
      .then((response) => {
        setPregnance(response.data)

        setIsScreenLoading(false)
      })
      .catch(async (error) => {
        await router.replace('/')

        setIsScreenLoading(false)
      })
  }

  // fetch pregnance data when loading screen
  useEffect(() => {
    fetchPregnanceData()
  }, [])

  // get analysis section
  const getAnalysisSection = () => {
    switch (analysisStep) {
      case 'pregnance':
        return <Pregnance />
        break
      case 'fetus':
        return <Fetus />
        break
    }
  }

  // get section title
  const getSectionTitle = () => {
    switch (analysisStep) {
      case 'pregnance':
        return 'Análise da gestante'
        break
      case 'fetus':
        return 'Análise do feto'
        break
    }
  }

  return (
    <main className="pt-0 w-full flex justify-center">
      {isScreenLoading ? (
        <LoadingScreen />
      ) : (
        <div className="p-10 w-full max-w-[1000px]">
          <header className="flex gap-4 items-center">
            <div
              onClick={() => router.replace('/boarding')}
              className="transition-all active:scale-[.96] cursor-pointer flex text-primary rounded-full hover:bg-primary-50/10 justify-center items-center p-2"
            >
              <HiArrowLeft size={24} />
            </div>
            <Title className="text-3xl">{getSectionTitle()}</Title>
          </header>
          <div className="h-full pt-[40px]">{getAnalysisSection()}</div>
        </div>
      )}
    </main>
  )
}

export default Analysis
