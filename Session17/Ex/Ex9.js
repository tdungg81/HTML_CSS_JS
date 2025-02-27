let a = Number(prompt("Nhập số thứ nhất "));
let b = Number(prompt("Nhập số thứ hai "));
let c = Number(prompt("Nhập số thứ ba "));

let delta = Math.pow(b) - 4 * a * c;

let x1 = (-b + Math.sqrt(delta)) / 2 * a;
let x2 = (-b - Math.sqrt(delta)) / 2 * a;

document.write("x1 là: ", x1) ;
document.write(" x2 là: ", x2);




