// Hàm tính tổng giá dựa trên số lượng và giá của các sản phẩm
function calculateTotal() {
  // Lấy tất cả các sản phẩm
  const products = document.querySelectorAll(".product-item");
  let total = 0;

  // Duyệt qua từng sản phẩm để tính tổng giá
  products.forEach((product) => {
    // Lấy giá sản phẩm (dạng text)
    const price = parseFloat(
      product.querySelector(".product-details p:nth-child(3)").textContent.replace(/[^\d]/g, "")
    ); // Chuyển giá thành số (loại bỏ ký tự không phải số)
    const quantity = parseInt(product.querySelector('input[type="number"]').value, 10); // Lấy số lượng sản phẩm

    total += price * quantity; // Cộng giá vào tổng
  });

  // Cập nhật tổng giá hiển thị ở phần tóm tắt
  document.querySelector(".summary p strong").textContent = `Tổng cộng: ${total.toLocaleString("vi-VN")} VND`;
}

// Gọi hàm tính tổng khi thay đổi số lượng sản phẩm
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('input', calculateTotal);
});

// Gọi hàm tính tổng ngay khi tải trang
window.onload = calculateTotal;

// Dữ liệu đầy đủ về các quận, huyện và phường/xã tại TP. Hồ Chí Minh
const cities = [
  {
    name: "TP HCM",
    districts: [
      "Quận 1",
      "Quận 3",
      "Quận 4",
      "Quận 5",
      "Quận 6",
      "Quận 7",
      "Quận 8",
      "Quận 10",
      "Quận 11",
      "Quận 12",
      "Bình Thạnh",
      "Gò Vấp",
      "Phú Nhuận",
      "Tân Bình",
      "Tân Phú",
      "Bình Tân",
      "Thủ Đức",
      "Củ Chi",
      "Hóc Môn",
      "Bình Chánh",
      "Nhà Bè",
      "Cần Giờ",
    ],
  },
];

// Danh sách các phường/xã theo từng quận
const wards = {
  "Quận 1": ["Bến Nghé", "Bến Thành", "Cô Giang", "Đa Kao", "Nguyễn Cư Trinh", "Phạm Ngũ Lão", "Tân Định"],
  "Quận 3": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10"],
  "Quận 4": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 6", "Phường 8", "Phường 9", "Phường 10", "Phường 13"],
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
