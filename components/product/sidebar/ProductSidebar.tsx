import React, { ReactNode, Suspense } from 'react'
import CategoriesList, { CategoryListLoadingSkeleton } from './CategoriesList'

export type ProductSidebarProps = {
    options?: {
        activeCategory?: string,
    }
}

const ProductSidebarContainer = ({
    title,
    children
}: { title: string, children?: ReactNode }) => {
    return (
        <div>
        <h3 className='capitalize font-bold'>{title}</h3>
        <div className="p-3">
            {children}
        </div>
    </div>
    )
}


const ProductSidebar = ({
    options
}: ProductSidebarProps) => {
    return (
        <div>
            <ProductSidebarContainer title='Categories'>
                <Suspense fallback={<CategoryListLoadingSkeleton/>}>
                    {/* @ts-expect-error */}
                    <CategoriesList activeCategory={options?.activeCategory}/>
                </Suspense>
            </ProductSidebarContainer>
        </div>
    )
}

export default ProductSidebar