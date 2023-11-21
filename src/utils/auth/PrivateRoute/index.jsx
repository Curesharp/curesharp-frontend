'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useUserStore from '@/stores/user'

const PrivateRoute = ({ children }) => {
  const router = useRouter()
  const { user } = useUserStore()

  console.log(user)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  return user ? children : null
}

export default PrivateRoute
