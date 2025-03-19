var modalElement = document.getElementById("myModal");
var openElement = document.getElementById("openModal");
var closeElement = document.getElementsByClassName("close")[0];

    openElement.addEventListener("click", function() {
        modalElement.style.display = "block";
    })
    closeElement.addEventListener("click", function() {
        modalElement.style.display = "none";
    })