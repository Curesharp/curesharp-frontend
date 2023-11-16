import Image from 'next/image'
import React from 'react'
import PrimaryBrand from '@/assets/brand/curesharp_primary_logo.svg'

const Brand = () => {
  return <Image className="w-full" src={PrimaryBrand} />
}

export default Brand
