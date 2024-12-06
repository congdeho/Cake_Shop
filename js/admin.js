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
    var list_products = getListProducts();

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
    var imageSrc = previewSrc || img;
    var giaTien = tr[5].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var moTa = tr[6].getElementsByTagName('td')[1].getElementsByTagName('textarea')[0].value;
    var kichCoBanh = tr[7].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var huongVi = tr[8].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var promoName = tr[10].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var promoValue = tr[11].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    if (isNaN(giaTien)) {
        alert('Giá phải là số nguyên');
        return false;
    }
    if (kichCoBanh) {
        size = kichCoBanh;
    }
    try {
        return {
            "id": parseInt(masp),
            "name": tenSanPham,
            "type": loai,
            "image": imageSrc,
            "price": parseInt(giaTien, 10),
            "description": moTa,
            "size": size,
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
            // Gán ảnh vào thẻ <img>
            document.getElementById(imgId).src = e.target.result;
            // Lưu ảnh vào previewSrc để dùng sau
            previewSrc = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        // Nếu không có file, xóa ảnh hiện tại
        document.getElementById(imgId).src = "";
        previewSrc = ""; // Đặt lại biến previewSrc
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
                        <option value="Whole Cake" ${sp.type === "Whole Cake" ? "selected" : ""}>Whole Cake</option>
                        <option value="Short Cake" ${sp.type === "Short Cake" ? "selected" : ""}>Short Cake</option>
                        <option value="Bread And Pastry" ${sp.type === "Bread And Pastry" ? "selected" : ""}>Bread And Pastry</option>
                        <option value="Dessert" ${sp.type === "Dessert" ? "selected" : ""}>Dessert</option>
                        <option value="Gifts" ${sp.type === "Gifts" ? "selected" : ""}>Gifts</option>
                        <option value="Cookies" ${sp.type === "Cookies" ? "selected" : ""}>Cookies</option>
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
                <td>Kích cỡ bánh:</td>
                <td><input type="text" id="kichCoBanhSua" value="${sp.size}"></td>
            </tr>
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
// function capNhatAnhSanPham(files, id) {
//     // var url = '';
//     // if(files.length) url = window.URL.createObjectURL(files[0]);
    
//     // document.getElementById(id).src = url;

//     const reader = new FileReader();
//     reader.addEventListener("load", function () {
//         // convert image file to base64 string
//         previewSrc = reader.result;
//         document.getElementById(id).src = previewSrc;
//     }, false);

//     if (files[0]) {
//         reader.readAsDataURL(files[0]);
//     }
// }
// ====================== Khách Hàng =============================
// Vẽ bảng
function addTableKhachHang() {
    var tc = document.getElementsByClassName('khachhang')[0].getElementsByClassName('table-content')[0];
    var s = `<table class="table-outline hideImg">`;
    var listUser = getListUser();
    console.log(listUser);
    for (var i = 0; i < listUser.length; i++) {
        var u = listUser[i];
        s += `<tr>
            <td style="width: 5%">` + (i+1) + `</td>
            <td style="width: 15%">` + u.name + `</td>
            <td style="width: 15%">` + u.email + `</td>
            <td style="width: 15%">` + u.phone + `</td>
            <td style="width: 10%">` + u.username + `</td>
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
                    <i class="fa fa-edit" onclick="addKhungSuaNguoiDung('`+u.username+`')"></i>
                    <span class="tooltiptext">Sửa</span>
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
function layThongTinNguoiDungTuTable(id) {
    var khung = document.getElementById(id);
    listUser = getListUser();
    var idUser = listUser.length + 1;
    var tr = khung.getElementsByTagName('tr');
    var ten = tr[1].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var email = tr[2].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var sdt = tr[3].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var taikhoan = tr[4].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var matkhau = tr[5].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var xacnhanmatkhau = tr[6].getElementsByTagName('td')[1].getElementsByTagName('input')[0].value;
    var trangthai = 'active';
    
    try {
        return {
            "id": idUser,
            "username": taikhoan,
            "password":  matkhau,
            "repassword": xacnhanmatkhau,
            "status": trangthai,
            "name": ten,
            "email": email,
            "phone": sdt,
            }
        }
    catch (e) {
        alert('Lỗi: ' + e.toString());
        return false;
    }
}


function themNguoiDung() {
    var NewUser = layThongTinNguoiDungTuTable('khungThemNguoiDung');
    console.log(NewUser);
    if (!NewUser) return;

    if (NewUser.password != NewUser.repassword) {
        alert('Mật khẩu không khớp');
        return;
    }

    // Kiểm tra trùng tài khoản
    for (var u of listUser) {
        if (u.username === NewUser.username) {
            alert('Tài khoản đã tồn tại');
            return;
        }
    }
    // Kiểm tra trùng email
    for (var u of listUser) {
        if (u.email === NewUser.email) {
            alert('Email đã tồn tại');
            return;
        }
    }
    // Kiểm tra trùng số điện thoại
    for (var u of listUser) {
        if (u.phone === NewUser.phone) {
            alert('Số điện thoại đã tồn tại');
            return;
        }
    }
    // Kiểm tra trùng admin
    for (var u of adminInfo) {
        if (u.username === NewUser.username) {
            alert('Tài khoản đã tồn tại');
            return;
        }
    }
    // Kiểm tra độ dài mật khẩu
    if (NewUser.password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự');
        return;
    }
    // Kiểm tra định dạng email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(NewUser.email)) {
        alert('Email không hợp lệ');
        return;
    }
    // Kiểm tra định dạng số điện thoại
    var phonePattern = /^0\d{9}$/;
    if (!phonePattern.test(NewUser.phone)) {
        alert('Số điện thoại phải bắt đầu bằng số 0 và phải đủ 10 số !!');
        return false;
    }

    // Tạo đối tượng User mới
    var id = listUser.length > 0 ? listUser[listUser.length - 1].id + 1 : 1; // Tự động tăng ID
    var user = new User(
        id,
        NewUser.username,
        NewUser.password,
        NewUser.name,
        NewUser.phone,
        NewUser.email,
        "active"
    );

    // Thêm người dùng vào list_users
    listUser.push(user);

    // Lưu vào localStorage
    setListUser(listUser);

    // Vẽ lại table
    addTableKhachHang();
    resetFormNguoiDung();
    alert('Thêm người dùng "' + user.name + '" thành công.');
    document.getElementById('khungThemNguoiDung').style.transform = 'scale(0)';
}
function resetFormNguoiDung() {
    document.getElementById('hoTenNguoiDungThem').value = "";
    document.getElementById('emailNguoiDungThem').value = "";
    document.getElementById('sdtNguoiDungThem').value = "";
    document.getElementById('taiKhoanNguoiDungThem').value = "";
    document.getElementById('matKhauNguoiDungThem').value = "";
    document.getElementById('xacNhanMatKhauNguoiDungThem').value = "";
}

// vô hiệu hóa người dùng (tạm dừng, không cho đăng nhập vào)
function voHieuHoaNguoiDung(inp, taikhoan) {
    var listUser = getListUser();
    for (var u of listUser) {
        if (u.username == taikhoan) {
            // Kiểm tra giá trị hiện tại của u.status và cập nhật
            if (u.status === 'locked') {
                u.status = 'active';
            } else {
                u.status = 'locked';
            }
            setListUser(listUser);
            
            setTimeout(() => alert(`${u.status === 'locked' ? 'locked' : 'active'} tài khoản ${u.username} thành công.`), 500);
            break;
        }
    }
    var span = inp.parentElement.nextElementSibling;
    span.innerHTML = (u.status === 'locked' ? 'locked' : 'active');
}

// Sửa người dùng
function addKhungSuaNguoiDung(taikhoan) {
    var listUser = getListUser();
    var user = listUser.find(u => u.username === taikhoan);

    if (user) {
        // Điền thông tin vào các ô input
        document.getElementById('hoTenNguoiDungSua').value = user.name;
        document.getElementById('emailNguoiDungSua').value = user.email;
        document.getElementById('sdtNguoiDungSua').value = user.phone;
        document.getElementById('taiKhoanNguoiDungSua').value = user.username; // Không cho sửa username
        document.getElementById('matKhauNguoiDungSua').value = user.password;
        document.getElementById('xacNhanMatKhauNguoiDungSua').value = user.password;

        // Hiển thị khung sửa
        document.getElementById('khungSuaNguoiDung').style.transform = 'scale(1)';
    } else {
        alert('Không tìm thấy người dùng!');
    }
}

function suaNguoiDung() {
    var listUser = getListUser();

    var ten = document.getElementById('hoTenNguoiDungSua').value;
    var email = document.getElementById('emailNguoiDungSua').value;
    var sdt = document.getElementById('sdtNguoiDungSua').value;
    var taikhoan = document.getElementById('taiKhoanNguoiDungSua').value; // Không cho sửa
    var matkhau = document.getElementById('matKhauNguoiDungSua').value;
    var xacnhanmatkhau = document.getElementById('xacNhanMatKhauNguoiDungSua').value;

    // Kiểm tra dữ liệu hợp lệ
    if (matkhau !== xacnhanmatkhau) {
        alert('Mật khẩu không khớp!');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email không hợp lệ!');
        return;
    }
    if (!/^0\d{9}$/.test(sdt)) {
        alert('Số điện thoại phải bắt đầu bằng số 0 và đủ 10 số!');
        return;
    }

    // Tìm người dùng và cập nhật thông tin
    var user = listUser.find(u => u.username === taikhoan);
    if (user) {
        user.name = ten;
        user.email = email;
        user.phone = sdt;
        user.password = matkhau;

        // Lưu lại danh sách vào localStorage
        setListUser(listUser);

        // Vẽ lại bảng
        addTableKhachHang();

        // Ẩn khung sửa
        document.getElementById('khungSuaNguoiDung').style.transform = 'scale(0)';
        alert('Cập nhật thông tin thành công!');
    } else {
        alert('Không tìm thấy người dùng!');
    }
}

// Xóa người dùng
function xoaNguoiDung(taikhoan) {
    var listUser = getListUser();
    if(window.confirm('Xác nhận xóa '+taikhoan+'? \nMọi dữ liệu về '+taikhoan+' sẽ mất! Bao gồm cả những đơn hàng của '+taikhoan)) {
        for(var i = 0; i < listUser.length; i++) {
            if(listUser[i].username == taikhoan) {
                listUser.splice(i, 1); // xóa
                setListUser(listUser); // lưu thay đổi
                localStorage.removeItem('CurrentUser'); // đăng xuất khỏi tài khoản hiện tại (current user)
                addTableKhachHang(); // vẽ lại bảng khách hàng
                displayOrders(); // vẽ lại bảng đơn hàng
                return;
            }
        }
    }
} 

// ====================== Đơn Hàng =============================

function getUserNameById(userId) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'N/A'; // Nếu tìm thấy thì trả về tên, nếu không thì trả về 'N/A'
}
function getListDonHang(traVeDanhSachSanPham = false) {
    var u = getListUser();
    list_products = getListProducts() || list_products;
    var result = [];
    for (var i = 0; i < u.length; i++) {
        for (var j = 0; j < u[i].donhang.length; j++) {
            // Tổng tiền
            var tongtien = 0;
            for (var s of u[i].donhang[j].sp) {
                var timsp = timKiemTheoMa(list_products, s.ma);
                if (timsp) {
                    tongtien += stringToNum(timsp.price) * s.soluong;
                }
            }

            // Ngày giờ
            var x = new Date(u[i].donhang[j].ngaymua).toLocaleString();

            // Các sản phẩm - dạng html
            var sps = '';
            for (var s of u[i].donhang[j].sp) {
                var timsp = timKiemTheoMa(list_products, s.ma);
                if (timsp) {
                    sps += `<p style="text-align: right">` + (timsp.name + ' [' + s.soluong + ']') + `</p>`;
                }
            }

            // Các sản phẩm - dạng mảng
            var danhSachSanPham = [];
            for (var s of u[i].donhang[j].sp) {
                danhSachSanPham.push({
                    // Mã sản phẩm
                    maSanPham: s.ma,
                    sanPham: timKiemTheoMa(list_products, s.ma),
                    soLuong: s.soluong,
                });
            }

            // Lưu vào result
            result.push({
                "ma": u[i].donhang[j].id,
                "maKhach": u[i].id,
                "khach": u[i].name,
                "sp": traVeDanhSachSanPham ? danhSachSanPham : sps,
                "tongtien": numToString(tongtien),
                "ngaygio": x,
                "sdt": u[i].phone,
                "diachi": `${u[i].donhang[j].diachi.street}, ${u[i].donhang[j].diachi.ward}, ${u[i].donhang[j].diachi.district}, ${u[i].donhang[j].diachi.city}`,
                "moTa": u[i].donhang[j].notes,
                "tinhTrang": u[i].donhang[j].tinhTrang
            });
        }
    }
    return result;
}

function displayOrders() {
    const orderList = getListDonHang();
    const orderTableBody = document.querySelector("#order-table tbody");
    orderTableBody.innerHTML = ''; // Xóa nội dung cũ

    orderList.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.ma}</td>
            <td>${order.maKhach}</td>
            <td>${order.khach}</td>
            <td>${order.diachi}</td>
            <td>${order.ngaygio}</td>
            <td>${order.tinhTrang}</td>
            <td>
                <button onclick="viewOrderDetails('${order.ma}')">Xem chi tiết</button>
            </td>
        `;
        orderTableBody.appendChild(row);
    });
}
function displayOrder(order) {
    var orderList = order;
    const orderTableBody = document.querySelector("#order-table tbody");
    orderTableBody.innerHTML = '';
    // Tạo một hàng mới
    orderList.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.ma}</td>
            <td>${order.maKhach}</td>
            <td>${order.khach}</td>
            <td>${order.diachi}</td>
            <td>${order.ngaygio}</td>
            <td>${order.tinhTrang}</td>
            <td>
                <button onclick="viewOrderDetails('${order.ma}')">Xem chi tiết</button>
            </td>
        `;
        orderTableBody.appendChild(row);
    });
}

function toggleOrderDetails(show) {
    const orderDetailsDiv = document.getElementById("order-details");
    const divModal = document.getElementById("order-modal");
    if (show) {
        orderDetailsDiv.style.display = "block";
        divModal.style.display = "block";
    } else {
        orderDetailsDiv.style.display = "none";
        divModal.style.display = "none";
    }
}

function viewOrderDetails(orderId) {
    const orders = getListDonHang(true);
    const order = orders.find(o => o.ma === orderId);
    const orderDetailsDiv = document.getElementById("order-details");

    if (order) {
        const productDetails = order.sp.map(orderProduct => {
            const product = timKiemTheoMa2(list_products, orderProduct.maSanPham); // Tìm sản phẩm trong list_products
            const totalPrice = orderProduct.soLuong * product.price; // Tính tổng giá
            return `<li>
                Sản phẩm: ${product.name}, 
                Số lượng: ${orderProduct.soLuong}, 
                Giá: ${Number(product.price).toLocaleString()} VNĐ, 
                Tổng: ${Number(totalPrice).toLocaleString()} VNĐ
            </li>`;
        }).join('');

        orderDetailsDiv.innerHTML = `
            <h3>Chi tiết đơn hàng</h3>
            <p>Mã đơn hàng: ${order.ma}</p>
            <p>Khách hàng: ${order.khach}</p>
            <p>Địa chỉ: ${order.diachi}</p>
            <p>Ngày mua: ${order.ngaygio}</p>
            <p>Số điện thoại: ${order.sdt}</p>
            <p>Tình trạng: ${order.tinhTrang}</p>
            <ul>${productDetails}</ul>
            <label for="order-status">Thay đổi tình trạng đơn hàng:</label>
            <select id="order-status">
                <option value="Đang chờ xử lý" ${order.tinhTrang === 'Đang chờ xử lý' ? 'selected' : ''}>Đang chờ xử lý</option>
                <option value="Đã xác nhận" ${order.tinhTrang === 'Đã xác nhận' ? 'selected' : ''}>Đã xác nhận</option>
                <option value="Đang giao hàng" ${order.tinhTrang === 'Đang giao hàng' ? 'selected' : ''}>Đang giao hàng</option>
                <option value="Đã hủy" ${order.tinhTrang === 'Đã hủy' ? 'selected' : ''}>Đã hủy</option>
            </select>
            <div id="order-actions">
                <button onclick="saveOrderStatus('${order.ma}')">Lưu</button>
                <button onclick="toggleOrderDetails(false)">Đóng</button>
            </div>
        `;
        toggleOrderDetails(true); // Hiển thị chi tiết đơn hàng
    } else {
        orderDetailsDiv.innerHTML = '<p>Không tìm thấy đơn hàng.</p>';
        toggleOrderDetails(true); // Hiển thị thông báo lỗi
    }
}
function saveOrderStatus(orderId) {
    const newStatus = document.getElementById('order-status').value;
    changeOrderStatus(orderId, newStatus);
    toggleOrderDetails(false); // Đóng modal sau khi lưu
}

function changeOrderStatus(orderId, newStatus) {
    let users = getListUser();
    let userIndex = -1;
    let orderIndex = -1;

    // Tìm người dùng và đơn hàng cần cập nhật
    for (let i = 0; i < users.length; i++) {
        orderIndex = users[i].donhang.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            userIndex = i;
            break;
        }
    }

    if (userIndex !== -1 && orderIndex !== -1) {
        users[userIndex].donhang[orderIndex].tinhTrang = newStatus;
        setListUser(users); // Cập nhật lại danh sách người dùng trong localStorage
        displayOrders(); // Cập nhật lại danh sách đơn hàng
    }
}

// Gọi hàm displayOrders khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    displayOrders();
});
function closeModal() {
    document.getElementById("order-modal").style.display = "none"; // Ẩn modal
}

// Đóng modal khi người dùng nhấp vào ngoài modal
window.onclick = function (event) {
    const modal = document.getElementById("order-modal");
    if (event.target === modal) {
        closeModal();
    }
}

window.onload = function () {
    const orders = getListDonHang();
    displayOrders(orders); // Hiển thị đơn hàng khi tải trang
    addEventChangeTab();
};

function isStatusMatch(order, statusFilter) {
    const statusMapping = {
        "pending": "Đang chờ xử lý",
        "confirmed": "Đã xác nhận",
        "delivering": "Đang giao hàng",
        "completed": "Đã giao",
        "canceled": "Đã hủy",
    };
    return statusFilter === "all" || order.tinhTrang === statusMapping[statusFilter]; // Kiểm tra trạng thái
}
function isDateMatch(order, startDate, endDate) {
    // Nếu không có ngày bắt đầu và ngày kết thúc, trả về true để không lọc đơn hàng
    if (!startDate && !endDate) {
        return true;
    }

    // Lấy ngày từ order.ngaygio
    const orderDate = new Date(order.ngaygio).toLocaleDateString('en-CA'); // Định dạng ngày thành yyyy-mm-dd

    // Nếu chỉ chọn ngày bắt đầu mà chưa chọn ngày kết thúc, đặt ngày kết thúc là ngày hiện tại
    if (startDate && !endDate) {
        endDate = new Date().toLocaleDateString('en-CA'); // Định dạng ngày hiện tại thành chuỗi yyyy-mm-dd
    }

    // Nếu chỉ chọn ngày kết thúc mà chưa chọn ngày bắt đầu, tính tất cả ngày trước khi ngày kết thúc
    if (!startDate && endDate) {
        startDate = '1970-01-01'; // Đặt ngày bắt đầu là ngày đầu tiên của Unix epoch
    }

    // Chuyển đổi startDate và endDate thành chuỗi yyyy-mm-dd
    const start = new Date(startDate).toLocaleDateString('en-CA');
    const end = new Date(endDate).toLocaleDateString('en-CA');
    console.log(start, end);
    // Kiểm tra nếu ngày bắt đầu lớn hơn ngày kết thúc
    if (new Date(start) > new Date(end)) {
        alert('Ngày bắt đầu không thể lớn hơn ngày kết thúc.');
        return false;
    }

    // Kiểm tra ngày của đơn hàng
    return (!startDate || orderDate >= start) && (!endDate || orderDate <= end);
}

function isDistrictMatch(order, districtFilter) {
    const districtMapping = {
        "quan1": "Quận 1",
        "quan3": "Quận 3",
        "quan4": "Quận 4",
        "quan5": "Quận 5",
        "quan6": "Quận 6",
        "quan7": "Quận 7",
        "quan8": "Quận 8",
        "quan10": "Quận 10",
        "quan11": "Quận 11",
        "quan12": "Quận 12",
        "quantanbinh": "Quận Tân Bình",
        "quantanphu": "Quận Tân Phú",
        "quanbinhtan": "Quận Bình Tân",
        "quanbinhthanh": "Quận Bình Thạnh",
        "quangovap": "Quận Gò Vấp",
        "quanphunhuan": "Quận Phú Nhuận"
    };
    const district = getDistrictFromAddress(order.diachi); // Lấy quận từ địa chỉ
    return districtFilter === "all" || district === districtMapping[districtFilter]; // Kiểm tra quận
}
function getDistrictFromAddress(address) {
    const parts = address.split(','); // Tách chuỗi thành các phần tử
    if (parts.length >= 3) {
        return parts[2].trim(); // Lấy phần tử thứ 3 (quận) và loại bỏ khoảng trắng thừa
    }
    return ''; // Trả về chuỗi rỗng nếu không tìm thấy quận
}
function filterOrders() {
    const statusFilter = document.getElementById("filter-status").value;
    const startDate = document.getElementById("filter-start-date").value;
    const endDate = document.getElementById("filter-end-date").value;
    const districtFilter = document.getElementById("filter-district").value;
    // Kiểm tra nếu ngày bắt đầu lớn hơn ngày kết thúc
    if (startDate && endDate && startDate > endDate) {
        alert("Ngày bắt đầu không thể lớn hơn ngày kết thúc.");
        return;
    }
    const orders = getListDonHang(); // Giả sử hàm này trả về danh sách đơn hàng
    const filteredOrders = orders.filter(order =>
        isStatusMatch(order, statusFilter) &&
        isDateMatch(order, startDate, endDate) &&
        isDistrictMatch(order, districtFilter)
    );
    console.log(filteredOrders);
    displayOrder(filteredOrders); // Hiển thị đơn hàng đã lọc
}

//------------------------Thống kê-------------------------

function calculateTotalRevenue(orders) {
    return orders.reduce((total, order) => {
        return total + order.sp.reduce((orderTotal, sp) => {
            const product = getProductById(sp.maSanPham);
            return orderTotal + sp.soLuong * product.price;
        }, 0);
    }, 0);
}
function getProductById2(productId) {
    return list_products.find(p => p.id === productId);
}

function findBestAndWorstSellingProducts(orders) {
    const productSales = {};

    orders.forEach(order => {
        order.sp.forEach(sp => {
            if (!productSales[sp.maSanPham]) {
                productSales[sp.maSanPham] = 0;
            }
            productSales[sp.maSanPham] += sp.soLuong;
        });
    });

    let bestSellingProduct = null;
    let worstSellingProduct = null;
    let maxSales = -Infinity;
    let minSales = Infinity;

    for (const productId in productSales) {
        const sales = productSales[productId];
        const numericProductId = Number(productId); // Chuyển productId sang kiểu số
        const product = getProductById2(numericProductId);
        if (!product) {
            console.error(`Product not found for ID: ${numericProductId}`);
            continue;
        }
        if (sales > maxSales) {
            maxSales = sales;
            bestSellingProduct = product;
        }
        if (sales < minSales) {
            minSales = sales;
            worstSellingProduct = product;
        }
    }

    return { bestSellingProduct, worstSellingProduct, productSales };
}
function displayStatistics() {
    const orders = getListDonHang(true);
    // Tính tổng doanh thu
    const totalRevenue = calculateTotalRevenue(orders);
    document.getElementById('totalRevenue').innerText = `${totalRevenue.toLocaleString()} VNĐ`;
    document.getElementById('doanhthu').innerText = ` ${totalRevenue.toLocaleString()} VNĐ`;
    // Tìm sản phẩm bán chạy nhất và bán ít nhất
    const { bestSellingProduct, worstSellingProduct, productSales } = findBestAndWorstSellingProducts(orders);
    document.getElementById('bestSellingProduct').innerText = bestSellingProduct ? bestSellingProduct.name : 'Chưa có';
    document.getElementById('worstSellingProduct').innerText = worstSellingProduct ? worstSellingProduct.name : 'Chưa có';

    // Hiển thị chi tiết sản phẩm
    const itemDetailsTable = document.getElementById('itemDetails').getElementsByTagName('tbody')[0];
    itemDetailsTable.innerHTML = ''; // Xóa nội dung cũ
    for (const productId in productSales) {
        const numericProductId = Number(productId); // Chuyển productId sang kiểu số
        const product = getProductById2(numericProductId);
        const sales = productSales[productId];
        const revenue = sales * product.price;
        const row = itemDetailsTable.insertRow();
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${sales}</td>
            <td>${revenue.toLocaleString()} VNĐ</td>
        `;
    }

    // Hiển thị chi tiết đơn hàng
    const invoiceDetailsTable = document.getElementById('invoiceDetails').getElementsByTagName('tbody')[0];
    invoiceDetailsTable.innerHTML = ''; // Xóa nội dung cũ
    orders.forEach(order => {
        const totalOrderPrice = order.sp.reduce((total, sp) => {
            const product = getProductById(sp.maSanPham);
            return total + sp.soLuong * product.price;
        }, 0);
        const row = invoiceDetailsTable.insertRow();
        row.innerHTML = `
            <td>${order.ma}</td>
            <td>${order.khach}</td>
            <td>${order.diachi}</td>
            <td>${new Date(order.ngaygio).toLocaleDateString('en-CA')}</td>
            <td>${order.tinhTrang}</td>
            <td>${totalOrderPrice.toLocaleString()} VNĐ</td>
        `;
    });
}

// Gọi hàm displayStatistics khi trang được tải
document.addEventListener('DOMContentLoaded', displayStatistics);

//-------Sắp xếp------------------------
var decrease = true; 
function quickSort(arr, left, right, loai, func) {
    var pivot,
        partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right, loai, func);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1, loai, func);
        quickSort(arr, partitionIndex + 1, right, loai, func);
    }
    return arr;
}

function partition(arr, pivot, left, right, loai, func) {
    var pivotValue = func(arr[pivot], loai),
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (decrease && func(arr[i], loai) > pivotValue
            || !decrease && func(arr[i], loai) < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    var tempi = arr[i].cloneNode(true);
    var tempj = arr[j].cloneNode(true);
    arr[i].parentNode.replaceChild(tempj, arr[i]);
    arr[j].parentNode.replaceChild(tempi, arr[j]);
}
// Lấy giá trị của loại(cột) dữ liệu nào đó trong bảng
function getValueOfTypeInTable_SanPham(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'stt': return Number(td[0].innerHTML);
        case 'masp': return Number(td[1].innerHTML);
        case 'ten': return td[2].innerHTML.toLowerCase();
        case 'gia': return stringToNum(td[3].innerHTML);
        case 'khuyenmai': return td[4].innerHTML.toLowerCase();
    }
    return false;
}
function sortProductsTable(loai) {
    var list = document.getElementsByClassName('sanpham')[0].getElementsByClassName("table-content")[0];
    var tr = list.getElementsByTagName('tr');

    quickSort(tr, 0, tr.length - 1, loai, getValueOfTypeInTable_SanPham); // type cho phép lựa chọn sort theo mã hoặc tên hoặc giá ...
    decrease = !decrease;
}
function getValueOfTypeInTable_KhachHang(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'stt': return Number(td[0].innerHTML);
        case 'hoten': return td[1].innerHTML.toLowerCase();
        case 'email': return td[2].innerHTML.toLowerCase();
        case 'taikhoan': return td[3].innerHTML.toLowerCase();
        case 'matkhau': return td[4].innerHTML.toLowerCase();
    }
    return false;
}
function sortKhachHangTable(loai) {
    var list = document.getElementsByClassName('khachhang')[0].getElementsByClassName("table-content")[0];
    var tr = list.getElementsByTagName('tr');

    quickSort(tr, 0, tr.length - 1, loai, getValueOfTypeInTable_KhachHang);
    decrease = !decrease;
}
//----Sort Thống kê--------------
function stringToNum(str) {
    // Loại bỏ các ký tự không phải số và chuyển đổi chuỗi thành số
    return parseInt(str.replace(/[^0-9]/g, ''), 10);
}
function getValueOfTypeInTable_ItemDetails(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'ten': return td[0].innerHTML.toLowerCase();
        case 'soluong': return Number(td[1].innerHTML);
        case 'doanhthu': return stringToNum(td[2].innerHTML);
    }
    return false;
}
function sortItemDetailsTable(loai) {
    var list = document.getElementById('itemDetails').getElementsByTagName("tbody")[0];
    var tr = list.getElementsByTagName('tr');

    quickSort(tr, 0, tr.length - 1, loai, getValueOfTypeInTable_ItemDetails);
    decrease = !decrease;
}
function getValueOfTypeInTable_InvoiceDetails(tr, loai) {
    var td = tr.getElementsByTagName('td');
    switch (loai) {
        case 'id': return td[0].innerHTML.toLowerCase();
        case 'khach': return td[1].innerHTML.toLowerCase();
        case 'diachi': return td[2].innerHTML.toLowerCase();
        case 'ngay': return new Date(td[3].innerHTML);
        case 'trangthai': return td[4].innerHTML.toLowerCase();
        case 'sotien': return stringToNum(td[5].innerHTML);
    }
    return false;
}
function sortInvoiceDetailsTable(loai) {
    var list = document.getElementById('invoiceDetails').getElementsByTagName("tbody")[0];
    var tr = list.getElementsByTagName('tr');

    quickSort(tr, 0, tr.length - 1, loai, getValueOfTypeInTable_InvoiceDetails);
    decrease = !decrease;
}