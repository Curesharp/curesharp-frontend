import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import { useAuth } from '@/contexts/AuthContext'
import { api } from '@/lib/api.js'
import useRegistration from '@/stores/register'
import { useState } from 'react'
import { PiEye, PiEyeSlash } from 'react-icons/pi'
import { toast } from 'react-toastify'
import AuthCard from '../../../components/AuthCard'

const PasswordSection = () => {
  const { userLogin } = useAuth()
  const { registerData, setRegisterData, setRegisterStep, registerStep } =
    useRegistration()

  // handle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  const [confirmPassword, setConfirmPassword] = useState('')

  // submit button loading indicator
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false)

  // create user
  const createUser = () => {
    setIsSubmitButtonLoading(true)

    const formData = {
      email: registerData.email,
      nome: registerData.nome + ` ` + registerData.sobrenome,
      senha: registerData.senha,
    }

    api
      .post('/cadastro', formData)
      .then(() => {
        toast.success('Sua conta foi criada com sucesso!')

        userLogin({ email: registerData.email, senha: registerData.senha })

        setIsSubmitButtonLoading(false)
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error('Já existe uma conta com este e-mail!')
        }

        if (error.response.status === 500) {
          toast.error('Ocorreu um erro interno, tente novamente mais tarde!')
        }

        setIsSubmitButtonLoading(false)
      })
  }

  return (
    <AuthCard>
      <div className="flex flex-col gap-2">
        <Title className="text-2xl">
          Hora de colocar uma senha forte
          <span className="text-primary">!</span>
        </Title>
        <Text className="text-base">
          A senha deve conter no mínimo 8 caracteres, letras e números.
        </Text>
      </div>

      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <Input
              onChange={(e) => handleInputChange(e)}
              value={registerData.senha}
              className="min-w-[342px]"
              type={isPasswordVisible ? 'text' : 'password'}
              name="senha"
              label="Senha"
            />
            <div
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="transition-all active:scale-[0.96] absolute text-neutral-500 hover:bg-neutral-100 hover:text-primary  right-3 cursor-pointer p-2 rounded-full"
            >
              {isPasswordVisible ? (
                <PiEyeSlash size={20} />
              ) : (
                <PiEye size={20} />
              )}
            </div>
          </div>
          <div className="relative flex items-center">
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="min-w-[342px]"
              type={isPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              label="Confirme a senha"
            />
            <div
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="transition-all active:scale-[0.96] absolute text-neutral-500 hover:bg-neutral-100 hover:text-primary  right-3 cursor-pointer p-2 rounded-full"
            >
              {isPasswordVisible ? (
                <PiEyeSlash size={20} />
              ) : (
                <PiEye size={20} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            isLoading={isSubmitButtonLoading}
            onClick={(e) => {
              e.preventDefault()
              createUser()
            }}
            disabled={
              confirmPassword.length === 0 ||
              !passwordRegex.test(registerData.senha) ||
              registerData.senha !== confirmPassword
            }
          >
            Criar conta
          </Button>
          <Button
            onClick={() => setRegisterStep(registerStep - 1)}
            variant="outline"
          >
            Voltar
          </Button>
        </div>
      </form>
    </AuthCard>
  )
}

export default PasswordSection
