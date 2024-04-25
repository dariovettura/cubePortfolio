import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

function Wall(props: any) {

  const menu = () => {
    type PathElement = SVGPathElement

    class ShapeOverlays {
      elm: HTMLElement;
      path: NodeListOf<PathElement>;
      numPoints: number;
      duration: number;
      delayPointsArray: number[];
      delayPointsMax: number;
      delayPerPath: number;
      timeStart: number;
      isOpened: boolean;
      isAnimating: boolean;

      constructor(elm: HTMLElement) {
        this.elm = elm;
        this.path = elm?.querySelectorAll("path") as NodeListOf<PathElement>;
        this.numPoints = 2;
        this.duration = 600;
        this.delayPointsArray = [];
        this.delayPointsMax = 0;
        this.delayPerPath = 200;
        this.timeStart = Date.now();
        this.isOpened = false;
        this.isAnimating = false;
      }

      // toggle(): void {
      //   this.isAnimating = true;
      //   for (let i = 0; i < this.numPoints; i++) {
      //     this.delayPointsArray[i] = 0;
      //   }
      //   if (this.isOpened === false) {
      //     this.open();
      //   } else {
      //     this.close();
      //   }
      // }

      open(): void {
        this.isOpened = true;
        this.elm.classList.add("is-opened");
        this.timeStart = Date.now();
        this.renderLoop();
      }

      close(): void {
        this.isOpened = false;
        this.elm.classList.remove("is-opened");
        this.timeStart = Date.now();
        this.renderLoop();
      }

      updatePath(time: number): string {
        const points: number[] = [];
        for (let i = 0; i < this.numPoints; i++) {
          const thisEase = this.isOpened
            ? i === 1
              ? ease.cubicOut
              : ease.cubicInOut
            : i === 1
              ? ease.cubicInOut
              : ease.cubicOut;
          points[i] =
            thisEase(
              Math.min(
                Math.max(time - this.delayPointsArray[i], 0) / this.duration,
                1
              )
            ) * 100;
        }

        let str = "";
        str += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
        for (let i = 0; i < this.numPoints - 1; i++) {
          const p = ((i + 1) / (this.numPoints - 1)) * 100;
          const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
          str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
        }
        str += this.isOpened ? `V 0 H 0` : `V 100 H 0`;
        return str;
      }

      render(): void {
        if (this.isOpened) {
          for (let i = 0; i < this.path.length; i++) {
            if (this.path[i] !== null) {
              this.path[i].setAttribute(
                "d",
                this.updatePath(
                  Date.now() - (this.timeStart + this.delayPerPath * i)
                )
              );
            }
          }
        } else {
          for (let i = 0; i < this.path.length; i++) {
            if (this.path[i] !== null) {
              this.path[i].setAttribute(
                "d",
                this.updatePath(
                  Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))
                )
              );
            }
          }
        }
      }

      renderLoop(): void {
        this.render();
        if (
          Date.now() - this.timeStart <
          this.duration +
          this.delayPerPath * (this.path.length - 1) +
          this.delayPointsMax
        ) {
          requestAnimationFrame(() => {
            this.renderLoop();
          });
        } else {
          this.isAnimating = false;
        }
      }
    }


    (function () {
      const bodys: any = document.querySelector("body");
      bodys.classList.add("overflows");



    

      
    })();



    const ease = {
      exponentialIn: (t: any) => {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
      },
      exponentialOut: (t: any) => {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
      },
      exponentialInOut: (t: any) => {
        return t == 0.0 || t == 1.0
          ? t
          : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
      },
      sineOut: (t: any) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
      },
      circularInOut: (t: any) => {
        return t < 0.5
          ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
          : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
      },
      cubicIn: (t: any) => {
        return t * t * t;
      },
      cubicOut: (t: any) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
      },
      cubicInOut: (t: any) => {
        return t < 0.5
          ? 4.0 * t * t * t
          : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
      },
      quadraticOut: (t: any) => {
        return -t * (t - 2.0);
      },
      quarticOut: (t: any) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
      },
    };



    (function () {
      var el = document.createElement("div"),
        transformProps = "transform WebkitTransform MozTransform OTransform msTransform".split(" "),
        transformProp = support(transformProps),
        transitionDuration = "transitionDuration WebkitTransitionDuration MozTransitionDuration OTransitionDuration msTransitionDuration".split(" "),
        transitionDurationProp = support(transitionDuration);

      function support(props: any) {
        for (var i = 0, l = props.length; i < l; i++) {
          if (typeof el.style[props[i]] !== "undefined") {
            return props[i];
          }
        }
      }

      var mouse: any = {
        start: {}
      };
      var touch = "ontouchmove" in document.documentElement;
      var viewport: any = {
        x: 0,
        y: 0,
        el: document.querySelector(".cube"),
        move: function (coords: any) {
          if (coords) {
            if (typeof coords.x === "number") this.x = coords.x;
            if (typeof coords.y === "number") this.y = coords.y;
          }

          this.el.style[transformProp] = "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)";
        },
        reset: function () {
          this.move({ x: 0, y: -1100 });
        }
      };

      viewport.duration = (function () {
        var d = touch ? 50 : 500;
        if (viewport.el) viewport.el.style[transitionDurationProp] = d + "ms";
        return d;
      })();

      document.addEventListener("click", function (event: any) {
        if (event.target.id === "ham") {
          viewport.reset();
        }
      });

      document.addEventListener("keydown", function (evt: any) {
        switch (evt.keyCode) {
          case 37: // left
            viewport.move({ y: viewport.y - 90 });
            break;

          case 38: // up
            evt.preventDefault();
            viewport.move({ x: viewport.x + 90 });
            break;

          case 39: // right
            viewport.move({ y: viewport.y + 90 });
            break;

          case 40: // down
            evt.preventDefault();
            viewport.move({ x: viewport.x - 90 });
            break;

          case 27: //esc
            viewport.reset();
            break;

          default:
            break;
        }
      });

      var moveHandler = function (evt: any) {
        evt.preventDefault();
        var eventCoords: any = evt.touches ? evt.touches[0] : evt;
        var movementScaleFactor: any = touch ? 2 : 0.1;

        if (!mouse.last) {
          mouse.last = mouse.start;
        } else {
          if (forward(mouse.start.x, mouse.last.x) != forward(mouse.last.x, eventCoords.pageX)) {
            mouse.start.x = mouse.last.x;
          }
          if (forward(mouse.start.y, mouse.last.y) != forward(mouse.last.y, eventCoords.pageY)) {
            mouse.start.y = mouse.last.y;
          }
        }
        viewport.move({
          x: viewport.x + ((mouse.start.y - eventCoords.pageY) / movementScaleFactor),
          y: viewport.y - ((mouse.start.x - eventCoords.pageX) / movementScaleFactor)
        });


        mouse.last.x = eventCoords.pageX;
        mouse.last.y = eventCoords.pageY;

        function forward(v1: any, v2: any) {
          return v1 >= v2 ? true : false;
        }
      };
      var scrollHandler = function (evt: any) {
        var delta = Math.max(-1, Math.min(1, (evt.wheelDelta || -evt.detail))); // Get delta for scrolling
        var scrollFactor = 50; // Adjust this value to control scroll speed

        // Update viewport position based on scroll direction
        viewport.move({
          y: viewport.y + delta * scrollFactor
        });

        // evt.preventDefault(); // Prevent default scroll behavior
      };

      var endHandler = function () {
        document.removeEventListener("mousemove", moveHandler);
        document.removeEventListener("touchmove", moveHandler);
      };

      var startHandler = function (evt: any) {
        delete mouse.last;
        if (evt.target.tagName.toLowerCase() === "a" || evt.target.tagName.toLowerCase() === "iframe") {
          return true;
        }

        var eventCoords = evt.touches ? evt.touches[0] : evt;
        mouse.start.x = eventCoords.pageX;
        mouse.start.y = eventCoords.pageY;

        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("touchmove", moveHandler);
        document.addEventListener("mouseup", endHandler);
        document.addEventListener("touchend", endHandler);


      };

      document.addEventListener("mousedown", startHandler);
      document.addEventListener("touchstart", startHandler);
      document.addEventListener("mousewheel", scrollHandler);
      document.addEventListener("DOMMouseScroll", scrollHandler);
    }
    )();


    // jQuery(document).ready(function( $ ){
    //   setTimeout(function(){

    //  }, 700);

    // })
  };

  const removeIntro = () => {
    const bodys: any = document.querySelector("body");
    const gNavItems: any = document.querySelectorAll(".global-menu__item");
    const rooot: any = document.querySelectorAll(".glass");
    const rooot2: any = document.querySelectorAll(".sub-glass");
    const removeRooot = () => {
      for (var i = 0; i < rooot.length; i++) {
        rooot[i].classList.remove("glassVisible");
      }
      for (var i = 0; i < rooot2.length; i++) {
        rooot2[i].classList.remove("sub-glass");
      }
     
    };
    removeRooot();
    bodys.classList.remove("overflows");
    for (var i = 0; i < gNavItems.length; i++) {
      gNavItems[i].classList.remove("is-opened");
    }
  }





  const init =
  React.useCallback(async (node: any) => {
    if (node) {
      menu()
    }
  }, []);

  return (
    <div ref={init} className="demo-3">
      <div className="main main--demo-3">
        <div className="content content--demo-3">
          <div className="global-menu">
            <div className="global-menu__wrap">
              <div className="global-menu__item global-menu__item--demo-3 is-opened">
                <div >
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ velocity: 3, delay: 2, }}>
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
                              <div className="col-12">
                                <Link  href="#about"
                                  passHref={true}>
                                  <a onClick={removeIntro} className="menulink2">ABOUT<span>.</span></a>
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
                                  <a onClick={removeIntro} className="menulink1">WORKS<span>.</span></a>
                                </Link>
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
                                  <a onClick={removeIntro}>D<span>.</span></a>
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
                                  <a onClick={removeIntro} className="menulink3">CONTACTS<span>.</span></a>
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


                    </article>
                  </motion.div>
                  <section className='hero-text'>
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
                        <div className="col-3 ">
                          <Link
                            passHref={true}
                            href="https://mail.google.com/mail/?view=cm&source=mailto&to=d.vettura.wd@gmail.com"
                          ><div className="icona2 face"></div></Link>
                        </div>
                        <div className="col-3 ">
                          <Link
                            // target="_blank"
                            href="http://m.me/dario.vettura"
                            passHref={true}
                          >
                            <div className="icona2 insta">
                            </div >
                          </Link>
                        </div>
                        <div className="col-3 ">
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