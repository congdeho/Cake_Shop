function navigateToContent(content) {
    // Lưu trạng thái mục người dùng chọn vào localStorage
    localStorage.setItem('currentContent', content);
    // Điều hướng về trang index
    window.location.href = 'index.html';
}

// Kiểm tra và hiển thị nội dung tương ứng trên index.html
document.addEventListener('DOMContentLoaded', function () {
    const content = localStorage.getItem('currentContent');
    if (content) {
        // Ẩn tất cả các tab sản phẩm
        document.querySelectorAll('.product-tab').forEach(tab => tab.style.display = 'none');
        
        // Hiển thị nội dung dựa trên mục đã chọn
        const tab = document.getElementById(content);
        if (tab) {
            tab.style.display = 'block';
        }

        // Xóa trạng thái đã lưu
        localStorage.removeItem('currentContent');
    }
});
