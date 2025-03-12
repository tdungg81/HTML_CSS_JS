let test1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let test2 = [];
let test3 = "abc";

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("mảng không chứa phần tử");
            return;
        }
        let email = arr.filter((item) =>  {
            return typeof item === 'string' && item.includes('@') && !item.includes(' ');
        })
            console.log(email);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
filter(test1);
filter(test2);
filter(test3);
