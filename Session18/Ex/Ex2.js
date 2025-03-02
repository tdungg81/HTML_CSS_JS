let math = Number(prompt("Nhập điểm toán"));
let literature = Number(prompt("Nhập điểm văn"));
let english = Number(prompt("Nhập điểm anh"));

let result = (math + literature + english) / 3;

let grade;

if (result >= 8) {
    grade = "Giỏi";
} else if (result >= 6.5) {
    grade = "Khá";
} else if (result >= 5) {
    grade = "Trung bình";
} else {
    grade = "Yếu";
}

console.log(grade);
