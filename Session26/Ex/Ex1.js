let test = [1, 2, 23, 5, 1, 45, 3, 156, 3, 100];
let test1 = [];
let test2 = "abc";
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("mảng không chứa phần tử");
            return;
        }
        let result = arr.filter((item) => {
            return item >= 10;
        })
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
filter(test);
filter(test1);
filter(test2);

