function navigateToContent(content) {
    // Lưu trạng thái mục người dùng chọn vào localStorage
    localStorage.setItem('currentContent', content);
    // Điều hướng về trang index
    window.location.href = 'index.html';
}

// Kiểm tra và hiển thị nội dung tương ứng trên index.html
document.addEventListener('DOMContentLoaded', function () {
    const content = localStorage.getItem('currentContent');
    if (content) {
        // Ẩn tất cả các tab sản phẩm
        document.querySelectorAll('.product-tab').forEach(tab => tab.style.display = 'none');
        
        // Hiển thị nội dung dựa trên mục đã chọn
        const tab = document.getElementById(content);
        if (tab) {
            tab.style.display = 'block';
        }

        // Xóa trạng thái đã lưu
        localStorage.removeItem('currentContent');
    }
});
// Thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Sản phẩm đã được thêm vào giỏ hàng');
}

// Hiển thị giỏ hàng trong trang checkout
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="product-item">
                <p><strong>${item.name}</strong></p>
                <p>Số lượng: ${item.quantity}</p>
                <p>Giá: ${item.price * item.quantity} VND</p>
            </div>`;
        total += item.price * item.quantity;
    });

    totalPriceEl.textContent = total.toLocaleString();
}

// Xóa giỏ hàng
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Giỏ hàng đã được làm trống');
}

