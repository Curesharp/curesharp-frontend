import Title from '@/components/ui/Title'
import React from 'react'

const EmptySection = ({ title, children }) => {
  return (
    <section>
      <header className="mb-6">
        <Title className="text-2xl">{title}</Title>
      </header>
      {children}
    </section>
  )
}

export default EmptySection
