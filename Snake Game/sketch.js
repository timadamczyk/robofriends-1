var s;
var scl = 20;
var food;


function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var cols = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(cols)));
  food.mult(scl);
}


function draw() {
  background(226, 255, 253);
  s.update();
  s.show();
  
  if (s.eat(food)) {
    pickLocation();
  }
  
  fill(255, 153, 0);
  rect(food.x, food.y, scl, scl)
}

function keyPressed () {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

  