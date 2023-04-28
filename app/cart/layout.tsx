import React, { PropsWithChildren } from 'react'

const CartPageLayout = ({children}: PropsWithChildren) => {
  return (
    <div className="container mx-auto px-5 min-h-screen">
        <header className='text-center text-4xl md:text-6xl py-20'>Shopping Cart</header>

        <div className='mb-20'>
            {children}
        </div>
      </div>
  )
}

export default CartPageLayout