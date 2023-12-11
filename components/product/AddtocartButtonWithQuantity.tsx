'use client'
import React, { useState } from 'react'
import QuantityInput from '../QuantityInput';
import AddToCartButton from '../cart/AddToCartButton';
import { Product } from '@chec/commerce.js/types/product';
import { twMerge } from 'tailwind-merge';

export type AddtocartButtonWithQuantityProps = {
    product: Product,
    className?: string
}

const AddtocartButtonWithQuantity = ({
    product,
    className
}: AddtocartButtonWithQuantityProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>();
  return (
    <div className={twMerge('space-y-3', className)}>
        <QuantityInput onValueChange={setQuantity} value={quantity} loading={loading}/>
        <br></br>
        <AddToCartButton className='btn-block' product={product} onLoading={setLoading}/>
    </div>
  )
}

export default AddtocartButtonWithQuantity