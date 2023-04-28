'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { nanoid } from 'nanoid';
import Link from 'next/link';



function getBreadcrumbs(pathname: string): { label: string; href: string }[] {
    const pathArray = pathname.split('/').filter((x) => x);
    const crumbs = [{ label: 'Home', href: '/' }];
    let href = '/';
    pathArray.forEach((pathItem) => {
      href += `${pathItem}/`;
      crumbs.push({ label: pathItem, href });
    });
    return crumbs;
  }

  
const BreadeCrumb = () => {
    const router = usePathname();

    // console.log({ router })
    return (
        <div className='w-full bg-gray-200 '>
            <div className="container mx-auto px-5">
                <div className="text-sm breadcrumbs">
                    <ul>
                        {
                            getBreadcrumbs(router).map(val => {
                                return <li key={nanoid()}><Link href={val.href}>{val.label}</Link></li>
                            })
                        }
                        {/* <li><a>Home</a></li>
                        <li><a>Documents</a></li>
                        <li>Add Document</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreadeCrumb