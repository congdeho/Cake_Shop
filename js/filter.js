const itemsPerPage = 6; // Đổi tên để tránh trùng lặp

// Hàm hiển thị sản phẩm theo bộ lọc
function displayFilteredProducts(filters) {
    const filteredTab = document.getElementById('filtered-products');
    filteredTab.innerHTML = ''; // Xóa nội dung cũ

    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const productDetailsContainer = document.createElement('div');
    productDetailsContainer.id = 'product-details';
    productDetailsContainer.style.display = 'none';

    // Lọc sản phẩm dựa trên bộ lọc
    const filteredProducts = list_products.filter(product => {
        let matchPrice = true;
        let matchSize = true;

        // Lọc theo giá
        if (filters.price) {
            const [minPrice, maxPrice] = filters.price;
            const productPrice = parseInt(product.price, 10);
            matchPrice = productPrice >= minPrice && productPrice <= maxPrice;
        }

        // Lọc theo kích thước
        if (filters.size) {
            matchSize = product.size === filters.size;
        }

        return matchPrice && matchSize;
    });

    // Phân trang
    let currentPage = 1;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    function showProducts(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

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

    
    // Tạo HTML cho phân trang
    function renderPagination() {
        let paginationHTML = '';

        if( totalPages === 1)
        {
            paginationContainer.style.display = 'none';
        }
        // Nút "Trang trước"
        if (currentPage > 1) {
            paginationHTML += `<button class="pagination-button" data-page="${currentPage - 1}">❮</button>`;
        }

        // Hiển thị tất cả các số trang
        for (let page = 1; page <= totalPages; page++) {
            const isActive = page === currentPage ? 'active' : ''; // Kiểm tra xem có phải trang hiện tại không
            paginationHTML += `<button class="pagination-button ${isActive}" data-page="${page}">${page}</button>`;
        }

        // Nút "Trang sau"
        if (currentPage < totalPages) {
            paginationHTML += `<button class="pagination-button" data-page="${currentPage + 1}">❯</button>`;
        }

        paginationContainer.innerHTML = paginationHTML;
    }

    // Hiển thị phân trang lần đầu tiên
    renderPagination();

    // Lắng nghe sự kiện click trên các nút phân trang
    paginationContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('pagination-button')) {
            const page = parseInt(event.target.getAttribute('data-page'));
            if (page !== currentPage) {
                currentPage = page;
                showProducts(currentPage); // Hàm hiển thị sản phẩm cho trang mới
                renderPagination(); // Cập nhật lại phân trang
            }
        }
    });

    // Hiển thị sản phẩm nếu có
    if (filteredProducts.length > 0) {
        showProducts(currentPage);
        filteredTab.appendChild(productContainer);
        filteredTab.appendChild(productDetailsContainer);
        filteredTab.appendChild(paginationContainer);
    } else {
        filteredTab.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
    }

    // Hiển thị tab kết quả
    const productTabs = document.querySelectorAll('.product-tab');
    productTabs.forEach(tab => tab.style.display = 'none');
    filteredTab.style.display = 'block';
}

// Hàm xử lý sự kiện khi nhấn "Lọc"
document.getElementById('apply-filters').addEventListener('click', function () {
    const priceRange = document.getElementById('price-range').value;
    const size = document.getElementById('size-select').value;

    const filters = {};
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filters.price = [min, max || Infinity];
    }
    if (size) {
        filters.size = size;
    }

    displayFilteredProducts(filters);
});