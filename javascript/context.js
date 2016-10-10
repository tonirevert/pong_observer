/**
 * Context prototype.
 * With this object (Singleton) by thw way. We manage game context: points, on/off, artifacts location
 * on screen. It is a bridge to reach all objects that compose the game
 *
 * @constructor
 * @this {Context}
 */

var artifact = require('./artifact');
var stick = require('./stick');
var utils = require('./utils');
var observer = require('./utils/Observer');


function Context(){
  this.ball=null;
  this.stick=null;
  this.vpWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //ViewportX
  this.vpHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//ViewportY
  this.score=0;
  this.state = "stop"; //STOP OR RUN
  this.ball = new artifact("bola",this);
  this.stick = new stick("stick","left",this);

  utils.extend(this.stick, new observer());
  this.ball.addObserver(this.stick);

  this.stick.update = function(style){
    var ball_x = parseInt(style.left);
    var ball_y = parseInt(style.top);
    var stick_x = parseInt(this.imgObj.style.left);
    var stick_y = parseInt(this.imgObj.style.top);
    var stick_width = this.imgObj.width;
    var stick_height = this.imgObj.height;

      if(ball_x > stick_x && ball_x < (stick_x+stick_width) && ball_y > stick_y && ball_y < (stick_y+stick_height)){
        console.log("++++++++++++++++++++++++++++++++++++");
        this.state = "stop";
        clearTimeout(animate);
      }/*else if (ball_x <= 0) {
        clearTimeout(animate);
        this.state = "stop";
      }*/
  };


  this.ball.locate((this.vpWidth/2)-this.ball.imgObj.width,(this.vpHeight/2)-this.ball.imgObj.height);  //Posicionem pilota al mig
}

Context.prototype.start = function(){
    this.state = "run";
    this.ball.start();

};

Context.prototype.stop = function(){
    this.state = "stop";
    this.ball.stop();
};

module.exports = Context;
