function checkNumber(arr) {
    let arrayNew =[];
    if (Array.isArray(arr)) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] % 2 === 0) {
                arrayNew.push(arr[i]);
            }
        }
        if (arrayNew.length > 0) {
            for (let i = 0; i < arrayNew.length; i++) {
                console.log(arrayNew[i]);          
            }
        } else {
            console.log("Mảng không chứa số chẵn");
        }

    } else {
        console.log("Dữ liệu không hợp lệ");

    }

}

checkNumber([11,4,65,6]);
checkNumber([1,3,5,7]);
checkNumber("text");