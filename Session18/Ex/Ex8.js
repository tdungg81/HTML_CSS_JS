let a = Number(prompt("Nhập cạnh a"));
let b = Number(prompt("Nhập cạnh b"));
let c = Number(prompt("Nhập cạnh c"));

if (a === b && b === c) {
    alert("Đây là tam giác đều")
} else if (a === b || b === c || a === c) {
    alert("Dây là tam giác cân")
} else if (
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
    Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
    Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
) {
    alert("Đây tam giác vuông");
} else {
    alert("Đây tam giác thường")
}   