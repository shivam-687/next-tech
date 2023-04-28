import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/landing-page/HeroSection'
import commerce from 'lib/commerce'
import { nanoid } from 'nanoid'
import FeaturedProductGrid from '@/components/product/FeaturedProductGrid'
import ProductsTab from '@/components/ProductsTab'

const inter = Inter({ subsets: ['latin'] })

export async function getProductsList(){
  const products = await commerce.products.list();
  return products;
}

const Home = async () => {
  const p = await getProductsList();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 md:px-10">
      
        <HeroSection/>
        {/* @ts-expect-error */}
        <FeaturedProductGrid/>

        <div className="mt-20 w-full">
        <ProductsTab/>
        </div>
    </main>
  )
}

export default Home;
