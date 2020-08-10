var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint=Matter.Constraint;
var r=0
var x=0

function preload()
{
	dog=loadImage("running.png")
	dog2=loadImage("runningLeft.png")
}

function setup() {
	createCanvas(displayWidth*5,displayHeight);
  

	engine = Engine.create();
	world = engine.world;
    database=firebase.database()
	ballstock=database.ref('ball')
	ballstock.on("value",bstock)
	balltstock=database.ref('ball2')
    balltstock.on("value",btstock)
	square=createSprite(displayWidth*2.5,displayHeight,displayWidth*5,300)
	square2=createSprite(200,500,200,200)
	square2.addImage("change",dog)
	square2.scale=0.5

	a=new Ball(200,500,50)
  
  
}


function draw() {
  background("red");
  Engine.update(engine)
  square2.velocityX=2
  
  camera.position.x=square2.x
  camera.position.y=square2.y
  a.display()
  if(keyCode==32){
	a=new Ball(square2.x-300,square2.y,50)
  }
  if(keyDown(UP_ARROW)){
	square2.velocityY=-2
	write(r)
	r=r+1
  }
  if(keyDown(DOWN_ARROW)){
	square2.velocityY=2
	write(r)
	r=r-1
  }
  if(keyDown(LEFT_ARROW)){
	square2.addImage("change",dog2)
	square2.velocityX=-2
    writ(x)
	x=x-1
  }
  if(keyDown(RIGHT_ARROW)){
	square2.addImage("change",dog)
	square2.velocityX=-2
	
	writ(x)
	x=x+1
  }
  
  text(r,square2.x+200,square2.y)
  text(x,square2.x+250,square2.y)
 drawSprites()
}


function bstock(data){
	ball=data.val()
  }
  function write(r){
	database.ref("/").update({
	ball:r
	
	})
  }
  function btstock(data){
	ball2=data.val()
  }
  function writ(x){
	database.ref("/").update({
	ball2:x
	
	})
  }
