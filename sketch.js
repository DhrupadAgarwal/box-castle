const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground,box2;
var box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(50,725,50,100);
    box2 = new Box(50,625,50,100);
    box3 = new Box(50,525,50,100);
    box4 = new Box(50,425,50,100);
    box6 = new Box(450,500,50,100);
    box7 = new Box(450,400,50,100);
    box8 = new Box(350,500,50,100);
    box9 = new Box(350,400,50,100);
    box5 = new Box(200,600,250,350);
    box10 = new Box(400,665,150,240);
    box11 = new Box(600,600,250,350);
    box12 = new Box(750,725,50,100);
    box13 = new Box(750,625,50,100);
    box14= new Box(750,525,50,100);
    box15= new Box(750,425,50,100);
    box16 = new Box(400,325,150,50);
    box17 = new Box(400,225,10,150);
    box18 = new Box(440,175,70,50);
    ground = new Ground(400,780,900,20);
}

function draw(){
    background("black");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box5.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ground.display();
    box1.fill("red");
}