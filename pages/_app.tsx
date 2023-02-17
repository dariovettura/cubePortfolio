import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.scss'
import '../styles/css/cube.css'
import '../styles/css/onepage.css'
import '../styles/css/preloader_cube.css'
import '../styles/css/preloader-style.css'
import '../styles/css/style-menu.css'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import type { AppProps } from 'next/app';

import { Helmet } from "react-helmet";
import { Provider } from "react-redux"
import { store } from '../store/index'

import Head from 'next/head';
import { useEffect } from 'react';
import Aos from 'aos';
import { menu } from '../utils/menu';
import { preloader } from '../utils/preloader';



function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    Aos.init();
    menu();
    preloader();
  }, [])


  return <Provider store={store}>

    <Head>

      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      ></script>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
      {/* <script src="https://www.dariovettura.com/js/menu.js"></script> */}
      <script src="https://www.dariovettura.com/js/main.js"></script>
      <script src="https://www.dariovettura.com/js/game.js"></script>
      {/* <script src="https://www.dariovettura.com/js/preloader.js"></script> */}


    </Head>


    <AnimatePresence exitBeforeEnter >
      <Component key={router.route} {...pageProps} />

    </AnimatePresence>

  </Provider>
}

export default MyApp
