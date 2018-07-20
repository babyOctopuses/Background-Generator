var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var bodyh=document.querySelector("body");
var button=document.getElementById("button");

function changeColor(){
bodyh.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";		
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

