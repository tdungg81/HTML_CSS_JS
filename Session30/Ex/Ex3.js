let cart = [];
let phones = [
    {
        id: 1,
        name: "iPhone 13",
        price: 20000000,
        quantity: 10,
        company: "Apple"
    },
    {
        id: 2,
        name: "Galaxy S21",
        price: 15000000,
        quantity: 15,
        company: "Samsung"
    },
    {
        id: 3,
        name: "Mi 11",
        price: 10000000,
        quantity: 20,
        company: "Xiaomi"
    }
];

let choice;
do {
    console.log(`
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hãng
        9. Thoát chương trình
    `);
    choice = prompt("Chọn chức năng: ");
    
    switch (choice) {
        case "1":
            showPhonesByCompany();
            break;
        case "2":
            addNewPhone();
            break;
        case "3":
            searchPhone();
            break;
        case "4":
            buyPhone();
            break;
        case "5":
            checkout();
            break;
        case "6":
            let order = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần: ");
            sortPhonesByPrice(order);
            break;
        case "7":
            showTotalPriceInStock();
            break;
        case "8":
            showTotalQuantityByCompany();
            break;
        case "9":
            alert("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            break;
    }
} while (choice !== "9");

function showPhonesByCompany() {
    let company = prompt("Nhập tên hãng điện thoại: ");
    let filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());

    if (filteredPhones.length === 0) {
        console.log("Không có điện thoại nào của hãng này.");
    } else {
        filteredPhones.forEach(phone =>
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`)
        );
    }
}

function addNewPhone() {
    let id = parseInt(prompt("Nhập ID điện thoại: "));
    let name = prompt("Nhập tên điện thoại: ");
    let price = parseFloat(prompt("Nhập giá điện thoại: "));
    let quantity = parseInt(prompt("Nhập số lượng điện thoại: "));
    let company = prompt("Nhập hãng điện thoại: ");

    let newPhone = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        company: company
    };

    phones.push(newPhone);
    console.log("Điện thoại đã được thêm vào cửa hàng.");
}

function searchPhone() {
    let searchTerm = prompt("Nhập tên điện thoại hoặc ID điện thoại: ");
    let foundPhones = phones.filter(phone => 
        phone.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        phone.id === parseInt(searchTerm)
    );

    if (foundPhones.length === 0) {
        console.log("Không tìm thấy điện thoại.");
    } else {
        foundPhones.forEach(phone =>
            console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`)
        );
    }
}

function buyPhone() {
    let id = parseInt(prompt("Nhập ID điện thoại cần mua: "));
    let quantity = parseInt(prompt("Nhập số lượng cần mua: "));

    let phone = phones.find(phone => phone.id === id);

    if (phone) {
        if (phone.quantity >= quantity) {
            phone.quantity -= quantity;
            cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity: quantity });
            console.log("Mua điện thoại thành công.");
        } else {
            console.log("Số lượng điện thoại trong kho không đủ.");
        }
    } else {
        console.log("Không tìm thấy điện thoại.");
    }
}

function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    console.log(`Thanh toán thành công. Tổng số tiền: ${totalAmount} VND`);
    cart = [];
}

function sortPhonesByPrice(order) {
    let sortedPhones = [...phones];
    if (order === "asc") {
        sortedPhones.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
        sortedPhones.sort((a, b) => b.price - a.price);
    }

    sortedPhones.forEach(phone =>
        console.log(`ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`)
    );
}

function showTotalPriceInStock() {
    let totalPrice = phones.reduce((total, phone) => total + (phone.price * phone.quantity), 0);
    console.log(`Tổng số tiền của các điện thoại trong kho: ${totalPrice} VND`);
}

function showTotalQuantityByCompany() {
    let quantityByCompany = {};

    phones.forEach(phone => {
        if (quantityByCompany[phone.company]) {
            quantityByCompany[phone.company] += phone.quantity;
        } else {
            quantityByCompany[phone.company] = phone.quantity;
        }
    });

    for (let company in quantityByCompany) {
        console.log(`${company}: ${quantityByCompany[company]}`);
    }
}