import React from 'react'

import { Product } from '@chec/commerce.js/types/product'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export type FeaturedProductProps = {
  product: Product,
  shopButtonEnabled?: boolean,
  className?: string
}

const FeaturedProduct = ({
  product,
  className,
  shopButtonEnabled=false
}: FeaturedProductProps) => {
  return (
    <div className={`overflow-hidden relative grid group place-items-center bg-center w-full text-base md:first:text-xl h-full bg-no-repeat ${className}`} >
      <div className='bg-contain bg-center transition-all group-hover:scale-110 bg-no-repeat aspect-square max-h-[60%] h-full ' style={{ backgroundImage: `url(${product.image?.url})` }}></div>
      <div className="absolute w-full h-full left-0 top-0  p-5 md:p-10 flex flex-col">
        <div className="max-w-xs  flex-grow-0">
          <Link href={`/product/${product.permalink}`} className='hover:underline underline-offset-1 transition-all'><h2 className='capitalize'>{product.name}</h2></Link>
          <p className='text-primary'>{product.price.formatted_with_symbol}</p>
        </div>
        <div className="h-max w-full  flex-grow flex flex-col justify-end items-start">
          {
            shopButtonEnabled && <Link href="#" className='btn btn-link'>Shop Now <FaArrowRight /></Link>
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct