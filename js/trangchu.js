window.onload = function () {
	khoiTao();
}
document.addEventListener("DOMContentLoaded", () => {
    const products = Array.from(document.querySelectorAll('.product'));
    const itemsPerPage = 9;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    let currentPage = 1;

    function showPage(page) {
        products.forEach((product, index) => {
            product.style.display = (index < itemsPerPage * page && index >= itemsPerPage * (page - 1)) ? 'block' : 'none';
        });
        updatePagination();
    }

    function updatePagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

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
    }

    showPage(currentPage);
});
function home()
{
    window.location.href = 'index.html';
}
function product()
{
    window.location.href = 'product.html';
}
function shortcake()
{
    window.location.href = 'shortcake.html';
}
function home()
{
    window.location.href = 'index.html';
}