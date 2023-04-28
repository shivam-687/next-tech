'use client'
import { Cart } from '@chec/commerce.js/types/cart';
import { Product } from '@chec/commerce.js/types/product'
import { useCartAtom } from 'lib/atom-initializers/CartInit';
import commerce from 'lib/commerce'

import React, { PropsWithChildren, ReactElement, useState } from 'react'
import { toast } from 'react-toastify';

export type AddToCartButtonProps = {
    product?: Product,
    quantity?: number,
    children?: React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>
}

const AddToCartButton = ({
    children,
    product,
    quantity = 1
}: AddToCartButtonProps) => {
    const [loading, setLaoding] = useState(false)
    const [cart, setCart] = useCartAtom()
    const addToCart = async() => {
        if (!product) return;
        setLaoding(true)
        try {
           const cart = await commerce.cart.add(product.id, quantity) as any as Cart;
            console.log("CART", cart);
            setCart({data: cart});
            toast(`${product.name} is now in your cart. Your subtotal is now ${cart.subtotal.formatted_with_symbol}.`)
            setLaoding(false);
        } catch (error) {
            toast.error("Please try again.");
            console.log("Error:: ", error)
            setLaoding(false)
        }
    }

return (
    <>
        {
            children ? React.cloneElement(children, {
                onClick: addToCart
            }) :
                <button className='btn btn-primary' disabled={loading} type='button' title="Add to cart button" onClick={addToCart}>Add To Cart</button>
        }
    </>
)
}

export default AddToCartButton