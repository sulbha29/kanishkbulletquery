var bullet,wall,thickness;
var speed,weight;
//var division;




function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
 bullet= createSprite(100, 200, 100,30);
  
 
thickness=random(22,83);
  speed= random(223,321);
  weight= random(30,52);
  wall.shapeColor=color(230,230,230);
 
 bullet.shapeColor=color(255,255,255);
bullet.velocityX=speed;
}
function hasCollided(bullet1,wall1)
{
  bulletRightEdge=bullet1.x +bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false;
}
function draw() {
  background(20,20,20);  
  drawSprites();


  if(hasCollided(bullet,wall)){  

    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness* thickness);
    

    if(damage>10)
    {

      wall.shapeColor= color(255,0,0);

    }

if(damage<10){
wall.shapeColor=color(0,255,0);
}
  }

}
  



  