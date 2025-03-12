
function integer(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let array = [];
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > 1 && Number.isInteger(arr[i])) {
                    let flag = true;
                    for (let j = 2; j < arr[i]; j++){
                        if (arr[i] % j === 0) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        array.push(arr[i]);
                    }
                }
            }
            if (array != []) {
                console.log(`[${arr2}]`);
            }
        } else {
            console.log("Mảng không có phần tử nào");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
integer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);