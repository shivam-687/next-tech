import commerce from 'lib/commerce'
import { nanoid } from 'nanoid';
import Link from 'next/link';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import CategoryListItem from './CategoryListItem';

export type CategoriesListProps = {
  activeCategory?: string
}

export const CategoryListLoadingSkeleton = () => {
  return (
    <div className='p-3 space-y-2'>
      {
        Array(4).fill(null).map(() => {
          return <div key={nanoid()}>
            <Skeleton width={100}/>
          </div>
        })
      }
    </div>
  )
}


const CategoriesList = async (props: CategoriesListProps) => {
  const categoriesData = await commerce.categories.list();

  return (
    <>
      {
        !categoriesData ?
          <p>No Categories</p> :
          categoriesData.data.length <= 0 ?
            <p>No Categories</p> :
            <div className='flex flex-col gap-3'>
              {
                categoriesData.data.map(category => {
                  return <CategoryListItem category={category} key={nanoid()}/>
                })
              }
            </div>
      }
    </>
  )
}

export default CategoriesList