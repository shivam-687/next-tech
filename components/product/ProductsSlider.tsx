'use client'

import React from 'react'
import { Product } from '@chec/commerce.js/types/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { nanoid } from 'nanoid';

export type ProductsSliderProps = {
    products: Product[]
    setting?: any,
}

const defaultSliderSetting: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    verticalSwiping: false
}

const ProductsSlider = ({
    products,
    setting
}: ProductsSliderProps) => {

    const currentSetting = { ...defaultSliderSetting, ...setting };

    // console.log({currentSetting})

    return (
        <div className="py-10">
            <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                products.map(pro => {
                    return <SwiperSlide key={nanoid()}>
                        <ProductCard product={pro}/>
                    </SwiperSlide>
                })
            }
        </Swiper>
        </div>
    )
}

export default ProductsSlider