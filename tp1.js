var img;
var c, r, g, b, l, a, x, y;

function preload(){
  img= loadImage("ilusion.jpg");
}

function setup() {
  createCanvas(800, 400);
  background(230);
  
}

function draw() {
  fill(255);
  rect(528,91,150,200); 
  c++;
  if(c>=300){
    fill(153,255,0);
    rect(0,0,800,400);
    c=0;
  } 
  image(img,0,0,400,400);
  var distX=60;
  var distY=20;
  fill(50);
  for(var y=0;y<=20;y++){
    for(var x=0;x<=20;x++){
  rect(distX*x+400,distY*y,30,10);
  }
  }
  for(var y=0;y<=20;y++){
    for(var x=0;x<=20;x++){
  rect(distX*x+430,distY*y+10,30,10);
  }
  }
  fill(255);
  rect(528,91,150,200);
  if(key=='i'){
  dibujoRectangulo(153,255,0,528,91,150,200);
  }
  if(key=='l'){
  dibujoRectangulo(255,153,153,528,91,150,200);
  }
  if(key=='u'){
  dibujoRectangulo(255,51,255,528,91,150,200);
  }
  if(key=='s'){
  dibujoRectangulo(0,102,255,528,91,150,200);
  }
  if(key=='o'){
  dibujoRectangulo(255,51,0,528,91,150,200);
  }
  if(key=='n'){
  dibujoRectangulo(153,153,204,528,91,150,200);
  }
  fill(0);
  var distx=20;
  var disty=100;
  for(var y=0;y<2;y++){
    for(var x=0;x<8;x++){
    rect(distx*x+528,disty*y+91,10,50);
    }  
  }
  for(var y=0;y<2;y++){
    for(var x=0;x<7;x++){
    rect(distx*x+528+10,disty*y+91+50,10,50);
    }
  }
}

function keyPressed(){

if (key=='r'){
 resetearVariables();
}
}

function dibujoRectangulo( r,  g,  b,  l,  a,  x,  y){
  fill(r,g,b);
  rect(l,a,x,y);
}

function resetearVariables(){
  fill(230);
  rect(0,0,800,400);
  fill(255);
  rect(528,91,150,200);

}
