import type { NextPage } from 'next'
import React, { useEffect } from 'react';
import { motion,} from "framer-motion"
import About from '../component/About';
import Contacts from '../component/Contacts';
import Home from '../component/Home';
import Axios from 'axios';




interface Props {
  posts?: any[],
}

const Casa: NextPage<Props> = ({ posts }) => {

  useEffect(() => {
    Axios.get('https://beergarden-menu-1.onrender.com/api/categories')
      .then((response) => {
        console.log('Risposta API categorie:', response.data);
      })
      .catch((error) => {
        console.error('Errore nella chiamata API categorie:', error);
      });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ velocity: 50 }} id="card-list-container" >
      <Home />
      <About />
      <Contacts />
    </motion.div>
  )

}


export default Casa
