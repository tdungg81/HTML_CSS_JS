let input = prompt("Nhập một dãy số:");
let arr = input.split("");
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

document.write(`Mảng đã sắp xếp: [${arr.join(", ")}]`);
