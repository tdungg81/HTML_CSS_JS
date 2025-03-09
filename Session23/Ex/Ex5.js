let n = prompt("Nhập số phần tử trong mảng")
let arr = []

if (n < 0 || isNaN(n)) {
    alert("Số lượng phần tử không được âm")
} else if (n === 0) {
    alert("Mảng không có phần tử")
} else {
    for (i = 0; i < n; i++) {
        let num = prompt(`Phần tử số ${i}`)
        arr.push(num)
    }
    let sum = 0
    let hasNumber = false
    for (i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum += parseInt(arr[i])
            hasNumber = true
        }
    }
    if (hasNumber) {
        alert("Tổng các số là : " + sum)
    } else {
        alert("Không có phần tử nào là số")
    }
}