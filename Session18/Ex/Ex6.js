let year = Number(prompt("Nhập một năm"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert("Đây là năm nhuận");
} else {
    alert("Không phải năm nhuận");
}