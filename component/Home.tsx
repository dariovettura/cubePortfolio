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

  
  
  return (
    <li className={`cardd`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${item?.id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${item?.id}`}
          >
            <img className="card-image" 
             placeholder="blur"
     
            src={item?.anteprima}  alt="" />
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
        </motion.div>
      </div>
      <Link href={`/${item?.id}`} scroll={false} >
        <a className={`card-open-link`} ></a>
      </Link>


    </li>
  );
}

const Home: React.FC<Props> = ({ video }) => {


  React.useEffect(() => {
    const contenuto = document.querySelector("body");
    contenuto?.classList.remove("overflow-hidden");
  }, [])



  return (<section id="work" style={{ paddingTop: '60px' }}>
    <h2 className="section-tit2">Work<span>.</span></h2>
    <h4 className="subtit">Projects in <a href="https://www.linkedin.com/in/dario-vettura-347ba51b2/" >Freelancing</a></h4>
    <ul className="card-list">
      {works.filter(el => el.type === "dario").map(item => ( 
        <Card key={item.id} item={item} />
      ))}
    </ul>
    <h4 className="subtit">Working with <a href="https://www.arsdigitalia.net/it/" >Ars Digitalia</a></h4>
    <ul className="card-list">
      {works.filter(el => el.type === "ars").map(item => (
        <Card key={item.id} item={item} />
      ))}
    </ul>
  </section>
  );
}

export default Home;