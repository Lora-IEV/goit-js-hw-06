"use strict";

var input = document.querySelector("#font-size-control");
var span = document.querySelector("#text");
input.addEventListener("input", onImp);

function onImp(event) {
  span.style.fontSize = event.currentTarget.value + 'px';
} // const input = document.querySelector('#font-size-control');
// const span = document.querySelector('#text');
// input.addEventListener('input', onBlur);
// function onBlur(e) {
//     span.style.fontSize = e.currentTarget.value + "px";
// }