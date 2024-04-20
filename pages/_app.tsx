import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import '../styles/css/cube.css'
import '../styles/css/onepage.css'
import '../styles/css/preloader_cube.css'
import '../styles/css/preloader-style.css'
import '../styles/css/style-menu.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import type { AppProps } from 'next/app';
import { Provider } from "react-redux"
import { store } from '../store/index'
import { useEffect, useRef } from 'react';

import { menu } from '../utils/menu';

import Link from 'next/link';
import Menu from '../component/Menu';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Wall from '../component/Wall';




function MyApp({ Component, pageProps, router }: AppProps) {

  const load = useRef(null)
  useEffect(() => {
    {
      // Aos.init();
      // menu();
      // preloader();
      // game();
    
    }

  }, [])



  return <Provider store={store}>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
    </Head>
    <NextSeo
      title='Portfolio'
      titleTemplate='Dario Vettura | %s'
      defaultTitle="Dario Vettura"
      description="WEB DEV"
      canonical="https://dariovettura.vercel.app/"
      openGraph={{
        type: 'website',
        url: "https://dariovettura.vercel.app/",
        title: "Dario Vettura",
        description: "WEB DEV",
        images: [
          {
            width: 400,
            height: 400,
            url: "https://dariovettura.vercel.app/vett7.png",
            alt: "Dario Vettura",
          },
        ],
      }}

    />
    <AnimatePresence exitBeforeEnter >
      <div className="glass glassVisible"></div>
      <div className="sub-glass"></div>
      <div className="background"></div>
      {/* <Preloader /> */}
      <Wall/>
      <header className='header'>
        <div className="logo">
          <Link href="/"
            passHref={true}>
            <h2>D<span>.</span></h2>
          </Link>
        </div>
        {/* <Menu /> */}
      </header>
      <div className="root">
        <div className='rooot'>
         
          <Component key={router.route} {...pageProps} />
        </div>
      </div>
    </AnimatePresence>
  

  </Provider>
}

export default MyApp
