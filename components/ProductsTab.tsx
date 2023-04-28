'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import useSWR from 'swr'
import Tab, { TabItem } from './ui/Tab'
import commerce from 'lib/commerce'
import { nanoid } from 'nanoid'
import ProductGrid from './product/ProductGrid'
import Link from 'next/link'



const Products = ({ category }: { category?: string }) => {
    const { data: productsData, isLoading: productLoading } = useSWR(() => `/api/products?category_slug=${category}`, () => {
        return commerce.products.list({
            limit: 8,
            category_slug: category
        })
    });

    // useEffect(() => {
    //     console.log({category})
    // }, [category])

    return (
        <>
            <ProductGrid products={productsData?.data || []} loading={productLoading} />
        </>
    );
}

const tabs: TabItem[] = [
    {
        lable: 'All',
        // content: <Products/>,
        key: 'all'
    },
]


const ProductsTab = () => {
    const [activeTab, setActiveTab] = useState<TabItem | undefined>(tabs[0]);
    const [currentCategory, setCurrentCategory] = useState<string | undefined>()
    const {
        data: categoriesData,
        isLoading: isCategoryLoading
    } = useSWR(['api/categories'], () => {
        return commerce.categories.list()
    })

    const onTabChange = (tabItem: TabItem) => {
        if (tabItem.key === 'all') return setCurrentCategory(undefined);
        setCurrentCategory(tabItem.key);
        console.log({ tabItem })
    }

    return (
        <div className='w-full'>
            <Tab tabPosition='right' items={[...tabs, ...(categoriesData?.data.map(value => ({ lable: value.name, key: value.slug })) || [])]} title='Trending Products' onTabClick={onTabChange} loading={isCategoryLoading} />
            <div className="mt-10">
                <Products category={currentCategory} />
            </div>

            <div className="my-10 flex justify-center">
                <Link href="/shop" className='btn btn-outline' >View All</Link>
            </div>
        </div>
    )
}

export default ProductsTab