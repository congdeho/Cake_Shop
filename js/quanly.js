
function getUserNameById(userId) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'N/A'; // Nếu tìm thấy thì trả về tên, nếu không thì trả về 'N/A'
}
function getListDonHang(traVeDanhSachSanPham = false) {
    var u = getListUser();
    list_products = getListProducts() || list_products;
    var result = [];
    for (var i = 0; i < u.length; i++) {
        for (var j = 0; j < u[i].donhang.length; j++) {
            // Tổng tiền
            var tongtien = 0;
            for (var s of u[i].donhang[j].sp) {
                var timsp = timKiemTheoMa(list_products, s.ma);
                if (timsp) {
                    tongtien += stringToNum(timsp.price) * s.soluong;
                }
            }

            // Ngày giờ
            var x = new Date(u[i].donhang[j].ngaymua).toLocaleString();

            // Các sản phẩm - dạng html
            var sps = '';
            for (var s of u[i].donhang[j].sp) {
                var timsp = timKiemTheoMa(list_products, s.ma);
                if (timsp) {
                    sps += `<p style="text-align: right">` + (timsp.name + ' [' + s.soluong + ']') + `</p>`;
                }
            }

            // Các sản phẩm - dạng mảng
            var danhSachSanPham = [];
            for (var s of u[i].donhang[j].sp) {
                danhSachSanPham.push({
                    // Mã sản phẩm
                    maSanPham: s.ma,
                    sanPham: timKiemTheoMa(list_products, s.ma),
                    soLuong: s.soluong,
                });
            }

            // Lưu vào result
            result.push({
                "ma": u[i].donhang[j].id,
                "maKhach": u[i].id,
                "khach": u[i].name,
                "sp": traVeDanhSachSanPham ? danhSachSanPham : sps,
                "tongtien": numToString(tongtien),
                "ngaygio": x,
                "sdt": u[i].phone,
                "diachi": `${u[i].donhang[j].diachi.street}, ${u[i].donhang[j].diachi.ward}, ${u[i].donhang[j].diachi.district}, ${u[i].donhang[j].diachi.city}`,
                "moTa": u[i].donhang[j].notes,
                "tinhTrang": u[i].donhang[j].tinhTrang
            });
        }
    }
    return result;
}

function displayOrders() {
    const orderList = getListDonHang();
    const orderTableBody = document.querySelector("#order-table tbody");
    orderTableBody.innerHTML = ''; // Xóa nội dung cũ

    orderList.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.ma}</td>
            <td>${order.maKhach}</td>
            <td>${order.khach}</td>
            <td>${order.diachi}</td>
            <td>${order.ngaygio}</td>
            <td>${order.tinhTrang}</td>
            <td>
                <button onclick="viewOrderDetails('${order.ma}')">Xem chi tiết</button>
            </td>
        `;
        orderTableBody.appendChild(row);
    });
}
function displayOrder(order) {
    var orderList = order;
    const orderTableBody = document.querySelector("#order-table tbody");
    orderTableBody.innerHTML = '';
    // Tạo một hàng mới
    orderList.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.ma}</td>
            <td>${order.maKhach}</td>
            <td>${order.khach}</td>
            <td>${order.diachi}</td>
            <td>${order.ngaygio}</td>
            <td>${order.tinhTrang}</td>
            <td>
                <button onclick="viewOrderDetails('${order.ma}')">Xem chi tiết</button>
            </td>
        `;
        orderTableBody.appendChild(row);
    });
}

function toggleOrderDetails(show) {
    const orderDetailsDiv = document.getElementById("order-details");
    const divModal = document.getElementById("order-modal");
    if (show) {
        orderDetailsDiv.style.display = "block";
        divModal.style.display = "block";
    } else {
        orderDetailsDiv.style.display = "none";
        divModal.style.display = "none";
    }
}

function viewOrderDetails(orderId) {
    const orders = getListDonHang(true);
    const order = orders.find(o => o.ma === orderId);
    const orderDetailsDiv = document.getElementById("order-details");

    if (order) {
        const productDetails = order.sp.map(orderProduct => {
            const product = timKiemTheoMa2(list_products, orderProduct.maSanPham); // Tìm sản phẩm trong list_products
            const totalPrice = orderProduct.soLuong * product.price; // Tính tổng giá
            return `<li>
                Sản phẩm: ${product.name}, 
                Số lượng: ${orderProduct.soLuong}, 
                Giá: ${Number(product.price).toLocaleString()} VNĐ, 
                Tổng: ${Number(totalPrice).toLocaleString()} VNĐ
            </li>`;
        }).join('');

        orderDetailsDiv.innerHTML = `
            <h3>Chi tiết đơn hàng</h3>
            <p>Mã đơn hàng: ${order.ma}</p>
            <p>Khách hàng: ${order.khach}</p>
            <p>Địa chỉ: ${order.diachi}</p>
            <p>Ngày mua: ${order.ngaygio}</p>
            <p>Số điện thoại: ${order.sdt}</p>
            <p>Tình trạng: ${order.tinhTrang}</p>
            <ul>${productDetails}</ul>
            <label for="order-status">Thay đổi tình trạng đơn hàng:</label>
            <select id="order-status">
                <option value="Đang chờ xử lý" ${order.tinhTrang === 'Đang chờ xử lý' ? 'selected' : ''}>Đang chờ xử lý</option>
                <option value="Đã xác nhận" ${order.tinhTrang === 'Đã xác nhận' ? 'selected' : ''}>Đã xác nhận</option>
                <option value="Đang giao hàng" ${order.tinhTrang === 'Đang giao hàng' ? 'selected' : ''}>Đang giao hàng</option>
                <option value="Đã hủy" ${order.tinhTrang === 'Đã hủy' ? 'selected' : ''}>Đã hủy</option>
            </select>
            <div id="order-actions">
                <button onclick="saveOrderStatus('${order.ma}')">Lưu</button>
                <button onclick="toggleOrderDetails(false)">Đóng</button>
            </div>
        `;
        toggleOrderDetails(true); // Hiển thị chi tiết đơn hàng
    } else {
        orderDetailsDiv.innerHTML = '<p>Không tìm thấy đơn hàng.</p>';
        toggleOrderDetails(true); // Hiển thị thông báo lỗi
    }
}
function saveOrderStatus(orderId) {
    const newStatus = document.getElementById('order-status').value;
    changeOrderStatus(orderId, newStatus);
    toggleOrderDetails(false); // Đóng modal sau khi lưu
}

function changeOrderStatus(orderId, newStatus) {
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
        users[userIndex].donhang[orderIndex].tinhTrang = newStatus;
        setListUser(users); // Cập nhật lại danh sách người dùng trong localStorage
        displayOrders(); // Cập nhật lại danh sách đơn hàng
    }
}

// Gọi hàm displayOrders khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    displayOrders();
});
function closeModal() {
    document.getElementById("order-modal").style.display = "none"; // Ẩn modal
}

// Đóng modal khi người dùng nhấp vào ngoài modal
window.onclick = function (event) {
    const modal = document.getElementById("order-modal");
    if (event.target === modal) {
        closeModal();
    }
}

window.onload = function () {
    displayOrders(orders); // Hiển thị đơn hàng khi tải trang
    addEventChangeTab();
};

function isStatusMatch(order, statusFilter) {
    const statusMapping = {
        "pending": "Đang chờ xử lý",
        "confirmed": "Đã xác nhận",
        "delivering": "Đang giao hàng",
        "canceled": "Đã hủy",
    };
    return statusFilter === "all" || order.tinhTrang === statusMapping[statusFilter]; // Kiểm tra trạng thái
}
function isDateMatch(order, startDate, endDate) {
    // Nếu không có ngày bắt đầu và ngày kết thúc, trả về true để không lọc đơn hàng
    if (!startDate && !endDate) {
        return true;
    }

    // Lấy ngày từ order.ngaygio
    const orderDate = new Date(order.ngaygio).toLocaleDateString('en-CA'); // Định dạng ngày thành yyyy-mm-dd

    // Nếu chỉ chọn ngày bắt đầu mà chưa chọn ngày kết thúc, đặt ngày kết thúc là ngày hiện tại
    if (startDate && !endDate) {
        endDate = new Date().toLocaleDateString('en-CA'); // Định dạng ngày hiện tại thành chuỗi yyyy-mm-dd
    }

    // Nếu chỉ chọn ngày kết thúc mà chưa chọn ngày bắt đầu, tính tất cả ngày trước khi ngày kết thúc
    if (!startDate && endDate) {
        startDate = '1970-01-01'; // Đặt ngày bắt đầu là ngày đầu tiên của Unix epoch
    }

    // Chuyển đổi startDate và endDate thành chuỗi yyyy-mm-dd
    const start = new Date(startDate).toLocaleDateString('en-CA');
    const end = new Date(endDate).toLocaleDateString('en-CA');
    console.log(start, end);
    // Kiểm tra nếu ngày bắt đầu lớn hơn ngày kết thúc
    if (new Date(start) > new Date(end)) {
        alert('Ngày bắt đầu không thể lớn hơn ngày kết thúc.');
        return false;
    }

    // Kiểm tra ngày của đơn hàng
    return (!startDate || orderDate >= start) && (!endDate || orderDate <= end);
}

function isDistrictMatch(order, districtFilter) {
    const districtMapping = {
        "quan1": "Quận 1",
        "quan3": "Quận 3",
        "quan4": "Quận 4",
        "quan5": "Quận 5",
        "quan6": "Quận 6",
        "quan7": "Quận 7",
        "quan8": "Quận 8",
        "quan10": "Quận 10",
        "quan11": "Quận 11",
        "quan12": "Quận 12",
        "quantanbinh": "Quận Tân Bình",
        "quantanphu": "Quận Tân Phú",
        "quanbinhtan": "Quận Bình Tân",
        "quanbinhthanh": "Quận Bình Thạnh",
        "quangovap": "Quận Gò Vấp",
        "quanphunhuan": "Quận Phú Nhuận"
    };
    const district = getDistrictFromAddress(order.diachi); // Lấy quận từ địa chỉ
    return districtFilter === "all" || district === districtMapping[districtFilter]; // Kiểm tra quận
}
function getDistrictFromAddress(address) {
    const parts = address.split(','); // Tách chuỗi thành các phần tử
    if (parts.length >= 3) {
        return parts[2].trim(); // Lấy phần tử thứ 3 (quận) và loại bỏ khoảng trắng thừa
    }
    return ''; // Trả về chuỗi rỗng nếu không tìm thấy quận
}
function filterOrders() {
    const statusFilter = document.getElementById("filter-status").value;
    const startDate = document.getElementById("filter-start-date").value;
    const endDate = document.getElementById("filter-end-date").value;
    const districtFilter = document.getElementById("filter-district").value;
    // Kiểm tra nếu ngày bắt đầu lớn hơn ngày kết thúc
    if (startDate && endDate && startDate > endDate) {
        alert("Ngày bắt đầu không thể lớn hơn ngày kết thúc.");
        return;
    }
    const orders = getListDonHang(); // Giả sử hàm này trả về danh sách đơn hàng
    const filteredOrders = orders.filter(order =>
        isStatusMatch(order, statusFilter) &&
        isDateMatch(order, startDate, endDate) &&
        isDistrictMatch(order, districtFilter)
    );
    console.log(filteredOrders);
    displayOrder(filteredOrders); // Hiển thị đơn hàng đã lọc
}