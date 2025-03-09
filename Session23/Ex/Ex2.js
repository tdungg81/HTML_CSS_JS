let arr = [1, 2, 4, 6, 7, 4, 10, 23, 4, 5]
let arr_length = arr.length;
let maxValue = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++){
    if (arr[i] > maxValue) {
        maxValue = arr[i]
        maxIndex = i
    }
}

console.log(`Phần tử có giá trị lớn nhất là ${maxValue} tại vị trí ${maxIndex}`);
