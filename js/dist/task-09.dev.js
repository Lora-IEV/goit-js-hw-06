"use strict";

function getRandomHexColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}

document.preventDefalut();

function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener('load', function () {
  changeBackground('red');
});