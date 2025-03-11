function capion(str) {
    let tile = str.toLowerCase().split(" ");
    for (let i = 0; i < tile.length; i++) {

        tile[i] = tile[i][0].toUpperCase() + tile[i].slice(1);
    }
    return tile.join(" ");
}

let input = prompt("Nhập chuỗi:");

alert(capion(input));