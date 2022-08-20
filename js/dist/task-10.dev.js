"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var boxes = document.querySelector("#boxes");
var input = document.querySelector("input");
var createBtn = document.querySelector("[data-create]");
var deleteBtn = document.querySelector("[data-destroy]");
createBtn.addEventListener("click", function () {
  var add = createSquares(input.value);
  boxes.append.apply(boxes, _toConsumableArray(add));
});
deleteBtn.addEventListener("click", function () {
  destroyer.call();
});

function createSquares(amount) {
  var firstSize = 30;
  var squares = [];

  for (var i = 0; i < amount; i += 1) {
    firstSize += 10 * i;
    var box = document.createElement("div");
    box.style.backgroundColor = randomColor();
    box.style.cssText = " background-color: ".concat(randomColor(), "; \n    height: ").concat(firstSize + "px", "; width: ").concat(firstSize + "px", "; margin: 10px;");
    squares.push(box);
  }

  return squares;
}

function destroyer() {
  boxes.innerHTML = "";
  input.value = "";
}

function randomColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0));
}