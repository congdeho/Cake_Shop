function displayWholeCakes() {
    const wholeCakeTab = document.getElementById('whole-cake');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    // Lọc các sản phẩm loại Whole Cake
    const wholeCakes = list_products.filter(product => product.type === "Whole Cake");

    wholeCakes.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product2');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <div class="it2">
                            <i class="material-icons ">shopping_cart</i>
                        </div>
                    </div>

        `;
        
        // Thêm sản phẩm vào tab
        wholeCakeTab.appendChild(productDiv);
    });
}

// Hàm hiển thị sản phẩm Short Cake
function displayshortcake() {
    const shortCakeTab = document.getElementById('short-cake');
    shortCakeTab.innerHTML = ''; // Xóa nội dung cũ

    // Lọc các sản phẩm loại Short Cake
    const shortCakes = list_products.filter(product => product.type === "Short Cake");

    shortCakes.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <div class="product2">
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <div class="it2">
                            <i class="material-icons ">shopping_cart</i>
                        </div>
                    </div>
                </div>
        `;
        
        // Thêm sản phẩm vào tab
        shortCakeTab.appendChild(productDiv);
    });
}

// Hàm hiển thị sản phẩm Bread and Pastry
function displaybread() {
    const breadTab = document.getElementById('bread-pastry');
    breadTab.innerHTML = ''; // Xóa nội dung cũ

    // Lọc các sản phẩm loại Bread And Pastry
    const breads = list_products.filter(product => product.type === "Bread and Pastry");

    breads.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <div class="product2">
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <div class="it2">
                            <i class="material-icons ">shopping_cart</i>
                        </div>
                    </div>
                </div>
        `;
        
        // Thêm sản phẩm vào tab
        breadTab.appendChild(productDiv);
    });
}

// Hàm hiển thị các sản phẩm Dessert
function displaydessert() {
    const dessertTab = document.getElementById('dessert');
    dessertTab.innerHTML = ''; // Xóa nội dung cũ

    // Lọc các sản phẩm loại Dessert
    const desserts = list_products.filter(product => product.type === "Dessert");

    desserts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <div class="product2">
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <div class="it2">
                            <i class="material-icons ">shopping_cart</i>
                        </div>
                    </div>
                </div>
        `;
        
        // Thêm sản phẩm vào tab
        dessertTab.appendChild(productDiv);
    });
}

// Hàm hiển thị các sản phẩm Gifts
function displaygifts() {
    const giftsTab = document.getElementById('gifts');
    giftsTab.innerHTML = ''; // Xóa nội dung cũ

    // Lọc các sản phẩm loại Gifts
    const gifts = list_products.filter(product => product.type === "Gifts");

    gifts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <div class="product2">
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <div class="it2">
                            <i class="material-icons ">shopping_cart</i>
                        </div>
                    </div>
                </div>
        `;
        
        // Thêm sản phẩm vào tab
        giftsTab.appendChild(productDiv);
    });
}

// Hàm hiển thị các sản phẩm Cookies
function displaycookies() {
    const cookiesTab = document.getElementById('cookies');
    cookiesTab.innerHTML = ''; // Xóa nội dung cũ

    // Lọc các sản phẩm loại Cookies
    const cookies = list_products.filter(product => product.type === "Cookies");

    cookies.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <div class="product2">
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <div class="it2">
                            <i class="material-icons ">shopping_cart</i>
                        </div>
                    </div>
                </div>
        `;
        
        // Thêm sản phẩm vào tab
        cookiesTab.appendChild(productDiv);
    });
}
