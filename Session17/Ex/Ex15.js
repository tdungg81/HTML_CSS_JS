let r = parseFloat(prompt("Nhập bán kính của hình cầu: "));

let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
let acreage = 4 * Math.PI * Math.pow(r, 2);
let perimeter = 2 * Math.PI * r;

// Hiển thị kết quả
console.log("Thể tích hình cầu: " + volume);
console.log("Diện tích bề mặt hình cầu: " + acreage);
console.log("Chu vi lớn nhất của hình cầu: " + perimeter);
