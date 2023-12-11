'use client'

import { LineItem } from '@chec/commerce.js/types/line-item'
import { useCartAtom } from 'lib/atom-initializers/CartInit'
import commerce from 'lib/commerce'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import _debounce  from 'lodash.debounce';
import { Cart } from '@chec/commerce.js/types/cart'
import QuantityInput from '../QuantityInput'

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
            setLoading(false);
            toast(`qunatity changed successfully!`)
        } catch (error) {
            toast(`qunatity changed failed!`)
            setLoading(false);
        }
    }

    const onChangeHandler = (value: number) =>{
        if(value <= 0) toast.error('Quantity must be at least 1');
        void changeQuantity(value)
        // console.log("valid")
    }



  return (
    <QuantityInput loading={loading} size='sm' onValueChange={onChangeHandler} value={loacle} />
  )
}

export default ProductQuantityInput