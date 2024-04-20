import Link from 'next/link';
import React from 'react';

function Wall(props:any) {
  return (
    <div className="demo-3" style={{height:'100vh',position:'absolute'}}>
    <div className="main main--demo-3">
      <div className="content content--demo-3">
        <div className="global-menu">
          <div className="global-menu__wrap">
            <div className="global-menu__item global-menu__item--demo-3 is-opened">
              <div>
                <article className="viewport nascostos">
                  <section className="cube rotating">
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
                    <div className="container-fluid menutext hero2 nascostos">
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
        <div className="shape-overlays is_opened">
          <path></path>
          <path></path>
          <path></path>
        </div>

      </div>
    </div>
  </div>
  );
}

export default Wall;