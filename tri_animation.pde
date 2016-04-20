//
// Author: Edmund Dao
// edmunddao@gmail
//

// Based on Jakub Valtar's depth sorting example:
// https://github.com/JakubValtar
    PFont font;

void setup() {
    //size(window.innerWidth, window.innerHeight, P3D);
    fullScreen(P3D);
    colorMode(HSB, 100, 100, 100, 100);
    frameRate(28);
    font = createFont("Arial",50,true);
    textFont(font);
}

void draw() {
    //black background
    background(0, 0, 100);
    
    translate(width/2, height/3);
    //rotateX(radians(frameCount/10.0f) * - mouseX);
    rotateY(radians(frameCount/10.0f));

    int numberOfTriangles = 9; //depend on time todo
    float x=0,y=0,z=0;
    String[] link_names = {"HOME","WORK","ME"};
    fill(0,0,0);  
    //noStroke();
      
    //textMode(SHAPE);
    for (int i = 0; i < 3; i++) {
                  //Draw Text on large traingles
              text(link_names[i], 300,200,50);    
              rotateY(radians(360/3));
    }
    
    for (int i = 0; i < numberOfTriangles; i++) {
      fill(map(i % 10, 0, 10, 0, 100), 30, 100, 30);
      if(i%3 == 0){
              //draw 3 giant triangles
              beginShape(TRIANGLE_FAN);
              vertex(150*3, 25*5, 25);
              vertex(100*3, 100*5, 50);
              vertex(100*3, 20*5, 20);
              vertex(0, -200, -200);
              endShape();
              
              //store relative points on canvas for mouse detection
              x = modelX(0, 0, 0);
              y = modelY(0, 0, 0);
              z = modelZ(0, 0, 0);
      }else{        
              //draw smaller triangles
              beginShape(TRIANGLE_FAN);
              vertex(150, 25, 25);
              vertex(100, 100, 50);
              vertex(100, 20, 20);
              vertex(100, 0, 0);
              endShape();
      }
              rotateY(radians(360/numberOfTriangles));
  }
  
  
  //if(mouseX )
}