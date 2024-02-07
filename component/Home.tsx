import React, { useEffect } from "react";

import Link from 'next/link'
import { motion } from "framer-motion";
import { GetStaticPropsResult } from "next";
import Video from "./Video";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";
import { game } from "../utils/game";
import { works } from "../constants/work";
import Image from "next/image";
import { menu } from "../utils/menu";
import { preloader } from "../utils/preloader";


interface Props {
  id?: any,
  title?: any,
  category?: any,
  theme?: any,
  isSelected?: boolean,
  selectedId?: any
  video?: any[],
  item?: any,

}

export const Card: React.FC<Props> = ({ id, title, category, theme, isSelected, item }) => {
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
    <li className={`cardd`}>
      <Link href={`/${item?.id}`} scroll={true} >
        <a className={`card-open-link`} >
          <div className="card-content-container">
            <motion.div className="card-content" >
              <motion.div
                className="card-image-container"
              >
                <Image className="card-image"
                 layout='fill'
                	blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  placeholder="blur"
                  src={item?.anteprima || "/"} alt="" />
                <div className="img-overlay"></div>
              </motion.div>
              <motion.div
                className="title-container"
              >
                <span className="category">
                  {item?.category}
                </span>
                <h2 className="title">{item?.title}</h2>
              </motion.div>
            </motion.div>
          </div>
        </a>
      </Link>
    </li>
  );
}

const Home: React.FC<Props> = ({ video }) => {

  useEffect(() => {
    {
      // Aos.init();
      menu();
      preloader();
      game();
    
    }

  }, [])
  // React.useEffect(() => {
  //   const contenuto = document.querySelector("body");
  //   contenuto?.classList.remove("overflow-hidden");
  // }, [])



  return (<section id="works" style={{ paddingTop: '60px' }}>
    <h2 className="section-tit2">Work<span>.</span></h2>
    <h4 className="subtit">Projects in <a href="https://www.linkedin.com/in/dario-vettura-347ba51b2/" >Freelancing</a></h4>
    <ul className="card-list">
      {works.filter(el => el.type === "dario").map(item => (
        <Card key={item.id} item={item} />
      ))}
       {works.filter(el => el.type === "ars").map(item => (
        <Card key={item.id} item={item} />
      ))}
    </ul>

  
  </section>
  );
}

export default Home;