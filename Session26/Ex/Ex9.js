function nhapMang() {
    let mang = [];
    let soPhanTu = prompt("Nhập số lượng phần tử của mảng (từ 10 đến 20):");
    soPhanTu = parseInt(soPhanTu);
    if (soPhanTu < 10 || soPhanTu > 20) {
        console.log("Số lượng phần tử phải từ 10 đến 20.");
        return nhapMang();
    }
    for (let i = 0; i < soPhanTu; i++) {
        let soNguyen = prompt(`Nhập phần tử thứ ${i + 1}:`);
        soNguyen = parseInt(soNguyen);
        mang.push(soNguyen);
    }
    return mang;
}
function tinhTongChan(mang) {
    return mang.filter(so => so % 2 === 0).reduce((tong, so) => tong + so, 0);
}
function tinhTongLe(mang) {
    return mang.filter(so => so % 2 !== 0).reduce((tong, so) => tong + so, 0);
}

let mangSoNguyen = nhapMang();
console.log("Mảng số nguyên:", mangSoNguyen);

let tongChan = tinhTongChan(mangSoNguyen);
let tongLe = tinhTongLe(mangSoNguyen);

console.log("Tổng các số chẵn:", tongChan);
console.log("Tổng các số lẻ:", tongLe);