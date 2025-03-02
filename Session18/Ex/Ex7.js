let a = Number(prompt("Nhập số a"));

let b = Number(prompt("Nhập số b"));

let operation = prompt("Nhập các phép tính +, -, *, /");

let result;
switch (operation) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        result = a / b;
    default:
        result = "Phép tính không hợp lệ";
        break;
}
alert("Kết quả: " + result);