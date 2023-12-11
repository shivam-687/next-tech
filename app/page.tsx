import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/landing-page/HeroSection'
import commerce from 'lib/commerce'
import { nanoid } from 'nanoid'
import FeaturedProductGrid from '@/components/product/FeaturedProductGrid'
import ProductsTab from '@/components/ProductsTab'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const metaContent = {
  title: 'NextTech - Your Destination for the Latest Tech Innovations',
  description: `Discover the latest and greatest tech innovations at NextTech. Shop our extensive selection of cutting-edge electronics, gadgets, and accessories. Stay ahead of the game with NextTech.`,
  image: '/assets/page/shop-page.jpeg'
}

export const metadata: Metadata = {
  title: metaContent.title,
  description: metaContent.description,
  metadataBase: new URL('http://localhost:3000'),
  twitter: {
    title: metaContent.title,
    description: metaContent.description,
    images: metaContent.image
  },
  openGraph: {
    title: metaContent.title,
    description: metaContent.description,
    images: metaContent.image
  },

}


const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 md:px-10">
      
        <HeroSection/>
        {/* @ts-expect-error */}
        <FeaturedProductGrid/>

        <div className="mt-20 w-full">
        {/* <ProductsTab/> */}
        </div>
    </main>
  )
}

export default Home;
