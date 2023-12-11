import { Product } from '@chec/commerce.js/types/product'
import React from 'react'
import ProductImageCarousel from './ProductImageCarousel'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import AddtocartButtonWithQuantity from './AddtocartButtonWithQuantity'

export type ProductInfoProps = {
  product: Product
}

const ProductInfo = ({
  product
}: ProductInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className='flex justify-end'>
        <div className=' aspect-square max-w-xl w-full'>
          <ProductImageCarousel assets={product.assets} />
        </div>
      </div>
      <div className='flex justify-start'>
        <div className="w-full">
          <h1 className='text-2xl text-gray-600'>{product.name}</h1>
          <p className='text-primary text-xl mt-5'>{product.price.formatted_with_symbol}</p>
          <div className='mt-3 space-y-3'>
            <div className='flex gap-3'>
              <p>Categories: </p>
              <div className='flex flex-wrap gap-2'>
                {
                  product.categories.map(cat => {
                    return <Link className=' text-gray-400 hover:text-gray-600 hover:underline' key={nanoid()} href={{ pathname: '/shop', query: { category_slug: cat.slug } }}>{cat.name}</Link>
                  })
                }
              </div>
            </div>
            <div className='space-y-1'>
              <p>Quantity: </p>
              <AddtocartButtonWithQuantity product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo