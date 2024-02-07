import Link from 'next/link';
import React from 'react';

function Menu(props:any) {
  return (
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
                            <Link href="#"
                              passHref={true}>
                              <h2>D<span>.</span></h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="container-fluid">
                        <div className="row text-center">
                          <div className="col-12">
                            <Link href="#works"
                              passHref={true}>
                              <h2 className="menulink1">WORKS<span>.</span></h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="container-fluid">
                        <div className="row text-center">
                          <div className="col-12">
                            <Link href="#about"
                              passHref={true}>
                              <h2 className="menulink2">ABOUT<span>.</span></h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="container-fluid">
                        <div className="row text-center">
                          <div className="col-12">
                            <Link href="#contacts"
                              passHref={true}>
                              <h2 className="menulink3">CONTACTS<span>.</span></h2>
                            </Link>
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
                          <h2>WEB DEV PORTFOLIO</h2>
                          <h3>Dario Vettura</h3>
                        </div>
                      </div>
                      <div
                        className="row icone text-center justify-content-center"
                      >
                        <div className="col-3 col-lg-1">
                          <Link
                            passHref={true}
                            href="https://mail.google.com/mail/?view=cm&source=mailto&to=d.vettura.wd@gmail.com"
                          ><div className="icona2 face"></div></Link>
                        </div>
                        <div className="col-3 col-lg-1">
                          <Link
                            // target="_blank"
                            href="http://m.me/dario.vettura"
                            passHref={true}
                          >
                            <div className="icona2 insta">
                            </div >
                          </Link>
                        </div>
                        <div className="col-3 col-lg-1">
                          <Link
                            href="http://m.me/dario.vettura"
                            passHref={true}
                          >
                            <div className="icona2 linkedin"></div></Link>
                        </div>
                        <div className="col-12 sottitolo2">
                          <p>
                            © Dario Vettura 2020<span>.</span>
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
        <div className="shape-overlays">
          <path></path>
          <path></path>
          <path></path>
        </div>

      </div>
    </div>
  </div>
  );
}

export default Menu;