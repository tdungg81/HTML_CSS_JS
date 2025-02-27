let money = prompt("Nhập số tiền gửi");
let month = prompt("Nhập số tháng gửi");

let interestRateYear = 4.3 / 100;
let interestRateMonth = interestRateYear / 12;

let result = money * interestRateMonth * month;

alert(result);