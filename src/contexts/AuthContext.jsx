'use client'

import { api } from '@/lib/api'
import useUser from '@/stores/user'
import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const { setUser } = useUser()
  const router = useRouter()

  // submit button loading indicator
  const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('curesharp.accessToken')

    const getUser = async () => {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      const userResponse = await api.get('/token/user', {
        headers: { Authorization: `Bearer ${token}` },
      })

      const { user } = userResponse.data

      setUser(user)

      console.log(user)
    }

    if (token) {
      getUser()
    }
  }, [])

  // user login
  const userLogin = async (formData) => {
    console.log('hasdhuasdhu')

    setIsSubmitButtonLoading(true)

    try {
      const loginResponse = await api.post('/login', formData)

      const { token } = loginResponse.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      localStorage.setItem('curesharp.accessToken', token)

      const userResponse = await api.get('/token/user')

      const user = userResponse.data

      console.log(user)

      router.replace('/boarding')

      setUser(user)
    } catch (error) {
      if (error.response) {
        // O servidor respondeu com um status de erro
        console.error('Erro na resposta do servidor:', error.response.data)
      } else if (error.request) {
        // A requisição foi feita, mas não houve resposta
        console.error('Sem resposta do servidor:', error.request)
      } else {
        // Algo aconteceu durante a configuração da requisição que causou o erro
        console.error(
          'Erro durante a configuração da requisição:',
          error.message,
        )
      }

      setUser(null)
    } finally {
      setIsSubmitButtonLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isSubmitButtonLoading, userLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }

export const useAuth = () => useContext(AuthContext)
