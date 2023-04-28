import { Product } from '@chec/commerce.js/types/product'
import React from 'react'
import ProductImageCarousel from './ProductImageCarousel'
import AddToCartButton from '../cart/AddToCartButton'

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
          <h1 className='text-xl text-gray-600'>{product.name}</h1>
          <p className='text-primary text-lg'>{product.price.formatted_with_symbol}</p>

          <div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo