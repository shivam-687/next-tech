import ProductGrid from '@/components/product/ProductGrid';
import commerce from 'lib/commerce'
import React, { Suspense } from 'react'

const ProductsPage =  async (props: {
  params: any,
  searchParams: {category_slug?: string}
}) => {
    const products = await commerce.products.list({category_slug: props.searchParams.category_slug});
    
  return (
    <>
    <div className='mx-auto mb-20'>
    <ProductGrid layout='3-col' products={products.data||[]}/>
    </div>
    </>
  )
}

export default ProductsPage  