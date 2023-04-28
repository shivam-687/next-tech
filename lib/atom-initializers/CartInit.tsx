'use client'
import { Cart } from '@chec/commerce.js/types/cart'
import { useAtom } from 'jotai'
import { CartAtom } from 'lib/atoms/CartAtom'
import commerce from 'lib/commerce'
import React, { PropsWithChildren, useEffect } from 'react'

const CartInit = ({ children }: PropsWithChildren) => {
    const [cart, setCart] = useAtom(CartAtom);
    useEffect(() => {
        void getCart();
    }, [])

    const getCart = async () => {
        try {
            setCart({...cart, loading: true})
            const currentCart = await commerce.cart.retrieve();
            setCart({
                ...cart,
                data: currentCart,
                loading: false
            });
            // console.log("Cart init successfully!", cart);
        } catch (err) {
            console.log("Error:: CartInit: ", err);
            setCart({...cart, loading: false})
        }
    };

    return (
        <div>
        {children}
        </div>
    )
}

export default CartInit

export const useCartAtom = () => useAtom(CartAtom);
export const useCartDrawer = () => {
    const [cart, setCart] = useCartAtom();

    const toggleDrawer = () => {
        setCart({...cart, open: !open})
    }

    const openDrawer = () => {
        setCart({...cart, open: true})
    }
    const closeDrawer = () => {
        setCart({...cart, open: false})
    }

    return {
        toggleDrawer,
        openDrawer,
        closeDrawer,
        open: cart.open
    }
    
}

export const useCart = () => {
    const [cart, setCart] = useCartAtom();
    
    const reset = async() => {
        setCart({...cart, loading: true})
        try {
            const res = await commerce.cart.empty() as any as Cart;
            setCart({
                ...cart,
                data: res,
                loading: false
            });
            return res;
            
        } catch (error) {
            setCart({...cart, loading: false})
            throw error;
        }
    }

    const setCartLoading = (loading: boolean) => {
        setCart({...cart, loading: loading})
    }

    return {
        reset, 
        cart,
        setCartLoading,
        setCart
    }
}