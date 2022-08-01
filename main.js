function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    canvas = createCanvas(400,400);
    canvas.position()

}
function draw(){
    image(video, 0, 0);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;s
}
