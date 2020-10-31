var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(200,400,40,80);
  rect1.shapeColor = "blue";
  rect2 = createSprite(100,600,100,30);
  rect2.shapeColor = "blue";
  rect3 = createSprite(400, 100, 50, 80);
  rect3.shapeColor = "blue";
  rect3.velocityY = 5;
  rect4 = createSprite(400, 800,80,30);
  rect4.shapeColor = "blue";
  rect4.velocityY = -5;
}

function draw() {
  background(255,255,255);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  console.log(rect1.x-rect2.x);
  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2 
    && rect1.y - rect2.y < rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else{
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }

  if(rect3.y - rect4.y < rect3.height/2 + rect4.height/2
    && rect4.y - rect3.y < rect3.height/2 + rect4.height/2){
    rect3.velocityY *= -1;
    rect3.shapeColor = "red";
    rect4.velocityY *= -1;
    rect4.shapeColor = "red";
  }
  drawSprites();
}