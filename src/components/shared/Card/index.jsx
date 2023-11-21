import Text from '@/components/ui/Text'
import Title from '@/components/ui/Title'
import React from 'react'

const Card = ({ image, title, content }) => {
  return (
    <div className="flex-1 bg-white rounded overflow-hidden shadow">
      <div
        className="min-h-[200px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="rounded-t-lg flex flex-col p-3 gap-2">
        <Title>{title}</Title>
        <Text>{content}</Text>
      </div>
    </div>
  )
}

export default Card
