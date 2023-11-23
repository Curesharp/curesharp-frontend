'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { PiArrowRightBold } from 'react-icons/pi'

const Hero = () => {
  const router = useRouter()

  return (
    <section className=" min-h-[calc(100vh-180px)] pb-[250px]">
      <Container>
        <div className="flex justify-center gap-20">
          <div className="flex flex-col gap-4 max-w-[700px] pt-[60px]">
            <Title className="text-3xl font-semibold">
              No Brasil, a falta de acesso e informação é a{' '}
              <span className="underline  decoration-primary">principal</span>{' '}
              causa de morte em gestantes
              <span className="text-primary">.</span>
            </Title>
            <Text className="text-xl ">
              No cenário atual, enfrentamos uma triste realidade: a falta de
              acessibilidade está ceifando a vida de milhões de gestantes a cada
              ano. Diante desse desafio, nasceu uma startup determinada a
              transformar esse cenário sombrio e proporcionar um futuro mais
              seguro para mães e bebês em potencial.
            </Text>

            <div className="mt-10 max-w-[350px]">
              <Button
                onClick={() => router.push('/register')}
                icon={PiArrowRightBold}
              >
                Criar conta
              </Button>
            </div>
          </div>
          <div className="flex relative justify-center items-center pr-20">
            <div className="relative overflow-hidden rounded-[69%_31%_70%_30%_/_30%_54%_46%_70%] w-[500px] h-[500px]">
              <Image
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/618923/pexels-photo-618923.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                fill={true}
              />
            </div>
            <div className="absolute -z-10 left-2 top-2 rounded-[69%_31%_70%_30%_/_30%_54%_46%_70%] w-[500px] h-[500px] bg-primary" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
