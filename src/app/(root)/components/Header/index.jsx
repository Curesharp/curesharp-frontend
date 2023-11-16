import Container from '@/components/layout/Container'
import Brand from '@/components/shared/Brand'
import Button from '@/components/ui/Button'
import React from 'react'
import HeaderNavigation from './components/HeaderNavigation'
import { RootHeaderNavigation } from '@/constants/RootHeaderNavigation'

const Header = () => {
  return (
    <header className="w-full h-[90px]">
      <Container className="flex items-center justify-between py-4">
        <div className="w-[220px]">
          <Brand />
        </div>

        <div>
          <HeaderNavigation menu={RootHeaderNavigation} />
        </div>

        <div>
          <Button>Começar</Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
