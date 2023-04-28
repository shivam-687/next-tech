import React from 'react'

export type SectionTitleProps={
    title: string,
    subTitle?: string
}

const SectionTitle = ({
    title,
    subTitle
}: SectionTitleProps) => {
  return (
    <div>
        <h2 className='text-3xl'>{title}</h2>

        {
            subTitle && <p>{subTitle}</p>
        }
    </div>
  )
}

export default SectionTitle