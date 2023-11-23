import React from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'

const ContactForm = () => {
  return (
    <form className="py-4 mt-4 border-t border-primary-50 flex flex-col gap-5 font-inter">
      <div>
        <Input
          className="bg-white border-none"
          type="nome"
          name="nome"
          label="Nome"
        />
      </div>

      <div>
        <Input
          className="bg-white border-none"
          type="email"
          name="email"
          label="Email"
        />
      </div>

      <div>
        <label htmlFor="message">
          <Title className="text-white">Mensagem</Title>
        </label>
        <textarea
          className="h-32 p-3 rounded"
          id="message"
          placeholder="Escreva sua mensagem aqui"
        ></textarea>
      </div>

      <Button className="font-bold" variant="neutral">
        Enviar
      </Button>
    </form>
  )
}

export default ContactForm
