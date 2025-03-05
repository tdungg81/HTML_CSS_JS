let sum = 0;
for (let i = 0; i < 5; i++){
    let input = prompt(`Nhập vào số nguyên thứ ${i + 1}`);
    let number = parseInt(input);

    if (!isNaN(number)) {
        if (number % 2 !== 0) {
            sum += number;
        }
    } else {
        console.log("Vui lòng nhập số hợp lệ");
    }
}
console.log(`Tổng các số lẻ là ${sum}`)
