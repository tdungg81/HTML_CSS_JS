let n = prompt("Nhập số phần tử trong mảng");
let arr = [];

if (n <= 0 || isNaN(n)) {
    alert("Mảng không có ký tự số")
} else {
    for (i = 0; i < n; i++){
        let num = prompt(`Phần tử số ${i}`)
        arr.push(num)
    }
    let numChar = []
    for (let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])) {
            numChar.push(arr[i])
        }
    }
    if (numChar.length > 0) {
        alert("Số ký tự số trong mảng là: " +numChar.join(" "))
    } else {
        alert("Không có ký tự số")
    }
}
