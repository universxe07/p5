function setup(){

    canvas = createCanvas(300, 300);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){

    image(video, 0, 0, 300, 300);
    fill("red");
    stroke("red");
    circle(50, 50, 80);
    circle(250, 50, 80);
    circle(50, 250, 80);
    circle(250, 250, 80);
    
    fill("green");
    stroke("green");
    rect(50, 50, 200, 20);
    rect(50, 50, 20, 200);
    rect(50, 250, 200, 20);
    rect(250, 50, 20, 220);
    
}



