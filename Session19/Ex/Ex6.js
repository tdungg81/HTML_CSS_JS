let a = Number(prompt("Nhập số thứ nhất"));
let b = Number(prompt("Nhập số thứ hai"));
let c = Number(prompt("Nhập số thứ ba"));

let delta = Math.pow(b, 2) - 4 * a * c
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta) / 2 * a)
    let x2 = (-b - Math.sqrt(delta) / 2 * a)
    alert(`Phương trình có 2 nghiệm:
        x1 = ${x1}
        x2 = ${x2} 
        `)
} else if (delta === 0) {
    let x = -b / (2 * a)
    alert(`Phương trình có nghiệm kép: x = ${x} `)
} else {
    alert("Phương trình vô nghiệm")
}