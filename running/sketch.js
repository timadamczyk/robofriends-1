
let bubbles = [];

setup = () => {  
  createCanvas(windowWidth, windowHeight);
  background(200);
}

draw = () => {
  for (let i = 0 ; i < 10; i++) {
  
    bubbles.push( 
      ellipse(mouseX,100,100,100)
    )
    
  }
}
