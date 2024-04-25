import Link from 'next/link';
import React from 'react';

function Gioco(props:any) {


// JavaScript Document<script>

const game:any = () => {


  var canvas:any=document.getElementById("game"),
      ctx=canvas.getContext("2d");
  
  var width=300;
  var height=300;

  canvas.width=width;
  canvas.height=height;
  
  var bg:any=document.getElementById("bg");
  bg.width=width;
  bg.height=height;
  
  var bCtx=bg.getContext("2d");
  

  bCtx.fillStyle="rgb(34,34,34,0)";
  bCtx.fillRect(0,0,width,height);
  
  bCtx.setLineDash([6,12]);
  bCtx.moveTo(width/2,0);
  bCtx.lineTo(width/2,height);
  bCtx.strokeStyle="#fff";
  bCtx.lineWidth=4;
  bCtx.stroke();
  
  var view:any=document.getElementById("view");
  function scaleView()
  {
      var scale=Math.min(innerWidth/(width+50),innerHeight/(height+50));
      var transform = "translate(-50%,-50%) scale("+scale+")";
      view.style.WebkitTransform=transform;
      view.style.MozTransform=transform;
      view.style.MsTransform=transform;
      view.style.transform=transform;
  }
  scaleView();
  window.onresize=scaleView;

  interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
    dx: number;
    dy: number;
    move(v: number): void;
    bounce(): number;
    border(): void;
    AABB(rect: Rect): boolean;
    draw(): void;
}

const RectConstructor = function(this: Rect, x: number, y: number, w: number, h: number): void {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = 0;
    this.dy = 1;
    this.move = function(v: number): void {
        this.x += this.dx * v;
        this.y += this.dy * v;
    };
    this.bounce = function(): number {
        let dx = 0;
        if (this.y < 10 || this.y > height - this.h - 10) this.dy *= -1;
        if (this.x < 10 || this.x > width - this.w - 10) {
            dx = this.dx;
            this.dx *= -1;
        }
        return dx;
    };
    this.border = function(): void {
        this.x = Math.min(Math.max(10, this.x), width - this.w - 10);
        this.y = Math.min(Math.max(10, this.y), height - this.h - 10);
    };
    this.AABB = function(rect: Rect): boolean {
        return this.x < rect.x + rect.w &&
            this.x + this.w > rect.x &&
            this.y < rect.y + rect.h &&
            this.y + this.h > rect.y;
    };
    this.draw = function(): void {
        ctx.fillStyle = "#ff8800";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
};

var paddle = new (RectConstructor as any)(10, 170, 20, 60); // Since TypeScript doesn't recognize this as a constructor function with Rect signature, we use `as any`.
var ai = new (RectConstructor as any)(width - 10 - 20, 170, 20, 60);
var ball = new (RectConstructor as any)(140, 190, 20, 20);
ball.dx = 1;

  
  
  var ai_score = 0;
  var paddle_score = 0;
  
  var framerate=1000/40;
  var id:any;
  
  function listener()
  {
      if(id==null) 
      {
          id = setInterval(loop, framerate);
      } else 
      {
          paddle.dy*=-1;
      }
  }
  
  if(navigator.userAgent.match(/(Android|webOs|iPhone|iPad|BlackBerry|Windows Phone)/i))
  document.ontouchstart=listener;
  else document.onclick=listener;
  
  function loop()
  {
      paddle.move(4);
      paddle.border();
      
      if(ball.AABB(paddle)) ball.dx=1;
      if(ball.AABB(ai)) ball.dx=-1;
      ball.move(4);
      var ball_bounce_dx = ball.bounce();
      ball.border();
      
      if(ball_bounce_dx == 1) paddle_score++;
      if(ball_bounce_dx == -1) ai_score++;
      
      if(ai.y>ball.y+ball.h) ai.dy=-1;
      if(ai.y+ai.height<ball.y) ai.dy=1;
      ai.move(4);
      ai.bounce();
      ai.border();
      
      draw();
  }
  
  function draw()
  {
      ctx.clearRect(0,0,width,height);
      paddle.draw();
      ai.draw();
      ball.draw();
      
      ctx.font = "bold 32px Roboto";
      ctx.fillStyle = "#fff";
      ctx.textBaseline = "top";
      ctx.textAlign = "right";
      ctx.fillText(paddle_score, 140, 5);
      ctx.textAlign = "left";
      ctx.fillText(ai_score, 160, 5);
  }
  
  draw();
  ctx.globalAlpha = 1;
  ctx.font = "15px Roboto";
  ctx.textAlign="center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "transparent";

  ctx.fillRect(20, height * 3/4-10, 260, 60);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#fff";
  ctx.fillText("Click to play", width/2, height * 3/4);
  ctx.fillText("Click to change direction", width/2, height * 3/4 + 22);

}


const init =
React.useCallback(async (node: any) => {
  if (node) {
    game()
  }
}, []);



  return (
    
          <div ref={init} className="container-fluid" id="herogioco">
            <div className="row justify-content-center" id="rigagioco">
              <div className="col-12" id="colgioco">
                <canvas id="bg"></canvas>
                <canvas id="game"></canvas>
              </div>
              <div className="col-12" id="colgioco2"></div>
            </div>
            <div id="view"></div>
          </div>
       
  );
}

export default Gioco;