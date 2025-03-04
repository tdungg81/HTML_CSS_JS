let number = Number(prompt("Nhập một số nguyên dương"));
let integer = parseInt(number);
let sum = 0;

if (isNaN(number) || number < 1) {
    alert("Số không hợp lệ");
} else {
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    alert(sum);
}
