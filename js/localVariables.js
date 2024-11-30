// Consolidated local variables and functions

// Admin Info
var adminInfo = [{
    "username": "admin",
    "password": "1234"
}];

// Current User
var currentuser; // User hiện tại

// Function to get the current user
function getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('CurrentUser'));
}

// Function to set the current user
function setCurrentUser(u) {
    window.localStorage.setItem('CurrentUser', JSON.stringify(u));
}

// Function to get the list of products
function getListProducts() {
    return JSON.parse(window.localStorage.getItem('ListProducts'));
}

// Function to set the list of products
function setListProducts(newList) {
    window.localStorage.setItem('ListProducts', JSON.stringify(newList));
}

// Function to get the list of users
function getListUser() {
    var data = JSON.parse(window.localStorage.getItem('ListUser')) || [];
    return data;
}

// Function to set the list of users
function setListUser(l) {
    window.localStorage.setItem('ListUser', JSON.stringify(l));
}

// Function to add a product to the cart
function themVaoGioHang(masp, tensp) {
    var user = getCurrentUser();
    if (!user) {
        alert('Bạn cần đăng nhập để mua hàng !');
        return;
    }
    var t = new Date();
    var daCoSanPham = false;

    for (var i = 0; i < user.products.length; i++) {
        if (user.products[i].ma == masp) {
            user.products[i].soluong++;
            daCoSanPham = true;
            break;
        }
    }

    if (!daCoSanPham) {
        user.products.push({
            "ma": masp,
            "soluong": 1,
            "date": t
        });
    }

    setCurrentUser(user);
}

// Function to display products
function displayProducts(products) {
    // Implementation for displaying products
}

// Additional utility functions can be added here as needed
