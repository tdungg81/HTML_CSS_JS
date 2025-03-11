function findMin(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length == 0) {
        console.log("Mảng không chứa phần tử");
        return;
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    console.log(min);
    return min;
}
findMin([2,4,8,1,9]);