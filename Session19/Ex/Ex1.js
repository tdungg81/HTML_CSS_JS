let month = Number(prompt("Nhập vào 1 tháng"));

if (month > 12 || month < 1) {
    alert("Tháng không hợp lệ");
} else if (month === 1 && 3 && 5 && 7 && 8 && 10 && 12) {
    alert("Tháng có 31 ngày");
} else if (month === 2) {
    alert("Tháng 2 có 28 hoặc 29 ngày năm nhuận")
} else {
    alert("Tháng có 30 ngày");
}