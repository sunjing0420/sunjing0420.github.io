
var brushSize;
var canvas;
var c;
var whole=false;
var slider;

function setup() {
   canvas=createCanvas(1000, 500);
   canvas.parent('myContainer');
   canvas.position(0, 0);
   c=color(255);
   slider = createSlider(30, 80, 100);
   slider.position(600, 180);
   brushSize=slider.value();
}

function draw() {
  if(whole==true){
    if(mouseIsPressed){
      fill(255);
      brushSize=slider.value();
      ellipse(mouseX, mouseY, brushSize, brushSize);
    }
  }
  if (whole==false) {
    if (mouseIsPressed) {

    fill(c);
    brushSize=slider.value();
    ellipse(mouseX, mouseY, brushSize, brushSize);
    ellipse(width-mouseX, mouseY, brushSize, brushSize);
    
  }
}
}

function myFunction(){
  c=color(random(255),random(255),random(255));
}

function sign(){
  whole=true;
  brushSize=40;
  noStroke();
}

