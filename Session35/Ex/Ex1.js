let quests = JSON.parse(localStorage.getItem('todoList')) || [
            { id: 1, name: "Học DOM JS" },
            { id: 2, name: "Làm bài tập DOM JS" }
        ];

        function saveStorage() {
            localStorage.setItem('todoList', JSON.stringify(quests));
        }

        function showQuests() {
            let message = "";
            for (let i = 0; i < quests.length; i++) {
                message += `<li>
                            <span>${quests[i].name}</span>
                            <div>
                                <button class="editButton" onclick="editQuest(${quests[i].id})">Sửa</button>
                                <button class="delButton" onclick="delQuest(${quests[i].id})">Xóa</button>
                            </div>
                        </li>`;
            }
            document.getElementById("list").innerHTML = message;
            saveStorage();
        }

        function addQuest() {
            let input = document.getElementById("input").value.trim();
            if (input.length > 0) {
                let id = quests.length > 0 ? quests[quests.length - 1].id + 1 : 1;
                quests.push({ id, name: input });
                showQuests();
            } else {
                alert("Nội dung không hợp lệ");
            }
            document.getElementById("input").value = "";
        }

        let confirmCheck = false;
        let selectFlag = -1;

        function delQuest(id) {
            let flag = -1;
            for (let i = 0; i < quests.length; i++) {
                if (quests[i].id === id) {
                    flag = i;
                    break;
                }
            }
            if (flag !== -1) {
                let buttons = document.getElementsByClassName("delButton");

                if (confirmCheck && selectFlag === flag) {
                    quests.splice(flag, 1);
                    showQuests();
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

        let editMode = false;
        let editFlag = -1;

        function editQuest(id) {
            let flag = -1;
            for (let i = 0; i < quests.length; i++) {
                if (quests[i].id === id) {
                    flag = i;
                    break;
                }
            }
            if (flag !== -1) {
                let buttons = document.getElementsByClassName("editButton");

                if (editMode && editFlag === flag) {
                    let newName = prompt("Nhập tên công việc mới:", quests[flag].name);
                    if (newName && newName.trim().length > 0) {
                        quests[flag].name = newName.trim();
                        showQuests();
                    } else if (newName !== null) {
                        alert("Nội dung không hợp lệ");
                    }
                    editMode = false;
                    editFlag = -1;
                } else {
                    for (let i = 0; i < buttons.length; i++) {
                        buttons[i].innerHTML = "Sửa";
                    }
                    buttons[flag].innerHTML = "Confirm";
                    editMode = true;
                    editFlag = flag;
                }
            }
        }

        showQuests();