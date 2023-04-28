import ProductSidebar from '@/components/product/sidebar/ProductSidebar'
import React, { ReactNode, Suspense } from 'react'
import Sitcky from "@/components/Sitcky";
import MobileSidebar from '@/components/product/sidebar/MobileSidebar';
import BreadeCrumb from '@/components/BreadeCrumb';

const ProductsLayout = ({
  children,
}: { children: ReactNode }) => {
  return (

    <>
    <BreadeCrumb/>
      <div className='container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 min-h-screen mt-10 '>
        <div className='hidden md:block'>
          <Sitcky className=''>
            <ProductSidebar />
          </Sitcky>

        </div>
        <div className="md:col-span-2 lg:col-span-3">
          {children}
        </div>
      </div>
      <MobileSidebar>
        <ProductSidebar />
      </MobileSidebar>
    </>
  )

}

export default ProductsLayout