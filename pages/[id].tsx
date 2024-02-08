
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Contacts from '../component/Contacts'
import Home from '../component/Home'
import { game } from '../utils/game'
import Image from 'next/image'
import { works } from "../constants/work"
import About from '../component/About'
import { menu } from '../utils/menu'
import { preloader } from '../utils/preloader'

const Post = () => {
  const router = useRouter()
  const { id }: any = router.query || "1"

  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)
  useEffect(() => {
    {
      // Aos.init();
      menu();
      preloader();
      game();

    }

  }, [])

  const item = works.find(item => item.id === parseInt(id));

  console.log({ id })
  return <motion.div key={`page-${id}`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ velocity: 50 }} className="post-container">
    <div className="preview-container">
      <motion.div
        className="image-container" >
        <Image className="card-image"
          layout='fill'
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          placeholder="blur"
          src={item?.anteprima || "/"} alt="" />
      </motion.div>
    </div>
    <span className="category">
      {item?.category}
    </span>
    <h2 className="title">{item?.title}</h2>

    <motion.div className="content-container" animate >
      <p dangerouslySetInnerHTML={{ __html: item?.content }} />
      <a href={item?.linkContent}> {item?.linkContent}</a>
    </motion.div>



    <Home />
    <About />
    <Contacts />
  </motion.div>


}

export default Post