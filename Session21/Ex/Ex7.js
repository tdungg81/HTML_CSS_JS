let money = parseFloat(prompt("Nhập số tiền"));
let monthInterest = parseFloat(prompt("Nhập lãi suất (%)")) ;
let month = parseInt(prompt("Nhập số tháng"));

if (isNaN(money) || isNaN(monthInterest) || isNaN(month) || money <= 0 || monthInterest < 0 || month <= 0) {
    console.log("Nhập sai rồi");
} else {
    let total = money * (Math.pow(1 + monthInterest / 100, month));
    let interest = total - money;

    console.log(`Sau ${month} tháng, bạn nhận được:
    - Tiền lãi: ${interest} VND
    - Tổng số tiền: ${total} VND`);
}
