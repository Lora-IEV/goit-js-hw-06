"use strict";

var input = document.querySelector("#font-size-control");
var span = document.querySelector("#text");
span.style.fontSize = input.value + 'px';
input.addEventListener('input', function () {
  span.style.fontSize = input.value + 'px';
}); // const input = document.querySelector('#font-size-control');
// const span = document.querySelector('#text');
// input.addEventListener('input', onBlur);
// function onBlur(e) {
//     span.style.fontSize = e.currentTarget.value + "px";
// }