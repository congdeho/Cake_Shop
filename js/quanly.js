
function displayOrders(orderList) {
    const orderTableBody = document.querySelector("#order-table tbody");
    orderTableBody.innerHTML = '';

    orderList.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.address}</td>
            <td>${order.date}</td>
            <td>${getOrderStatus(order.status)}</td>
            <td>
                <button onclick="viewOrderDetails('${order.id}')">Xem chi tiết</button>
            </td>
        `;
        orderTableBody.appendChild(row);
    });
}

function changeOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        displayOrders(orders);
    }
}

function getOrderStatus(status) {
    switch (status) {
        case 'pending':
            return 'Chưa xử lý';
        case 'confirmed':
            return 'Đã xác nhận';
        case 'delivered':
            return 'Đã giao';
        case 'canceled':
            return 'Đã huỷ';
        default:
            return 'Không xác định';
    }
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    const orderDetailsDiv = document.getElementById("order-details");

    if (order) {
        const productDetails = order.products.map(orderProduct => {
            const product = list_products.find(p => p.id === orderProduct.id);
            const totalPrice = orderProduct.quantity * product.price; // Tính tổng giá
            return `<li>
                Sản phẩm: ${product.name}, 
                Số lượng: ${orderProduct.quantity}, 
                Giá: ${Number(product.price).toLocaleString()} VNĐ, 
                Tổng: ${totalPrice.toLocaleString()} VNĐ
            </li>`;
        }).join('');

        orderDetailsDiv.innerHTML = `
            <p>Mã đơn hàng: ${order.id}</p>
            <p>Khách hàng: ${order.customer}</p>
            <p>Địa chỉ: ${order.address}</p>
            <p>Ngày: ${order.date}</p>
            <p>Trạng thái: ${getOrderStatus(order.status)}</p>
            <h4>Chi tiết sản phẩm:</h4>
            <ul>${productDetails}</ul>
        `;
        document.getElementById("order-modal").style.display = "block"; // Hiển thị modal
    } else {
        alert('Đơn hàng không tồn tại.');
    }
}

function closeModal() {
    document.getElementById("order-modal").style.display = "none"; // Ẩn modal
}

// Đóng modal khi người dùng nhấp vào ngoài modal
window.onclick = function(event) {
    const modal = document.getElementById("order-modal");
    if (event.target === modal) {
        closeModal();
    }
}

window.onload = function() {
    displayOrders(orders);
    addEventChangeTab();
};

function isStatusMatch(order, statusFilter) {
    return statusFilter === "all" || order.status === statusFilter;
}

function isDateMatch(order, startDate, endDate) {
    return (!startDate || order.date >= startDate) && (!endDate || order.date <= endDate);
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
    return districtFilter === "all" || order.address === districtMapping[districtFilter];
}

function filterOrders() {
    const statusFilter = document.getElementById("filter-status").value;
    const startDate = document.getElementById("filter-start-date").value;
    const endDate = document.getElementById("filter-end-date").value;
    const districtFilter = document.getElementById("filter-district").value;

    const filteredOrders = orders.filter(order => 
        isStatusMatch(order, statusFilter) &&
        isDateMatch(order, startDate, endDate) &&
        isDistrictMatch(order, districtFilter)
    );

    displayOrders(filteredOrders);
}
