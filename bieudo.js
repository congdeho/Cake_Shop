
// Tạo biểu đồ người dùng mới
const ctxUsers = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(ctxUsers, {
    type: 'bar', // Loại biểu đồ
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng9','Tháng 10','Tháng 11','Tháng 12'], // Nhãn cho trục x
        datasets: [{
            label: 'Người Dùng Mới',
            data: [50, 100, 200, 150, 300,100,300,400,600,700,111,444], // Dữ liệu cho biểu đồ
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Màu nền
            borderColor: 'rgba(75, 192, 192, 1)', // Màu viền
            borderWidth: 1 // Độ dày viền
        }]
    },
    options: {
        responsive: true, // Biểu đồ responsive
        scales: {
            y: {
                beginAtZero: true // Bắt đầu trục y từ 0
            }
        }
    }
});

// Tạo biểu đồ doanh thu
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctxRevenue, {
    type: 'line', // Loại biểu đồ
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng9','Tháng 10','Tháng 11','Tháng 12'], // Nhãn cho trục x
        datasets: [{
            label: 'Doanh Thu VNĐ',
            data: [2000, 4000, 6000, 8000, 100000 ,1000,5000,9000,3000,2222,4444,5555], // Dữ liệu cho biểu đồ
            backgroundColor: 'rgba(153, 102, 255, 0.2)', // Màu nền
            borderColor: 'rgba(153, 102, 255, 1)', // Màu viền
            borderWidth: 1, // Độ dày viền
            fill: true // Làm đầy biểu đồ
        }]
    },
    options: {
        responsive: true, // Biểu đồ responsive
        scales: {
            y: {
                beginAtZero: true // Bắt đầu trục y từ 0
            }
        }
    }
});
