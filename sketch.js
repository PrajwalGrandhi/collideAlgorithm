var m,f;

function setup() {
  createCanvas(800,400);
  m=createSprite(400, 200, 50, 50);
  m.shapeColor="blue";
  f=createSprite(500,200,50,50);
  f.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
m.x=mouseX
m.y=mouseY
if(m.x-f.x<=f.width/2+m.width/2 && f.x-m.x<=m.width/2+f.width/2 && m.y-f.y<=f.height/2+m.height/2 && f.y-m.y<=f.height/2+m.height/2)
{
  m.shapeColor="red";
  f.shapeColor="red";
}
else{
  m.shapeColor="blue";
  f.shapeColor="blue";
}

  drawSprites();
}