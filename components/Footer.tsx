import React from 'react'
import { siteConfig } from '@/config/site-config'
import { AiOutlineEnvironment, AiOutlineMail } from 'react-icons/ai'
import SocialButton, { SocialButtonProps } from './SocialButton'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import NewsLetter from './NewsLetter'

const socialLinks: SocialButtonProps[] = [
  {
    siteName: 'facebook',
    link: '#'
  },
  {
    siteName: 'dribbble',
    link: '#'
  },
  {
    siteName: 'twitter',
    link: '#'
  },
  {
    siteName: 'linkedin',
    link: '#'
  },
]

const FooterLink = ({
  href,
  children
}: { href: string, children?: any }) => {
  return <Link href={href} className='hover:underline hover:underline-offset-2 block text-gray-400 hover:text-gray-600'>{children}</Link>
}




const Footer = () => {
  return (
    <div className='bg-gray-100 py-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-5 md:px-10 text-gray-500">
        <div className='space-y-4'>
          <p className='text-2xl md:text-3xl text-base-content'>{siteConfig.phone}</p>
          <p className='flex items-center'><AiOutlineEnvironment className='mr-3' /> {`${siteConfig.addresses[0].add}, ${siteConfig.addresses[0].city}`} </p>
          <p className='flex items-center'><AiOutlineMail className='mr-3' /> {siteConfig.email[0]} </p>
          <div className='flex items-center gap-3'>
            {
              socialLinks.map(l => {
                return <SocialButton {...l} key={nanoid()} />
              })
            }
          </div>
        </div>
        <div className='space-y-4'>
          <FooterLink href="#">Terms Of Use</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Sipping</FooterLink>
        </div>
        <div className='space-y-4'>
          <FooterLink href="/shop">Shop</FooterLink>
          <FooterLink href="/cart">Shopping Cart</FooterLink>
          <FooterLink href="#">Track My Order</FooterLink>
        </div>
        <div className='space-y-4'>
          <p className='text-2xl md:text-3xl text-base-content'>Subscribe Newsletter</p>
          <p className=''>Let stay updated on the latest news and offers</p>

          <div className="mt-5">
          <NewsLetter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer