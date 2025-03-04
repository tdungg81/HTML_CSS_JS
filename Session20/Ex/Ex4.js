let str = prompt("Nhập vào một chuỗi:");
let charToFind = prompt("Nhập ký tự cần tìm:");

let found = false; 

for (let i = 0; i < str.length; i++) {
    if (str[i] === charToFind) {
        found = true;
        break; 
    }
}

if (found) {
    alert(`Ký tự "${charToFind}" có trong chuỗi "${str}".`);
} else {
    alert(`Ký tự "${charToFind}" không có trong chuỗi "${str}".`);
}