import Link from 'next/link'
import React, { ReactNode } from 'react'
import { AiOutlineDribbble, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLink, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest, FaTumblrSquare } from 'react-icons/fa'
import { SocialSites } from 'types/SocialSites'

const socialNameIconMap: {[key in SocialSites]: ReactNode} = {
    'facebook': <AiOutlineFacebook/>,
    'twitter': <AiOutlineTwitter/>,
    'instagram': <AiOutlineInstagram/>,
    'linkedin': <AiOutlineLinkedin/>,
    'pinterest': <FaPinterest/>,
    'tumbler': <FaTumblrSquare/>,
    'dribbble': <AiOutlineDribbble/>,
    'other': <AiOutlineLink/>
}

export type SocialButtonProps = {
    siteName?: SocialSites,
    link: string
}

const SocialButton = ({
    siteName='other',
    link
}: SocialButtonProps) => {
  return (
    <Link href={link} className='btn btn-ghost btn-square btn-sm'><span className='text-xl'>{socialNameIconMap[siteName]}</span></Link>
  )
}

export default SocialButton