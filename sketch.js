const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ,particle,division,plinko;
//array for division and plinko
var divisionG;
var plinkoG;
var particleG=[];


function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
    world = engine.world;
   ground =new Division(240,770,480,20);
   divisionG=[];
   plinkoG=[];
   for(var x=0;x<=480;x+=80)
   {
     
     divisionG.push(new Division(x,670,20,200));
   }
   
    for(var y=100;y<400;y+=70 )
    {
        for(var p=40;p<480;p+=50)
      {
        
        plinkoG.push(new Plinko(p,y,10))
        plinkoG.push(new Plinko(p-30,y+35,10))
        
      }
    }
    
}

function draw() {
  background(20);

  Engine.update(engine);

 
  
  drawSprites();

  ground.display()

  for(var i=0 ;i<divisionG.length;i++)
  {
    divisionG[i].display();
  }
  for(var p =0;p<plinkoG.length;p++)
  {
    plinkoG[p].display();
  }
 
}
function mouseReleased()
  {
    particle=new Particle(mouse.x,00,10);
    particleG.push(particle);

    
  for (var i=0;i<particleG.length;i=i+1)
  {
    push()
    fill(random(0,225),random(0,255),random(0,255));
    particleG[i].display();
    pop()
  }
  }