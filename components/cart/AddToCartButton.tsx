'use client'
import { Cart } from '@chec/commerce.js/types/cart';
import { Product } from '@chec/commerce.js/types/product'
import { useCartAtom } from 'lib/atom-initializers/CartInit';
import commerce from 'lib/commerce'

import React, { PropsWithChildren, ReactElement, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';

export type AddToCartButtonProps = {
    product: Product,
    quantity?: number,
    children?: React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    onLoading?: (loading: boolean) => void,
    className?: string
}

const AddToCartButton = ({
    children,
    product,
    quantity = 1,
    onLoading,
    className
}: AddToCartButtonProps) => {
    const [loading, _setLoading] = useState(false)
    const [cart, setCart] = useCartAtom()

    const setLoading = (isLoading: boolean) => {
        _setLoading(isLoading);
        onLoading?.(isLoading);
    }   

    const addToCart = async() => {
        if (!product) return;
        setLoading(true)
        try {
           const cart = await commerce.cart.add(product.id, quantity) as any as Cart;
            console.log("CART", cart);
            setCart({data: cart});
            toast(`${product.name} is now in your cart. Your subtotal is now ${cart.subtotal.formatted_with_symbol}.`)
            setLoading(false);
        } catch (error) {
            toast.error("Please try again.");
            console.log("Error:: ", error)
            setLoading(false)
        }
    }

return (
    <>
        {
            children ? React.cloneElement(children, {
                onClick: addToCart
            }) :
                <button className={twMerge('btn btn-primary', className)} disabled={loading} type='button' title="Add to cart button" onClick={addToCart}>  Add To Cart</button>
        }
    </>
)
}

export default AddToCartButton