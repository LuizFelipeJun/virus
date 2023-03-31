var canvas;
var video;

function setup() {
   canvas = createCanvas(700, 500);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
}

function draw() {
   image(video, 100, 50, 500, 400);
   fill(65, 105, 225);
   rect(20, 80, 100, 20);
   rect(80, 40, 100, 20);
   rect(80, 120, 100, 20);
   fill(47,79,79);
   circle(590, 260, 50, 50);
   circle(570, 320, 50, 50);
   circle(590, 380, 50, 50);
}

function tirarFoto() {
   save("virus.png");
}