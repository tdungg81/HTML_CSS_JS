let r = Number(prompt("Nhâp bán kính"));
let h = Number(prompt("Nhập chiều cao"));

let surroundingArea = 2 * Math.PI * r * h;
let totalArea = (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));
let volume = Math.PI * Math.pow(r, 2) * h;
let bottomCircumference = Math.PI * Math.pow(r, 2);

document.write("Diện tích xung quanh hình trụ: ", +surroundingArea);
document.write("Diện tích toàn phần hình trụ: ", +totalArea);
document.write("Thể tích hình trụ: ", +volume);
document.write("Chu vi đáy hình trụ: ", +bottomCircumference);


