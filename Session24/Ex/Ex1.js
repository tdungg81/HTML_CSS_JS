let arr = [];
let choice = 0;
do {
    choice = +prompt("1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần tử trong mảng\n5. Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần\n7. Thoát chương trình")
    console.log(choice)
    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập phần tử vào mảng"))
            arr = []
            if (n <= 0 || isNaN(n)) {
                alert("Nhập mảng số nguyên")
            } else {
                for (let i = 0; i < n; i++) {
                    let num = prompt(`Phần tử số ${i}`)
                    arr.push(num)
                }
            }
            break;
        
        case 2:
            console.log(arr.join(" "));
            break;
        
        case 3:
            let min = arr[0]
            let max = arr[0]
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > max) {
                    max = arr[i]
                }
                if (arr[i] < min) {
                    min = arr[i]
                }
            }
            console.log(`Phần tử lớn nhất là: ${max}\nPhần tử nhỏ nhất là: ${min}`);
            break;
        
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += +arr[i];
            }
            console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            break;
        case 5:
            let searchNumber = +prompt("Nhập số cần tìm")
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == searchNumber) {
                count++;
                }
            }
            console.log(`Số lần xuất hiện của ${searchNumber} trong mảng: ${count}`);
        break;
        
        case 6:
            arr.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            break;

        case 7:
            alert("Thoát")
            break;
    
        default:
            break;
    }
} while (choice !== 7);