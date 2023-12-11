
import ProductInfo from '@/components/product/ProductInfo';
import ProductsSlider from '@/components/product/ProductsSlider';
import Tab from '@/components/ui/Tab';
import commerce from 'lib/commerce'
import { Metadata } from 'next';
import React from 'react'
import { MetaParams } from 'types/MetaParams';



export async function generateMetadata({ params, searchParams }: MetaParams): Promise<Metadata> {
  const product = await commerce.products.retrieve(params.id, { type: 'permalink' });
  const c = {
    title: product ? product.name : '',
    description: product ? product.description : '',
    image: product ? product.image?.url : '',
  }
  return {
    title: c.title,
    description: c.description,
    twitter: {
      title: c.title,
      description: c.description,
      images: c.description,
    },
    openGraph: {
      title: c.title,
      description: c.description,
      images: c.image
    },

  };
}

const SingleProduct = async (props: { params: { id: string } }) => {
  const product = await commerce.products.retrieve(props.params.id, { type: 'permalink' });
  return (
    <div className='max-w-4xl px-5 mx-auto mt-10'>
      <ProductInfo product={product} />

      <div className="mx-auto max-w-2xl mt-10 p-5 border">
        <Tab
          tabItemClassname='tab-bordered'
          items={[
            {
              lable: 'Description',
              key: 'desc',
              content: <div className='prose' dangerouslySetInnerHTML={{ __html: product.description }}></div>
            }
          ]}
        ></Tab>
      </div>

      <div className='mt-10'>
      <ProductsSlider products={product.related_products||[]} />
      </div>
    </div>
  )
}

export default SingleProduct