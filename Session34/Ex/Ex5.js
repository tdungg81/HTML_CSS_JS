let staffList = JSON.parse(localStorage.getItem('staffList')) || [
            { id: 1, name: "Nguyễn Văn A", role: "Developer" },
            { id: 2, name: "Trần Thị B", role: "Designer" },
            { id: 3, name: "Phạm Văn C", role: "Project Manager" }
        ];

        function saveToStorage() {
            localStorage.setItem('staffList', JSON.stringify(staffList));
        }

        function showStaff() {
            let tbody = document.getElementById("staffList");
            let html = "";
            for (let i = 0; i < staffList.length; i++) {
                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${staffList[i].name}</td>
                            <td>${staffList[i].role}</td>
                            <td><button class="delButton" onclick="delStaff(${staffList[i].id})">X</button></td>
                        </tr>`;
            }
            tbody.innerHTML = html;
            saveToStorage(); 
        }

        function addStaff() {
            let name = document.getElementById("nameInput").value.trim();
            let role = document.getElementById("roleInput").value.trim();
            if (name.length > 0 && role.length > 0) { 
                let id = staffList.length > 0 ? staffList[staffList.length - 1].id + 1 : 1;
                staffList.push({ id, name, role });
                showStaff();
            } else {
                alert("Vui lòng nhập đầy đủ thông tin");
            }
            document.getElementById("nameInput").value = "";
            document.getElementById("roleInput").value = "";
        }

        let confirmCheck = false;
        let selectFlag = -1;

        function delStaff(id) {
            let flag = -1;
            for (let i = 0; i < staffList.length; i++) {
                if (staffList[i].id === id) {
                    flag = i;
                    break;
                }
            }

            if (flag !== -1) {
                let buttons = document.getElementsByClassName("delButton");

                if (confirmCheck && selectFlag === flag) {
                    staffList.splice(flag, 1);
                    showStaff();
                    confirmCheck = false;
                    selectFlag = -1;
                } else {
                    for (let i = 0; i < buttons.length; i++) {
                        buttons[i].innerHTML = "X";
                    }

                    buttons[flag].innerHTML = "Confirm";
                    confirmCheck = true;
                    selectFlag = flag;
                }
            }
        }
        showStaff();