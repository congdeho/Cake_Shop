const productsPerPage = 6;  // Số sản phẩm hiển thị mỗi trang
let currentPage = 1;  // Trang hiện tại
let totalResults = 0;  // Tổng số kết quả tìm kiếm

function searchProducts(query, page = 1) {
    // Lọc danh sách sản phẩm theo tên hoặc mô tả
    const filteredProducts = list_products.filter(product => {
        return product.name.toLowerCase().includes(query.toLowerCase()) ||
               product.description.toLowerCase().includes(query.toLowerCase());
    });
    
    // Cập nhật tổng số kết quả
    totalResults = filteredProducts.length;
    
    // Tính toán sản phẩm hiển thị trong trang
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    
    return filteredProducts.slice(startIndex, endIndex);
}

function displaySearchResults(products) {
    const searchResultsContainer = document.getElementById('search-results');
    const homeContainer = document.querySelector('.home-container'); // Lấy phần tử .home
    searchResultsContainer.innerHTML = ''; // Xóa kết quả cũ trước khi hiển thị kết quả mới

    // Ẩn phần .home khi có kết quả tìm kiếm
    if (homeContainer) {
        homeContainer.style.display = 'none';
    }

    // Ẩn tất cả các tab sản phẩm khác
    const productTabs = document.querySelectorAll('.product-tab');
    productTabs.forEach(tab => tab.style.display = 'none');

    // Ẩn menu sản phẩm khi có kết quả tìm kiếm
    const menuContainer = document.querySelector('#product1');
    if (menuContainer) {
        menuContainer.style.display = 'none';
    }

    // Hiển thị kết quả tìm kiếm trong tab sản phẩm
    const searchTab = document.getElementById('search-results-tab'); // ID của tab sản phẩm
    if (searchTab) {
        searchTab.style.display = 'block'; // Hiển thị tab kết quả tìm kiếm
    }

    if (products.length === 0) {
        searchResultsContainer.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
        return;
    }

    // Tạo danh sách kết quả tìm kiếm
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('search-result-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100">
            <h3>${product.name}</h3>
            <div class="it">
                <div class="it1">${product.price}</div>
                <button class="it2" onclick="themVaoGioHang(${product.id}, '${product.name}');">
                <i class="material-icons">shopping_cart</i>
                </button>
            </div>
        `;
        
        searchResultsContainer.appendChild(productElement);
    });
}

function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(totalResults / productsPerPage);

    if (totalResults === 0) {
        paginationContainer.style.display = 'none'; // Ẩn phân trang khi không có kết quả
        return;
    }

    paginationContainer.style.display = 'block'; // Hiển thị phân trang khi có kết quả

    let paginationHTML = '';

    // Nút "Trang trước"
    if (currentPage > 1) {
        paginationHTML += `<button class="button" data-page="${currentPage - 1}">❮</button>`;
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

function handleSearch() {
    const query = document.querySelector('.search-input').value.trim();
    currentPage = 1; // Đặt lại trang khi tìm kiếm mới
    const results = searchProducts(query, currentPage);
    displaySearchResults(results);
    updatePagination();
}

document.querySelector('.search-input').addEventListener('input', handleSearch);

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    handleSearch();
});

document.getElementById('pagination').addEventListener('click', function(event) {
    const page = event.target.dataset.page;
    if (page) {
        currentPage = parseInt(page, 10);
        const query = document.querySelector('.search-input').value.trim();
        const results = searchProducts(query, currentPage);
        displaySearchResults(results);
        updatePagination();
    }
});

// Hàm xử lý khi nhấn vào "TRANG CHỦ"
function showHome() {
    const homeContainer = document.querySelector('.home-container'); // Lấy phần tử .home
    const searchResultsContainer = document.getElementById('search-results'); // Lấy phần tử kết quả tìm kiếm
    const paginationContainer = document.getElementById('pagination'); // Lấy phần phân trang
    const menuContainer = document.querySelector('#product1'); // Menu sản phẩm

    // Hiển thị lại phần .home và ẩn các phần khác
    if (homeContainer) {
        homeContainer.style.display = 'flex'; // Hiển thị phần trang chủ
    }

    // Ẩn các tab sản phẩm
    const productTabs = document.querySelectorAll('.product-tab');
    productTabs.forEach(tab => {
        tab.style.display = 'none'; // Ẩn tất cả các tab sản phẩm
    });

    // Ẩn menu sản phẩm
    if (menuContainer) {
        menuContainer.style.display = 'none'; // Ẩn phần menu sản phẩm
    }

    // Xóa kết quả tìm kiếm nếu có
    if (searchResultsContainer) {
        searchResultsContainer.innerHTML = ''; // Xóa kết quả tìm kiếm
    }

    // Ẩn phân trang
    if (paginationContainer) {
        paginationContainer.style.display = 'none'; // Ẩn phân trang
    }

    // Hiển thị lại phần trang chủ (home) nếu cần
    const homeTab = document.getElementById('home');
    if (homeTab) {
        homeTab.style.display = 'block'; // Hiển thị lại tab trang chủ
    }
}

// Gắn sự kiện cho liên kết "TRANG CHỦ"
document.querySelector('a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    showHome(); // Gọi hàm showHome() khi nhấn vào "TRANG CHỦ"
});
