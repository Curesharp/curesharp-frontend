import Title from '@/components/ui/Title'
import React from 'react'

const Section = ({ title, header, children }) => {
  return (
    <section className="p-6 w-full bg-white rounded shadow-md">
      <header className="mb-2 flex items-center justify-between">
        <Title className="text-2xl">{title}</Title>

        {header && header}
      </header>
      {children}
    </section>
  )
}

export default Section
