

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops =100;
var drops=[]; 
var drop;
var thunderstorm,thunderstorm_img

function preload(){
//thunderstorm_img = loadAnimation("1.png","2.png","3.png","4.png");
}

function setup(){
 var canvas = createCanvas(600,800);

 
 engine = Engine.create();
 world = engine.world;
 thunderstorm = new Thunder();
 
 
 for(var i=0;i<maxDrops;i++)
    {
        drops[i] = new Drops(random(0,800),random(0,800));
    }
 
 
 umbrella = new Umbrella(300,700,170,200);
 
}

function draw(){
 background(0);   
 Engine.update(engine);
 
 
 for(var i=0;i<maxDrops;i++)
    {
        drops[i].updateDrop();
        drops[i].showDrop();
    }
 thunderstorm.display();
 umbrella.display();
 
}


