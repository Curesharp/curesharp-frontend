'use client'

import AuthCard from '@/app/(auth)/components/AuthCard'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import { useAuth } from '@/contexts/AuthContext'
import useUser from '@/stores/user'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginSection = () => {
  const router = useRouter()
  const { userLogin } = useAuth()

  const [loginData, setLoginData] = useState({
    email: '',
    senha: '',
  })

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  return (
    <AuthCard className="min-w-[450px]">
      <div>
        <Title className="text-2xl">
          Entrar na conta<span className="text-primary">.</span>
        </Title>
        <Text className="text-base">Insira seus dados para entrar</Text>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-4">
          <Input
            onChange={(e) => handleInputChange(e)}
            value={loginData?.email}
            type="text"
            name="email"
            label="E-mail"
          />
          <Input
            onChange={(e) => handleInputChange(e)}
            value={loginData?.senha}
            type="password"
            name="senha"
            label="Senha"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button
            disabled={!loginData.email || !loginData.senha}
            onClick={(e) => {
              e.preventDefault()

              userLogin(loginData)
            }}
          >
            Entrar
          </Button>
          <Button
            onClick={() => {
              router.replace('/register')
            }}
            variant="outline"
          >
            Ainda não tenho uma conta
          </Button>
        </div>
      </form>
    </AuthCard>
  )
}

export default LoginSection
