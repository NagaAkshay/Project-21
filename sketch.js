// Create the variables that are needed
var wall, thickness;
var bullet, speed, weight;

function setup() {
  
  // Create your desired Canvas
  createCanvas(1600,400);
  
  // Assign a random number to Speed, Weight and Thickness
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  // Create the wall Sprite
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  
  // Create the Bullet Sprite
  bullet = createSprite(100, 200, 100, 10);
  bullet.velocityX = speed;
}

function draw() {
  
  // Assign a background
  background(255,255,255);
  
  // Create the "damage" variable
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    // Detect the damage and change the colour accordingly
    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }
  
  // draw the sprites
  drawSprites();

}

// Create the hasCollided Algorithm
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
