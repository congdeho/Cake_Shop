const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', inverted);
}

function toggleLocalStorage() {
    if (isLight()) {
        localStorage.removeItem("light");
    } else {
        localStorage.setItem("light", "set");
    }
}

function isLight() {
    return localStorage.getItem("light");
}

if (isLight()) {
    toggleRootClass();
}

addTableProducts();
addTableKhachHang();
// Hàm thêm sự kiện chuyển đổi giữa các tab
function addEventChangeTab() {
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
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
    const mainSections = document.querySelectorAll(".sanpham, .donhang, .khachhang, .dashboard , .thongke");
    mainSections.forEach(section => {
        section.classList.remove("active-tab");
    });

    // Xác định tab nội dung cần hiển thị
    const tabName = activeLink.textContent.trim();
    switch (tabName) {
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
        case "Statistical":
            document.querySelector(".thongke").classList.add("active-tab");
            break;
        default:
            document.querySelector(".dashboard").classList.add("active-tab");
    }
}

// Thêm sự kiện sau khi trang tải
window.onload = function () {
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
            <td style="width: 5%">` + (i + 1) + `</td>
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
                    <i class="fa-solid fa-trash" onclick="xoaSanPham('` + p.id + `', '` + p.id + `')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;

    tc.innerHTML = s;
}

// Tìm kiếm
function timKiemSanPham(inp) {
    var kieuTim = document.getElementsByName('kieuTimSanPham')[0].value;
    var text = inp.value;

    // Lọc
    var vitriKieuTim = {'ma':1, 'ten':2}; // mảng lưu vị trí cột

    var listTr_table = document.getElementsByClassName('sanpham')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[vitriKieuTim[kieuTim]].innerHTML.toLowerCase();

        if (td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
}
function promoToStringValue(promo) {
    if (promo == null) return '';
    return promo.name;
}

// ========================== Thêm Sản Phẩm ========================
let previewSrc; // Biến toàn cục lưu file ảnh đang thêm

function layThongTinSanPhamTuTable(id) {
    var khung = document.getElementById(id);
    var tr = khung.getElementsByTagName('tr');

    var masp = tr[1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var tenSanPham = tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var loai = tr[3].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var img = tr[4].getElementsByTagName('td')[1].getElementsByTagName('img')[0].src;
    var giaTien = tr[5].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var moTa = tr[6].getElementsByTagName('td')[1].getElementsByTagName('textarea')[0].value;
    var size = tr[7].getElementsByTagName('td')[1].getElementsByTagName('select')[0].value;
    var kichCoBanh = tr[8].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var texture = tr[9].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var huongVi = tr[10].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var promoName = tr[12].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var promoValue = tr[13].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    if (isNaN(giaTien)) {
        alert('Giá phải là số nguyên');
        return false;
    }
    if (kichCoBanh) {
        size = kichCoBanh;
    }
    try {
        return {
            "id": masp,
            "name": tenSanPham,
            "type": loai,
            "image": previewSrc || img,
            "price": parseInt(giaTien, 10),
            "description": moTa,
            "size": size,
            "texture": texture,
            "tatse": huongVi,
            "promo": {
                "name": promoName,
                "discount": parseInt(promoValue, 10)
            }
        }
    } catch (e) {
        alert('Lỗi: ' + e.toString());
        return false;
    }
    
}
function themSanPham() {
    var newSp = layThongTinSanPhamTuTable('khungThemSanPham');
    if (!newSp) return;

    for (var p of list_products) {
        if (p.id === newSp.id) {
            alert('Mã sản phẩm bị trùng !!');
            return false;
        }

        if (p.name === newSp.name) {
            alert('Tên sản phẩm bị trùng !!');
            return false;
        }
    }
    console.log(newSp);
    // Thêm sản phẩm vào list_products
    list_products.push(newSp);

    // Lưu vào localStorage
    setListProducts(list_products);

    // Vẽ lại table
    addTableProducts();

    alert('Thêm sản phẩm "' + newSp.name + '" thành công.');
    document.getElementById('khungThemSanPham').style.transform = 'scale(0)';
}

function capNhatAnhSanPham(files, imgId) {
    var file = files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(imgId).src = e.target.result;
            previewSrc = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function autoMaSanPham() {
    document.getElementById('maspThem').value = list_products.length + 1;
}

// // Hàm giả lập lưu sản phẩm vào localStorage
// function setListProducts(list) {
//     localStorage.setItem('list_products', JSON.stringify(list));
// }

// // Hàm giả lập vẽ lại bảng sản phẩm
// function addTableProducts() {
//     // Đây chỉ là mẫu, có thể thay thế bằng code vẽ lại bảng thực tế
//     console.log("Bảng sản phẩm được cập nhật:", list_products);
// }
function changeKichCoBanhInput(value) {
    var inputKichCoBanh = document.querySelector('input[placeholder=""]'); // Chọn ô input "Kích cỡ bánh"

    if (value === "3") {
        inputKichCoBanh.disabled = false; // Cho phép nhập khi chọn "Tùy chỉnh"
    } else {
        inputKichCoBanh.disabled = true; // Vô hiệu hóa khi chọn các giá trị khác
        inputKichCoBanh.value = ""; // Xóa giá trị khi bị vô hiệu hóa
    }
}

// Đảm bảo ô input "Kích cỡ bánh" bị vô hiệu hóa khi load trang
document.addEventListener('DOMContentLoaded', function () {
    changeKichCoBanhInput(document.querySelector('select[name="chonSize"]').value);
});

// Xóa
function xoaSanPham(id, tensp) {
    if (window.confirm('Bạn có chắc muốn xóa ' + tensp)) {
        // Xóa
        for(var i = 0; i < list_products.length; i++) {
            if(list_products[i].id == id) {
                list_products.splice(i, 1);
            }
        }

        // Lưu vào localstorage
        setListProducts(list_products);

        // Vẽ lại table 
        addTableProducts();
    }
}

// Sửa
function suaSanPham(id) {
    var sp = layThongTinSanPhamTuTable('khungSuaSanPham');
    if(!sp) return;
    
    for(var p of list_products) {
        if(p.id == id && p.id != sp.id) {
            alert('Mã sản phẩm bị trùng !!');
            return false;
        }

        if(p.name == sp.name && p.id != sp.id) {
            alert('Tên sản phẩm bị trùng !!');
            return false;
        }
    }
    // Sửa
    for(var i = 0; i < list_products.length; i++) {
        if(list_products[i].id == id) {
            list_products[i] = sp;
        }
    }

    // Lưu vào localstorage
    setListProducts(list_products);

    // Vẽ lại table
    addTableProducts();

    alert('Sửa ' + sp.name + ' thành công');

    document.getElementById('khungSuaSanPham').style.transform = 'scale(0)';
}
function addKhungSuaSanPham(masp) {
    var sp;
    for (var p of list_products) {
        if (p.id == masp) {
            sp = p;
            break;
        }
    }
    
    if (!sp) return; // Nếu không tìm thấy sản phẩm, thoát hàm

    var s = `
        <span class="close" onclick="this.parentElement.style.transform = 'scale(0)';">&times;</span>
        <table class="overlayTable table-outline table-content table-header">
            <tr>
                <th colspan="2">Sửa Sản Phẩm</th>
            </tr>
            <tr>
                <td>Mã sản phẩm:</td>
                <td><input type="text" id="maspSua" value="${sp.id}" readonly></td>
            </tr>
            <tr>
                <td>Tên sản phẩm:</td>
                <td><input type="text" id="tenSanPhamSua" value="${sp.name}"></td>
            </tr>
            <tr>
                <td>Loại:</td>
                <td>
                    <select name="chonLoaiSua" id="chonLoaiSua">
                        <option value="Cake" ${sp.type === "Cake" ? "selected" : ""}>Cake</option>
                        <option value="Bread" ${sp.type === "Bread" ? "selected" : ""}>Bread</option>
                        <option value="Cookie" ${sp.type === "Cookie" ? "selected" : ""}>Cookie</option>
                        <option value="Sandwich and Salad" ${sp.type === "Sandwich and Salad" ? "selected" : ""}>Sandwich and Salad</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Hình:</td>
                <td>
                    <img class="hinhDaiDien" id="anhDaiDienSanPhamSua" src="${sp.image}">
                    <input type="file" accept="image/product/*" onchange="capNhatAnhSanPham(this.files, 'anhDaiDienSanPhamSua')">
                </td>
            </tr>
            <tr>
                <td>Giá tiền:</td>
                <td><input type="text" id="giaTienSua" value="${sp.price}"></td>
            </tr>
            <tr>
                <td>Mô tả:</td>
                <td><textarea id="moTaSua">${sp.description}</textarea></td>
            </tr>                            
            <tr>
                <td>Size</td>
                <td>
                    <select name="chonSizeSua" id="chonSizeSua" onchange="changeKichCoBanhInput(this.value)">
                        <option value="">Không</option>
                        <option value="1" ${sp.size === "Phù hợp cho bữa ăn" ? "selected" : ""}>Phù hợp cho bữa ăn</option>
                        <option value="2" ${sp.size === "Phù hợp cho ăn vặt" ? "selected" : ""}>Phù hợp cho ăn vặt</option>
                        <option value="3" ${sp.size === "Tùy chỉnh" ? "selected" : ""}>Tùy chỉnh</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Kích cỡ bánh:</td>
                <td><input type="text" id="kichCoBanhSua" value="${sp.size}"></td>
            </tr>
            <tr>
                <td>Texture:</td>
                <td><input type="text" id="textureSua"></td>
            <tr>
                <td>Hương vị:</td>
                <td><input type="text" id="huongViSua" value="${sp.taste}"></td>
            </tr>
            <tr>
                <th colspan="2">Khuyến mãi</th>
            </tr>
            <tr>
                <td>Tên khuyến mãi:</td>
                <td><input type="text" id="tenKhuyenMaiSua" value="${sp.promo ? sp.promo.name : ''}"></td>   
            </tr>
            <tr>
                <td>Giá trị giảm giá:</td>
                <td><input type="text" id="giaTriGiamGiaSua" value="${sp.promo ? sp.promo.discount : ''}"></td>   
            </tr>
            <tr>
                <td colspan="2" class="table-footer">
                    <button onclick="suaSanPham(${sp.id})">CẬP NHẬT</button>
                </td>
            </tr>
        </table>`;

    document.getElementById("khungSuaSanPham").innerHTML = s;
    document.getElementById("khungSuaSanPham").style.transform = 'scale(1)';
}
function capNhatAnhSanPham(files, id) {
    // var url = '';
    // if(files.length) url = window.URL.createObjectURL(files[0]);
    
    // document.getElementById(id).src = url;

    const reader = new FileReader();
    reader.addEventListener("load", function () {
        // convert image file to base64 string
        previewSrc = reader.result;
        document.getElementById(id).src = previewSrc;
    }, false);

    if (files[0]) {
        reader.readAsDataURL(files[0]);
    }
}
// ====================== Khách Hàng =============================
// Vẽ bảng
function addTableKhachHang() {
    var tc = document.getElementsByClassName('khachhang')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;

    for (var i = 0; i < users.length; i++) {
        var u = users[i];
        s += `<tr>
            <td style="width: 5%">` + u.id + `</td>
            <td style="width: 15%">` + u.name + `</td>
            <td style="width: 20%">` + u.email + `</td>
            <td style="width: 20%">` + u.username + `</td>
            <td style="width: 10%">` + u.password + `</td>
            <td style="width: 10%">
                <div class="tooltip-icon">
                    <label class="switch">
                        <input type="checkbox" ` + (u.status === 'active' ? 'checked' : '') + ` onclick="voHieuHoaNguoiDung(this, '` + u.username + `')">
                        <span class="slider round"></span>
                    </label>
                    <span class="tooltiptext">` + (u.status === 'active' ? 'active' : 'locked') + `</span>
                </div>
                <div class="tooltip-icon">
                    <i class="fa fa-remove" onclick="xoaNguoiDung('`+u.username+`')"></i>
                    <span class="tooltiptext">Xóa</span>
                </div>
            </td>
        </tr>`;
    }

    s += `</table>`;
    tc.innerHTML = s;
}

// Tìm kiếm
function timKiemNguoiDung(inp) {
    var kieuTim = document.getElementsByName('kieuTimKhachHang')[0].value;
    var text = inp.value;

    // Lọc
    var vitriKieuTim = {'ten':1, 'email':2, 'taikhoan':3};

    var listTr_table = document.getElementsByClassName('khachhang')[0].getElementsByClassName('table-content')[0].getElementsByTagName('tr');
    for (var tr of listTr_table) {
        var td = tr.getElementsByTagName('td')[vitriKieuTim[kieuTim]].innerHTML.toLowerCase();

        if (td.indexOf(text.toLowerCase()) < 0) {
            tr.style.display = 'none';
        } else {
            tr.style.display = '';
        }
    }
}

function openThemNguoiDung() {
    window.alert('Not Available!');
}

// vô hiệu hóa người dùng (tạm dừng, không cho đăng nhập vào)
function voHieuHoaNguoiDung(inp, taikhoan) {
    var listUser =users;
    for(var u of listUser) {
        if(u.username == taikhoan) {
            let value = !inp.checked
            u.status = value;
            setListUser(listUser);
            
            setTimeout(() => alert(`${value ? 'locked' : 'active'} tải khoản ${u.username} thành công.`), 500);
            break;
        }
    }
    var span = inp.parentElement.nextElementSibling;
        span.innerHTML = (inp.checked?'locked':'active');
}

// Xóa người dùng
function xoaNguoiDung(taikhoan) {
    if(window.confirm('Xác nhận xóa '+taikhoan+'? \nMọi dữ liệu về '+taikhoan+' sẽ mất! Bao gồm cả những đơn hàng của '+taikhoan)) {
        var listuser = users;
        for(var i = 0; i < listuser.length; i++) {
            if(listuser[i].username == taikhoan) {
                listuser.splice(i, 1); // xóa
                setListUser(listuser); // lưu thay đổi
                localStorage.removeItem('CurrentUser'); // đăng xuất khỏi tài khoản hiện tại (current user)
                addTableKhachHang(); // vẽ lại bảng khách hàng
                addTableDonHang(); // vẽ lại bảng đơn hàng
                return;
            }
        }
    }
} 
