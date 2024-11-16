document.addEventListener("DOMContentLoaded", () => {
    const products = Array.from(document.querySelectorAll('.product'));
    const itemsPerPage = 6;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    let currentPage = 1;

    // Hiển thị sản phẩm theo trang
    function showPage(page) {
        products.forEach((product, index) => {
            product.style.display = (index < itemsPerPage * page && index >= itemsPerPage * (page - 1)) ? 'block' : 'none';
        });
        updatePagination();
    }

    // Cập nhật nút phân trang
    function updatePagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        // Nút "Previous"
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.classList.add('prev-button');
        if (currentPage === 1) prevButton.classList.add('disabled');
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
        pagination.appendChild(prevButton);

        // Nút số trang
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.classList.add('page-button');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
            });
            pagination.appendChild(pageButton);
        }

        // Nút "Next"
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.classList.add('next-button');
        if (currentPage === totalPages) nextButton.classList.add('disabled');
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
        pagination.appendChild(nextButton);
    }

    // Hiển thị trang đầu tiên
    showPage(currentPage);
});
