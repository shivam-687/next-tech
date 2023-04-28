// 'use client'

// import { Cart } from "@chec/commerce.js/types/cart";
// import commerce from "lib/commerce";
// import React, { PropsWithChildren, useContext, useEffect, useReducer } from "react";

// export type CartState = {
//     data?: Cart,
//     isLoading?: boolean,
// }
// export type CartContextParams = {
//     setCart: (state: CartState)=>Promise<void>,
//     reset: () => Promise<void>
//     startLoading: () => Promise<void>
//     endLoading: () => Promise<void>
// } & CartState;
// export enum CartActionTypes {
//     'SET_CART',
//     'LOADING_START',
//     'LOADING_END',
//     'RESET'
// }
// export type CartAction = {
//     type: CartActionTypes,
//     payload: CartState
// }

// const initialState: CartState = {
//     data: undefined,
//     isLoading: false
// }

// export const CartContext = React.createContext<CartContextParams>({} as CartContextParams);


// const reducer = (state: CartState, action: CartAction) => {
//     const { type, payload } = action;
//     switch (type) {
//         case CartActionTypes.SET_CART:
//             return {
//                 ...state,
//                 ...payload
//             };
//         case CartActionTypes.LOADING_START:
//             return {
//                 ...state,
//                 isLoading: true
//             };
//         case CartActionTypes.LOADING_END:
//             return {
//                 ...state,
//                 isLoading: false
//             };

//         case CartActionTypes.RESET:
//             return initialState;
//         default:
//             return state;
//     }
// }

//  const CartProvider = ({ children}: PropsWithChildren) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     useEffect(() => {
//         void getCart();
//         // console.log("Cart Loaded");
//     }, [])


//     const getCart = async () => {
//         try {
//             dispatch({ type: CartActionTypes.SET_CART, payload: { ...state, isLoading: true } })
//             const cart = await commerce.cart.retrieve();
//             dispatch({ type: CartActionTypes.SET_CART, payload: { data: cart, isLoading: false } });
//         } catch (err) {
//             dispatch({ type: CartActionTypes.SET_CART, payload: { ...state, isLoading: false } });
//         }
//     };

//     const reset = async () => dispatch({ type: CartActionTypes.RESET, payload: initialState });

//     const setCart = async (payload: CartState) => dispatch({ type: CartActionTypes.SET_CART, payload });

//     const startLoading = async ()=>dispatch({ type: CartActionTypes.LOADING_START, payload: {} });
//     const endLoading = async ()=>dispatch({ type: CartActionTypes.LOADING_END, payload: {} });

//     return (
//         <CartContext.Provider value={{...state, setCart, reset, startLoading, endLoading}}>
//             {children}
//         </CartContext.Provider>
//     )

// }

// export default CartProvider;

// export const useCart = () => useContext(CartContext);