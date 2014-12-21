function setup() {
  createCanvas(600, 400);
  noStroke();
  textSize(20);
  loadJSON("data.json", drawData);
}

function drawData(data) {
  // person 1 bubble
  fill(155, 30, 180, 180);
  ellipse(250, 200, data.Guess1 * 5,  5); // person1.age = 30
  fill(255);
  
}
