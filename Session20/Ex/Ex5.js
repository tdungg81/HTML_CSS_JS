let a = +prompt("a:");
let b = +prompt("b:");
let total = 1;
if (a && b && a != 0) {
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            total *= a;
        }
    } else {
        for (let i = 0; i < b; i++) {
            total *= a;
        }
        
    }
    alert(total);
} else {
    alert("Không hợp lệ");
}