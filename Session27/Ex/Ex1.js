function sum(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
function multi(a, b) {
    return a * b
}
function divide(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}
let choice
do {
    console.log("1. Cộng 2 số\n2. Trừ 2 số\n3. Nhân 2 số\n4. Chia 2 số\n5.Thoát")
    choice = +prompt("Mời bạn chọn")
    if (choice >= 1 && choice <= 4) {
        let a = +prompt("Nhập số thứ nhất: ");
        let b = +prompt("Nhập số thứ hai: ");
        switch (choice) {
            case 1:
                console.log(`Kết quả: ${sum(a, b)}`);
                break;
            case 2:
                console.log(`Kết quả: ${minus(a, b)}`);
                break;
            case 3:
                console.log(`Kết quả: ${multi(a, b)}`);
                break;
            case 4:
                console.log(`Kết quả: ${divide(a, b)}`);
                break;
        }
    } else if (choice !== 5) {
        console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== 5);