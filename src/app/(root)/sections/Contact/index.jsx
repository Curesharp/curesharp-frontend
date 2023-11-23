import Container from '@/components/layout/Container'
import React from 'react'
import ContactForm from './ContactForm'

import Title from '@/components/ui/Title'

const Contact = () => {
  return (
    <section className="bg-primary border-y border-primary-400 py-8 w-full min-h-[300px]">
      <Container>
        <div className="p-4 max-w-3xl mx-auto">
          <Title className="text-3xl font-bold text-white">Contate-nos</Title>

          <Title className="text-white">
            Por favor preencha o formulário abaixo
          </Title>

          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default Contact
