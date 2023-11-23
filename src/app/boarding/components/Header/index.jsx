'use client'

import Container from '@/components/layout/Container'
import Brand from '@/components/shared/Brand'
import Button from '@/components/ui/Button'
import React from 'react'
import HeaderNavigation from './components/HeaderNavigation'
import { RootHeaderNavigation } from '@/constants/RootHeaderNavigation'
import { useRouter } from 'next/navigation'
import Profile from './components/Profile'

const Header = () => {
  const router = useRouter()

  return (
    <header className="absolute w-full h-[90px] z-20">
      <Container className="flex items-center justify-between py-4">
        <div className="w-[220px]">
          <Brand variant="white" />
        </div>

        {/* <div>
          <HeaderNavigation menu={RootHeaderNavigation} />
        </div> */}

        <div>
          <Profile />
        </div>
      </Container>
    </header>
  )
}

export default Header
