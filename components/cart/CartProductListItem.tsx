'use client'
import { LineItem } from '@chec/commerce.js/types/line-item'
import { useCartAtom } from 'lib/atom-initializers/CartInit'
import React from 'react'
import {FaTrash} from 'react-icons/fa'
import Skeleton from 'react-loading-skeleton'
import ProductQuantityInput from './ProductQuantityInput'

export type CartProductListItemProps = {
    lineItem: LineItem
}

export const CartProductListItemSkeleton = () => {
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <Skeleton count={1} width={50} height={50} />
                        </div>
                    </div>
                    <div>
                        <Skeleton width={100} count={1}/>
                    </div>
                </div>
            </td>
            <td>
                <Skeleton width={30} count={1}/>
            </td>
            <td>
                <Skeleton width={50} count={1}/>
            </td>
            <td>
                <Skeleton width={50} count={1}/>
            </td>
            <th>
                <Skeleton width={30} count={1}/>
            </th>
        </tr>
    )
}

const CartProductListItem = ({
    lineItem
}: CartProductListItemProps) => {
    

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={lineItem.image?.url} alt={`Cart Product Image: ${lineItem.name}`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold capitalize">{lineItem.name}</div>

                    </div>
                </div>
            </td>
            <td>
                <p className='text-green-700'>{lineItem.price.formatted_with_symbol}</p>
            </td>
            <td>
                {/* <input aria-label='quantiy' type="number" min={1} max={10} value={lineItem.quantity} /> */}
                <ProductQuantityInput lineItem={lineItem}/>
            </td>
            <td>
                <p className='text-green-700'>{lineItem.line_total.formatted_with_symbol}</p>
            </td>
            <th>
                <button type="button" title={`Delete product "${lineItem.name}" from cart`} className="btn btn-ghost btn-xs"><FaTrash/></button>
            </th>
        </tr>
    )
}



export default CartProductListItem