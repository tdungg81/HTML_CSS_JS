const products = [
            {
                id: 1,
                name: 'Laptop Dell XPS 15',
                price: 35990000,
                image: './Img/dell-xps-15-9530-1-thinkpro.webp',
                description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
            },
            {
                id: 2,
                name: 'iPhone 15 Pro Max',
                price: 32990000,
                image: './Img/iphone-15-pro-max_5.webp',
                description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
            },
            {
                id: 3,
                name: 'Samsung Galaxy S24 Ultra',
                price: 32990000,
                image: './Img/samsung-galaxy-s24-ultra-xam-1-750x500.jpg',
                description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera zoom 10x.'
            },
            {
                id: 4,
                name: 'Tai nghe Sony WH-1000XM4',
                price: 7990000,
                image: './Img/group_17333.webp',
                description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
            },
            {
                id: 5,
                name: 'Apple Watch Series 9',
                price: 11990000,
                image: './Img/group_565_1_.webp',
                description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
            },
            {
                id: 6,
                name: 'Loa JBL Charge 5',
                price: 5990000,
                image: './Img/group_211.webp',
                description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
            }
        ];
displayProducts(products);
        function displayProducts(products) {
            const productList = document.getElementById("productList");
            productList.innerHTML = "";
            products.forEach(product => {
                const productCard = `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p><strong>Giá:</strong> ${product.price.toLocaleString()} VNĐ</p>
                        <p>${product.description}</p>
                    </div>
                `;
                productList.innerHTML += productCard;
            });
        }