import { Cart } from '@chec/commerce.js/types/cart'
import { LineItem } from '@chec/commerce.js/types/line-item'
import { useCartAtom } from 'lib/atom-initializers/CartInit'
import commerce from 'lib/commerce'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import  ClipLoader from 'react-spinners/ClipLoader'


export type RemoveProductFromCartButtonProps = {
  lineItem: LineItem
}

const RemoveProductFromCartButton = ({
  lineItem
}: RemoveProductFromCartButtonProps) => {
  const [cart, setCart] = useCartAtom();
  const [loading, setLoading] = useState(false);

  const remove = async() => {
    if(!cart.data) return;
    setLoading(true);
    setCart({...cart, loading: true});
    try {
      const res = await commerce.cart.remove(lineItem.id) as any as Cart;
      setCart({
        ...cart,
        data: res,
        loading: false
      });
      setLoading(false)
    } catch (error) {
      toast("Failed in remove item");
      setCart({...cart, loading: false});
      setLoading(false);
    }
  }
  return (
    <button  title='Remove product' type="button" className='btn btn-sm btn-ghost ' onClick={remove}>
      {
        loading ? <ClipLoader size={16}/> : <FaTrash/>
      }
    </button>
  )
}

export default RemoveProductFromCartButton