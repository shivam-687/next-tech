'use client'
import React from 'react'

export type RatingSize = 'xs'|'sm'|'md'|'lg';
const RatingSizeClassMap: {[key in RatingSize]: string} = {
    'xs': 'rating-xs',
    'sm': 'rating-sm',
    'md': 'rating-md',
    'lg': 'rating-lg'
}

export type RatingProps = {
    size?: RatingSize,
    value?: number,

}

const Rating = () => {

    const starCount = 5;

    return (
        <div className="rating">
            {/* <input aria-label=''  type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> */}
        </div>
    )
}

export default Rating

function separateDecimalAndWholeNumber(ratingCount : number) : [number, number] {
    let wholeNumber : number = Math.trunc(ratingCount);
    let decimalNumber : number = ratingCount - wholeNumber;
    return [wholeNumber, decimalNumber];
}