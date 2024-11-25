function displayWholeCakes() {
    const wholeCakeTab = document.getElementById('whole-cake');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const wholeCakes = list_products.filter(product => product.type === "Whole Cake");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

        productContainer.innerHTML = ''; // Xóa danh sách cũ

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
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
            productContainer.appendChild(productDiv);
        });
    }

    // Tạo phân trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
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

    // Hiển thị chi tiết sản phẩm
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
        productContainer.style.display = 'none';
        productDetailsContainer.style.display = 'block';
    }

    function hideProductDetails() {
        productDetailsContainer.style.display = 'none';
        productContainer.style.display = 'block';
    }

    // Gắn vào `window` để gọi từ HTML
    window.showProductDetailsById = function (id) {
        const product = wholeCakes.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    window.hideProductDetails = hideProductDetails;

    // Hiển thị trang đầu tiên và phân trang
    showProducts(currentPage);
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
    wholeCakeTab.appendChild(paginationContainer);
}


function displayshortcake() {
    const wholeCakeTab = document.getElementById('short-cake');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const wholeCakes = list_products.filter(product => product.type === "Short Cake");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

        productContainer.innerHTML = ''; // Xóa danh sách cũ

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
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
            productContainer.appendChild(productDiv);
        });
    }

    // Tạo phân trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
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

    // Hiển thị chi tiết sản phẩm
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
        productContainer.style.display = 'none';
        productDetailsContainer.style.display = 'block';
    }

    function hideProductDetails() {
        productDetailsContainer.style.display = 'none';
        productContainer.style.display = 'block';
    }

    // Gắn vào `window` để gọi từ HTML
    window.showProductDetailsById = function (id) {
        const product = wholeCakes.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    window.hideProductDetails = hideProductDetails;

    // Hiển thị trang đầu tiên và phân trang
    showProducts(currentPage);
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
    wholeCakeTab.appendChild(paginationContainer);
}




function displaybread() {
    const wholeCakeTab = document.getElementById('bread-pastry');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const wholeCakes = list_products.filter(product => product.type === "Bread and Pastry");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

        productContainer.innerHTML = ''; // Xóa danh sách cũ

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
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
            productContainer.appendChild(productDiv);
        });
    }

    // Tạo phân trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
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

    // Hiển thị chi tiết sản phẩm
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
        productContainer.style.display = 'none';
        productDetailsContainer.style.display = 'block';
    }

    function hideProductDetails() {
        productDetailsContainer.style.display = 'none';
        productContainer.style.display = 'block';
    }

    // Gắn vào `window` để gọi từ HTML
    window.showProductDetailsById = function (id) {
        const product = wholeCakes.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    window.hideProductDetails = hideProductDetails;

    // Hiển thị trang đầu tiên và phân trang
    showProducts(currentPage);
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
    wholeCakeTab.appendChild(paginationContainer);
}


function displaydessert() {
    const wholeCakeTab = document.getElementById('dessert');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const wholeCakes = list_products.filter(product => product.type === "Dessert");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

        productContainer.innerHTML = ''; // Xóa danh sách cũ

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
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
            productContainer.appendChild(productDiv);
        });
    }

    // Tạo phân trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
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

    // Hiển thị chi tiết sản phẩm
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
        productContainer.style.display = 'none';
        productDetailsContainer.style.display = 'block';
    }

    function hideProductDetails() {
        productDetailsContainer.style.display = 'none';
        productContainer.style.display = 'block';
    }

    // Gắn vào `window` để gọi từ HTML
    window.showProductDetailsById = function (id) {
        const product = wholeCakes.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    window.hideProductDetails = hideProductDetails;

    // Hiển thị trang đầu tiên và phân trang
    showProducts(currentPage);
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
    wholeCakeTab.appendChild(paginationContainer);
}


// Hàm hiển thị các sản phẩm Gifts
function displaygifts() {
    const wholeCakeTab = document.getElementById('gifts');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const wholeCakes = list_products.filter(product => product.type === "Gifts");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

        productContainer.innerHTML = ''; // Xóa danh sách cũ

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
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
            productContainer.appendChild(productDiv);
        });
    }

    // Tạo phân trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
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

    // Hiển thị chi tiết sản phẩm
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
        productContainer.style.display = 'none';
        productDetailsContainer.style.display = 'block';
    }

    function hideProductDetails() {
        productDetailsContainer.style.display = 'none';
        productContainer.style.display = 'block';
    }

    // Gắn vào `window` để gọi từ HTML
    window.showProductDetailsById = function (id) {
        const product = wholeCakes.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    window.hideProductDetails = hideProductDetails;

    // Hiển thị trang đầu tiên và phân trang
    showProducts(currentPage);
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
    wholeCakeTab.appendChild(paginationContainer);
}



function displaycookies() {
    const wholeCakeTab = document.getElementById('cookies');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const wholeCakes = list_products.filter(product => product.type === "Cookies");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(wholeCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = wholeCakes.slice(startIndex, endIndex);

        productContainer.innerHTML = ''; // Xóa danh sách cũ

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
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
            productContainer.appendChild(productDiv);
        });
    }

    // Tạo phân trang
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
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

    // Hiển thị chi tiết sản phẩm
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
        productContainer.style.display = 'none';
        productDetailsContainer.style.display = 'block';
    }

    function hideProductDetails() {
        productDetailsContainer.style.display = 'none';
        productContainer.style.display = 'block';
    }

    // Gắn vào `window` để gọi từ HTML
    window.showProductDetailsById = function (id) {
        const product = wholeCakes.find(p => p.id === id);
        if (product) {
            showProductDetails(product);
        }
    };

    window.hideProductDetails = hideProductDetails;

    // Hiển thị trang đầu tiên và phân trang
    showProducts(currentPage);
    wholeCakeTab.appendChild(productContainer);
    wholeCakeTab.appendChild(productDetailsContainer);
    wholeCakeTab.appendChild(paginationContainer);
}


