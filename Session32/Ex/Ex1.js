function changeColor() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.getElementsByClassName("background")[0].style.background = `rgb(${a},${b},${c})`;

}
