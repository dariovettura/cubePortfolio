import React from 'react';
import Slider from 'react-slick';

function About(props:any) {

  const setting = {
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
  }
  return (
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
            <Slider className="row slaider"  {...setting}>

              <div className="col-12 slid nerd"></div>
              <div className="col-12 slid barba"></div>
              <div className="col-12 slid mario"></div>
              <div className="col-12 slid goku"></div>

            </Slider>
          </div>
        </div>
        <div className="col-lg-6 title">
          <h2 className="">Freelance Web Develeper<span>.</span></h2>

          <h2 className="orange">Training:</h2>
          <p>
            Ilas graduate. Italian Academy of Visual Communication<span
            >.</span>
          </p>

          <h2 className="orange">Design for web:</h2>
          <p>
           Typescript / PHP / SASS / REACT/  Responsive and Adaptive Design / jQuery / Bootstrap
            / SEO - Search Engine Optimization / Wordpress /
            Material handling / Color theory / Typography / Composition<span
            >.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default About;