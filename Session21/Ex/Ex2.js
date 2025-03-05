let oddTotal = 0;
let evenTotal = 0;

for (let i = 0; i < 5; i++){
    let input = prompt(`Nhập vào số nguyên thứ ${i + 1}`)
    let number = parseInt(input);

    if (!isNaN(number)) {
        if (number % 2 === 0) {
            evenTotal++;
        } else {
            oddTotal++;
        }
    } else {
        alert("Vui lòng nhập số hợp lệ");
    }
}
console.log(`Tổng số chẵn là : ${evenTotal}`);
console.log(`Tổng số lẻ là : ${oddTotal}`);

