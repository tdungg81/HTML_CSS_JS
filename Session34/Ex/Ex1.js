let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    let isValis = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        alert("Email không được bỏ trống")
        isValid = false;
    } else if (!emailPattern.test(email)) {
        alert("Email không hợp lệ.");
        isValid = false;
    } 
    if (checkEmail(email)) {
        alert("Email đã được đăng ký");
        isValis = false;
    }
    if (!password) {
        alert("Mật khẩu đã được bỏ trống")
    }
    if (!confirmPassword) {
        alert("Xác nhận mật khẩu không được bỏ trống")
        isValis = false;
    } else if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp")
        isValis = false;
    }
    if (isValis) {
        let = newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công!");
    }
    window.location="./Ex3.html"
};
function checkEmail(email) {
    return users.some(user => user.email === email);
};
