

/* ======= Account ======= */

function displayCurrentUserInfo() {
    // Lấy thông tin người dùng hiện tại
    const currentUser = getCurrentUser();

    // Hiển thị thông tin lên giao diện
    document.getElementById('infoname').value = currentUser.name || '';
    document.getElementById('infophone').value = currentUser.phone || '';
    document.getElementById('infoemail').value = currentUser.email || '';
}

// Gọi hàm hiển thị khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    displayCurrentUserInfo();
});

function emailIsValid(email) {
    // Biểu thức chính quy kiểm tra tính hợp lệ của email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Thay đổi thông tin
function changeInformation() {
    let currentUser = getCurrentUser();

    let infoname = document.getElementById('infoname').value;
    let infoemail = document.getElementById('infoemail').value;

    // Kiểm tra và cập nhật tên
    if (infoname.trim() !== "") {
        currentUser.name = infoname.trim();
    }

    // Kiểm tra và cập nhật email
    if (infoemail.trim() !== "") {
        if (!emailIsValid(infoemail)) {
            document.querySelector('.inforemail-error').innerHTML = 'Vui lòng nhập lại email hợp lệ!';
            return;
        }
        currentUser.email = infoemail.trim();
    }

    // Cập nhật vào danh sách người dùng
    updateListUser(currentUser);

    // Lưu thông tin người dùng hiện tại
    setCurrentUser(currentUser);

    // Hiển thị thông tin đã thay đổi
    displayCurrentUserInfo();

    location.reload();
    // Thông báo cập nhật thành công
    alert("Cập nhật thành công!");
}

// Đổi mật khẩu 
function changePassword() {
    let currentUser = getCurrentUser();  // Lấy thông tin người dùng hiện tại từ localStorage
    let check = true;
    let passwordCur = document.getElementById('password-cur-info');
    let passwordAfter = document.getElementById('password-after-info');
    let passwordConfirm = document.getElementById('password-comfirm-info');

    // Kiểm tra mật khẩu hiện tại
    if (passwordCur.value.length == 0) {
        document.querySelector('.password-cur-info-error').innerHTML = 'Vui lòng nhập mật khẩu hiện tại';
        check = false;
    } else {
        document.querySelector('.password-cur-info-error').innerHTML = '';
    }

    // Kiểm tra mật khẩu mới
    if (passwordAfter.value.length == 0) {
        document.querySelector('.password-after-info-error').innerHTML = 'Vui lòng nhập mật khẩu mới';
        check = false;
    } else if (passwordAfter.value.length < 8) {
        document.querySelector('.password-after-info-error').innerHTML = 'Vui lòng nhập mật khẩu mới có ít nhất 8 ký tự';
        check = false;
    } else {
        document.querySelector('.password-after-info-error').innerHTML = '';
    }

    // Kiểm tra xác nhận mật khẩu
    if (passwordConfirm.value.length == 0) {
        document.querySelector('.password-after-comfirm-error').innerHTML = 'Vui lòng xác nhận mật khẩu';
        check = false;
    } else if (passwordConfirm.value !== passwordAfter.value) {
        document.querySelector('.password-after-comfirm-error').innerHTML = 'Mật khẩu bạn nhập không trùng khớp';
        check = false;
    } else {
        document.querySelector('.password-after-comfirm-error').innerHTML = '';
    }

    if (check) {
        // Kiểm tra mật khẩu hiện tại
        if (passwordCur.value !== currentUser.password) {
            document.querySelector('.password-cur-info-error').innerHTML = 'Bạn đã nhập sai mật khẩu hiện tại';
            return;
        }

        // Cập nhật mật khẩu mới trong currentUser
        currentUser.password = passwordAfter.value;

        // Lưu lại thông tin người dùng hiện tại với mật khẩu mới
        localStorage.setItem('currentuser', JSON.stringify(currentUser));

        // Cập nhật mật khẩu mới trong danh sách tài khoản (accounts)
        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        let accountChange = accounts.find(acc => acc.phone === currentUser.phone);

        if (accountChange) {
            accountChange.password = currentUser.password;  // Cập nhật mật khẩu trong danh sách tài khoản
            localStorage.setItem('accounts', JSON.stringify(accounts));  // Lưu lại danh sách tài khoản sau khi thay đổi mật khẩu
        }

        // Thông báo thành công
        alert("Đổi mật khẩu thành công!");

        // Tải lại trang hoặc chuyển hướng đến trang đăng nhập
        location.reload();  // Tải lại trang để áp dụng sự thay đổi
    }
}

function accountDisplay() {
    var accountUser = document.getElementById('account-user');

    // Nếu thông tin tài khoản đang ẩn, hiển thị nó
    if (accountUser.style.display === 'none' || accountUser.style.display === '') {
        accountUser.style.display = 'block';
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     // Mặc định hiển thị form Sign Up
//     document.getElementById('form-signup').classList.add('active');
//     document.getElementById('form-login').classList.remove('active');
// });

// function showSignUp() {
//     // Ẩn form đăng nhập và hiển thị form đăng ký
//     document.getElementById('form-login').classList.remove('active');
//     document.getElementById('form-signup').classList.add('active');
// }

// function showLogin() {
//     // Ẩn form đăng ký và hiển thị form đăng nhập
//     document.getElementById('form-signup').classList.remove('active');
//     document.getElementById('form-login').classList.add('active');
// }

// function showLoginForm() {
//     document.querySelector('.background2').style.display = 'block';
// }

// document.querySelector('.btn_close').addEventListener('click', function() {
//     // Ẩn phần tử có class background2
//     document.querySelector('.background2').style.display = 'none';
// });

