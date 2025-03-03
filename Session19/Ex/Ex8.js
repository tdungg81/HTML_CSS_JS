let month = Number(prompt("Nhập tháng"));

if (month >= 1 && month <= 3) {
    alert("Mùa xuân");
} else if (month >= 4 && month <= 6) {
    alert("Mùa hạ");
} else if (month >= 7 && month <= 9) {
    alert("Mùa thu");
} else if (month >= 10 && month <= 12) {
    alert("Mùa đông");
} else {
    alert("Tháng không hợp lệ");
}