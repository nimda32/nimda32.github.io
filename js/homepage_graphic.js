
import processing.opengl.*;
// used for the changing color effect

int rotY, rotY_incremental, scaleAmount;

void setup() {

    //Rendering size set to window width/height, P3D denotes OpenGL rendering
    size(window.innerWidth, window.innerHeight, OPENGL);
    colorMode(HSB, 100, 100, 100, 100);
    frameRate(28);

    //initialize globals
    rotY_incremental = 0;
    rotY = 0;
    scaleAmount = 3;

    //prepare text
    textFont(createFont("Arial", 64));
    textSize(44);
}

void draw() {
    //prepares canvas
    background(0, 0, 0);
    translate(width / 2.5, height / 2);
    stroke(100);
    scale(scaleAmount);

    //
    // Drawing button
    //
    //hints to prevent text background and 3d position bug

    // rectangle backgroud around text

    hint(DISABLE_DEPTH_SORT);
    hint(DISABLE_DEPTH_TEST);
    fill(0, 100, 0);
    textMode(SCREEN);

    pushMatrix();

    if (mousePressed) {
        translate(1, 1);
        text("TWERK", 0, 0);
    }

    noFill();
    rect(-30, -15, 55, 30);

    //sets color of text and text renderer
    fill(100, 0, 100);
    //scale down for antialiasing
    scale(1 / scaleAmount);

    text("WORK", -70, 0);

    popMatrix();
    hint(ENABLE_DEPTH_SORT);
    hint(ENABLE_DEPTH_TEST);
    noFill();
    line(-29, 16, 26, 16);
    line(26, 16, 26, -14);
    line(14, 30.2);
    //******************
    // Begins Animation
    //

    // Slows the color change by 1/10
    if (frameCount % 3 == 0) {
        rotY += 9024;
    }

    //
    // rotateY(radians(frameCount/60 * 1400));
    rotateX(radians(frameCount / 4));
    rotateY(radians(rotY) + radians(rotY_incremental--/2));

    int numberOfTriangles = 15; //depend on time todo
    for (int i = 0; i < numberOfTriangles; i++) {
        fill(map(i % 10, 0, 10, 0, 100), 30, 100);
        beginShape(TRIANGLE_FAN);
        vertex(150, 25, 25);
        vertex(100, 100, 50);
        vertex(100, 20, 20);
        fill(map(i % 10, 0, 10, 0, 100), 100, 100, 20);
        vertex(100, 0, 0);
        vertex(100, 0, 0);
        endShape();
        rotateY(radians(360 / numberOfTriangles));
    }

}
  // // Ends Animation // //******************
