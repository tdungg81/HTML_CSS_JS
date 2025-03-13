function arithmeticProgression(arr) {
    if (Array.isArray(arr)) {
        if (arr.length >= 2) {
            let flag = true;
            let arithmetic = arr[1] - arr[0];
            for (let i = 0; i < arr.length - 1; i++){
                if (arr[i + 1] - arr[i] !== arithmetic) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                alert("TRUE");
            } else {
                alert("FALSE");
            }
        } else {
            alert(":)");
        }
    } else {
        alert("Du lieu khong hop le");
    }
}

arithmeticProgression([1, 4, 7, 10, 13, 16, 19]);