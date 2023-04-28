'use client'
import React from 'react'
import StickyBox, { StickyBoxCompProps } from 'react-sticky-box'
import { twMerge } from 'tailwind-merge'

const Sitcky = (props: StickyBoxCompProps) => {
  return (
    <StickyBox {...props} className={twMerge('z-20', props.className)}>{props.children}</StickyBox>
  )
}

export default Sitcky