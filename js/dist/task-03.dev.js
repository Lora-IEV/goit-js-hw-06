"use strict";

var images = [{
  url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
  alt: "White and Black Long Fur Cat"
}, {
  url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
  alt: "Orange and White Koi Fish Near Yellow Koi Fish"
}, {
  url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
  alt: "Group of Horses Running"
}];
var gallery = document.querySelector('.gallery');
console.log(gallery);

var galleryList = function galleryList(item) {
  return "<li>\n    <img src=\"".concat(item.url, "\" alt=\"").concat(item.alt, "\" width=\"350\"/>\n  </li>");
};

var inTegsItems = images.map(galleryList).join('');
console.log(inTegsItems);
gallery.insertAdjacentHTML('beforeend', inTegsItems);