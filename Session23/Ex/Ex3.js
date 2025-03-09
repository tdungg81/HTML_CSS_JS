let n = +prompt("Nhập số phần tử của mảng:");

if (n && n > 0) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        let num = +prompt(`Phần tử số ${i}:`);
        numbers.push(num);
    }
    
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            count++;
        }
    }
    
    if (numbers.length === 0 || count === 0) {
        alert("Mảng không có phần tử");
    } else {
        alert(`Mảng có ${count} phần tử là số nguyên âm`);
    }
} else {
    alert("Số lượng phần tử không hợp lệ");
}