function displayWholeCakes() {
    const wholeCakeTab = document.getElementById('whole-cake');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    // Tạo container chứa các sản phẩm
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Lọc các sản phẩm loại Whole Cake
    const wholeCakes = list_products.filter(product => product.type === "Whole Cake");

    // Hiển thị sản phẩm (giới hạn trang ban đầu)
    const productsPerPage = 6;  // Số lượng sản phẩm mỗi trang
    let currentPage = 1;

    // Hàm hiển thị các sản phẩm của trang hiện tại
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

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

    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

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
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(paginationContainer);
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


