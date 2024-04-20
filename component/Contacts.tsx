import Link from 'next/link';
import React from 'react';
import Gioco from './Gioco';

function Contacts(props:any) {
  return (
    <section id="contacts" className="web-site-main">
          {/* <div className="container-fluid" id="herogioco">
            <div className="row justify-content-center" id="rigagioco">
              <div className="col-12" id="colgioco">
                <canvas id="bg"></canvas>
                <canvas id="game"></canvas>
              </div>
              <div className="col-12" id="colgioco2"></div>
            </div>
            <div id="view"></div>
          </div> */}
          <Gioco/>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-12 titolo">
                <h2>Let&apos;s talk <span>!</span></h2>
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
                    <Link
                      // target="_blank"
                      href="https://mail.google.com/mail/?view=cm&source=mailto&to=d.vettura.wd@gmail.com"
                      passHref={true}
                    ><div className="icona gmail"></div></Link>
                  </div>
                  <div className="col-3 col-lg-1">
                    <Link
                      // target="_blank"
                      href="http://m.me/dario.vettura"
                      passHref={true}>

                      <div className="icona messenger"></div></Link>
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
  );
}

export default Contacts;