// JavaScript Document


export const preloader =()=>{

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


class ShapeOverlays2 {
  constructor(elm) {
    this.elm = elm;
    // this.path = elm.querySelectorAll('.shape-overlays__path2');
    this.numPoints = 2;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 200;
    this.timeStart = Date.now();
    this.isOpened = true;
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
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      const thisEase = this.isOpened ? 
                        (i == 1) ? ease.cubicOut : ease.cubicInOut:
                        (i == 1) ? ease.cubicInOut : ease.cubicOut;
      points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}

(function() {
  const elmHamburger2 = document.querySelector('.hamburger2');
  const gNavItems2 = document.querySelectorAll('.global-menu__item2');
  const rooot = document.querySelectorAll('.rooot');
  const header = document.querySelectorAll('.header');
  const elmOverlay2 = document.querySelector('.shape-overlays2');
  const bodys2 = document.querySelector('body');
  const overlay2 = new ShapeOverlays2(elmOverlay2);
  const cuboIntro =()=>{
    setTimeout( () => { 
      // overlay2.toggle();
       for (var i = 0; i < gNavItems2.length; i++) {
      gNavItems2[i].classList.remove('is-opened');
    }
  },2500)
  }
  const roootApper =()=>{
    setTimeout( () => { 
      // overlay2.toggle();
       for (var i = 0; i < rooot.length; i++) {
        rooot[i].classList.remove('noVisible'); };
        for (var i = 0; i < header.length; i++) {
          header[i].classList.remove('noVisible'); }
  },2000)
  }

  // debugger;
 

 cuboIntro()
 roootApper()
  
  

//   window.addEventListener('DOMContentLoaded',function
 
// () { setTimeout( () => {
//     if (overlay2.isAnimating) {
//       return false;
//     }
//     overlay2.toggle();
//     if (overlay2.isOpened === true) {
//       elmHamburger2.classList.add('is-opened-navi');
	 
	 
//       for (var i = 0; i < gNavItems2.length; i++) {
//         gNavItems2[i].classList.add('is-opened');
//       }
//     } else {
		
//       elmHamburger2.classList.remove('is-opened-navi');
// 		bodys2.classList.remove('overflows');
		
//       for (var i = 0; i < gNavItems2.length; i++) {
//         gNavItems2[i].classList.remove('is-opened');
//       }
//     }
//   }, 2500)});


	
	
}());

//
// these easing functions are based on the code of glsl-easing module.
// https://github.com/glslify/glsl-easings
//



const ease2 = {
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
        ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
        : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
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
}



// jQuery(document).ready(function( $ ){
//      setTimeout(function(){
     
        
//     }, 700);

// })

;}







