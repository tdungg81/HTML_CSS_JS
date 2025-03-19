let textElement = document.getElementById("text");
let hideButton = document.getElementById("hideButton");
let showButton = document.getElementById("showButton");

hideButton.addEventListener("click", function () {
    textElement.style.display = "none"
});
showButton.addEventListener("click", function () {
    textElement.style.display = "block";
})