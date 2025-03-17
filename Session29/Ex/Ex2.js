let store = [];
let choice;
let idCount = 1;
function addItem() {
    let id = idCount;
    idCount++;
    let name = prompt("Nhập tên:");
    let price = prompt("Nhập giá:");
    let category = prompt("Nhập danh mục:");
    let quantity = prompt("Nhập số lượng:");
    store.push({id: id, name: name, price: price, category: category, quantity: quantity});
}
function showItems() {
    if (store.length >= 1) {
        let message = "Danh sách sản phẩm:\n";
        for (let i = 0; i < store.length; i++){
            message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Catepory: ${store[i].category}, Quantity: ${store[i].quantity}\n`;
        }
        alert(message);
    } else {
        alert("Không có dữ liệu");
    }
}
function showIdItem() {
    if (store.length >= 1) {
        let input = +prompt("Nhập ID để xem:");
        let flag = -1;
        for (let i = 0; i < store.length; i++) {
            if (store[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            alert(`Name: ${store[flag].name}, Price: ${store[flag].price}, Catepory: ${store[flag].category}, Quantity: ${store[flag].quantity}\n`);
        } else {
            alert("Không thấy");
        }
    } else {
        alert("Không có dữ liệu");
    }
}

function updateItem() {
    if (store.length >= 1) {
        let input = +prompt("Nhập ID cần cập nhật:");
        let flag = -1;
        for (let i = 0; i < store.length; i++) {
            if (store[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            store[flag].name = prompt("Tên mới:");
            store[flag].price = prompt("Giá mới:");
            store[flag].category = prompt("Danh mục mới:");
            store[flag].quantity = prompt("Số lượng mới:");
            alert("Cập nhật thành công");
        } else {
            alert("Không thấy");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
function deleteItem() {
    if (store.length >= 1) {
        let input = +prompt("Nhập ID cần xóa:");
        let flag = -1;
        for (let i = 0; i < store.length; i++) {
            if (store[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            store.splice(flag, 1);
            alert("Đã Xóa");
        } else {
            alert("Không thấy");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
function sortItemsByPrice() {
    if (store.length >= 1) {
        alert("Cập nhật Thông tin sản phẩm theo ID");
        let price1 = +prompt("Giá 1:");
        let price2 = +prompt("Giá 2:");
        if (price1 <= price2) {
            let message = `Danh sách có giá khoảng ${price1} - ${price2}:\n`;
            for (let i = 0; i < store.length; i++){
                if (store[i].price >= price1 && store[i].price <= price2) {
                    message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Catepory: ${store[i].category}, Quantity: ${store[i].quantity}\n`;
                }
            }
            alert(message);
        } else {
            alert("Sai");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
do {
    choice = +prompt("MENU\n1. Thêm sản phẩm vào danh sách sản phẩm.\n2. Hiển thị tất cả sản phẩm.\n3. Hiển thị chi tiết sản phẩm theo id.\n4. Cập nhật thông tin sản phẩm(name, price, category, quantity) theo id sản phẩm.\n5. Xóa sản phẩm theo id.\n6. Lọc sản phẩm theo khoảng giá.\n7. Thoát.");
    switch (choice) {
        case 1:
            addItem();
            break;
        case 2:
            showItems();
            break;
        case 3:
            showIdItem();
            break;
        case 4:
            updateItem();
            break;
        case 5:
            deletaItem();
            break;
        case 6:
            sortItemsByPrice();
            break;
        case 7:
            alert("Exit");
            break;
        default:
            alert("Sai");
    }
} while (choice !== 7);