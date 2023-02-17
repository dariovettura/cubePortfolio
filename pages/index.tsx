import type { GetStaticPropsResult, NextPage } from 'next'
import React, { useEffect } from 'react'
import AOS from 'aos';
import {menu} from '../utils/menu';
import {preloader} from '../utils/preloader';
import 'aos/dist/aos.css';



interface Props {



}

const Casa: NextPage<Props> = ({}) => {




  return (<>
    <div className="root">
    <div className="demo-32">
      <div className="main2 main--demo-32">
        <div className="content2 content--demo-32">
          <div className="global-menu2">
            <div className="global-menu__wrap2">
              <div
                className="global-menu__item2 global-menu__item--demo-32 is-opened"
              >
                <div>
                  <article className="viewport2">
                    <section className="cube2 rotating2">
                      <div>
                        <div className="container-fluid">
                          <div className="row text-center">
                            <div className="col-12"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="container-fluid">
                          <div className="row text-center">
                            <div className="col-12">
                              <h2 data-aos="fade-in" data-aos-delay="1800">
                                D<span>.</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="container-fluid">
                          <div className="row text-center">
                            <div className="col-12"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="container-fluid">
                          <div className="row text-center">
                            <div className="col-12"></div>
                          </div>
                        </div>
                      </div>
             

                      <div>
                        <div className="container-fluid">
                          <div className="row text-center">
                            <div className="col-12"></div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="container-fluid hero">
                        <div className="row rigahero text-center">
                          <div className="col-12 colhero">
                            <h1>WEB DESIGN PORTFOLIO</h1>
                            <h2>Dario Vettura</h2>
                            <div
                              id="ham2"
                              className="hamburger2 hamburger--demo-32 js-hover"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/* <svg
            className="shape-overlays2"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path className="shape-overlays__path2"></path>
            <path className="shape-overlays__path2"></path>
            <path
              className="shape-overlays__path2"
              d="M 0 0 V 100 C 50 100 50 100 100 100 V 0 H 0"
            ></path>
          </svg> */}
        </div>
      </div>
    </div>
    <header className='header noVisible'>
      <div className="logo">
        <a href="/">
          <h2>D<span>.</span></h2>
        </a>
      </div>
      <div className="demo-3">
        <div className="main main--demo-3">
          <div className="content content--demo-3">
            <div id="ham" className="hamburger hamburger--demo-3 js-hover">
              <div className="hamburger__line hamburger__line--01">
                <div className="hamburger__line-in hamburger__line-in--01"></div>
              </div>
              <div className="hamburger__line hamburger__line--02">
                <div className="hamburger__line-in hamburger__line-in--02"></div>
              </div>
              <div className="hamburger__line hamburger__line--03">
                <div className="hamburger__line-in hamburger__line-in--03"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross01">
                <div
                  className="hamburger__line-in hamburger__line-in--cross01"
                ></div>
              </div>
              <div className="hamburger__line hamburger__line--cross02">
                <div
                  className="hamburger__line-in hamburger__line-in--cross02"
                ></div>
              </div>
            </div>
            <div className="global-menu">
              <div className="global-menu__wrap">
                <div className="global-menu__item global-menu__item--demo-3">
                  <div>
                    <article className="viewport nascosto">
                      <section className="cube">
                        <div>
                          <div className="container-fluid">
                            <div className="row text-center">
                              <div className="col-12">
                                <h2><span></span></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="container-fluid">
                            <div className="row text-center">
                              <div className="col-12 log">
                                <a href="#">
                                  <h2>D<span>.</span></h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="container-fluid">
                            <div className="row text-center">
                              <div className="col-12">
                                <a className="menulink1" href="#works">
                                  <h2>WORKS<span>.</span></h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="container-fluid">
                            <div className="row text-center">
                              <div className="col-12">
                                <a className="menulink2" href="#about">
                                  <h2>ABOUT<span>.</span></h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="container-fluid">
                            <div className="row text-center">
                              <div className="col-12">
                                <a className="menulink3" href="#contacts">
                                  <h2>CONTACTS<span>.</span></h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                  

                        <div>
                          <div className="container-fluid">
                            <div className="row text-center">
                              <div className="col-12">
                                <h2><span></span></h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section>
                        <div className="container-fluid menutext hero2 nascosto">
                          <div className="row rigahero text-center">
                            <div className="col-12 colhero">
                              <h2>WEB DESIGN PORTFOLIO</h2>
                              <h3>Dario Vettura</h3>
                            </div>
                          </div>
                          <div
                            className="row icone text-center justify-content-center"
                          >
                            <div className="col-3 col-lg-1">
                              <a
                                target="_blank"
                                href="https://mail.google.com/mail/?view=cm&source=mailto&to=d.vettura.wd@gmail.com"
                                ><div className="icona2 face"></div></a>
                            </div>
                            <div className="col-3 col-lg-1">
                              <a
                                target="_blank"
                                href="http://m.me/dario.vettura"
                              >
                                <div className="icona2 insta">
                                  </div >
                                  </a>
                            </div>
                            <div className="col-3 col-lg-1">
                              <a
                                target="_blank"
                                href="http://m.me/dario.vettura"
                              >
                                <div className="icona2 linkedin"></div></a>
                            </div>
                            <div className="col-12 sottitolo2">
                              <p>
                                © Dario Vettura 2020<span>.</span> Special
                                thanks to <span><a href=""> Paul</a></span> and
                                <span><a href=""> Andrea</a></span> for design
                                inspiration<span>.</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div  className="shape-overlays">
            <path></path>
              <path></path>
              <path></path>
            </div>
       
          </div>
        </div>
      </div>
    </header>
    <div className='rooot noVisible'>
 
  
     <section id="works" className="web-site-main">
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
    </section>
    <section id="about" className="web-site-main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="section-tit2">ABOUT<span>.</span></h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row riga-title d-flex align-items-center">
          <div className="col-lg-6">
            <div className="container-fluid">
              <div className="row slaider">
                <div className="col-12 slid nerd"></div>
                <div className="col-12 slid barba"></div>
                <div className="col-12 slid mario"></div>
                <div className="col-12 slid goku"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 title">
            <h2 className="">Freelance Web Designer<span>.</span></h2>

            <h2 className="orange">Training:</h2>
            <p>
              Ilas graduate. Italian Academy of Visual Communication<span
                >.</span>
            </p>

            <h2 className="orange">Design for web:</h2>
            <p>
              HTML5 / CSS3 / Responsive and Adaptive Design / jQuery / Bootstrap
              / SEO - Search Engine Optimization / Web research / Wordpress /
              Material handling / Color theory / Typography / Composition<span
                >.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="contacts" className="web-site-main">
      <div className="container-fluid" id="herogioco">
        <div className="row justify-content-center" id="rigagioco">
          <div className="col-12" id="colgioco">
            <canvas id="bg"></canvas>
            <canvas id="game"></canvas>
          </div>
          <div className="col-12" id="colgioco2"></div>
        </div>
        <div id="view"></div>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12 titolo">
            <h2>Let's talk <span>!</span></h2>
          </div>
          <div className="col-12 sottitolo">
            <p>
              You can contact me where you prefer.Thank you for your
              attention<span>.</span>
            </p>
          </div>
          <div className="col-12 sottitolo">
            <div className="row icone justify-content-center">
              <div className="col-3 col-lg-1">
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&source=mailto&to=d.vettura.wd@gmail.com"
                  ><div className="icona gmail"></div></a>
              </div>
              <div className="col-3 col-lg-1">
                <a target="_blank" href="http://m.me/dario.vettura">
                  <div className="icona messenger"></div></a>
              </div>
              <div className="col-3 col-lg-1 icona wazup"></div>
            </div>
          </div>

          <div className="col-12 sottitolo">
            <p>© Dario Vettura 2020<span>.</span></p>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
    </>)
  
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  

  const url =
    "https://paolominopoli.altervista.org/wp-json/wp/v2/posts?_embed&per_page=100";
    const infourl =
    "https://paolominopoli.altervista.org/wp-json/wp/v2/informazioni?_embed&per_page=100";

  //const result = await Axios.get(url);
  //const menu =  result.data

  const res = await fetch(url,{method:'GET'});
  const infores = await fetch(infourl,{method:'GET'});

  const post = await res.json();
  const infos = await infores.json()

  //  const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
      infos

    },
    revalidate: 10,
  };
}

export default Casa
