let works = [];
let choice;

function addWork() {
    let id = +prompt("Nhập ID:");
    let name = prompt("Nhập tên công việc:");
    let describe = prompt("Nhập mô tả công việc:");
    let start = prompt("Nhập thời gian bắt đầu:");
    let status = Boolean(prompt("Nhập trạng thái (true/false):"));
    works.push({ id, name, describe, start, status });
    alert("Thêm công việc thành công!");
}

function showWorks() {
    if (works.length >= 1) {
        let message = "Danh sách các công việc:\n";
        for (let i = 0; i < works.length; i++) {
            message += `ID: ${works[i].id}, Tên: ${works[i].name}, Mô tả: ${works[i].describe}, Thời gian bắt đầu: ${works[i].start}, Trạng thái: ${works[i].status ? "Hoàn thành" : "Chưa hoàn thành"}\n`;
        }
        alert(message);
    } else {
        alert("Mảng rỗng!");
    }
}

function updateStatusItem() {
    if (works.length >= 1) {
        let input = +prompt("Nhập ID cần cập nhật trạng thái:");
        let flag = -1;

        for (let i = 0; i < works.length; i++) {
            if (works[i].id === input) {
                flag = i;
                break;
            }
        }

        if (flag !== -1) {
            let a1 = works[flag].status ? "Hoàn thành" : "Chưa hoàn thành";
            let a2 = !works[flag].status ? "Hoàn thành" : "Chưa hoàn thành";
            let input = prompt(`Công việc đang ${a1}, có muốn đổi thành ${a2} không? (y/n)`);

            if (input === "y") {
                works[flag].status = !works[flag].status;
                alert(`Đã chuyển thành ${a2}`);
            } else {
                alert("Lệnh đã bị hủy!");
            }
        } else {
            alert("Không tìm thấy ID!");
        }
    } else {
        alert("Mảng rỗng!");
    }
}

function filterWorks() {
    if (works.length >= 1) {
        let message1 = "Danh sách công việc đã hoàn thành:\n";
        let message2 = "Danh sách công việc chưa hoàn thành:\n";

        for (let i = 0; i < works.length; i++) {
            if (works[i].status) {
                message1 += `ID: ${works[i].id}, Tên: ${works[i].name}, Mô tả: ${works[i].describe}, Thời gian bắt đầu: ${works[i].start}\n`;
            } else {
                message2 += `ID: ${works[i].id}, Tên: ${works[i].name}, Mô tả: ${works[i].describe}, Thời gian bắt đầu: ${works[i].start}\n`;
            }
        }
        alert(message1);
        alert(message2);
    } else {
        alert("Mảng rỗng!");
    }
}

function sortWorks() {
    if (works.length >= 1) {
        for (let i = 0; i < works.length - 1; i++) {
            for (let j = 0; j < works.length - 1 - i; j++) {
                if (works[j].status < works[j + 1].status) {
                    let temp = works[j];
                    works[j] = works[j + 1];
                    works[j + 1] = temp;
                }
            }
        }
        alert("Sắp xếp thành công!");
    } else {
        alert("Mảng rỗng!");
    }
}

do {
    choice = +prompt(
        "MENU\n" +
        "1. Thêm công việc mới.\n" +
        "2. Hiển thị tất cả các công việc.\n" +
        "3. Cập nhật trạng thái công việc theo ID.\n" +
        "4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.\n" +
        "5. Sắp xếp các công việc theo trạng thái công việc.\n" +
        "6. Thoát.\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            addWork();
            break;
        case 2:
            showWorks();
            break;
        case 3:
            updateStatusItem();
            break;
        case 4:
            filterWorks();
            break;
        case 5:
            sortWorks();
            break;
        case 6:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 6);