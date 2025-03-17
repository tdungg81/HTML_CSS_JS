let contact = [];
let choice
function add() {
    let contactId = +prompt("ID:");
    let contactName = +prompt("Name:");
    let contactEmail = +prompt("Email:");
    let contactPhone = +prompt("Phone");
    contacts.push({ id: contactId, name:  contactName, email: contactEmail, phone: contactPhone });
}
function printf() {
    if (contact.length >= 1) {
        let message = "Danh sách: \n";
        for (let i = 0; i < contact.length; i++){
            message += `ID: ${contacts[i].id} - Name: ${contacts[i].name} - Email: ${contacts[i].email} - Phone: ${contacts[i].phone}\n`;
        }
        alert(message);
    } else {
        alert("Không có dữ liệu")
    }
}
function searchPhone() {
    if (contact.length >= 1) {
        let flag = -1;
        let input = prompt("Nhập só điện thoại để hiển thị thông tin:");
        for (let i = 0; i < contact.length; i++) {
            if (contact[i].phone === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            let message = "Thông tin:\n";
            message += `ID: ${contact[flag].id} - Name: ${contact[flag].name} - Email: ${contact[flag].email} - Phone: ${contact[flag].phone}`;
            alert(message);
        } else {
            alert("Không có số điện thoại này");
        }
    } else {
        alert("Không có dữ liệu");
    }
}
function updateContact() {
    if (contact.length >= 1) {
        let flag = -1;
        let input = +prompt("Nhập ID để cập nhật");
        for (let i = 0; i < contact.length; i++) {
            if (contact[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            contact[flag].name = prompt("Tên mới:");
            contact[flag].email = prompt("Email mới:");
            contact[flag].phone = prompt("Số điện thoại mới:");
            alert("Cập nhật thành côncôn");
        } else {
            alert("Không thấy ID");
        }

    } else {
        alert("Không có dữ liệu");
    }
}
function deleteContact() {
        if (contact.length >= 1) {
        let flag = -1;
        let input = +prompt("Nhập ID cần xóa:");
        for (let i = 0; i < contact.length; i++) {
            if (contact[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            contact.splice(flag, 1);
            alert("Đã xóa");
        } else {
            alert("Không thấy ID");
        }

    } else {
        alert("Không có dữ liệu");
    }    
}
do {
    choice = +prompt("MENU\n1. Thêm đối tượng\n2. Hiển thị danh sách\n3. Tìm kiếm thông tin theo số điện thoại\n4. Cập nhật(name, email, phone) theo id\n5. Xóa một đối tượng\n6. Thoát");
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            printf();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            updateContact();    
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            alert("Exit");
            break;
        default:
            alert("Sai");
    }
} while (choice !== 6);