let number1 = Number(prompt("Nhập số thứ nhất: "));
let number2 = Number(prompt("Nhập số thứ hai: "));

let minNumber = Math.min(number1, number2);
let maxNumber = Math.max(Number1, number2);

let numberRandom = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber ;

document.write("Số ngẫu nhiên là:" +numberRandom);