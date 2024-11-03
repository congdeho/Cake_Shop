
// Hàm lấy tên khách hàng từ ID
function getUserNameById(userId) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'N/A';
}

// Hàm lấy thông tin sản phẩm từ ID
function getProductById(productId) {
    return list_products.find(product => product.id === productId);
}

// Tính tổng doanh thu, sản phẩm bán chạy nhất và bán ế nhất
function calculateSummary() {
    let totalRevenue = 0; // Tổng doanh thu
    productSales = {}; // Đặt lại dữ liệu bán hàng

    // Duyệt qua từng đơn hàng
    orders.forEach(order => {
        // Duyệt qua từng sản phẩm trong đơn hàng
        order.products.forEach(orderProduct => {
            const product = getProductById(orderProduct.id); // Lấy thông tin sản phẩm
            const discountedPrice = product.price * (1 - (product.promo.discount || 0) / 100); // Tính giá sau khuyến mãi
            const productRevenue = discountedPrice * orderProduct.quantity; // Tính doanh thu của sản phẩm
            totalRevenue += productRevenue; // Cộng dồn vào tổng doanh thu

            // Cập nhật số lượng bán cho từng sản phẩm
            if (productSales[product.name]) {
                productSales[product.name].quantity += orderProduct.quantity;
                productSales[product.name].revenue += productRevenue;
            } else {
                productSales[product.name] = { quantity: orderProduct.quantity, revenue: productRevenue };
            }
        });
    });

    // Xác định sản phẩm bán chạy nhất và bán ế nhất
    let bestSellingProduct = null; // Tên sản phẩm bán chạy nhất
    let worstSellingProduct = null; // Tên sản phẩm bán ế nhất
    let lowestQuantity = Infinity; // Số lượng bán ít nhất

    // Duyệt qua danh sách sản phẩm
    list_products.forEach(product => {
        const salesData = productSales[product.name]; // Lấy dữ liệu bán của sản phẩm

        // Nếu sản phẩm chưa bán được cái nào (bán ế nhất)
        if (!salesData || salesData.quantity === 0) {
            worstSellingProduct = product.name; // Cập nhật sản phẩm bán ế nhất
        } else {
            // Cập nhật sản phẩm bán chạy nhất
            if (!bestSellingProduct || salesData.quantity > productSales[bestSellingProduct].quantity) {
                bestSellingProduct = product.name; // Cập nhật sản phẩm bán chạy nhất
            }
            // Cập nhật sản phẩm bán ít nhất (trừ sản phẩm chưa bán được)
            if (salesData.quantity < lowestQuantity) {
                lowestQuantity = salesData.quantity;
                worstSellingProduct = product.name; // Cập nhật sản phẩm bán ế nhất
            }
        }
    });

    // Cập nhật phần tóm tắt
    document.getElementById("totalRevenue").textContent = `${totalRevenue.toLocaleString()} VNĐ`; // Hiển thị tổng doanh thu
    document.getElementById("bestSellingProduct").textContent = bestSellingProduct; // Hiển thị sản phẩm bán chạy nhất
    document.getElementById("worstSellingProduct").textContent = worstSellingProduct; // Hiển thị sản phẩm bán ế nhất
}

// Hiển thị bảng sản phẩm với số lượng bán ra và tổng doanh thu
function populateProductsTable() {
    const tableBody = document.querySelector("#itemDetails tbody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ của bảng

    // Duyệt qua danh sách sản phẩm để hiển thị
    list_products.forEach(product => {
        const salesData = productSales[product.name] || { quantity: 0, revenue: 0 }; // Lấy dữ liệu bán hoặc mặc định 0 nếu chưa bán
        const row = `<tr>
            <td>${product.name}</td>
            <td>${salesData.quantity}</td>
            <td>${salesData.revenue.toLocaleString()} VNĐ</td>
        </tr>`;
        tableBody.insertAdjacentHTML("beforeend", row); // Thêm hàng vào bảng
    });
}

// Hiển thị bảng đơn hàng
function populateOrdersTable() {
    const tableBody = document.querySelector("#invoiceDetails tbody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ của bảng

    // Duyệt qua từng đơn hàng để hiển thị
    orders.forEach(order => {
        let orderTotal = 0; // Tổng tiền của đơn hàng
        order.products.forEach(orderProduct => {
            const product = getProductById(orderProduct.id); // Lấy thông tin sản phẩm
            const discountedPrice = product.price * (1 - (product.promo.discount || 0) / 100); // Tính giá sau khuyến mãi
            orderTotal += discountedPrice * orderProduct.quantity; // Cộng dồn vào tổng tiền đơn hàng
        });

        // Lấy tên khách hàng từ ID
        const customerName = getUserNameById(order.user[0]?.id);

        // Tạo hàng cho bảng đơn hàng
        const row = `<tr>
            <td>${order.id}</td>
            <td>${customerName}</td>
            <td>${order.address}</td>
            <td>${order.date}</td>
            <td>${getOrderStatus(order.status)}</td>
            <td>${orderTotal.toLocaleString()} VNĐ</td>
        </tr>`;
        tableBody.insertAdjacentHTML("beforeend", row); // Thêm hàng vào bảng
    });
}

// Hàm lấy trạng thái đơn hàng dưới dạng chuỗi hiển thị
function getOrderStatus(status) {
    switch (status) {
        case 'pending': return 'Chưa xử lý';
        case 'confirmed': return 'Đã xác nhận';
        case 'delivered': return 'Đã giao';
        case 'canceled': return 'Đã hủy';
        default: return 'Không xác định';
    }
}

// Khởi tạo dữ liệu khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    calculateSummary(); // Tính toán tóm tắt doanh thu và sản phẩm
    populateProductsTable(); // Hiển thị bảng sản phẩm
    populateOrdersTable(); // Hiển thị bảng đơn hàng
});
