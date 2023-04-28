import React from 'react'
import NavLink, { NavlinkItem } from './NavLink'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import Logo from './Logo'
import WishlistButton from './wishlist/WishlistButton'
import CartButton from './cart/CartButton'
import MobileNavDrawer from './MobileNavDrawer'


const links: NavlinkItem[] = [
    {
        lable: "Home",
        link: '/',
    },
    {
        lable: "Shop",
        link: '/shop',
    },
    // {
    //     lable: "About",
    //     link: '/about',
    // },
    {
        lable: "Contact",
        link: '/contact',

    },

]



const SiteNav = () => {
    return (
        <>
            <div className='flex items-center px-5 md:px-10 gap-10 py-3 bg-base-100/30 backdrop-blur border-b'>
                <div className="flex-grow-0">
                    <Link href="/"><Logo /></Link>
                </div>
                <div className="flex-grow flex items-center justify-center ">
                    <div className='hidden md:flex gap-5'>
                        {
                            links.map(link => {
                                return <NavLink key={nanoid()} {...link} />
                            })
                        }
                    </div>
                </div>
                <div className="flex-grow-0">
                    <div className="flex gap-3">
                        {/* <WishlistButton/> */}
                        <CartButton />
                    </div>
                </div>
            </div>
            <MobileNavDrawer>
                <div className="flex flex-col gap-5 mt-10">
                    {
                        links.map(link => {
                            return <NavLink key={nanoid()} {...link} />
                        })
                    }
                </div>
            </MobileNavDrawer>
        </>
    )
}

export default SiteNav