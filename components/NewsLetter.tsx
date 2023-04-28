'use client'

import React from 'react'

const NewsLetter = () => {
  return (
    <form className='form '>
        <div className='flex'>
        <input title="Email input of Newsletter" className='input w-full' placeholder='Enter your email' />
        <div className="flex justify-end"><button type='submit' className='btn btn-primary'>Subscribe</button></div>
        </div>
    </form>
  )
}

export default NewsLetter