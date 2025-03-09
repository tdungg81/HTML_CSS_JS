let arr = [];
for (let i = 0; i < 10; i++){
    arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i+1}: `));
}

let count = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 10){
        count++;
    }
}
console.log(`Có ${count} phần tử trong mảng lớn hơn hoặc bằng 10`);

