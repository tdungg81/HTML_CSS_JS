function numbers(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    console.log("Dữ liệu k hợp lệ");
}
console.log(`Tổng 2 số là:`, numbers(2,6));
