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
        updatePagination(); // Cập nhật lại phân trang
    }

    function updatePagination() {
        paginationContainer.innerHTML = ''; // Xóa nút phân trang cũ

        // Nút "Trang trước"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '❮';
            prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        // Hiển thị các số trang (hiển thị số trang gần với trang hiện tại)
        const pageRange = 2; // Hiển thị tối đa 2 trang trước và sau trang hiện tại
        const startPage = Math.max(1, currentPage - pageRange);
        const endPage = Math.min(totalPages, currentPage + pageRange);

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active'); // Thêm lớp active cho nút hiện tại
            }
            pageButton.addEventListener('click', () => handlePageChange(i));
            paginationContainer.appendChild(pageButton);
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '❯';
            nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }
    }

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

    // Cập nhật phân trang ban đầu
    updatePagination();
}


function displayshortcake() {
    const wholeCakeTab = document.getElementById('short-cake');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const shortCakes = list_products.filter(product => product.type === "Short Cake");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(shortCakes.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = shortCakes.slice(startIndex, endIndex);

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
        updatePagination(); // Cập nhật lại phân trang
    }

    function updatePagination() {
        paginationContainer.innerHTML = ''; // Xóa nút phân trang cũ

        // Nút "Trang trước"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '❮';
            prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        // Hiển thị các số trang (hiển thị số trang gần với trang hiện tại)
        const pageRange = 2; // Hiển thị tối đa 2 trang trước và sau trang hiện tại
        const startPage = Math.max(1, currentPage - pageRange);
        const endPage = Math.min(totalPages, currentPage + pageRange);

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active'); // Thêm lớp active cho nút hiện tại
            }
            pageButton.addEventListener('click', () => handlePageChange(i));
            paginationContainer.appendChild(pageButton);
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '❯';
            nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }
    }

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
        const product = shortCakes.find(p => p.id === id);
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

    // Cập nhật phân trang ban đầu
    updatePagination();
}




function displaybread() {
    const wholeCakeTab = document.getElementById('bread-pastry');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const breadAndPastry = list_products.filter(product => product.type === "Bread and Pastry");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(breadAndPastry.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = breadAndPastry.slice(startIndex, endIndex);

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
        updatePagination(); // Cập nhật lại phân trang
    }

    function updatePagination() {
        paginationContainer.innerHTML = ''; // Xóa nút phân trang cũ

        // Nút "Trang trước"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '❮';
            prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        // Hiển thị các số trang (hiển thị số trang gần với trang hiện tại)
        const pageRange = 2; // Hiển thị tối đa 2 trang trước và sau trang hiện tại
        const startPage = Math.max(1, currentPage - pageRange);
        const endPage = Math.min(totalPages, currentPage + pageRange);

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active'); // Thêm lớp active cho nút hiện tại
            }
            pageButton.addEventListener('click', () => handlePageChange(i));
            paginationContainer.appendChild(pageButton);
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '❯';
            nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }
    }

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
        const product = breadAndPastry.find(p => p.id === id);
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

    // Cập nhật phân trang ban đầu
    updatePagination();
}


function displaydessert() {
    const wholeCakeTab = document.getElementById('dessert');
    wholeCakeTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    const desserts = list_products.filter(product => product.type === "Dessert");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(desserts.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = desserts.slice(startIndex, endIndex);

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
        updatePagination(); // Cập nhật lại phân trang
    }

    function updatePagination() {
        paginationContainer.innerHTML = ''; // Xóa nút phân trang cũ

        // Nút "Trang trước"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '❮';
            prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        // Hiển thị các số trang (hiển thị số trang gần với trang hiện tại)
        const pageRange = 2; // Hiển thị tối đa 2 trang trước và sau trang hiện tại
        const startPage = Math.max(1, currentPage - pageRange);
        const endPage = Math.min(totalPages, currentPage + pageRange);

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active'); // Thêm lớp active cho nút hiện tại
            }
            pageButton.addEventListener('click', () => handlePageChange(i));
            paginationContainer.appendChild(pageButton);
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '❯';
            nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }
    }

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
        const product = desserts.find(p => p.id === id);
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

    // Cập nhật phân trang ban đầu
    updatePagination();
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

    const gifts = list_products.filter(product => product.type === "Gifts");

    // Phân trang
    const productsPerPage = 6;
    let currentPage = 1;
    const totalPages = Math.ceil(gifts.length / productsPerPage);

    // Hiển thị danh sách sản phẩm theo trang
    function showProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = page * productsPerPage;
        const productsToDisplay = gifts.slice(startIndex, endIndex);

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
        updatePagination(); // Cập nhật lại phân trang
    }

    function updatePagination() {
        paginationContainer.innerHTML = ''; // Xóa nút phân trang cũ

        // Nút "Trang trước"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '❮';
            prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        // Hiển thị các số trang (hiển thị số trang gần với trang hiện tại)
        const pageRange = 2; // Hiển thị tối đa 2 trang trước và sau trang hiện tại
        const startPage = Math.max(1, currentPage - pageRange);
        const endPage = Math.min(totalPages, currentPage + pageRange);

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active'); // Thêm lớp active cho nút hiện tại
            }
            pageButton.addEventListener('click', () => handlePageChange(i));
            paginationContainer.appendChild(pageButton);
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '❯';
            nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }
    }

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
        const product = gifts.find(p => p.id === id);
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

    // Cập nhật phân trang ban đầu
    updatePagination();
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

    // Hàm hiển thị sản phẩm theo trang
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

    // Hàm tạo phân trang
    function createPagination(currentPage, totalPages) {
        const paginationContainer = document.createElement('div');
        paginationContainer.classList.add('pagination');

        // Nút "Trang trước"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '❮';
            prevButton.addEventListener('click', () => handlePageChange(currentPage - 1));
            paginationContainer.appendChild(prevButton);
        }

        // Hiển thị các số trang (hiển thị số trang gần với trang hiện tại)
        const pageRange = 2; // Hiển thị tối đa 2 trang trước và sau trang hiện tại
        const startPage = Math.max(1, currentPage - pageRange);
        const endPage = Math.min(totalPages, currentPage + pageRange);

        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active'); // Thêm lớp active cho nút hiện tại
            }
            pageButton.addEventListener('click', () => handlePageChange(i));
            paginationContainer.appendChild(pageButton);
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '❯';
            nextButton.addEventListener('click', () => handlePageChange(currentPage + 1));
            paginationContainer.appendChild(nextButton);
        }

        return paginationContainer;
    }

    // Xử lý sự kiện thay đổi trang
    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        showProducts(page);
        updatePagination();
    }

    // Cập nhật phân trang
    function updatePagination() {
        const paginationContainer = createPagination(currentPage, totalPages);
        wholeCakeTab.appendChild(paginationContainer);
    }

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

    // Cập nhật phân trang ban đầu
    updatePagination();
}


