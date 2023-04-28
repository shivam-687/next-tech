'use client'

import { LineItem } from '@chec/commerce.js/types/line-item'
import { useCartAtom } from 'lib/atom-initializers/CartInit'
import commerce from 'lib/commerce'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import _debounce  from 'lodash.debounce';
import { Cart } from '@chec/commerce.js/types/cart'

export type ProductQuantityInputProps = {
    lineItem: LineItem
}

const ProductQuantityInput = ({
    lineItem
}:ProductQuantityInputProps) => {
    const [loacle, setLocal] = useState(lineItem.quantity);
    const [cart, setCart] = useCartAtom();
    const [loading, setLoading] = useState(false);

    // console.log(parseInt(''))

    const changeQuantity = async (quantity: number) => {
        setLoading(true)
        try {
            const res = await commerce.cart.update(lineItem.id, {quantity}) as any as Cart;
            setCart({...cart, data: res, loading: false})
            // console.log({res});
            setLoading(false);
            toast(`qunatity changed successfully!`)
        } catch (error) {
            toast(`qunatity changed failed!`)
            setLoading(false);
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>|undefined) =>{
        if(!e)  return;
        setLocal(parseInt(e.currentTarget.value));
        const numVal = parseInt(e.currentTarget.value);
        if( Number.isNaN(numVal))return;
        if(numVal <= 0) toast.error('Quantity must be at least 1');
        void changeQuantity(parseInt(e.currentTarget.value))
        console.log("valid")
    }


  return (
    <input disabled={loading} type='number' className='input' aria-label='product quantity' value={loacle} onChange={onChangeHandler} min={1} max={20} />
  )
}

export default ProductQuantityInput