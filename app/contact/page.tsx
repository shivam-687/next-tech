import ContactCard from '@/components/contact/ContactCard'
import { siteConfig } from '@/config/site-config'
import { nanoid } from 'nanoid'
import { Metadata } from 'next'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'

const metaContent = {
    title: 'Contact Us for Support, Feedback, or Inquiries | NextTech',
    description: `Reach out to our friendly and knowledgeable support team at NextTech for any questions, feedback, or concerns you may have. Fill out our contact form or give us a call to get in touch. We're here to help!`,
}

export const metadata: Metadata = {
   title: metaContent.title,
   description: metaContent.description,

   twitter: {
    title: metaContent.title,
    description: metaContent.description
   },
   openGraph: {
    title: metaContent.title,
    description: metaContent.description,
    emails: siteConfig.email,
    phoneNumbers: siteConfig.phone
   }
}

const ContactPage = () => {
    const contents = [
        {
            title: 'Phone Number',
            icon: <AiOutlinePhone/>,
            children: <p>{siteConfig.phone}</p>
        },
        {
            title: 'Email',
            icon: <AiOutlineMail/>,
            children: <>{
                siteConfig.email.map(mail => {
                    return <p key={nanoid()}>{mail}</p>
                })
            }</>
        },
        {
            title: 'Address',
            icon: <AiOutlineEnvironment/>,
            children: <>{
                siteConfig.addresses.map(addr => {
                    return <div key={nanoid()}>
                        <p>{addr.add}</p>
                        <p>{addr.city}, {addr.state}</p>
                        <p>{addr.country}, ({addr.zip})</p>
                    </div>
                })
            }</>
        },

    ]
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center'>
        {
            contents.map(content => {
                return <ContactCard key={nanoid()} {...content} />
            })
        }
    </div>
    </>
  )
}

export default ContactPage