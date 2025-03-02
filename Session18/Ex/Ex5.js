let year = Number(prompt("Nhập Số Năm kinh nghiệm"));

if (year < 1) {
    alert("Mới vào nghề");
} else if (year >= 1 && year <= 3 ) {
    alert("Nhân viên có kinh nghiệm");
} else if (year >= 4 && year <= 6) {
    alert("Chuyên viên")
} else {
    alert("Quản lý");
}