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
    const product1 = document.getElementById("product1");
    const product2 = document.getElementById("product2");
    
    // Lấy chiều cao của product2
    const product2Height = product2.offsetHeight;
    
    // Hàm xử lý sự kiện cuộn
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const product1Rect = product1.getBoundingClientRect();
      const product2Rect = product2.getBoundingClientRect();
    
      // Kiểm tra xem phần trên của product1 đã vượt qua đỉnh cửa sổ chưa
      if (product1Rect.top <= 0) {
        // Tính toán độ dịch chuyển, giới hạn trong khoảng cho phép
        const translateValue = Math.max(0, Math.min(-scrollTop, product2Height - product1Rect.height));
        product1.style.transform = `translateY(${translateValue}px)`;
      }
    }
    
    // Thêm sự kiện lắng nghe
    window.addEventListener('scroll', handleScroll);


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
function bread()
{
    window.location.href = 'bread.html';
}
function dessert()
{
    window.location.href = 'dessert.html';
}
function sandwich()
{
    window.location.href = 'sandwich.html';
}
function coffee()
{
    window.location.href = 'coffee.html';
}
