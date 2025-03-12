let test1 = [10, 9, 5, 11, 24, 5]
let test2 = []
let test3 = "abcabc"

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("mảng không chứa phần tử");
            return;
        }
        let max = Math.max(...input);
        let index = input.indexOf(max);
        console.log(`max ${max}`);
        console.log(`index : ${index}`);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
filter(test1);
filter(test2);
filter(test3);