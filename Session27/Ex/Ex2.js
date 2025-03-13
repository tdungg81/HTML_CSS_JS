function inputStudent() {
    let quantity = Number(prompt("Mời bạn nhập số lượng sinh viên"));
    for (let i = 0; i < quantity; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}`).trim();
        students.push(name);
    }
}
function listStudents() {
    console.log("Danh sách sinh viên:");
    console.log(students.length > 0 ? students.join("\n") : "Danh sách trống.");
}
function searchStudents() {
    let search = +prompt("Mời bạn nhập tên sinh viên cần tìm")
    let find = false;

    for (let i = 0; i < students.length; i++){
        if (students[i] == search) {
            console.log(`Thấy sinh viên ${students[i]}`);
            find = true;
            break;
        }
        if (!find) {
            alert("Không timf thấy")
        }
    }
}
function deleteStudents() {
    let deletes = prompt("moi ban nhap ten muon xao");
    let find = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i] == tenXoa) {
            students.splice(i, 1);
            alert(`da xoa sinh vien ${students[i]}`);
            find = true;
            break;
        }
    }
    if (!find) {
        alert("deo co ma xoa dm");
    }
}
let students = []
let choice;
do {
    console.log("1. Nhập danh sách sinh viên.");
    console.log("2. Hiển thị danh sách sinh viên.");
    console.log("3. Tìm sinh viên theo tên.");
    console.log("4. Xóa sinh viên khỏi danh sách.");
    console.log("Thoát");
    choice = +prompt("Mời bạn nhập lựa chọn")
    switch (choice) {
        case 1:
            inputStudent();
            break;
        case 2:
            listStudents();
            break;
        case 3:
            searchStudents();
            break;
        case 4:
            deleteStudents()
            break;
        case 5:
            console.log("Thoát");
        default:
            break;
    }
} while (choice !== 5);
