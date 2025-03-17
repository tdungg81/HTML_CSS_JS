let menu = [];
let choice;

function addItem() {
    let name = prompt("Nhập tên:");
    let price = prompt("Nhập giá:");
    let describe = prompt("Nhập mô tả:");
    menu.push({ name, price, describe });
}
function removeItem() {
    if (menu.length >= 1) {
        let flag = -1;
        let input = prompt("Nhập tên cần xóa:");
        for (let i = 0; i < menu.length; i++){
            if (menu[i].name == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            menu.splice(flag, 1);
            alert("Đã xóa");
        } else {
            alert("Không thấy thông tin");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
function updateItem() {
    if (menu.length >= 1) {
        let flag = -1;
        let input = prompt("Nhập tên cần cập nhật:");
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].name == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            menu[flag].name = prompt("Tên mới:");
            menu[flag].price = prompt("Giá mới:");
            menu[flag].describe = prompt("Mô tả mới:");
            alert("Cập nhật thành công");
        } else {
            alert("Không thấy tên");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
function showItems() {
    if (menu.length >= 1) {
        let message = "MENU:\n";
        for (let i = 0; i < menu.length; i++){
            message += `ten: ${menu[i].name}, gia: ${menu[i].price}, mo ta: ${menu[i].describe}\n`;
        }
        alert(message);
    } else {
        alert("Không có dữ liệu");
    }
}
function findItem() {
    if (menu.length >= 1) {
        let flag = -1;
        let input = prompt("Nhập tên cần tìm:");
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].name == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            alert(`gia: ${menu[flag].price}, mo ta: ${menu[flag].describe}\n`);
        } else {
            alert("Không thấy tin trong Menu");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
do {
    choice = +prompt("MENU\n1. Thêm món ăn vào danh mục.\n2. Xóa món ăn theo tên khỏi danh mục.\n3. Cập nhật thông tin theo tên của món ăn(tên, giá, mô tả).\n4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.\n5. Tìm kiếm món ăn theo tên trong toàn bộ menu.\n6. Thoát\nLua chon cua ban:");
    switch (choice) {
        case 1:
            addItem();
            break;
        case 2:
            removeItem();
            break;
        case 3:
            updateItem();
            break;
        case 4:
            showItems();
            break;
        case 5:
            findItem();
            break;
        case 6:
            alert("Exit");
            break;
        default:
            alert("Sai");
    }
} while (choice !== 6);