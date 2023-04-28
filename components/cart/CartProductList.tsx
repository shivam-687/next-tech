'use client'
import { LineItem } from '@chec/commerce.js/types/line-item'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import CartProductListItem, { CartProductListItemSkeleton } from './CartProductListItem'
import { nanoid } from 'nanoid'
import { useCartAtom } from 'lib/atom-initializers/CartInit'


 const ItemListLoading = () => {
    return (
        <>
            {
                Array(3).fill(null).map((() => {
                    return <CartProductListItemSkeleton key={nanoid()} />
                }))
            }
        </>
    )
}

const CartProductList = () => {

    const [cart] = useCartAtom();
    return (
        <div className='overflow-x-auto'>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cart.loading && <CartProductListItemSkeleton/>
                    }
                    {
                        !cart.loading && cart.data && cart.data.line_items.map(lt => {
                            return <CartProductListItem lineItem={lt} key={nanoid()} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CartProductList