let categories = JSON.parse(localStorage.getItem('categoryList')) || [
            { id: 1, name: 'Điện thoại', status: 'active' },
            { id: 2, name: 'Laptop', status: 'active' },
            { id: 3, name: 'Tai nghe', status: 'inactive' },
            { id: 4, name: 'Đồng hồ', status: 'active' },
            { id: 5, name: 'Loa', status: 'inactive' }
        ];

        function saveStorage() {
            localStorage.setItem('categoryList', JSON.stringify(categories));
        }

        function showCategories() {
            let tbody = document.getElementById("categoryList");
            let html = "";
            categories.forEach(category => {
                html += `
                    <tr>
                        <td>${category.id}</td>
                        <td>${category.name}</td>
                        <td class="status-${category.status}">${category.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}</td>
                        <td class="action-buttons">
                            <button class="edit-btn">Sửa</button>
                            <button class="delete-btn">Xóa</button>
                        </td>
                    </tr>
                `;
            });
            tbody.innerHTML = html;
        }

        function openModal() {
            document.getElementById("addModal").style.display = "flex";
            document.getElementById("categoryName").value = "";
            document.getElementById("categoryStatus").value = "active";
            document.getElementById("nameError").style.display = "none";
        }

        function closeModal() {
            document.getElementById("addModal").style.display = "none";
        }

        function saveCategory() {
            let name = document.getElementById("categoryName").value.trim();
            let status = document.getElementById("categoryStatus").value;
            let nameError = document.getElementById("nameError");

            if (name.length === 0) {
                nameError.style.display = "block";
                return;
            }

            nameError.style.display = "none";
            let id = categories.length > 0 ? categories[categories.length - 1].id + 1 : 1;
            categories.push({ id, name, status });
            saveStorage();
            showCategories();
            closeModal();
        }

        showCategories();