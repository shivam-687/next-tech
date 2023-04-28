'use client'

import CartInit from 'lib/atom-initializers/CartInit'
import React, { PropsWithChildren } from 'react'
import CartSidebar from './cart/CartSidebar'

const DemoComp = (props: PropsWithChildren) => {
    return (
        <div>
            <CartInit/>
            {props.children}
            <CartSidebar/>
        </div>
    )
}

export default DemoComp