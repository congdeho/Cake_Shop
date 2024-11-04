// Function to calculate the total price based on quantities and product prices
function calculateTotal() {
  // Get all product items
  const products = document.querySelectorAll(".product-item");
  let total = 0;

  // Iterate over each product item to calculate total
  products.forEach((product) => {
    const priceText = product.querySelector(
      ".product-details p:nth-child(3)"
    ).textContent; // Get price text
    const price = parseFloat(priceText.replace(/[^0-9.-]+/g, "")); // Convert price to a number
    const quantityInput = product.querySelector('input[type="number"]'); // Get quantity input
    const quantity = parseInt(quantityInput.value); // Get quantity value

    total += price * quantity; // Update total
  });

  // Update the total price displayed in the summary section
  const totalSummary = document.querySelector(".summary p strong");
  totalSummary.textContent = `Tổng cộng: ${total.toLocaleString("vi-VN")} VND`; // Format total
}

// Call calculateTotal on page load to initialize total
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

const wards = {
  "Quận 1": [
    "Bến Nghé",
    "Bến Thành",
    "Cô Giang",
    "Đa Kao",
    "Nguyễn Cư Trinh",
    "Phạm Ngũ Lão",
    "Tân Định",
  ],
  "Quận 3": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
  ],
  "Quận 4": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 6",
    "Phường 8",
    "Phường 9",
    "Phường 10",
    "Phường 13",
  ],
  "Quận 5": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
  ],
  "Quận 6": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
  ],
  "Quận 7": [
    "Tân Hưng",
    "Tân Kiểng",
    "Tân Phong",
    "Tân Quy",
    "Tân Thuận Đông",
    "Tân Thuận Tây",
    "Bình Thuận",
  ],
  "Quận 8": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
  ],
  "Quận 10": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
  ],
  "Quận 11": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
  ],
  "Quận 12": [
    "An Phú Đông",
    "Đông Hưng Thuận",
    "Hiệp Thành",
    "Tân Chánh Hiệp",
    "Thạnh Lộc",
    "Thạnh Xuân",
    "Trung Mỹ Tây",
  ],
  "Bình Thạnh": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 11",
    "Phường 12",
    "Phường 13",
  ],
  "Gò Vấp": [
    "Phường 1",
    "Phường 3",
    "Phường 5",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
    "Phường 11",
    "Phường 12",
    "Phường 13",
  ],
  "Phú Nhuận": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 7",
    "Phường 8",
    "Phường 9",
    "Phường 10",
    "Phường 11",
  ],
  "Tân Bình": [
    "Phường 1",
    "Phường 2",
    "Phường 3",
    "Phường 4",
    "Phường 5",
    "Phường 6",
    "Phường 7",
    "Phường 8",
    "Phường 9",
  ],
  "Tân Phú": [
    "Hiệp Tân",
    "Hòa Thạnh",
    "Phú Thạnh",
    "Phú Thọ Hòa",
    "Phú Trung",
    "Sơn Kỳ",
    "Tân Quý",
    "Tân Sơn Nhì",
    "Tây Thạnh",
  ],
  "Bình Tân": [
    "An Lạc",
    "An Lạc A",
    "Bình Hưng Hòa",
    "Bình Hưng Hòa A",
    "Bình Hưng Hòa B",
    "Bình Trị Đông",
    "Bình Trị Đông A",
    "Bình Trị Đông B",
  ],
  "Thủ Đức": [
    "Bình Chiểu",
    "Hiệp Bình Chánh",
    "Hiệp Bình Phước",
    "Linh Chiểu",
    "Linh Đông",
    "Linh Tây",
    "Linh Trung",
    "Linh Xuân",
  ],
  "Củ Chi": [
    "An Nhơn Tây",
    "Hòa Phú",
    "Nhuận Đức",
    "Phú Hòa Đông",
    "Phước Hiệp",
    "Phước Thạnh",
    "Tân An Hội",
  ],
  "Hóc Môn": [
    "Bà Điểm",
    "Đông Thạnh",
    "Nhị Bình",
    "Tân Hiệp",
    "Tân Thới Nhì",
    "Tân Xuân",
    "Thới Tam Thôn",
  ],
  "Bình Chánh": [
    "Bình Hưng",
    "Bình Chánh",
    "An Phú Tây",
    "Phạm Văn Hai",
    "Phong Phú",
    "Tân Quý Tây",
  ],
  "Nhà Bè": [
    "Hiệp Phước",
    "Nhơn Đức",
    "Phú Xuân",
    "Long Thới",
    "Phước Kiển",
    "Phước Lộc",
  ],
  "Cần Giờ": [
    "Bình Khánh",
    "An Thới Đông",
    "Tam Thôn Hiệp",
    "Lý Nhơn",
    "Thạnh An",
    "Cần Thạnh",
  ],
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

// Xử lý khi chọn thành phố
citySelect.addEventListener("change", () => {
  districtSelect.innerHTML = '<option value="">Chọn quận, huyện</option>';
  wardSelect.innerHTML = '<option value="">Chọn phường, xã</option>';

  const selectedCity = cities.find((city) => city.name === citySelect.value);
  if (selectedCity) {
    selectedCity.districts.forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
});

// Xử lý khi chọn quận, huyện
districtSelect.addEventListener("change", () => {
  wardSelect.innerHTML = '<option value="">Chọn phường, xã</option>';

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

// Kiểm tra hợp lệ khi submit form
document.querySelector("form").addEventListener("submit", (e) => {
  if (!citySelect.value || !districtSelect.value || !wardSelect.value) {
    alert("Vui lòng điền đầy đủ thông tin địa chỉ.");
    e.preventDefault(); // Ngăn việc submit nếu thông tin chưa đầy đủ
  }
});
