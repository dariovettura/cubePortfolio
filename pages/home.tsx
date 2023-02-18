import type { GetStaticPropsResult, NextPage } from 'next'
import React, { useEffect } from 'react'
import AOS from 'aos';
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

  useEffect(() => {
    {
      Aos.init();
      menu();
     preloader();
      game();
      // main();
    }

  }, [])

  const { data } = useAppSelector(cartSelector)

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(setData(posts))
    console.log([posts])
  }, [])


  return (<>
    <div className="root">
      <header className='header'>
        <div className="logo">
          <Link href="/"
            passHref={true}>
            <h2>D<span>.</span></h2>
          </Link>
        </div>
        <Menu />
      </header>
      <div className='rooot'>

        <Home />
        {/* <section id="works" className="web-site-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="section-tit">WORKS<span>.</span></h2>
          </div>
        </div>
      </div>

      <div className="container-fluid hero_video" id="posts">
        <div className="row riga_video d-flex align-items-center">
          <div className="col-5 testo">
            <h2>BEER GARDEN</h2>
            <h3>Web site/Menu</h3>
            <h4>Oct/20</h4>
            <p>
              The menu is quickly reachable by customers via QR code on each
              table. The Manager can update his own products independently
              through CSM.
            </p>
            <h5>Tools:</h5>
            <p>
              PHP,JS,CSS,Bootstrap, 
              Adobe suite
            </p>
          </div>
          <div
            data-toggle="modal"
            data-target="#birre"
            className="col-7 video video1"
          >
            <video
              src="video/beer2.mp4"
              poster="video/loader.gif"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
        <div className="row riga_video d-flex align-items-center tops">
          <div
            data-toggle="modal"
            data-target="#drinkinst"
            className="col-7 video video2"
          >
            <video
              src="video/drinkinst2.mp4"
              poster="video/loader.gif"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="col-5 testo">
            <h2>DRINKINST</h2>
            <h3>Web Platform/Portfolio</h3>
            <h4>Sep/20</h4>
            <p>
              From an idea of the photographer / videomaker Andrea to combine
              his works on a platform dedicated to Cocktails Bars, manually
              inserted on an exclusive and geo-localized map.
            </p>
            <h5>Tools:</h5>
            <p>
              JS,CSS,Bootstrap, 
              Adobe suite
            </p>
          </div>
        </div>
        <div className="row riga_video d-flex align-items-center tops">
          <div className="col-5 testo">
            <h2>DOPOTEATRO</h2>
            <h3>Web site/Menu</h3>
            <h4>Jun/20</h4>
            <p>
              Landing page including PDF menu and blog to give added value to
              the company's web communication project.
            </p>
            <h5>Tools:</h5>
            <p>
              PHP,JS,CSS,Bootstrap, 
              Adobe suite
            </p>
          </div>
          <div
            data-toggle="modal"
            data-target="#dopoteat"
            className="col-7 video video3"
          >
            <video
              src="video/dopoteatro2.mp4"
              poster="video/loader.gif"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
        <div className="row riga_video d-flex align-items-center tops">
          <div
            data-toggle="modal"
            data-target="#fuoriluog"
            className="col-7 video video4"
          >
            <video
              src="video/fuoriluogo2.mp4"
              poster="video/loader.gif"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="col-5 testo">
            <h2>FUORILUOGO</h2>
            <h3>Booking system</h3>
            <h4>May/20</h4>
            <p>
              Website with a fully customizable external booking system
              included. It is integrated with a mobile app for management.
            </p>
            <h5>Tools:</h5>
            <p>
              JS,CSS,Bootstrap, 
              Adobe suite
            </p>
          </div>
        </div>
        <div className="row riga_video d-flex align-items-center tops">
          <div className="col-5 testo">
            <h2>BARUSO</h2>
            <h3>E-Commerce</h3>
            <h4>Apr/20</h4>
            <p>Online store concept made with Wordpress and Woocommerce.</p>
            <h5>Tools:</h5>
            <p>
              PHP,JS,CSS, 
              Adobe suite
            </p>
          </div>
          <div
            data-toggle="modal"
            data-target="#beerwoo"
            className="col-7 video video5"
          >
            <video
              src="video/beer_woo2.mp4"
              poster="video/loader.gif"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>
        <div className="row riga_video d-flex align-items-center tops">
          <div
            data-toggle="modal"
            data-target="#smartplace"
            className="col-7 video video4"
          >
            <video
              src="video/Smartplace.mp4"
              poster="video/loader.gif"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="col-5 testo">
            <h2>SMARTPLACE</h2>
            <h3>Progressive web app</h3>
            <h4>Sep/19</h4>
            <p>
              School project: loaded like normal web pages, but behave similarly
              to native applications when used on a mobile device.
            </p>
            <h5>Tools:</h5>
            <p>
              JS,CSS,Bootstrap, 
              Adobe suite
            </p>
          </div>
        </div>
      </div>
    </section> */}
        <About />
        <Contacts />
      </div>
    </div>
  </>)

}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library



  const url =
    "https://www.dariovettura.com/postfolio/wp-json/wp/v2/posts?_embed&per_page=100";

  //const result = await Axios.get(url);
  //const menu =  result.data

  const res = await fetch(url);

  const posts = await res.json();

  //  const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,

    },
    revalidate: 1,
  };
}

export default Casa
