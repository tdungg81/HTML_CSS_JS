let input1 = ["2025-03-10", "2024-12-25", "2023-07-01"];
let input2 = [];
let input3 = "abc";

function dateFormat(dateList) {
    if (!Array.isArray(dateList)) {
        return "Dữ liệu không hợp lệ";
    }
    if (dateList.length === 0) {
        return "Mảng không có phần tử nào";
    }
    function isValidDateFormat(date) {
        let regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(date);
    }

    let validDates = dateList.filter(date => typeof date === 'string' && isValidDateFormat(date));
    return validDates.map(date => {
        let [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    });
}

console.log(dateFormat(input1)); 
console.log(dateFormat(input2)); 
console.log(dateFormat(input3));