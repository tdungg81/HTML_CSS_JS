let bodyElement = document.body
let buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", function () {
    if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
    } else {
        bodyElement.classList.add("dark-mode");
    }
});