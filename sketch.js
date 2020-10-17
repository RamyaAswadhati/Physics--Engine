const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
var object;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  var options={
    isStatic: true
  }
  object= Bodies.rectangle(200,100,100,100,options);
  World.add(world,object);
 console.log(object);
}
function draw() {
  background("orange");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
}