import BreadeCrumb from '@/components/BreadeCrumb'
import React, { ReactNode, Suspense } from 'react'

const SingleProductsLayout = ({
    children,
}: { children: ReactNode }) => {
    return (
       <>
       <BreadeCrumb/>
       <div> { children }</div>
       </>
    )
}

export default SingleProductsLayout