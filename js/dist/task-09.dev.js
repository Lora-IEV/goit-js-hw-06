"use strict";

function itsRundomColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0));
}

var btn = document.querySelector(".change-color");
var textColor = document.querySelector(".color");
var body = document.body;
btn.addEventListener("click", changeColorBody);

function changeColorBody() {
  var randomColor = itsRundomColor();
  body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}