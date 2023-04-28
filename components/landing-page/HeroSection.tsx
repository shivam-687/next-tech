import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    const heroImage = '/assets/images/dji-avata-trans.png'
    return (
        <div
            className='min-h-[700px] flex bg-gray-100 items-center px-5 justify-center w-full'
        >
            <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className='pt-20'>
                    <div className="max-w-xl lg:max-w-2xl text-center lg:text-left mx-auto">
                        <h1 className='text-xl md:text-4xl '><span className='font-bold text-primary'>NextTech</span> <br></br> Your One-Stop Shop <br></br> for Cutting-Edge Technology</h1>
                        <p className='mt-3 text-xs md:text-base'>Find the latest gadgets and electronics at NextTech. Shop laptops, smartphones, drones, accessories, and more. Enjoy fast shipping, competitive prices, and expert customer service. Upgrade your tech game today!</p>
                        <div className="flex mt-10 lg:justify-start justify-center">
                            <Link href="/shop" className='btn btn-primary '>Shop Now {' >'}</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="aspect-square bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection