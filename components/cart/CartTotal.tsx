'use client'

import { useCart } from 'lib/atom-initializers/CartInit'
import Link from 'next/link';
import React from 'react'

const CartTotal = () => {
    const { cart } = useCart();

    return (
        <div className="max-w-lg w-full p-5">
            <div className='font-semibold flex justify-between items-center bg-primary/10 p-5'>
                <span>Subtotal</span>
                <span>{cart.data?.subtotal.formatted_with_symbol || '0'}</span>
            </div>

            <div className="mt-5">
                {
                    (cart.loading || !cart.data || cart.data.line_items.length <= 0) ?
                        <button disabled className='btn btn-primary btn-block' title="veiw cart button" >Checkout</button>
                        : <Link target="_blank" href={cart.data?.hosted_checkout_url || '#'} className='btn btn-primary btn-block' title="veiw cart button">Checkout</Link>
                }
            </div>

        </div>
    )
}

export default CartTotal