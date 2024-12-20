// Cập nhật trạng thái đơn hàng
function changeOrderStatus(orderId, newStatus) {
    const confirmationMessage =
        newStatus === 'Đã hủy'
            ? 'Bạn có chắc chắn muốn hủy đơn hàng này không?'
            : 'Bạn có chắc chắn đã nhận được hàng không?';

    if (!confirm(confirmationMessage)) {
        return; // Hủy thao tác nếu người dùng chọn "Hủy"
    }

    let users = getListUser();
    let userIndex = -1;
    let orderIndex = -1;

    // Tìm người dùng và đơn hàng cần cập nhật
    for (let i = 0; i < users.length; i++) {
        orderIndex = users[i].donhang.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            userIndex = i;
            break;
        }
    }

    if (userIndex !== -1 && orderIndex !== -1) {
        console.log(users[userIndex].donhang[orderIndex].tinhTrang);
        users[userIndex].donhang[orderIndex].tinhTrang = newStatus;
        setListUser(users); // Cập nhật lại danh sách người dùng trong localStorage
        setCurrentUser(users[userIndex]); // Cập nhật lại người dùng hiện tại
        showOrderList(); // Cập nhật lại danh sách đơn hàng
    }
}


// Hiển thị danh sách đơn hàng
function showOrderList() {
    const user = getCurrentUser();
    console.log(user);
    const contentItemDiv = document.getElementById('content-item');
    contentItemDiv.innerHTML = '<h2>Đơn hàng của tôi</h2>';
    user.donhang.forEach(order => {
        const orderItemDiv = document.createElement('div');
        orderItemDiv.classList.add('order-item');

        // Kiểm tra điều kiện để xác định trạng thái nút
        const cancelDisabled = order.tinhTrang !== 'Đang chờ xử lý' ? 'disabled' : '';
        const receivedDisabled = order.tinhTrang !== 'Đang giao hàng' ? 'disabled' : '';

        // Tính tổng tiền của đơn hàng
        const totalOrderPrice = order.sp.reduce((total, sp) => {
            const product = getProductById(sp.ma);
            return total + sp.soluong * product.price;
        }, 0);

        orderItemDiv.innerHTML = `
            <div class="shop-header">
                <span class="order-id">${(order.id)}</span>
                <span class="order-status">${(order.tinhTrang).toUpperCase()}</span>
            </div>
            <div class="order-content">
                <div class="order-details">
                    ${order.sp.map(sp => {
            const product = getProductById(sp.ma);
            const totalPrice = sp.soluong * product.price;
            return `
                            <div class="product-order">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="order-item-detail">
                                    <p class="product-name">Tên sản phẩm: ${product.name}</p>
                                    <p class="product-variant">Số lượng: ${sp.soluong}</p>
                                    <p class="product-total">Thành tiền: ${Number(totalPrice).toLocaleString()} VNĐ</p>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
                <div class="order-btn">
                    <div class="total-all">
                        <span class="label">Thành tiền:</span>
                        <span class="amount">${Number(totalOrderPrice).toLocaleString()} VNĐ</span>
                    </div>                    
                    <button class="btns cancel"  ${cancelDisabled} onclick="changeOrderStatus('${order.id}', 'Đã hủy')">Hủy đơn hàng</button>
                    <button class="btns received" ${receivedDisabled} onclick="changeOrderStatus('${order.id}', 'Đã giao')">Đã Nhận Hàng</button>
                </div>
            </div>
        `;
        contentItemDiv.appendChild(orderItemDiv);
    });
}

// Sự kiện DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Giả sử đây là dữ liệu người dùng và đơn hàng
    const user = getCurrentUser();

    // Hiển thị thông tin người dùng
    function showUserInfo() {
        const contentItemDiv = document.getElementById('content-item');
        contentItemDiv.innerHTML = `
            <h2>Hồ sơ của tôi</h2>
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Tên:</strong> ${user.name}</p>
            <p><strong>Số điện thoại:</strong> ${user.phone}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Tên đăng nhập:</strong> ${user.username}</p>
<p><strong>Mật khẩu:</strong> <a href="#" id="change-password-link">Đổi mật khẩu</a></p>    

        `;
    }
    const userNameh3 = document.querySelector('.icon-user h3');
    userNameh3.innerText = user.name;
    // Gắn sự kiện click cho các mục trong sidebar
    document.querySelector('.user-sidebar h4').addEventListener('click', showUserInfo);
    document.querySelector('.order-sidebar h4').addEventListener('click', showOrderList);
    // Hiển thị thông tin người dùng mặc định khi tải trang
    showUserInfo();
});

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section === "wholecake") {
        wholecake();
    }
};

// Show the modal