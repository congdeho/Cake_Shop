document.addEventListener('DOMContentLoaded', function () {
    const cities = [
        {
            name: "Thành phố Hồ Chí Minh",
            districts: [
                "Quận 1",
                "Quận 3",
                "Quận 5",
                "Quận 7",
                "Quận 10",
                "Quận Bình Thạnh",
                "Quận Gò Vấp",
                "Quận Phú Nhuận",
                "Quận Tân Bình",
                "Quận Tân Phú",
                "Quận Thủ Đức"
            ]
        }
    ];

    const wards = {
        "Quận 1": ["Bến Nghé", "Bến Thành", "Cô Giang", "Đa Kao", "Nguyễn Cư Trinh", "Phạm Ngũ Lão", "Tân Định"],
        "Quận 3": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"],
        "Quận 5": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"],
        "Quận 7": ["Phường Tân Hưng", "Phường Tân Kiểng", "Phường Tân Phong", "Phường Tân Phú", "Phường Tân Quy", "Phường Tân Thuận Đông", "Phường Tân Thuận Tây"],
        "Quận 10": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"],
        "Quận Bình Thạnh": ["Phường 1", "Phường 2", "Phường 3", "Phường 5", "Phường 6", "Phường 7", "Phường 11", "Phường 12", "Phường 13", "Phường 14"],
        "Quận Gò Vấp": ["Phường 1", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11"],
        "Quận Phú Nhuận": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11"],
        "Quận Tân Bình": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"],
        "Quận Tân Phú": ["Phường Hiệp Tân", "Phường Hòa Thạnh", "Phường Phú Thạnh", "Phường Phú Thọ Hòa", "Phường Phú Trung", "Phường Sơn Kỳ", "Phường Tân Quý", "Phường Tân Sơn Nhì"],
        "Quận Thủ Đức": ["Phường Bình Chiểu", "Phường Bình Thọ", "Phường Hiệp Bình Chánh", "Phường Hiệp Bình Phước", "Phường Linh Chiểu", "Phường Linh Đông", "Phường Linh Tây", "Phường Linh Trung", "Phường Linh Xuân", "Phường Tam Bình"]
    };

    // Lấy phần tử từ DOM
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    // Điền dữ liệu thành phố vào dropdown
    cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city.name;
        option.textContent = city.name;
        citySelect.appendChild(option);
    });

    // Xử lý khi người dùng chọn thành phố
    citySelect.addEventListener("change", () => {
        // Xóa các tùy chọn hiện tại trong dropdown của quận, huyện và phường, xã
        districtSelect.innerHTML = '<option value="">Chọn quận, huyện</option>';
        wardSelect.innerHTML = '<option value="">Chọn phường, xã</option>';

        // Tìm thành phố được chọn
        const selectedCity = cities.find((city) => city.name === citySelect.value);
        if (selectedCity) {
            // Điền các quận, huyện vào dropdown
            selectedCity.districts.forEach((district) => {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });

    // Xử lý khi người dùng chọn quận, huyện
    districtSelect.addEventListener("change", () => {
        // Xóa các tùy chọn hiện tại trong dropdown của phường, xã
        wardSelect.innerHTML = '<option value="">Chọn phường, xã</option>';

        // Điền các phường, xã dựa trên quận, huyện được chọn
        const selectedDistrict = districtSelect.value;
        if (wards[selectedDistrict]) {
            wards[selectedDistrict].forEach((ward) => {
                const option = document.createElement("option");
                option.value = ward;
                option.textContent = ward;
                wardSelect.appendChild(option);
            });
        }
    });

    // Kiểm tra hợp lệ khi người dùng nhấn nút submit
    document.querySelector("form").addEventListener("submit", (e) => {
        if (!citySelect.value || !districtSelect.value || !wardSelect.value) {
            alert("Vui lòng điền đầy đủ thông tin địa chỉ."); // Hiển thị cảnh báo nếu thông tin chưa đầy đủ
            e.preventDefault(); // Ngăn việc submit nếu thông tin chưa đầy đủ
        }
    });
});
function thanhToan() {
    var currentUser = getCurrentUser();
    if (!currentUser) {
        alert('Bạn cần đăng nhập để thực hiện thanh toán.');
        return;
    }

    if (currentUser.status === 'locked') {
        alert('Tài khoản của bạn hiện đang bị khóa nên không thể mua hàng!');
        addAlertBox('Tài khoản của bạn đã bị khóa bởi Admin.', '#aa0000', '#fff', 10000);
        return;
    }

    if (!currentUser.products.length) {
        addAlertBox('Không có mặt hàng nào cần thanh toán !!', '#ffb400', '#fff', 2000);
        return;
    }
  function saveAddress() {
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const district = document.getElementById("district").value;
    const ward = document.getElementById("ward").value;

    const address = {
      street,
      city,
      district,
      ward,
    };

    localStorage.setItem("address", JSON.stringify(address));
    alert("Địa chỉ đã được lưu!");
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu địa chỉ từ localStorage
    const savedAddress = JSON.parse(localStorage.getItem("address"));

    if (savedAddress) {
      // Điền các trường thông tin nếu có dữ liệu
      document.getElementById("street").value = savedAddress.street || "";
      document.getElementById("city").value = savedAddress.city || "";
      document.getElementById("district").value = savedAddress.district || "";
      document.getElementById("ward").value = savedAddress.ward || "";
    }
  });
    // Lấy thông tin địa chỉ và mô tả
    var street = document.getElementById('street').value;
    var city = document.getElementById('city').value;
    var district = document.getElementById('district').value;
    var ward = document.getElementById('ward').value;
    var notes = document.getElementById('notes').value;

    if (!street || !city || !district || !ward) {
        alert('Vui lòng điền đầy đủ thông tin địa chỉ.');
        return;
    }

    if (window.confirm('Thanh toán giỏ hàng ?')) {
        const orderCount = currentUser.donhang.length; // Đếm số lượng đơn hàng hiện có
        const orderId = 'DH' + currentUser.id + (orderCount + 1); // Tạo mã đơn hàng duy nhất
        currentUser.donhang.push({
            "id": orderId,
            "sp": currentUser.products,
            "ngaymua": new Date(),
            "tinhTrang": 'Đang chờ xử lý',
            "diachi": {
                "street": street,
                "city": city,
                "district": district,
                "ward": ward
            },
            "notes": notes
        });
        currentUser.products = [];
        setCurrentUser(currentUser);
        setListUser(getListUser().map(u => u.username === currentUser.username ? currentUser : u));
        capNhatMoiThu();
        alert('Các sản phẩm đã được gửi vào đơn hàng và chờ xử lý.', '#17c671', '#fff', 4000);
    }
}

function capNhatMoiThu() {
    // Hàm này sẽ cập nhật lại giao diện và các thông tin cần thiết
    addProductToTable(getCurrentUser());
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    document.querySelector('.cart-number').textContent = getCurrentUser().products.length;
}
