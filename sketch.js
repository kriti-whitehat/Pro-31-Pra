const Engine=Matter.Engine;
const World= Matter. World;
const Bodies=Matter.Bodies

var engine, world
var ground

function setup() {
  createCanvas(480,800);
  engine= Engine.create()
  world= engine.world
  ground=new Ground(400,700,800,20)
}

function draw() {
  background(0);
  ground.display()  
  drawSprites();
}