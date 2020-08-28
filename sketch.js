var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);


  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(100, 200, 100, 10);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(o, 255, 0);
    }
  }
  drawSprites();

}


function hasCollided(object1, object2) {
  object1RightEdge = object1.x + object1.width;
  object2LeftEdge = object2.x;
  if (object1RightEdge >= object2LeftEdge) {
    return true;
  }

  else{
    return false;
  }
}