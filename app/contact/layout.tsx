import React, { PropsWithChildren } from 'react'

const ContactPageLayout = ({children}: PropsWithChildren) => {
  return (
    <div className="container mx-auto px-5 min-h-screen ">
        <header className='text-center   py-20 space-y-5 max-w-lg mx-auto'>
            <h1 className='text-4xl md:text-6xl'>Contact Us</h1>
            <p className='leading-relaxed text-gray-500'>Reach out to our friendly and knowledgeable support team at NextTech for any questions, feedback, or concerns you may have. Fill out our contact form or give us a call to get in touch. We are here to help!</p>
        </header>

        <div className='mb-20'>
            {children}
        </div>
      </div>
  )
}

export default ContactPageLayout