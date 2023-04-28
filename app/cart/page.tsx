import CartProductList from '@/components/cart/CartProductList';
import CartResetButton from '@/components/cart/CartResetButton';
import CartTotal from '@/components/cart/CartTotal';
import Link from 'next/link';
import React, { Suspense } from 'react'
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

const CartPage = async () => {

  return (
    <>
      <CartProductList />
      <div className='py-10 flex justify-between items-center'>
        <Link href={'/shop'} className='btn btn-primary btn-sm ' title="Back to shop" ><FaArrowLeft className='mr-2' /> Back To Shop</Link>
        <CartResetButton />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 justify-items-center">
        <div></div>
        <div></div>
        <div className=' max-w-lg w-full'><CartTotal /></div>
      </div>
    </>
  )
}

export default CartPage