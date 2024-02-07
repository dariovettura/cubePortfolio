import type { GetStaticPropsResult, NextPage } from 'next'
import React, { useEffect } from 'react'
import { motion, useScroll } from "framer-motion"
import { menu } from '../utils/menu';
import { preloader } from '../utils/preloader';
import About from '../component/About';
import Contacts from '../component/Contacts';
import Home from '../component/Home';

import { game } from '../utils/game';



interface Props {

  posts?: any[],

}

const Casa: NextPage<Props> = ({ posts }) => {
  const { scrollYProgress } = useScroll();


  



  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ velocity: 50 }} id="card-list-container" >
      <Home />
      <About />
      <Contacts />
    </motion.div>
  )

}


export default Casa
