import Image from 'next/image'
import React from 'react'
import PrimaryBrand from '@/assets/brand/curesharp_primary_logo.svg'
import WhiteBrand from '@/assets/brand/curesharp_white_logo.svg'

const Brand = ({ variant }) => {
  let BrandPath

  switch (variant) {
    case 'white':
      BrandPath = WhiteBrand
      break
    default:
      BrandPath = PrimaryBrand
      break
  }

  return <Image className="w-full" src={BrandPath} />
}

export default Brand
