import Container from '@/components/layout/Container'
import React from 'react'
import BackwardArrow from './BackwardArrow'
import Brand from '@/components/shared/Brand'

const Header = () => {
  return (
    <header className='w-full h-[90px]'>
        <Container className='flex items-center justify-between'>
            <div>
                <BackwardArrow />
            </div>

            <div className='w-[220px]'>
                <Brand />
            </div>

            <div className='invisible'>
                <BackwardArrow />
            </div>
        </Container>
    </header>
  )
}

export default Header