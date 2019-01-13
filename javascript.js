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
  
  
      stroke(255, 100);
      strokeWeight(stroker);
      noFill();
      ellipse(prevx, prevy, radius * 2);
 
  
      //fill(255);
      stroke(255);
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

function showVal(value) {
  fSlider = value;
  if (abortMode === "off") {
    document.getElementById("holder").innerHTML = "Current series is: " + value;
  }
}

function changeTime(value) {
  timeAdd = Number(value);
  document.getElementById("tholder").innerHTML = "Speed: " + round(value * 100);
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

