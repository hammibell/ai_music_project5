starboy_song = "starboy.mp3";
coming_song = "coming.mp3";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload(){
    loadSound("starboy.mp3");
    loadSound("coming.mp3");

}

function setup(){
    canvas = createCanvas(600, 550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("If you see this message, then you are in the clear!");

}

function gotPoses(results){
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    console.log("leftWristX ="+leftWristX+"leftWristY="+leftWristY);
    console.log("rightWristX ="+rightWristX+"rightWristY="+rightWristY);

}

function draw(){
    image(video, 0, 0, 600, 550);

    fill('#FF0000');
    stroke('#FF0000');

document.getElementById("song_name").innerHTML = scoreRightWrist;



}

function isPlaying(){
    song_coming.mp3.isPlaying(true);
    song_starboy.mp3(false);
}

function isPlaying1(){
    song_starboy.mp3(true);
    song_coming.mp3(false);

}

