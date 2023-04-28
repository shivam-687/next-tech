import { ProductCollection } from '@chec/commerce.js/features/products'
import { Product } from '@chec/commerce.js/types/product'
import { nanoid } from 'nanoid'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import ProductCard, { ProductCardSkeleton } from './ProductCard'

export type ProductGridLayout = '3-col'|'4-col';

export type ProductGridProps = {
    products: Product[],
    loading?: boolean,
    layout?: ProductGridLayout
}



const ProductGrid = ({
    products,
    loading,
    layout='4-col'
}: ProductGridProps) => {

    const layoutClasses: {[key in ProductGridLayout]: string} = {
        '3-col': 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
        '4-col': 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
    }

    if (loading) {
        return <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4 w-full gap-5'>
            {
                Array(4).fill(null).map(() => {
                    return <ProductCardSkeleton key={nanoid()}/>
                })
            }
        </div>
    }
    return (
        <div className={`grid  justify-center mx-auto max-w-[1500px] gap-5 ${layoutClasses[layout]}`}>
            {
                products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}

export default ProductGrid