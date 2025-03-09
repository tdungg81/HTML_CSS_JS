let arr = []
let choice;
do {
    choice = +prompt(`================== MENU ===================\n\n1. Nhập số phần tử cần nhập và giá trị các phần tử\n2. In ra giá trị các phần tử đang quản lý\n3. In ra giá trị các phần tử chẵn và tính tổng\n4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n7. Thêm một phần tử vào vị trí chỉ định\n8. Thoát\n\n===========================================\n\nLựa chọn của bạn:`);
    switch (choice) {
        case 1:
            let n = prompt("Nhập số phần tử cần nhập và giá trị các phần tử")
            arr = []
            for (i = 0; i < n; i++){
                arr.push(prompt(`array[${i}]:`))
            }
            break;
        
        case 2:
            console.log(arr.join(", "));
            break;
        
        case 3:
            evenNumber = []
            evenSum = 0
            for (let i = 0; i < array.length; i++) {
                if (arr[i] % 2 === 0) {
                    evenNumbers.push(arr[i])
                    evenSum += array[i]
                }
            }
            console.log(`Các số chẵn: ${evenNumbers.join(", ")}\nTổng các số chẵn là: ${evenSum}`);
            break;
        
        case 4:
            let min = arr[0]
            let max = arr[0]
            for (i = 0; i < arr.length; i++){
                if (arr[i] > max) {
                    max = arr[i]
                }
                if (arr[i] < min) {
                    min = arr[i]
                }
            }
            console.log(`Số lớn nhất là: ${max}\n Số nhỏ nhất là: ${min}`);
            
        case 5:
            let prime = []
            let sumPrime = 0
            for (let i = 0; i < arr.length; i++) {
                let num = arr[i];
                if (num > 1) {
                    let isPrime = true;
                    for (let j = 2; j * j <= num; j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primes.push(num);
                        sumPrime += num;
                    }
                }
            }
            alert(`Các số nguyên tố: ${primes.join(", ")}\nTổng: ${sumPrime}`);
            break;
        
        case 6:
            let searchNumber = +prompt("Nhập số cần tìm: ");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === searchNumber) {
                    count++;  
                }
            }
            alert(`Số lần xuất hiện của ${searchNumber}: ${count}`);
            break;
        
        case 7:
            let value = +prompt("Nhập giá trị cần thêm: ");
            let position = +prompt("Nhập vị trí cần chèn: ");
            if (position >= 0 && position <= arr.length) {
                let newArr = [];
                for (let i = 0; i < arr.length; i++) {
                    if (i === position) {
                        newArr.push(value);
                    }
                    newArr.push(arr[i]);
                }
                if (position === arr.length) {
                    newArr.push(value);
                }
                arr = newArr;
            } else {
                alert("Sai vị trí");
            }
            break;
        
        case 8:
            alert("Thoát");
            break;

            
        default:
            break;
    }
}while (choice !== 8)