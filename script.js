
function displayUsers() {
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Xóa nội dung cũ

    if (users.length === 0) {
        // Hiển thị thông báo nếu không có người dùng
        tableBody.innerHTML = '<tr><td colspan="5">Không có người dùng nào.</td></tr>';
        return;
    }

    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.status}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>
                    <button onclick="editUser(${user.id})">Sửa</button>
                    <button onclick="toggleUserLock(${user.id})">${user.status === 'active' ? 'Khóa' : 'Mở Khóa'}</button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row); // Thêm hàng mới vào bảng
    });
}

function showUserList() {
    const userListContainer = document.getElementById('userListContainer');
    userListContainer.style.display = 'block'; // Hiển thị nội dung danh sách người dùng
    displayUsers(); // Gọi hàm để hiển thị người dùng
}

// Hàm để sửa thông tin người dùng
function editUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        const newName = prompt('Nhập tên mới:', user.name);
        const newEmail = prompt('Nhập email mới:', user.email);
        if (newName && newEmail) {
            user.name = newName;
            user.email = newEmail;
            displayUsers(); // Cập nhật danh sách sau khi sửa
        }
    } else {
        alert("Người dùng không tồn tại");
    }
}

// Hàm để khóa hoặc mở khóa người dùng
function toggleUserLock(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        user.status = user.status === "active" ? "locked" : "active";
        displayUsers(); // Cập nhật danh sách sau khi thay đổi trạng thái
    } else {
        alert("Người dùng không tồn tại");
    }
}
// Hàm hiển thị biểu đồ
function showCharts() {
    document.getElementById('userListContainer').style.display = 'none'; // Ẩn danh sách người dùng
    document.getElementById('chartsContainer').style.display = 'block'; // Hiện biểu đồ
}


// Hàm khởi tạo cho các sự kiện
function init() {
    // Ẩn danh sách người dùng khi khởi tạo
    document.getElementById('userListContainer').style.display = 'none';
    
    // Hiện biểu đồ khi tải trang
    document.getElementById('chartsContainer').style.display = 'block';

    // Thiết lập sự kiện cho các liên kết
    document.querySelector('.sidebar a:nth-child(4)').onclick = showCharts; // Thống kê
    document.querySelector('.sidebar a:nth-child(5)').onclick = showUserList; // Quản lý người dùng
}

// Gọi hàm init khi tải trang
window.onload = init;
