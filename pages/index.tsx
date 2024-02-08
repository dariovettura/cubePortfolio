import type { NextPage } from 'next'
import React from 'react'
import { motion,} from "framer-motion"
import About from '../component/About';
import Contacts from '../component/Contacts';
import Home from '../component/Home';





interface Props {
  posts?: any[],
}

const Casa: NextPage<Props> = ({ posts }) => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ velocity: 50 }} id="card-list-container" >
      <Home />
      <About />
      <Contacts />
    </motion.div>
  )

}


export default Casa
