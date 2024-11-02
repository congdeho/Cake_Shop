let productSales = {}; // Biến lưu dữ liệu bán hàng cho từng sản phẩm

// Hàm trợ giúp để lấy thông tin chi tiết của sản phẩm theo ID
function getProductById(id) {
    return list_products.find(product => product.id === id);
}

// Tính tổng doanh thu, sản phẩm bán chạy nhất và bán ế nhất
function calculateSummary() {
    let totalRevenue = 0;
    productSales = {}; // Đặt lại dữ liệu bán hàng

    orders.forEach(order => {
        order.products.forEach(orderProduct => {
            const product = getProductById(orderProduct.id);
            const discountedPrice = product.price * (1 - product.promo.discount / 100);
            const productRevenue = discountedPrice * orderProduct.quantity;
            totalRevenue += productRevenue;

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
    let bestSellingProduct = null;
    let worstSellingProduct = null;
    let lowestQuantity = Infinity;

    list_products.forEach(product => {
        const salesData = productSales[product.name];
        
        // Sản phẩm chưa bán được cái nào (bán ế nhất)
        if (!salesData || salesData.quantity === 0) {
            worstSellingProduct = product.name;
        } else {
            // Cập nhật sản phẩm bán chạy nhất và bán ít nhất (trừ sản phẩm chưa bán được)
            if (!bestSellingProduct || salesData.quantity > productSales[bestSellingProduct].quantity) {
                bestSellingProduct = product.name;
            }
            if (salesData.quantity < lowestQuantity) {
                lowestQuantity = salesData.quantity;
                worstSellingProduct = product.name;
            }
        }
    });

    // Cập nhật phần tóm tắt
    document.getElementById("totalRevenue").textContent = `${totalRevenue.toLocaleString()} VNĐ`;
    document.getElementById("bestSellingProduct").textContent = bestSellingProduct;
    document.getElementById("worstSellingProduct").textContent = worstSellingProduct;
}

// Hiển thị bảng sản phẩm với số lượng bán ra và tổng doanh thu
function populateProductsTable() {
    const tableBody = document.querySelector("#itemDetails tbody");
    tableBody.innerHTML = "";

    list_products.forEach(product => {
        const salesData = productSales[product.name] || { quantity: 0, revenue: 0 }; // Lấy dữ liệu bán hoặc mặc định 0 nếu chưa bán
        const row = `<tr>
            <td>${product.name}</td>
            <td>${salesData.quantity}</td>
            <td>${salesData.revenue.toLocaleString()} VNĐ</td>
        </tr>`;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
}

// Hiển thị bảng đơn hàng
function populateOrdersTable() {
    const tableBody = document.querySelector("#invoiceDetails tbody");
    tableBody.innerHTML = "";

    orders.forEach(order => {
        let orderTotal = 0;
        order.products.forEach(orderProduct => {
            const product = getProductById(orderProduct.id);
            const discountedPrice = product.price * (1 - product.promo.discount / 100);
            orderTotal += discountedPrice * orderProduct.quantity;
        });

        const row = `<tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.address}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
            <td>${orderTotal.toLocaleString()} VNĐ</td>
        </tr>`;
        tableBody.insertAdjacentHTML("beforeend", row);
    });
}

// Khởi tạo dữ liệu khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    calculateSummary();
    populateProductsTable();
    populateOrdersTable();
});
