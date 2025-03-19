function checkLogin() {
    const usenameCheck = "huanrose@gmail.com";
    const passwordCheck = "123456";

    const usenameElement = document.getElementById("usename").value;
    const passwordElement = document.getElementById("password").value;

    if (usenameElement === usenameCheck && passwordElement === passwordCheck) {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}