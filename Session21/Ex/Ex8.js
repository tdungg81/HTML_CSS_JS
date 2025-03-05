console.log("các số Armstrong có 3 chữ số");

for (let i = 100; i <= 999; i++) {
    let num = i;
    let sum = 0;
    let rem;
    while (num !== 0) {
        rem = num % 10;
        sum = sum + (rem * rem * rem);
        num = Math.floor(num / 10);
    }
    if (i == sum) {
        console.log(i);
    }
}