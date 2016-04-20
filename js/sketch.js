function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 100);
  frameRate(28);
}

function draw() {
  // background(255,255,255);
  background('#0x000'); //hsb
  // strokeWeight(90);
  stroke(10);
  // blendMode(LIGHTEST);
  //    - linear interpolation of colours: C = A*factor + B. This is the default blending mode.
  //  - sum of A and B
  //  - only the darkest colour succeeds: C = min(A*factor, B).
  //  - only the lightest colour succeeds: C = max(A*factor, B).
  // DIFFERENCE - subtract colors from underlying image.
  // EXCLUSION - similar to DIFFERENCE, but less extreme.
  // MULTIPLY - multiply the colors, result will always be darker.
  // SCREEN - opposite multiply, uses inverse values of the colors.
  // REPLACE - the pixels entirely replace the others and don't utilize alpha (transparency) values.
  // OVERLAY - mix of MULTIPLY and SCREEN . Multiplies dark values, and screens light values.
  // HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.
  // SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.
  // DODGE - lightens light tones and increases contrast, ignores darks.
  // BURN -

  rotateX(radians(frameCount / 90 * 20 + 180));
  rotateY(radians(frameCount / 60 * 2000 + 90));

  var numberOfTriangles = 11; //depend on time todo

  for (var i = 0; i < numberOfTriangles; i++) {
    fill(map(i % 10, 0, 10, 0, 100), 100, 100, 100);

    beginShape(TRIANGLE_FAN);
    vertex(150, 25, 25);
    vertex(100, 100, 50);
    vertex(100, 20, 20);
    vertex(100, 0, 0);
    endShape();

    rotateY(radians(360 / numberOfTriangles));
  }

}
