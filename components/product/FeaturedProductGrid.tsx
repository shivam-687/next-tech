

import commerce, { fetchProducts } from 'lib/commerce'
import React from 'react'
import { nanoid } from 'nanoid';
import FeaturedProduct from './FeaturedProduct';

async function getFeaturedProducts(){
    console.log("Fecthing featured products..." )
    await fetchProducts();
    const feturedProducts = await commerce.products.list();
    return feturedProducts;
}

const classess = [
    "lg:col-span-2 lg:row-span-2",
    "lg:col-start-3 lg:col-end-5",
    "lg:col-start-3 lg:row-start-2",
    "lg:col-start-4 lg:row-start-2"
]

const FeaturedProductGrid = async () => {
    const products = await getFeaturedProducts();
  return (
    <div className="grid p-5 bg-gray-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 w-full gap-5 mx-auto aspect-auto md:aspect-square lg:aspect-video">
    
        {
            products.data.map((p, index) => {
                return <FeaturedProduct key={nanoid()} product={p} className={`aspect-square md:aspect-auto ${classess[index]||'hidden'} bg-white`} />
            })
        }
    </div>
  )
}

export default FeaturedProductGrid