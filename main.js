img1 = "";
objects = [];
status = "";

function preload(){
img1 = loadImage('dog_cat.jpg');
}

function setup(){
canvas = createCanvas(650, 420);
canvas.center();
objectDetection = ml5.objectDetector('cocossd', ModelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Object. Please Stand By.";
}

function ModelLoaded(){
    console.log("Model is loaded. Copy.");
    status = true;
    objectDetection.detect(img1, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
objects = results;
}
    }

function draw(){
image(img1, 0, 0, 650, 420);
if(status!=""){
for(i = 0; i<objects.length; i++){
document.getElementById("status").innerHTML = "Status: Object Detected. Don't close the tab, or the device.";

fill("#FF9570");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " +percent +"%", objects[i].x, objects[i].y);
noFill();
stroke("#FF9570");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}

}
}

