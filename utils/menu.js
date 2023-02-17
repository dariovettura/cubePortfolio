// JavaScript Document

export const menu = () => {
  class ShapeOverlays {
    constructor(elm) {
      this.elm = elm;
      this.path = elm.querySelectorAll("path");
      this.numPoints = 2;
      this.duration = 600;
      this.delayPointsArray = [];
      this.delayPointsMax = 0;
      this.delayPerPath = 200;
      this.timeStart = Date.now();
      this.isOpened = false;
      this.isAnimating = false;
    }
    toggle() {
      this.isAnimating = true;
      for (var i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = 0;
      }
      if (this.isOpened === false) {
        this.open();
      } else {
        this.close();
      }
    }
    open() {
      this.isOpened = true;
      this.elm.classList.add("is-opened");
      this.timeStart = Date.now();
      this.renderLoop();
    }
    close() {
      this.isOpened = false;
      this.elm.classList.remove("is-opened");
      this.timeStart = Date.now();
      this.renderLoop();
    }
    updatePath(time) {
      const points = [];
      for (var i = 0; i < this.numPoints; i++) {
        const thisEase = this.isOpened
          ? i == 1
            ? ease.cubicOut
            : ease.cubicInOut
          : i == 1
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
      for (var i = 0; i < this.numPoints - 1; i++) {
        const p = ((i + 1) / (this.numPoints - 1)) * 100;
        const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
          points[i + 1]
        } `;
      }
      str += this.isOpened ? `V 0 H 0` : `V 100 H 0`;
      return str;
    }
    render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute(
            "d",
            this.updatePath(
              Date.now() - (this.timeStart + this.delayPerPath * i)
            )
          );
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute(
            "d",
            this.updatePath(
              Date.now() -
                (this.timeStart +
                  this.delayPerPath * (this.path.length - i - 1))
            )
          );
        }
      }
    }
    renderLoop() {
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
    const elmHamburger = document.querySelector(".hamburger");
    const menulink1 = document.querySelector(".menulink1");
    const menulink2 = document.querySelector(".menulink2");
    const menulink3 = document.querySelector(".menulink3");
    const bodys = document.querySelector("body");
    const cubo = document.querySelector(".cube");
    const view = document.querySelector(".viewport");
    const menutext = document.querySelector(".menutext");
    const rooot = document.querySelectorAll(".rooot");

    const removeRooot = () => {
      for (var i = 0; i < rooot.length; i++) {
        rooot[i].classList.remove("noVisible");
      }
    };

    const addRooot = () => {
      for (var i = 0; i < rooot.length; i++) {
        rooot[i].classList.add("noVisible");
      }
    };

    const gNavItems = document.querySelectorAll(".global-menu__item");
    const elmOverlay = document.querySelector(".shape-overlays");
    const overlay = new ShapeOverlays(elmOverlay);

    elmHamburger.addEventListener("click", () => {
      if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
      if (overlay.isOpened === true) {
        elmHamburger.classList.add("is-opened-navi");
        bodys.classList.add("overflows");
        cubo.classList.add("rotating");
        view.classList.remove("nascosto");
        menutext.classList.remove("nascosto");
        addRooot();

        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.add("is-opened");
        }
      } else {
        elmHamburger.classList.remove("is-opened-navi");
        bodys.classList.remove("overflows");
        cubo.classList.remove("rotating");
       removeRooot();

        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.remove("is-opened");
        }
      }
    });
    menulink1.addEventListener("click", () => {
      if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
      if (overlay.isOpened === true) {
        elmHamburger.classList.add("is-opened-navi");
        bodys.classList.add("overflows");
        addRooot();
        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.add("is-opened");
        }
      } else {
        elmHamburger.classList.remove("is-opened-navi");
        bodys.classList.remove("overflows");
        removeRooot();
        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.remove("is-opened");
        }
      }
    });
    menulink2.addEventListener("click", () => {
      if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
      if (overlay.isOpened === true) {
        elmHamburger.classList.add("is-opened-navi");
        bodys.classList.add("overflows");
        addRooot();
        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.add("is-opened");
        }
      } else {
        elmHamburger.classList.remove("is-opened-navi");
        bodys.classList.remove("overflows");
        removeRooot();
        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.remove("is-opened");
        }
      }
    });
    menulink3.addEventListener("click", () => {
      if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
      if (overlay.isOpened === true) {
        elmHamburger.classList.add("is-opened-navi");
        bodys.classList.add("overflows");
        addRooot();
        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.add("is-opened");
        }
      } else {
        elmHamburger.classList.remove("is-opened-navi");
        bodys.classList.remove("overflows");
        removeRooot();
        for (var i = 0; i < gNavItems.length; i++) {
          gNavItems[i].classList.remove("is-opened");
        }
      }
    });
  })();

  //
  // these easing functions are based on the code of glsl-easing module.
  // https://github.com/glslify/glsl-easings
  //

  const ease = {
    exponentialIn: (t) => {
      return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    },
    exponentialOut: (t) => {
      return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
    },
    exponentialInOut: (t) => {
      return t == 0.0 || t == 1.0
        ? t
        : t < 0.5
        ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
        : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
    },
    sineOut: (t) => {
      const HALF_PI = 1.5707963267948966;
      return Math.sin(t * HALF_PI);
    },
    circularInOut: (t) => {
      return t < 0.5
        ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
        : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    },
    cubicIn: (t) => {
      return t * t * t;
    },
    cubicOut: (t) => {
      const f = t - 1.0;
      return f * f * f + 1.0;
    },
    cubicInOut: (t) => {
      return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
    },
    quadraticOut: (t) => {
      return -t * (t - 2.0);
    },
    quarticOut: (t) => {
      return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
    },
  };

  $(function () {
    var el = document.createElement("div"),
      transformProps =
        "transform WebkitTransform MozTransform OTransform msTransform".split(
          " "
        ),
      transformProp = support(transformProps),
      transitionDuration =
        "transitionDuration WebkitTransitionDuration MozTransitionDuration OTransitionDuration msTransitionDuration".split(
          " "
        ),
      transitionDurationProp = support(transitionDuration);

    function support(props) {
      for (var i = 0, l = props.length; i < l; i++) {
        if (typeof el.style[props[i]] !== "undefined") {
          return props[i];
        }
      }
    }

    var mouse = {
        start: {},
      },
      touch = document.ontouchmove !== undefined,
      viewport = {
        x: 0,
        y: 0,
        el: $(".cube")[0],
        move: function (coords) {
          if (coords) {
            if (typeof coords.x === "number") this.x = coords.x;
            if (typeof coords.y === "number") this.y = coords.y;
          }

          this.el.style[transformProp] =
            "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg)";
        },
        reset: function () {
          this.move({ x: 0, y: -1100 });
        },
      };

    viewport.duration = (function () {
      var d = touch ? 50 : 500;
      viewport.el.style[transitionDurationProp] = d + "ms";
      return d;
    })();

    $(document).on("click", "#ham", function () {
      viewport.reset();
    });

    $(document)
      .keydown(function (evt) {
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
      })

      .bind("mousedown touchstart", function (evt) {
        delete mouse.last;
        if ($(evt.target).is("a, iframe")) {
          return true;
        }

        evt.originalEvent.touches ? (evt = evt.originalEvent.touches[0]) : null;
        mouse.start.x = evt.pageX;
        mouse.start.y = evt.pageY;
        $(document).bind("mousemove touchmove", function (event) {
          // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
          if (
            !touch ||
            !(event.originalEvent && event.originalEvent.touches.length > 1)
          ) {
            event.preventDefault();
            // Get touch co-ords
            event.originalEvent.touches
              ? (event = event.originalEvent.touches[0])
              : null;
            $(".viewport").trigger("move-viewport", {
              x: event.pageX,
              y: event.pageY,
            });
          }
        });

        $(document).bind("mouseup touchend", function () {
          $(document).unbind("mousemove touchmove");
        });
      });

    $(".viewport").bind("move-viewport", function (evt, movedMouse) {
      // Reduce movement on touch screens
      var movementScaleFactor = touch ? 2 : 0.1;

      if (!mouse.last) {
        mouse.last = mouse.start;
      } else {
        if (
          forward(mouse.start.x, mouse.last.x) !=
          forward(mouse.last.x, movedMouse.x)
        ) {
          mouse.start.x = mouse.last.x;
        }
        if (
          forward(mouse.start.y, mouse.last.y) !=
          forward(mouse.last.y, movedMouse.y)
        ) {
          mouse.start.y = mouse.last.y;
        }
      }

      viewport.move({
        x:
          viewport.x +
          parseInt((mouse.start.y - movedMouse.y) / movementScaleFactor),
        y:
          viewport.y -
          parseInt((mouse.start.x - movedMouse.x) / movementScaleFactor),
      });

      mouse.last.x = movedMouse.x;
      mouse.last.y = movedMouse.y;

      function forward(v1, v2) {
        return v1 >= v2 ? true : false;
      }
    });
  });

  // jQuery(document).ready(function( $ ){
  //   setTimeout(function(){

  //  }, 700);

  // })
};
