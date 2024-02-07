
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CardSelected } from '../component/CardSelected'
import Contacts from '../component/Contacts'
import Home from '../component/Home'
import Menu from '../component/Menu'
import { game } from '../utils/game'
import Image from 'next/image'
import { works } from "../constants/work"
import Preloader from '../component/Preloader'
import About from '../component/About'

const Post = () => {
  const router = useRouter()
  const { id }: any = router.query || "1"

  async function navigate() {
    router.push({
      pathname: "/",

    }, undefined, { scroll: false });
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
    window.onpopstate = () => {
      navigate()
    };
    console.log('ok')
  }, [])


  const item = works.find(item => item.id === parseInt(id));

  console.log({ id })
  return <div>
  <motion.div key={`page-${id}`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ velocity: 50 }} className="post-container">
    <motion.div>
      <motion.div
        className="card-image-container" >
        <img className="card-image"
          placeholder="blur"
          src={item?.anteprima} alt="" />
        <div className="img-overlay"></div>
      </motion.div>
      <span className="category">
        {item?.category}
      </span>
      <h2 className="title">{item?.title}</h2>
    </motion.div>
    <motion.div className="content-container" animate >
      <p>{item?.content}</p>
      <a href={item?.linkContent}> {item?.linkContent}</a>
    </motion.div>
    <motion.div className="content-container" animate > {item?.content}</motion.div>

   
    <Home />
    <About />
    <Contacts />
  </motion.div>
  </div>

}

export default Post