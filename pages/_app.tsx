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
import Aos from 'aos';
import { menu } from '../utils/menu';
import { preloader } from '../utils/preloader';
import { game } from '../utils/game';
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



  return <Provider store={store}>
    {/* <AnimatePresence exitBeforeEnter > */}
    <AnimateSharedLayout>
    <div className="glass"></div>
      <Component key={router.route} {...pageProps} />
    {/* </AnimatePresence> */}
    </AnimateSharedLayout>
    <Script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossOrigin="anonymous"
    ></Script>
    <Script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossOrigin="anonymous"
    ></Script>


    <Script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossOrigin="anonymous"
    ></Script>

    <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" />
    <Script></Script>
  </Provider>
}

export default MyApp
