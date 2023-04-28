import ProductGrid from '@/components/product/ProductGrid';
import commerce from 'lib/commerce'
import { Metadata } from 'next';
import React from 'react'

const metaContent = {
  title: 'NextTech Shop - Your One-Stop Destination for the Latest Tech Gadgets',
  description: `Discover the latest and greatest tech gadgets and electronics at NextTech Shop. Browse our wide selection of smartphones, laptops, gaming consoles, home appliances, and more. Shop with confidence knowing you'll find the best deals and exceptional customer service.`,
  image: '/assets/page/shop-page.jpeg'
}

export const metadata: Metadata = {
  title: metaContent.title,
  description: metaContent.description,
  twitter: {
    title: metaContent.title,
    description: metaContent.description,
    images: metaContent.image
  },
  openGraph: {
    title: metaContent.title,
    description: metaContent.description,
    images: metaContent.image
  },

};

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