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
import { useCallback, useEffect, useRef } from 'react';
import Aos from 'aos';
import { menu } from '../utils/menu';
import { preloader } from '../utils/preloader';
import { game } from '../utils/game';
import { main } from '../utils/main';
import Script from 'next/script';



function MyApp({ Component, pageProps, router }: AppProps) {

  const load = useRef(null)
  useEffect(() => {
{  
   Aos.init();
  menu();
  preloader();
  game();
  // main();
  }

  }, [])

  const onload = useCallback(refs => {
    if (refs !== null) {
    
    }
  }, [])


  return <Provider store={store}>

    <Head>
      {/* <script src="https://www.dariovettura.com/js/menu.js"></script> */}
      {/* <script src="https://www.dariovettura.com/js/main.js"></script>
      <script src="https://www.dariovettura.com/js/game.js"></script> */}
      {/* <script src="https://www.dariovettura.com/js/preloader.js"></script> */}
    </Head>


    <AnimatePresence exitBeforeEnter >
      <Component key={router.route} {...pageProps} />
      <div ref={load}>
    


      </div>
    </AnimatePresence>

  </Provider>
}

export default MyApp
