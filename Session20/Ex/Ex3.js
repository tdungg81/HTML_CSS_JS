let number = (prompt("Nhập một số nguyên:"));

if (isNaN(number)) {
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    let reversed = number.split('').reverse().join('');

    if (number === reversed) {
        alert(`${number} là số đối xứng.`);
    } else {
        alert(`${number} không phải là số đối xứng.`);
    }
}