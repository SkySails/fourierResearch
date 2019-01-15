console.log(window.innerWidth )
var dWidth = window.innerWidth;

var img;
function preload() {
  img = loadImage('blackboard.png');
}

let time = 0
let wave = []

let fSlider;

function setup() {
  createCanvas(windowWidth,windowHeight);
  fSlider = 2
  timeAdd = 0.03
  stroker = 3
}

 

let abortMode = "off";

function draw() {
  if (abortMode === "on") {
    return;
  }
  else {
    background(img);
    translate(180, 300);
  
    let x = 0;
    let y = 0;
  
    for(let i = 0; i < fSlider; i++) {
      let prevx = x;
      let prevy = y;
      let n = i * 2 + 1;
      let radius = 75 * (4 / (n * PI));
      x += radius * cos(n * time);
      y += radius * sin(n * time);
  
  
      stroke('rgba(255, 255, 255,0.7)');
      strokeWeight(stroker);
      noFill();
      ellipse(prevx, prevy, radius * 2);
 
  
      //fill(255);
      stroke('#42b9f4');
      line(prevx,prevy,x,y);
      ellipse(x, y, 2);
    }
  

  wave.unshift(y);
  translate(200, 0);
  line(x-200, y, 0, wave[0]);
  
  
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();
  
  
  time += timeAdd;
  
  if (wave.length > (dWidth - 400)) {
    wave.pop();
  }
  }
}

function pauser() {
  if (abortMode === "off") {
    abortMode = "on";
    document.getElementById("button").style.backgroundColor = "Green"
    document.getElementById("button").value = "Play Animation"
    document.getElementById("holder").innerHTML = "Paused, (" + document.getElementById("slider").value + " series)"
  }
  else {
    abortMode = "off";
    document.getElementById("button").style.backgroundColor = "red"
    document.getElementById("button").value = "Pause Animation"
    document.getElementById("holder").innerHTML = "Current series is: " + document.getElementById("slider").value
    
  }
}

function showVal() {
  fSlider = document.getElementById("slider").value;
  if (abortMode === "off") {
    document.getElementById("holder").innerHTML = "Current series is: " + document.getElementById("slider").value;
  }
}

function changeTime() {
  timeAdd = Number(document.getElementById("tslider").value);
  document.getElementById("tholder").innerHTML = "Speed: " + round(document.getElementById("tslider").value * 100);
}

function changeStroke(value) {
  stroker = Number(value);
  document.getElementById("tholder").innerHTML = "Stroke is: " + value;
}


/* window.onresize = function() {
  dWidth = window.innerWidth;
  setup();
  draw();
  wave.pop()
}; */

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  dWidth = window.innerWidth;
}

window.onblur = function() {
  document.title = "Pornhub"
  document.getElementById("iconTest").href = "https://ci.phncdn.com/www-static/favicon.ico?cache=2019011002"
};

window.onfocus = function() {
  document.title = "Fourier"
  document.getElementById("iconTest").href = "https://pbs.twimg.com/profile_images/1827828964/fo-logo_400x400.png"
};

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      pauser();
    }
    if(e.keyCode == 69){ // Key E pressed
      document.getElementById("tslider").value = Number(document.getElementById("tslider").value) + 0.01;
      console.log(document.getElementById("tslider").value);
      changeTime()
    }
    if(e.keyCode == 81){ // Key Q pressed
      document.getElementById("tslider").value = Number(document.getElementById("tslider").value) - 0.01;
      console.log(document.getElementById("tslider").value);
      changeTime()
    }
    if(e.keyCode == 65){ //Key A pressed
      document.getElementById("slider").value = Number(document.getElementById("slider").value) - 1;
      console.log(document.getElementById("slider").value);
      showVal()
    }
    if(e.keyCode == 68){ //Key D pressed
      document.getElementById("slider").value = Number(document.getElementById("slider").value) + 1;
      console.log(document.getElementById("slider").value);
      showVal()
    }
}

function toolTip() {
  var state = document.getElementById("instructions").className
  console.log(state)
  if (state === "instructionsHidden") {
    state === "instructionsVisible";
    console.log("TEst")
  }
  else {
    document.getElementById("instructions").className === "instructionsHidden";
    console.log("Test2")
  }
}