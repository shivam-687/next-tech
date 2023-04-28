import React from 'react'

export type ContactCardProps = {
    icon: React.ReactNode,
    title: string,
    children?: any
}

const ContactCard = ({
    icon, 
    title,
    children
}: ContactCardProps) => {
  return (
    <div className='p-3 md:p-5 space-y-3 border border-base-content/20 max-w-xs w-full' >
        <div className='text-primary text-3xl'>{icon}</div>
        <h2>{title}</h2>
        <div className='text-gray-500'>
            {children}
        </div>
    </div>

  )
}

export default ContactCard