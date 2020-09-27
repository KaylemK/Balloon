var player;

function setup() {
  createCanvas(800,400);
 player = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  if(keyDown("space")){
player.velocityY=-10;
  }
  drawSprites();
}