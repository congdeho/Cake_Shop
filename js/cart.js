var currentuser; // user hiện tại, biến toàn cục
window.onload = function () {
    khoiTao();

	currentuser = getCurrentUser();
    console.log(currentuser);
	addProductToTable(currentuser);
}
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
// function addToCart(productName, price) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProduct = cart.find(item => item.name === productName);

//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cart.push({ name: productName, price: price, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert('Sản phẩm đã được thêm vào giỏ hàng');
// }

// Hiển thị giỏ hàng trong trang checkout
function addProductToTable(user) {
    if (!user || !user.products || user.products.length === 0) {
        document.getElementById('cart-items').innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        document.getElementById('total-price').textContent = '0';
        return;
    }

    var cartContent = '';
    var totalAmount = 0;

    for (var product of user.products) {
        var productInfo = getProductById(product.ma); // Hàm này lấy thông tin sản phẩm từ ID
        var productTotal = product.soluong * productInfo.price;
        totalAmount += productTotal;

        cartContent += `
            <div class="cart-item">
                <img src="${productInfo.image}" alt="${productInfo.name}">
                <div class="cart-item-details">
                    <h3>${productInfo.name}</h3>
                    <p>Giá: ${productInfo.price} VND</p>
                    <p>Tổng: ${productTotal} VND</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${product.ma})">-</button>
                    <span>${product.soluong}</span>
                    <button onclick="increaseQuantity(${product.ma})">+</button>
                </div>
                <button onclick="removeFromCart(${product.ma})">Xóa</button>
            </div>
        `;
    }

    document.getElementById('cart-items').innerHTML = cartContent;
    document.getElementById('total-price').textContent = totalAmount;
    document.getElementById('total-price2').textContent = totalAmount;

}

function getProductById(productId) {
    // Hàm này lấy thông tin sản phẩm từ ID
    list_products = getListProducts();
    console.log(list_products);
    return list_products.find(product => product.id === productId);
}

function removeFromCart(productId) {
    var user = getCurrentUser();
    user.products = user.products.filter(product => product.ma !== productId);
    setCurrentUser(user);
    setListUser(getListUser().map(u => u.username === user.username ? user : u));
    addProductToTable(user);
}
function increaseQuantity(productId) {
    var user = getCurrentUser();
    for (var product of user.products) {
        if (product.ma === productId) {
            product.soluong += 1;
            break;
        }
    }
    setCurrentUser(user);
    setListUser(getListUser().map(u => u.username === user.username ? user : u));
    addProductToTable(user);
}

function decreaseQuantity(productId) {
    var user = getCurrentUser();
    for (var product of user.products) {
        if (product.ma === productId) {
            if (product.soluong > 1) {
                product.soluong -= 1;
            }
            break;
        }
    }
    setCurrentUser(user);
    setListUser(getListUser().map(u => u.username === user.username ? user : u));
    addProductToTable(user);
}