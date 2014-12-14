var y = 300;
var x=600;
var i = 0;
var u=0;


function setup () {
  createCanvas(1200,600);
  noSmooth();
  noStroke();
  rectMode(CENTER);
  background(255);
  fill(0);
  textSize(15);
  text("Try to draw something nice using the keys W,S,A,D to control the direction of your pencil. Use the key F to pause, C to change the color and P to save your drawing", 10,40);


}

function draw(){

    if (i===1){
      x++;
    }
    if (i===2){
      x--;
    }
    if (i===3){
      y++;
    }
    if (i===4){
      y--;
    }
    fill(u);
    rect(x,y,10,10);

    print(i);


}

function keyTyped(){

  if (key === 'd') {
    i=1;
  }
  if (key === 'a') {
    i=2;
  }
  if (key === 's') {
    i=3;
  }
  if (key === 'w') {
    i=4;
  }
  if (key === 'f') {
    i=0;
  }
  if (key === 'c'){
    u= random(0,255);
  }
  if (key === 'p'){
    save('myDrawing.jpg');
  }

}
