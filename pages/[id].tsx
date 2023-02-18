
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CardSelected } from '../component/CardSelected'
import Contacts from '../component/Contacts'
import Home from '../component/Home'
import Menu from '../component/Menu'
import { game } from '../utils/game'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  async function navigate() {
    router.push({
      pathname: "/",

    }, undefined, { scroll: false });
  }

  React.useEffect(() => {
    const contenuto = document.querySelector("body");
    contenuto?.setAttribute("class", "overflow-hidden");
  }, [])
  React.useEffect(() => {
    {
 
  
      game();
      // main();
    }

  }, [])

  return <>
   <div className="root">
   <header className='header '>
        <div className="logo">
          <Link href="/"
            passHref={true}>
            <h2>D<span>.</span></h2>
          </Link>
        </div>
        <Menu/>
      </header>
      <div className='rooot'>
    <Home />

    <AnimatePresence>
      {id && <CardSelected id={id} key="CardSelected" />}
    </AnimatePresence>
    <Contacts/>
    </div>
    </div>
  </>
}

export default Post