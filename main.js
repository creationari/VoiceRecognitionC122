x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "TThe speech has been recognised as - "+content;
  if(content == "circle"){
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "Started drawing circle";
    draw_circle = "Set";
  }
  if(content == "rectangle"){
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "Started drawing rectangle";
    draw_rect = "Set";
}
}
function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_circle == "Set"){
        radius = Math.floor(Math.random()*100);
        stroke("red");
        fill("blue");
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }
    if(draw_rect == "Set"){
        stroke("yellow");
        fill("cyan");
        h = Math.floor(Math.random()*100);
        w =  Math.floor(Math.random()*100);
        rect(x,y,w,h);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}