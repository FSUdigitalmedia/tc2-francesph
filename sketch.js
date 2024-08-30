function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(600, 400);
}

function draw() {
  //creates a skyblue background
  background(135,206,235);
  //sun in top right
  fill("yellow"); //yellow
  stroke("orange"); //orange outline
  strokeWeight(20); // large outline
  circle(550,50,100);

  stroke(0);
  strokeWeight(1);

  //grass
  fill("green");
  rect(0,200,600,200);

  //emojis
  textSize(75);
  text("🌸",100,250); //sheep
  text("🐞", mouseX,mouseY); //ladybug
}
