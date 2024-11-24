function displayWholeCakes() {
    const wholeCakeTab = document.getElementById('whole-cake');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Whole Cake
    const wholeCakes = list_products.filter(product => product.type === "Whole Cake");

    // Tạo container hiển thị chi tiết sản phẩm
    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none'; // Ban đầu ẩn chi tiết sản phẩm

    // Hàm hiển thị chi tiết sản phẩm
    function showProductDetails(product) {
        productDetailsContainer.innerHTML = `
            <div class="details">
                <button onclick="hideProductDetails()">Quay lại</button>
                <h1>${product.name}</h1>
                <img src="${product.image}" alt="${product.name}">
                <p><strong>Giá:</strong> ${product.price} VND</p>
                <p><strong>Mô tả:</strong> ${product.description}</p>
                <p><strong>Hương vị:</strong> ${product.taste}</p>
                <p><strong>Kích thước:</strong> ${product.size}</p>
                <p><strong>Khuyến mãi:</strong> ${product.promo.name}</p>
                <button onclick="themVaoGioHang(${product.id}, '${product.name}')">Thêm vào giỏ hàng</button>
            </div>
        `;
        productContainer.style.display = 'none'; // Ẩn danh sách sản phẩm
        productDetailsContainer.style.display = 'block'; // Hiển thị chi tiết sản phẩm
    }

    // Hàm ẩn chi tiết sản phẩm
    function hideProductDetails() {
        productDetailsContainer.style.display = 'none'; // Ẩn chi tiết sản phẩm
        productContainer.style.display = 'block'; // Hiển thị lại danh sách sản phẩm
    }

    // Thêm vào `window` để có thể gọi trong HTML
    window.hideProductDetails = hideProductDetails;

    // Hiển thị danh sách sản phẩm
    wholeCakes.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        // Nội dung sản phẩm
        productDiv.innerHTML = `
            <div class="product2">
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" class="zoom-image" onclick="showProductDetailsById(${product.id})">
                    <h3>${product.name}</h3>
                    <div class="it">
                        <div class="it1">${product.price}</div>
                        <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                            <i class="material-icons">shopping_cart</i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Thêm sản phẩm vào container
        productContainer.appendChild(productDiv);
    });

    // Hàm hiển thị chi tiết sản phẩm từ ID
    window.showProductDetailsById = function (id) {
        const product = list_products.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    // Thêm container sản phẩm và chi tiết vào tab
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
}


function displayshortcake() {
    const shortCakeTab = document.getElementById('short-cake');
    shortCakeTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Short Cake
    const shortCakes = list_products.filter(product => product.type === "Short Cake");

    // Hiển thị sản phẩm (giới hạn trang ban đầu)
    const productsPerPage = 6;
    let currentPage = 1;

    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = shortCakes.slice(startIndex, endIndex);

        productsToDisplay.forEach(product => {
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
                            <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                                <i class="material-icons">shopping_cart</i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Thêm sản phẩm vào container
            productContainer.appendChild(productDiv);
        });
    }

    // Hiển thị trang đầu tiên
    showProducts(currentPage);

    // Tạo nút chuyển trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    const totalPages = Math.ceil(shortCakes.length / productsPerPage);

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        productContainer.innerHTML = ''; // Xóa các sản phẩm hiện tại
        showProducts(page);
    }

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Trang trước';
    prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => handlePageChange(i));
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Trang sau';
    nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
    paginationContainer.appendChild(nextButton);

    shortCakeTab.appendChild(productContainer);
    shortCakeTab.appendChild(paginationContainer);
}




function displaybread() {
    const breadTab = document.getElementById('bread-pastry');
    breadTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Short Cake
    const breads = list_products.filter(product => product.type === "Bread and Pastry");

    // Hiển thị sản phẩm (giới hạn trang ban đầu)
    const productsPerPage = 6;
    let currentPage = 1;

    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = breads.slice(startIndex, endIndex);

        productsToDisplay.forEach(product => {
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
                            <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                                <i class="material-icons">shopping_cart</i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Thêm sản phẩm vào container
            productContainer.appendChild(productDiv);
        });
    }

    // Hiển thị trang đầu tiên
    showProducts(currentPage);

    // Tạo nút chuyển trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    const totalPages = Math.ceil(breads.length / productsPerPage);

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        productContainer.innerHTML = ''; // Xóa các sản phẩm hiện tại
        showProducts(page);
    }

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Trang trước';
    prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => handlePageChange(i));
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Trang sau';
    nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
    paginationContainer.appendChild(nextButton);

    breadTab.appendChild(productContainer);
    breadTab.appendChild(paginationContainer);
}


function displaydessert() {
    const dessertTab = document.getElementById('dessert');
    dessertTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Dessert
    const desserts = list_products.filter(product => product.type === "Dessert");

    // Hiển thị sản phẩm (giới hạn trang ban đầu)
    const productsPerPage = 6;
    let currentPage = 1;

    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = desserts.slice(startIndex, endIndex);

        productsToDisplay.forEach(product => {
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
                            <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                                <i class="material-icons">shopping_cart</i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Thêm sản phẩm vào container
            productContainer.appendChild(productDiv);
        });
    }

    // Hiển thị trang đầu tiên
    showProducts(currentPage);

    // Tạo nút chuyển trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    const totalPages = Math.ceil(desserts.length / productsPerPage);

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        productContainer.innerHTML = ''; // Xóa các sản phẩm hiện tại
        showProducts(page);
    }

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Trang trước';
    prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => handlePageChange(i));
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Trang sau';
    nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
    paginationContainer.appendChild(nextButton);

    dessertTab.appendChild(productContainer);
    dessertTab.appendChild(paginationContainer);
}


// Hàm hiển thị các sản phẩm Gifts
function displaygifts() {
    const giftsTab = document.getElementById('gifts');
    giftsTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Gifts
    const gifts = list_products.filter(product => product.type === "Gifts");

 
    // Hiển thị sản phẩm (giới hạn trang ban đầu)
    const productsPerPage = 6;
    let currentPage = 1;

    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = gifts.slice(startIndex, endIndex);

        productsToDisplay.forEach(product => {
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
                            <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                                <i class="material-icons">shopping_cart</i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Thêm sản phẩm vào container
            productContainer.appendChild(productDiv);
        });
    }

    // Hiển thị trang đầu tiên
    showProducts(currentPage);

    // Tạo nút chuyển trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    const totalPages = Math.ceil(gifts.length / productsPerPage);

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        productContainer.innerHTML = ''; // Xóa các sản phẩm hiện tại
        showProducts(page);
    }

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Trang trước';
    prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => handlePageChange(i));
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Trang sau';
    nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
    paginationContainer.appendChild(nextButton);

    giftsTab.appendChild(productContainer);
    giftsTab.appendChild(paginationContainer);
}



function displaycookies() {
    const cookiesTab = document.getElementById('cookies');
    cookiesTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Cookies
    const cookies = list_products.filter(product => product.type === "Cookies");

    // Hiển thị sản phẩm (giới hạn trang ban đầu)
    const productsPerPage = 6;  // Số lượng sản phẩm mỗi trang
    let currentPage = 1;

    // Hàm hiển thị các sản phẩm của trang hiện tại
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = cookies.slice(startIndex, endIndex);

        productsToDisplay.forEach(product => {
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
                            <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                                <i class="material-icons">shopping_cart</i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Thêm sản phẩm vào container
            productContainer.appendChild(productDiv);
        });
    }

    // Hiển thị trang đầu tiên
    showProducts(currentPage);

    // Tạo nút chuyển trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    const totalPages = Math.ceil(cookies.length / productsPerPage);
    
    // Hàm chuyển trang
    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        productContainer.innerHTML = ''; // Xóa các sản phẩm hiện tại
        showProducts(page);
    }

    // Tạo nút trước
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Trang trước';
    prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
    paginationContainer.appendChild(prevButton);

    // Tạo các nút số trang
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => handlePageChange(i));
        paginationContainer.appendChild(pageButton);
    }

    // Tạo nút sau
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Trang sau';
    nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
    paginationContainer.appendChild(nextButton);

    // Thêm container chứa sản phẩm và nút chuyển trang vào tab
    cookiesTab.appendChild(productContainer);
    cookiesTab.appendChild(paginationContainer);
}


