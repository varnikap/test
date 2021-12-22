noseX = 0;
noseY = 0;
differance = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized' );
}

//function draw()
//{
    //background('#FF0000');
    //document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + differance + "px";
 
    //fill('#F90093');
   // stroke('#f90093');
   // square(noseX, noseY, differance); 
//}//


function gotPoses(results) 
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log(" noseX = " + noseX + "noseY = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
differance = floor(leftWristX - rightWristX);

console.log("leftWrist X = " + leftWristX + "rightWristX = " + rightWristX + "differance = " + differance);
}
}

function draw() 
{ 
    background('#969A97'); 
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + differance +"px"; 
    fill('#F90093'); 
stroke('#F90093'); 
square(noseX, noseY, differance); }