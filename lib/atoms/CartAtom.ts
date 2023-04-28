import { Cart } from "@chec/commerce.js/types/cart";
import {atom} from 'jotai';

export type CartState = {
    data?: Cart,
    loading?: boolean,
    open?: boolean
}


export const CartAtom = atom<CartState>({});
