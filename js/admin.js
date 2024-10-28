const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}

addTableProducts(); 
// Hàm thêm sự kiện chuyển đổi giữa các tab
function addEventChangeTab() {
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            activateSidebarLink(link);
        });
    });
}

// Kích hoạt tab được chọn và cập nhật nội dung chính
function activateSidebarLink(activeLink) {
    // Tắt lớp active của tất cả các liên kết
    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.classList.remove("active");
    });

    // Thêm lớp active cho liên kết được nhấp
    activeLink.classList.add("active");

    // Ẩn tất cả các tab nội dung
    const mainSections = document.querySelectorAll(".sanpham, .donhang, .khachhang, .dashboard");
    mainSections.forEach(section => {
        section.classList.remove("active-tab");
    });

    // Xác định tab nội dung cần hiển thị
    const tabName = activeLink.textContent.trim();
    switch(tabName) {
        case "Dashboard":
            document.querySelector(".dashboard").classList.add("active-tab");
            break;
        case "Product":
            document.querySelector(".sanpham").classList.add("active-tab");
            break;
        case "Order":
            document.querySelector(".donhang").classList.add("active-tab");
            break;
        case "User":
            document.querySelector(".khachhang").classList.add("active-tab");
            break;
        default:
            document.querySelector(".dashboard").classList.add("active-tab");
    }
}

// Thêm sự kiện sau khi trang tải
window.onload = function() {
    addEventChangeTab();
    document.querySelector(".dashboard").classList.add("active-tab"); // Tab mặc định là Dashboard
};

// ========================== Sản Phẩm ========================
// Vẽ bảng danh sách sản phẩm
function addTableProducts() {
    var tc = document.getElementsByClassName('sanpham')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < list_products.length; i++) {
        var p = list_products[i];
        s += `<tr>
            <td style="width: 5%">` + (i+1) + `</td>
            <td style="width: 10%">` + p.id + `</td>
            <td style="width: 40%">
                <a title="Xem chi tiết" target="_blank" href="chitietsanpham.html?` + p.name.split(' ').join('-') + `">` + p.name + `</a>
                <img src="` + p.image + `"></img>
            </td>
            <td style="width: 15%">` + p.price + `</td>
            <td style="width: 15%">` + promoToStringValue(p.promo) + `</td>
            <td style="width: 15%">
                <div class="tooltip-icon">
                    <i class="fa-solid fa-pen" onclick="addKhungSuaSanPham('` + p.id + `')"></i>
                    <span class="tooltiptext">Sửa</span>
                </div>
                <div class="tooltip-icon">
                    <i class="fa-solid fa-trash" onclick="xoaSanPham('` + p.id + `', '`+p.id+`')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;

    tc.innerHTML = s;
}
function promoToStringValue(promo) {
    if (promo == null) return '';
    return promo.name;
}