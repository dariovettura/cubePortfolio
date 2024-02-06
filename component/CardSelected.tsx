import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';
import { InView, useInView } from "react-intersection-observer";
import Link from 'next/link'
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";
import Video from "./Video";
import Home, { Card } from "./Home";
import {works} from "../constants/work"
import Image from "next/image";

interface Props {
  id?: any,
  isSelected?: boolean,
  history?: {
    push: (route: string) => void;
  };
}


export const CardSelected: React.FC<Props> = ({ id, isSelected = true, history }) => {

  // const [item,setItem] = React.useState(data.find(item => item.id === parseInt(id)))
  const item = works.find(item => item.id === parseInt(id));
  const [bottom, inViewBottom] = useInView({
    threshold: 1,
  })
  const [top, inViewTop] = useInView({
    threshold: 1,
  })


  const router = useRouter();

  function swipeUpTodismiss() {
    if (inViewBottom) {
      console.log("inview")
      router.push({ pathname: "/home" }, undefined, { scroll: false })
    }
  }
  function swipeBottomTodismiss() {
    if (inViewTop) {
      console.log("inview")
      router.push({ pathname: "/home" }, undefined, { scroll: false })
    }
  }

  const handlers = useSwipeable({
    onSwipedUp: () => swipeUpTodismiss(),
    onSwipedDown: () => swipeBottomTodismiss(),

    // preventDefaultTouchmoveEvent: true,
    // trackMouse: true
  });
  const checkSwipeToDismiss = () => {
    router.push({ pathname: "/home" }, undefined, { scroll: false })
  }

  async function navigate() {
    router.push({
      pathname: "/home",

    }, undefined, { scroll: false });
  }

  React.useEffect(() => {
    if (!item)
      navigate()

  }, [])

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


  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
       
      </motion.div> */}
      {/* <div style={{ height: "100vh", width: "100vw", position: "fixed", backgroundColor: "rgb(0,0,0,.7)", top: 0, zIndex: 10 }}>
        <div style={{ height: "100vh", width: "100vw", position: "fixed", backgroundColor: "rgb(0,0,0,.7)", top: 0, zIndex: 11 }} ></div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link href="/home" scroll={false}>
          <a></a>
        </Link>
      </motion.div>
      <div  {...handlers} className="card-content-container open">
        {/* <div ref={top}></div> */}
        <motion.div
          // drag="y"
          // dragConstraints={{ top: 10, bottom: 10 }}
          // onDragEnd={
          //   () => checkSwipeToDismiss()
          // }
          className="card-content" layoutId={`card-container-${item?.id}`}>
            <div className="close-card-btn-container">
              <span className="close-card-btn" onClick={checkSwipeToDismiss}>x</span>
            </div>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${item?.id}`}
          >
            <img  placeholder="blur"
				 className="card-image" src={item?.anteprima} alt="" />
            <div className="img-overlay"></div>
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${item?.id}`}
          >
            <span className="category">
              {item?.category}
            </span>

            <h2 className="title">{item?.title}</h2>
          </motion.div>

          <motion.div className="content-container" animate >
            <p>{item?.content}</p>
            <a href={item.linkContent}> {item.linkContent}</a>
             </motion.div>
          <motion.div className="content-container" animate > {item?.content}</motion.div>

        </motion.div>
        {/* <div ref={bottom}></div> */}
     
      </div>
      {/* </div> */}

    </>
  );
}
