let arr = []
let choice
do {
    choice = +prompt("1. Nhập chuỗi ký tự\n2. Hiển thị chuỗi ký tự\n3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n7. Thoát chương trình")
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số lượng chuỗi cần nhập:"))
            if (!isNaN(n) && n > 0) {
                for (let i = 0; i < n; i++) {
                    let str = prompt(`Nhập chuỗi thứ ${i + 1}:`);
                    arr.push(str);
                }
                console.log("Mảng chuỗi đã nhập:", arr);
            } else {
                console.log("Số lượng phải là số nguyên dương!");
            }
            break;
        
        case 2:
            console.log(arr.join(" "));
            break;
        
        case 3:
            let wordCount = {};
            words.forEach(word => {
                const lowerCaseWord = word.toLowerCase(); 
                if (wordCount[lowerCaseWord]) {
                    wordCount[lowerCaseWord]++;
                } else {
                wordCount[lowerCaseWord] = 1;
                }
            });
            let duplicates = {};
            for (const word in wordCount) {
                if (wordCount[word] > 1) {
                    duplicates[word] = wordCount[word];
                }
            }
            console.log(duplicates);
            break;
        
        case 4:
            let longest = arr[0], shortest = arr[0];
            for (let word of arr) {
                if (word.length > longest.length) longest = word;
                if (word.length < shortest.length) shortest = word;
            }
            console.log("Mảng đã nhập:", arr);
            console.log(`Từ dài nhất: "${longest}" (${longest.length} ký tự)`);
            console.log(`Từ ngắn nhất: "${shortest}" (${shortest.length} ký tự)`);
            break;
        
        case 5:
            let elementCount = {};
            array.forEach(element => {
                if (elementCount[element]) {
                    elementCount[element]++;
                } else {
                    elementCount[element] = 1;
                }
            });
            let maxCount = Math.max(...Object.values(elementCount));
            let mostFrequentElements = {};
            for (const element in elementCount) {
                if (elementCount[element] === maxCount) {
                    mostFrequentElements[element] = maxCount;
                }
            }
            console.log(mostFrequentElements)
            break;
        default:
            break;
    }
} while (choice !== 7);