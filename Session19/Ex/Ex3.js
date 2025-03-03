let face_value = Number(prompt(`Mời bạn nhập: 
    1.:Tiền(VND)-->tiền(USD).
    2.:Tiền(USD)-->tiền(VND).
    `));
switch (face_value) {
    case 1:
        let money_VND = Number(prompt("mời bạn nhập tiền muốn đổi Tiền(VND)-->tiền(USD)"));
        let sum_Money_VND = money_VND / 23000;
        alert(`Tiền của bạn là ${sum_Money_VND} USD`);
        break;
    case 2:
        let money_USD = Number(prompt("mời bạn nhập tiền muốn đổi Tiền(USD)-->tiền(VND)"));
        let sum_Money_USD = money_USD * 23000;
        alert(`Tiền của bạn là ${sum_Money_USD} VND`);
        break;
    default:
        alert("sai cu phap");
}