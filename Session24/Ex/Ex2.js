let arr = [];
let choice ;
do {
    choice = +prompt("1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình")
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
            console.log(arr);
            
            break;
        
        case 2:
            console.log(arr.join(" "));
            break;
        
        case 3:
            let evenNumber = []
            let oddNumber = []
            for (let i = 0; i < arr.length; i++){
                if (arr[i] % 2 === 0) {
                    evenNumber.push(arr[i])
                } else {
                    oddNumber.push(arr[i])
                }
            }
            console.log(`Các số chẵn là :${evenNumber}\n Các số lẻ là: ${oddNumber}`);
            break;
        
        case 4:
            let sum = 0
            for (i = 0; i < arr.length; i++){
                sum += +arr[i];
            }
            let average = sum / arr.length;
            console.log(`Tổng các phần tử: ${sum}`);
            console.log(`Trung bình cộng: ${average.toFixed(2)}`);
            break;
        case 5:
            let index = parseInt(prompt("Nhập vị trí cần xóa"))
            if (isNaN(index) || index < 0 || index >= arr.length) {
                alert("Vị trí không hợp lệ. Vui lòng nhập lại!")
            } else {
                for (let i = index; i < arr.length - 1; i++){
                    arr[i] = arr[i + 1]
                }
                arr.pop()
                console.log("Mảng sau khi xóa phần tử:", arr);
                
            }
            break;
        
        case 6:
            let maxNumber1 = 0
            let maxNumber2 = 0
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > maxNumber1) {
                    maxNumber2 = maxNumber1
                    maxNumber1 = arr[i]
                }
            }
            console.log("Số lớn thứ 2 trong mảng là: ", +maxNumber2);
            break;
        case 7:
            alert("Thoát")
            break;
        default:
            break;
    }
} while (choice !== 7);