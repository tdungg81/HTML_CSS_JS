const products = [
            { name: "Rau sạch", category: "Đồ ăn" },
            { name: "Thịt lợn", category: "Đồ ăn" },
            { name: "Pepsi không calo", category: "Nước" },
            { name: "Cocacola", category: "Nước" },
            { name: "Cờ lê", category: "Dụng cụ" },
            { name: "Tua vít", category: "Dụng cụ" }
        ];
        displayProducts(products);
        function filterProducts() {
            const selectedCategory = document.getElementById("categorySelect").value;
            let filteredProducts;

            if (selectedCategory === "all") {
                filteredProducts = products; 
            } else {
                filteredProducts = products.filter(product => product.category === selectedCategory);
            }
            displayProducts(filteredProducts);
        }
        function displayProducts(products) {
            const productList = document.getElementById("productList");
            productList.innerHTML = "";
            products.forEach(product => {
                const productItem = document.createElement("div");
                productItem.className = "product-item";
                productItem.innerHTML = `<strong>Tên đồ ăn:</strong> ${product.name} - <strong>Danh mục:</strong> ${product.category}`;
                productList.appendChild(productItem);
            });
        }