import { ProductCardSkeleton } from '@/components/product/ProductCard'
import { nanoid } from 'nanoid'
import React from 'react'

const ProductPageLoading = () => {
  return (
    <div className='grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3'>
        {
            Array(3).fill(null).map(() => {
                return <ProductCardSkeleton key={nanoid()}/>
            })
        }
    </div>
  )
}

export default ProductPageLoading