let arr = []; 
let choice;
do {
    choice = prompt(
        `Chọn chức năng:
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`
    );
    switch (choice) {
        case 1: 
                const rows = parseInt(prompt("Nhập số hàng:"));
                const cols = parseInt(prompt("Nhập số cột:"));
                arr = [];
                for (let i = 0; i < rows; i++) {
                    const row = [];
                    for (let j = 0; j < cols; j++) {
                        const value = parseFloat(prompt(`Nhập giá trị tại hàng ${i + 1}, cột ${j + 1}:`));
                        row.push(value);
                    }
                    arr.push(row);
                }
                alert("Mảng đã được nhập thành công!");
            break;
        case 2: 
            
                if (arr.length === 0) {
                    alert("Mảng chưa được nhập!");
                    break;
                }
                let output = "Mảng 2 chiều:\n";
                for (let i = 0; i < arr.length; i++) {
                    output += arr[i].join("\t") + "\n";
                }
                alert(output);
            break;

        case 3: 
                if (arr.length === 0) {
                    alert("Mảng chưa được nhập!");
                    break;
                }
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                alert(`Tổng các phần tử trong mảng: ${sum}`);
            break;

        case 4: 
                if (arr.length === 0) {
                    alert("Mảng chưa được nhập!");
                    break;
                }
                let max = arr[0][0];
                let maxRow = 0;
                let maxCol = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert(`Phần tử lớn nhất: ${max} tại hàng ${maxRow + 1}, cột ${maxCol + 1}`);
            break;

        case 5: 
                if (arr.length === 0) {
                    alert("Mảng chưa được nhập!");
                    break;
                }
                const rowIndex = parseInt(prompt("Nhập số hàng cần tính trung bình:")) - 1;
                if (rowIndex < 0 || rowIndex >= arr.length) {
                    alert("Hàng không hợp lệ!");
                    break;
                }
                const row = arr[rowIndex];
                const sum = row.reduce((acc, val) => acc + val, 0);
                const average = sum / row.length;
                alert(`Trung bình cộng của hàng ${rowIndex + 1}: ${average}`);
            break;

        case 6: 
                if (arr.length === 0) {
                    alert("Mảng chưa được nhập!");
                    break;
                }
                arr.reverse();
                alert("Các hàng trong mảng đã được đảo ngược!");
            break;

        case 7: 
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== "7"); 