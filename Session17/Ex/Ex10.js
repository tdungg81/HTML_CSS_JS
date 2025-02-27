let n = prompt("Moi ban nhap 1 so bat ki");

n = Number(n)

let checkn = Number.isInteger(Math.sqrt(n)) ? `${n} la so chinh phuong` : `${n} khong phai la s0 chinh phuong`;

alert(checkn);