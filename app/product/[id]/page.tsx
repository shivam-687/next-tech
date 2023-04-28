import ProductImageCarousel from '@/components/product/ProductImageCarousel';
import ProductInfo from '@/components/product/ProductInfo';
import commerce from 'lib/commerce'
import React from 'react'

const SingleProduct = async(props: {params: {id: string}}) => {
  const product = await commerce.products.retrieve(props.params.id, { type: 'permalink' });
  return (
    <div className='container px-5 mx-auto mt-10'>
      <ProductInfo product={product}/>
    </div>
  )
}

export default SingleProduct