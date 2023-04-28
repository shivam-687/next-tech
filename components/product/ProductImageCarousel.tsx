'use client'
import { Asset } from '@chec/commerce.js/types/asset'
import { nanoid } from 'nanoid';
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export type ProductImageCarouselProps = {
    assets: Asset[]
}

const ProductImageCarousel = ({
    assets = []
}: ProductImageCarouselProps) => {


    return (
        <div className='aspect-square'>
            <Carousel showThumbs={true} showArrows={true}>
                {
                    assets.map(asset => {
                        return (
                            <div key={nanoid()}>
                                <img className='aspect-square' src={asset.url} alt={`product image: ${asset.filename}`} />
                                {/* <p className="legend">Legend 1</p> */}
                            </div>
                        )
                        
                    })
                }
            </Carousel>
        </div>
    )
}

export default ProductImageCarousel