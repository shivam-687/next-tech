'use client'

import { useCartAtom, useCartDrawer } from 'lib/atom-initializers/CartInit'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Drawer from 'react-modern-drawer'
import CartSidebarProductItem from './CartSidebarProductItem'
import { nanoid } from 'nanoid'
import Sitcky from '../Sitcky'
import Link from 'next/link'

const CartSidebar = () => {
    const { open, closeDrawer } = useCartDrawer()
    const [cart] = useCartAtom();
    return (
        <Drawer
            open={open || false}
            onClose={closeDrawer}
            direction='right'
            className='relative'
            style={{backgroundColor: 'transparent'}}
            size={350}

        >
            <div className='h-full overflow-y-auto relative bg-base-100 backdrop-blur pb-36 scrollbar-none'>
                
                    <Sitcky className='z-20'>
                        <div className='flex items-center justify-between bg-base-100 p-3 bg-base-100/20 backdrop-blur border-b border-b-base-content/30'>
                            <p className='text-xl md:text-2xl'>Shopping Cart</p>
                            <button className='btn btn-outline btn-sm' title="close drawer" onClick={closeDrawer} ><FaArrowRight /></button>
                        </div>
                    </Sitcky>
         

                <div className="mt-10 h-full space-y-3 p-3">
                    {
                        cart.data && cart.data.line_items.map(item => {
                            return <CartSidebarProductItem key={nanoid()} lineItem={item} />
                        })
                    }
                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full p-3 space-y-2 backdrop-blur-md ">
                <Link href={'/cart'} className='btn btn-outline btn-block' title="veiw cart button">View Cart</Link>
                {
                    (cart.loading || !cart.data || cart.data.line_items.length <= 0) ?
                    <button disabled className='btn btn-primary btn-block' title="veiw cart button" >Checkout</button> 
                    : <Link target="_blank" href={cart.data?.hosted_checkout_url || '#'} className='btn btn-primary btn-block' title="veiw cart button">Checkout</Link>
                }
            </div>
        </Drawer>
    )
}

export default CartSidebar