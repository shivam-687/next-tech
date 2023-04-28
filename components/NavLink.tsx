'use client'
import React, { PropsWithChildren } from 'react'
import {nanoid} from 'nanoid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export type NavlinkItem = {
    lable: string,
    link?: string,
    childs?: NavlinkItem[],
}

const NavlinkItemWithChild = ({ navLink }: { navLink: NavlinkItem }) => {
    return (
        <span className="dropdown">
            <NavLinkLable href={navLink.link}>{navLink.lable}</NavLinkLable>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {
                    navLink.childs && navLink.childs.map(child => {
                        return <li key={nanoid()}><NavLink {...child}/></li>
                    })
                }
            </ul>
        </span>
    )
}

const NavLinkLable = (props: PropsWithChildren<{href?:string}>) => {
    return (
        <>
        {
            props.href ?
            // <Link tabIndex={0} className={`capitalize text-gray-600 hover:text-primary transition-all duration-200 `} href={props.href}>{props.children}</Link>
            <label tabIndex={0} className={`capitalize text-gray-600 hover:text-primary transition-all duration-200`}>{props.children}</label>
            :
            <label tabIndex={0} className={`capitalize text-gray-600 hover:text-primary transition-all duration-200 `}>{props.children}</label>
        }
        </>
    )
}

const NavLink = (navLink: NavlinkItem) => {
    const pathname = usePathname();

    function checkRoute(currentRoute: string, href: string): boolean {
        // console.log({currentRoute, href})
        return (
            currentRoute === href ||
          currentRoute.startsWith(`${href}/`)
        );
      }
    return (
        <>
            
            <Link href={navLink.link||'#'} className={`btn ${checkRoute(pathname, navLink.link||'#') ? 'btn-outline':'btn-ghost'} w-full md:w-auto`}>{navLink.lable}</Link>
        </>
    )
}

export default NavLink