var users = [
    {
        id: 1,
        username: "lieu",
        password: "lieu111"
    }
];

function login(username, password) {
    var isLoggedIn = false;
    for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            isLoggedIn = true;
            break;
        }
    }
    return isLoggedIn;
}

function clearForm() {
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (login(username, password)) {
            alert("Đăng nhập thành công!");
            // Thực hiện hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng trang.
            // window.location.href = "trang-chinh.html";
        } else {
            alert("Tên người dùng hoặc mật khẩu không chính xác!");
        }
    });
});
