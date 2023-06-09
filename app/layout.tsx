import Footer from '@/components/Footer'
import SiteNav from '../components/SiteNav'
import './globals.css'

import 'react-loading-skeleton/dist/skeleton.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Toast from '@/components/ui/Toast';
// import CartProvider from 'lib/providers/CartProvider';
import DemoProvider from 'lib/providers/DemoContext';
import CartInit from 'lib/atom-initializers/CartInit';
import DemoComp from '@/components/DemoComp';

import 'react-modern-drawer/dist/index.css'
import Sitcky from '@/components/Sitcky';
import PageProgressBar from '@/components/PageProgressBar';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" data-theme={'bumblebee'}>
      <body >
      <PageProgressBar/>
        {/* <CartInit/> */}
        <DemoComp>
          <Sitcky className='z-50'>
            <SiteNav />
          </Sitcky>
          {children}
          <Footer />
          <Toast />
        </DemoComp>


      </body>
    </html>
  )
}

export default RootLayout;
