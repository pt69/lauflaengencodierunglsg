let img;
let string = "";
let kodiert = "";
let index = 0;

function setup() {
  createCanvas(200, 200);
  background(240);
  img = createImage(200, 200);
}

function draw() {
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      if (i == mouseX && j == mouseY) {
        img.set(i, j, color(255, 100, 0));
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);

  string = img.pixels;
  kodieren(string);

  if (frameCount%360 == 1) {
    print (kodiert);
  }
}

function kodieren(t) {
  kodiert = "";
  for (let i = 0; i < t.length; i++) {
    if (t[i] == t[i+1]) {
      index++;
    }
    else {
      index++;
      kodiert = kodiert + index + "," + t[i] + ",";
      index = 0;
    }
  }
}
