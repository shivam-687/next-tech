import { Product } from '@chec/commerce.js/types/product'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import AddToCartButton from '../cart/AddToCartButton'

export type ProductCardProps = {
    product: Product
}

export const ProductCardSkeleton = () => {
    return (
        <div key={nanoid()} className='aspect-card w-full'>
            <Skeleton containerClassName='' width={'100%'} height={'100%'} count={1} />
        </div>
    )
}

const ProductCard = ({
    product
}: ProductCardProps) => {
    return (
        <div className='group hover:-translate-y-3 hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col relative pb-10'>
            <div className="aspect-card overflow-hidden  flex items-center relative">
                <div className=" w-full h-2/3 bg-center  transition-all duration-200 bg-no-repeat bg-contain bg-white" style={{ backgroundImage: `url(${product.image?.url})` }}></div>
            </div>

            <div className="p-5 flex-grow bg-gray-100">
                <div className="tooltip" data-tip={product.name}>
                    <Link href={`/product/${product.permalink}`} className='block'><h3 className='capitalize  line-clamp-2 text-left hover:underline hover:underline-offset-2'>{product.name}</h3></Link>
                </div>
                <div>
                    <Link href={`/product/${product.permalink}`} className='text-primary'>{product.price.formatted_with_symbol}</Link>
                </div>
            </div>

            <div className="absolute left-0 bottom-0 w-full ">
                <AddToCartButton className='btn-block' product={product} />
            </div>
        </div>
    )
}

export default ProductCard