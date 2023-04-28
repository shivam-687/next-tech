'use client'

import React, { useEffect } from 'react'
import {FaCartPlus} from 'react-icons/fa'
import Badge from '../ui/Badge'
import { useCartAtom, useCartDrawer } from 'lib/atom-initializers/CartInit'

const CartButton = () => {
  const [cart] = useCartAtom();
  const {openDrawer} = useCartDrawer();


  return (
    <Badge loading={cart.loading} value={cart.data?.total_items||0}><button onClick={openDrawer} title='cart button' type="button" className='btn btn-square btn-outline' ><FaCartPlus className='text-xl'/></button></Badge>
  )
}

export default CartButton