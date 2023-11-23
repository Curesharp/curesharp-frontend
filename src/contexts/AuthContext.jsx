'use client'

import { api } from '@/lib/api'
import useUser from '@/stores/user'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const { setUser } = useUser()
  const router = useRouter()

  // submit button loading indicator
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('curesharp.accessToken')

    const getUser = async () => {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      const userResponse = await api.get('/token/user')

      const user = userResponse.data

      setUser(user)

      console.log(user)
    }

    if (token) {
      getUser()
    }
  }, [])

  // user login
  const userLogin = async (formData) => {
    setIsLoading(true)

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
      if (error instanceof AxiosError) {
        if (error.response) {
          toast.error(error.response.data.erro)
        } else {
          toast.error('Algo deu errado, tente novamente mais tarde!')
        }
      }

      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoading, userLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }

export const useAuth = () => useContext(AuthContext)
