const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;


function setup(){
    var canvas=createCanvas(windowWidth/2,windowHeight/1.5);
    engine=Engine.create();
    world=engine.world;
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options = {
        mouse : canvasmouse
    }
    mConstraint=MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
    pendulum1=new Pendulum(20,20,30,90);
    fill("red");
    pendulum2=new Pendulum(110,20,30,90);
    fill("red");
    pendulum3=new Pendulum(200,20,30,90);
    fill("red");
    pendulum4=new Pendulum(290,20,30,90);
    fill("red");
    pendulum5=new Pendulum(380,20,30,90);
    fill("red");
}

function draw(){
    background("255,255,255");
    Engine.update(engine);
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}