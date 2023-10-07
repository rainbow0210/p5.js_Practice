let a = 0
let b = 0
let c = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(b, c, 40)
  
  if(b <= 200){
    b++;
    c--; 
  }
  else{
    b++;
    c++;
  }
  
  if(b == 400){
    b = 0;
    c = 200;
  }
}