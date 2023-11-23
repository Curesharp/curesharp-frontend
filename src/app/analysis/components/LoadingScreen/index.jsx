import Brand from '@/components/shared/Brand'
import Title from '@/components/ui/Title'
import LoadingDots from '@/components/shared/LoadingDots'
import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="absolute left-0 z-50 h-screen w-screen bg-primary flex flex-col items-center">
      <div className="w-[250px] pt-10">
        <Brand variant="white" />
      </div>
      <div className="flex flex-col gap-4 pt-[300px] items-center">
        <LoadingDots />
        <Title className="text-white text-3xl">
          Carregando dados da gestante
        </Title>
      </div>
    </div>
  )
}

export default LoadingScreen
