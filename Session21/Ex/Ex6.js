let number = prompt("Nhập một số nguyên");

if (isNaN(number)) {
    console.log("Vui lòng nhập số hợp lệ");
} else {
    console.log(`Các ước của ${number} là`);
    for (let i = 0; i <= Math.abs(number); i++){
        if (number % i === 0) {
            console.log(i);
        }
    }
}