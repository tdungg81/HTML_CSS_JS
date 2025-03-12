function inputArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        if (!isNaN(num)) {
            arr.push(num);
        } else {
            alert("Vui lòng nhập một số nguyên hợp lệ.");
            i--;
        }
    }
    return arr;
}
function processArray(arr) {
    let squaredArray = arr.map(num => num * num);
    let evenNumbers = squaredArray.filter(num => num % 2 === 0);
    return evenNumbers;
}
function main() {
    console.log("Nhập mảng số nguyên gồm 10 phần tử:");
    let inputArr = inputArray();
    console.log("Mảng đã nhập:", inputArr);
    let result = processArray(inputArr);
    console.log("Các giá trị bình phương là số chẵn:", result);
}

main();