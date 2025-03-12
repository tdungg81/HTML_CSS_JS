let test1 = ["apple", "banana", "cat", "elephant", "dog"];
let test2 = [];
let test3 = "abc";

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("mảng không chứa phần tử");
            return;
        }
        let length = arr.filter((item) => {
            return item.length >= 5;
        })
        console.log(length);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
filter(test1);
filter(test2);
filter(test3);

