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
    let maxNumber1 = 0
    let maxNumber2 = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxNumber1)
            maxNumber2 = maxNumber1
            maxNumber1 = arr[i]
    }
    alert("Số lớn thứ 2 trong mảng là: ", +maxNumber2)
}