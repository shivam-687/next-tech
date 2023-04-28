import Image from 'next/image'
import React from 'react'
// import {} from '../config/site-config'

const Logo = () => {
    const logo = '/assets/logo.png'
  return (
    <Image src={logo} alt={''} width={50} height={50} />
  )
}

export default Logo