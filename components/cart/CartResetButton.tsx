'use client'

import { useCart } from 'lib/atom-initializers/CartInit'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CartResetButton = () => {
    const {cart, reset} = useCart();
    const isButtunDisabled = (!cart || !cart.data || cart.data.line_items.length <= 0 || cart.loading);
  return (
    <button disabled={isButtunDisabled} onClick={reset} className='btn btn-outline btn-sm ' title="Back to shop" > <FaTrash className='mr-2'/> Clear All</button>
  )
}

export default CartResetButton