const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach(function (categories) {
    console.log("Category :",categories.firstElementChild.textContent);
    console.log("Elements :",categories.lastElementChild.children.length);
    console.log(" ")
}
)