let bodyElement = document.body;
let greenElement = document.getElementById("green");
let redElement = document.getElementById("red");
let purpleElement = document.getElementById("purple")

greenElement.addEventListener("click", function () {
    bodyElement.classList.add("green-mode")
    bodyElement.classList.remove("red-mode")
    bodyElement.classList.remove("purple-mode")
});
redElement.addEventListener("click", function () {
    bodyElement.classList.add("red-mode")
    bodyElement.classList.remove("green-mode")
    bodyElement.classList.remove("purple-mode")
});
purpleElement.addEventListener("click", function () {
    bodyElement.classList.add("purple-mode")
    bodyElement.classList.remove("red-mode")
    bodyElement.classList.remove("green-mode")
});


