let cart = [];
let books = [
    {
        id: 102,
        name: "Harry Potter và Hòn đá Phù thủy",
        price: 150000,
        quantity: 30,
        category: "Tiểu thuyết giả tưởng",
    },
    {
        id: 103,
        name: "Nhà Giả Kim",
        price: 90000,
        quantity: 40,
        category: "Tiểu thuyết triết lý",
    },
    {
        id: 104,
        name: "Lược sử thời gian",
        price: 200000,
        quantity: 20,
        category: "Khoa học vũ trụ",
    },
    {
        id: 105,
        name: "Chiến tranh và Hòa bình",
        price: 250000,
        quantity: 15,
        category: "Tiểu thuyết lịch sử",
    },
];

let choice;
do {
    console.log(`
        1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5. Sắp xếp sách theo giá:
            Tăng dần.
            Giảm dần.
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.
        
    `);
    choice = prompt("Chọn chức năng: ");
    
    switch (choice) {
        case 1:
            showCategoryBook();
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            let order = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần: ");
            sortBooksByPrice(order);
            break;
        case 6:
            calculateCart();
            break;
        case 7:
            showTotalBooksInStock();
            break;
        case 8:
            alert("Thoát");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            break;
    }
} while (choice !== 8);
function showCategoryBook() {
    let category = prompt("Mời bạn nhập thể loại sách ");
    let fitelBooks = books.filter(books => books.category.toLowerCase() === category.toLowerCase());

    if (fitelBooks.length === 0) {
        console.log("không có sách thể lạoi nay trong sách");
    } else {
        console.log("sah co trong the laoi nay ");
        fitelBooks.forEach(books =>
            console.log(`ID: ${books.id}, Tên: ${books.name}, Giá: ${books.price}, Số lượng: ${books.quantity}`)
        );
    }
}
function addNewBook() {
    let id = parseInt(prompt("Nhập ID sách: "));
    let name = prompt("Nhập tên sách: ");
    let price = parseFloat(prompt("Nhập giá sách: "));
    let quantity = parseInt(prompt("Nhập số lượng sách: "));
    let category = prompt("Nhập thể loại sách: ");

    let newBook = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    };

    books.push(newBook);
    console.log("Sách đã được thêm vào kho.");
}
function searchBook() {
    let searchTerm = prompt("Nhập tên sách hoặc ID sách: ");
    let foundBooks = books.filter(book => 
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        book.id === parseInt(searchTerm)
    );

    if (foundBooks.length === 0) {
        console.log("Không tìm thấy sách.");
    } else {
        foundBooks.forEach(book =>
            console.log(`ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}, Thể loại: ${book.category}`)
        );
    }
}
function buyBook() {
    let id = parseInt(prompt("Nhập ID sách cần mua: "));
    let quantity = parseInt(prompt("Nhập số lượng cần mua: "));

    let book = books.find(book => book.id === id);

    if (book) {
        if (book.quantity >= quantity) {
            book.quantity -= quantity;
            cart.push({ id: book.id, name: book.name, price: book.price, quantity: quantity });
            console.log("Mua sách thành công.");
        } else {
            console.log("Số lượng sách trong kho không đủ.");
        }
    } else {
        console.log("Không tìm thấy sách.");
    }
}
function calculateCart() {
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    let totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
    console.log(`Tổng tiền trong giỏ hàng: ${totalAmount} VND`);
}
function showTotalBooksInStock() {
    let totalBooks = books.reduce((total, book) => total + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalBooks}`);
}