'use client'

import { Category } from '@chec/commerce.js/types/category'
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'
import { nanoid } from 'nanoid'

const CategoryListItem = ({category}: {category: Category}) => {
    const query = useSearchParams();

  return (
    <Link href={{pathname:'/shop',query: {'category_slug':category.slug}}} title={category.name} className={` hover:text-primary transition-all duration-200 ${query.get('category_slug') && query.get('category_slug') === category.slug ? 'text-primary':'text-gray-500'}`} key={nanoid()}>{`${category.name} (${category.products})`}</Link>
  )
}

export default CategoryListItem