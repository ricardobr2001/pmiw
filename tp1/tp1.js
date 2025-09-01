let img;
let distX = 57.14285714285714;
let distY = 57.14285714285714;
let colorInicial, colorMedio, colorFinal, c;
let lado = 28.57142857142857;


let grisM1 = false;
let grisM2 = false;
let grisM3 = false;
let grisM4 = false;

function setup() {
  createCanvas(800, 400);
  background(255);
  img = loadImage('assets/tp3.jpg');
}

function draw() {
  image(img, 0, 0, 400, 400);
  noStroke();

  // MATRIZ 1
  for (let x = 0; x <= 7; x++) {
    for (let y = 0; y <= 7; y++) {
      if (grisM1) {
        colorCuadrados(0, 0, 0, 127, 127, 127, 255, 255, 255);
      } else {
        colorCuadrados(87, 35, 100, 194, 59, 34, 255, 217, 113);
      }

      if (y <= 3) {
        let f = map(y, 0, 3, 0, 1);
        c = colorDegradado(f, colorInicial, colorMedio);
      } else {
        let f = map(y, 4, 7, 0, 1);
        c = color(
          int(map(f, 0, 1, red(colorMedio), red(colorFinal))),
          int(map(f, 0, 1, green(colorMedio), green(colorFinal))),
          int(map(f, 0, 1, blue(colorMedio), blue(colorFinal)))
        );
      }

      let posX = distX * x + 400;
      let posY = distY * y;
      let centroX = posX + lado/2;
      let centroY = posY + lado/2;
      if (dist(mouseX, mouseY, centroX, centroY) < lado/2) {
        fill(255 - red(c), 255 - green(c), 255 - blue(c));
      } else {
        fill(c);
      }
      square(posX, posY, lado);
    }
  }

  // MATRIZ 2
  for (let x = 0; x <= 7; x++) {
    for (let y = 0; y <= 7; y++) {
      if (grisM2) {
        colorCuadrados(0, 0, 0, 127, 127, 127, 255, 255, 255);
      } else {
        colorCuadrados(0, 0, 128, 82, 163, 136, 255, 238, 140);
      }

      if (x <= 3) {
        let f = map(x, 0, 3, 0, 1);
        c = colorDegradado(f, colorInicial, colorMedio);
      } else if (x < 7) {
        let f = map(x, 4, 6, 0, 1);
        c = color(
          int(map(f, 0, 1, red(colorMedio), red(colorFinal))),
          int(map(f, 0, 1, green(colorMedio), green(colorFinal))),
          int(map(f, 0, 1, blue(colorMedio), blue(colorFinal)))
        );
      } else {
        c = colorFinal;
      }

      let posX = distX * x + 428.57142857142857;
      let posY = distY * y;
      let centroX = posX + lado/2;
      let centroY = posY + lado/2;
      if (dist(mouseX, mouseY, centroX, centroY) < lado/2) {
        fill(255 - red(c), 255 - green(c), 255 - blue(c));
      } else {
        fill(c);
      }
      square(posX, posY, lado);
    }
  }

  // MATRIZ 3
  for (let x = 0; x <= 7; x++) {
    for (let y = 0; y <= 7; y++) {
      if (grisM3) {
        colorCuadrados(255, 255, 255, 127, 127, 127, 0, 0, 0);
      } else {
        colorCuadrados(255, 238, 140, 82, 163, 136, 0, 0, 128);
      }

      if (x <= 3) {
        let f = map(x, 0, 3, 0, 1);
        c = colorDegradado(f, colorInicial, colorMedio);
      } else if (x < 7) {
        let f = map(x, 4, 6, 0, 1);
        c = color(
          int(map(f, 0, 1, red(colorMedio), red(colorFinal))),
          int(map(f, 0, 1, green(colorMedio), green(colorFinal))),
          int(map(f, 0, 1, blue(colorMedio), blue(colorFinal)))
        );
      } else {
        c = colorFinal;
      }

      let posX = distX * x + 400;
      let posY = distY * y + lado;
      let centroX = posX + lado/2;
      let centroY = posY + lado/2;
      if (dist(mouseX, mouseY, centroX, centroY) < lado/2) {
        fill(255 - red(c), 255 - green(c), 255 - blue(c));
      } else {
        fill(c);
      }
      square(posX, posY, lado);
    }
  }

  // MATRIZ 4
  for (let x = 0; x <= 7; x++) {
    for (let y = 0; y <= 7; y++) {
      if (grisM4) {
        colorCuadrados(255, 255, 255, 127, 127, 127, 0, 0, 0);
      } else {
        colorCuadrados(255, 217, 113, 194, 59, 34, 87, 35, 100);
      }

      if (y <= 3) {
        let f = map(y, 0, 3, 0, 1);
        c = colorDegradado(f, colorInicial, colorMedio);
      } else if (y < 7) {
        let f = map(y, 4, 6, 0, 1);
        c = color(
          int(map(f, 0, 1, red(colorMedio), red(colorFinal))),
          int(map(f, 0, 1, green(colorMedio), green(colorFinal))),
          int(map(f, 0, 1, blue(colorMedio), blue(colorFinal)))
        );
      } else {
        c = colorFinal;
      }

      let posX = distX * x + 428.57142857142857;
      let posY = distY * y + lado;
      let centroX = posX + lado/2;
      let centroY = posY + lado/2;
      if (dist(mouseX, mouseY, centroX, centroY) < lado/2) {
        fill(255 - red(c), 255 - green(c), 255 - blue(c));
      } else {
        fill(c);
      }
      square(posX, posY, lado);
    }
  }
}

function colorCuadrados( r1,  g1,  b1,  r2,  g2,  b2,  r3,  g3,  b3) {
  colorInicial = color(r1, g1, b1);
  colorMedio = color(r2, g2, b2);
  colorFinal = color(r3, g3, b3);
}

function keyPressed() {
  if (key == 'b') grisM1 = !grisM1;
  if (key == 'l') grisM2 = !grisM2;
  if (key == 'n') grisM3 = !grisM3;
  if (key == 'g') grisM4 = !grisM4;
  if (key == 'r') resetValores();
}

function resetValores() {
  grisM1 = false;
  grisM2 = false;
  grisM3 = false;
  grisM4 = false;
  
  
}

function colorDegradado( f,  c1,  c2) {
  let r = int(map(f, 0, 1, red(c1), red(c2)));
  let g = int(map(f, 0, 1, green(c1), green(c2)));
  let b = int(map(f, 0, 1, blue(c1), blue(c2)));
  return color(r, g, b);
}
