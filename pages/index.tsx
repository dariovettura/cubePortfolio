import type { GetStaticPropsResult, NextPage } from 'next'
import React, { useEffect } from 'react'
import AOS from 'aos';
import { motion, useScroll } from "framer-motion"


import { menu } from '../utils/menu';
import { preloader } from '../utils/preloader';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Slider from "react-slick";
import Menu from '../component/Menu';
import Preloader from '../component/Preloader';
import About from '../component/About';
import Contacts from '../component/Contacts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { cartSelector, setData } from '../store/cart.slice'
import Home from '../component/Home';
import Aos from 'aos';
import { game } from '../utils/game';



interface Props {

  posts?: any[],

}

const Casa: NextPage<Props> = ({ posts }) => {
  const { scrollYProgress } = useScroll();


  useEffect(() => {
    {
      Aos.init();
      menu();
      preloader();
      game();
      // main();
    }

  }, [])




  return (<>

    <div className="root">
      <Preloader />
      <header className='header noVisible'>
        <div className="logo">
          <Link href="/"
            passHref={true}>
            <h2>D<span>.</span></h2>
          </Link>
        </div>
        <Menu />
      </header>
      <div className='rooot noVisible'>
        <Home />
        <About />
        <Contacts />
      </div>
    </div>
  </>)

}


export default Casa
