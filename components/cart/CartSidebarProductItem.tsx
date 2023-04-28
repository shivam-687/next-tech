import { LineItem } from '@chec/commerce.js/types/line-item'
import React from 'react'
import RemoveProductFromCartButton from './RemoveProductFromCartButton'
import Link from 'next/link'

export type CartSidebarProductItemProps = {
    lineItem: LineItem
}

const CartSidebarProductItem = ({
    lineItem
}: CartSidebarProductItemProps) => {
    return (
        <div className='flex gap-3'>
            <div className='flex-grow-0'>
                <div className='aspect-square relative overflow-hidden max-w-[80px]'>
                    <img src={lineItem.image?.url} alt={`Product image: ${lineItem.name}`} className='max-w-full' />
                </div>
            </div>
            <div className='flex-grow'>
                <Link href={`/product/${lineItem.permalink}`} className='block'><p className='capitalize line-clamp-2 text-left hover:underline hover:underline-offset-2'>{lineItem.name}</p></Link>
                <p className='text-xs'>{lineItem.quantity} X <span className='text-green-500'>{lineItem.price.formatted_with_symbol}</span></p>
            </div>
            <div className='flex-grow-0'>
                <RemoveProductFromCartButton lineItem={lineItem} />
            </div>
        </div>
    )
}

export default CartSidebarProductItem