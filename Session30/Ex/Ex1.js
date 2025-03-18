let cart = [];
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh"
    }
];
function showProduct() {
    let chose = +prompt(`Nhập lựa chọn:
        1. Các món ăn dân tộc Mông
        2. Các món ăn dân tộc Kinh
    `);

    let category = chose === 1 ? "Món ăn dân tộc Mông" : "Món ăn dân tộc Kinh";
    let filteredProducts = products.filter(product => product.category === category);

    console.log(`Danh sách sản phẩm trong danh mục ${category}:`);
    filteredProducts.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`);
    });
}
function addCart() {
    let productId = +prompt("Nhập ID sản phẩm bạn muốn mua:");
    let quantity = +prompt("Nhập số lượng:");
    let product = products.find(p => p.id === productId); 
    if (!product) {
        console.log("Sản phẩm không tồn tại.");
        return;
    }
    if (product.quantity < quantity) {
        console.log("Số lượng sản phẩm không đủ.");
        return;
    }
    product.quantity -= quantity;
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: quantity }); 
    }
    console.log("Đã thêm sản phẩm vào giỏ hàng.");
};
function sortProductsByPrice() {
    let order = prompt("Nhập 'asc' để sắp xếp tăng dần hoặc 'desc' để sắp xếp giảm dần:");
    if (order === 'asc') {
        products.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
        products.sort((a, b) => b.price - a.price);
    }
    console.log("Đã sắp xếp sản phẩm theo giá.");
}
function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số tiền thanh toán: ${total}`);
}
let choice;
do {
    console.log("\n1. Hiển thị sản phẩm theo danh mục");
    console.log("2. Chọn sản phẩm để mua");
    console.log("3. Sắp xếp sản phẩm theo giá");
    console.log("4. Tính số tiền thanh toán");
    console.log("5. Thoát");
    choice = prompt("Chọn chức năng: ");

    switch (choice) {
        case '1':
            showProduct();
            break;
        case '2':
            addCart();
            break;
        case '3':
            sortProductsByPrice();
            break;
        case '4':
            calculateTotal();
            break;
        case '5':
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== '5');