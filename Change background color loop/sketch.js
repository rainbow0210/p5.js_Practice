let a = 0
let b = 200
let c = 150
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(a, b, c);

  a++;
  b++;
  c++;
  
  if(a == 256){
    a = 0;
  }
}