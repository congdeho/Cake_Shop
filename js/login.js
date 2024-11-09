function showSignUp() {
    document.getElementById('form-login').classList.add('hidden');
    document.getElementById('form-signup').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('form-signup').classList.add('hidden');
    document.getElementById('form-login').classList.remove('hidden');
}

var users = [
    { id: 1, name: "Trần Văn H", email: "user1@example.com", status: "active", username: "user1", password: "A1b2C3d4", phone: "0901234567", address: "Quận 1" },
    { id: 2, name: "Nguyễn Văn A", email: "user2@example.com", status: "active", username: "user2", password: "E5f6G7h8", phone: "0902345678", address: "Quận 3" },
    { id: 3, name: "Lê Văn C", email: "user3@example.com", status: "locked", username: "user3", password: "I9j0K1l2", phone: "0903456789", address: "Quận 4" },
    { id: 4, name: "Nguyễn Thị R", email: "user4@example.com", status: "active", username: "user4", password: "M3n4O5p6", phone: "0904567890", address: "Quận 5" },
    { id: 5, name: "Lê Văn O", email: "user5@example.com", status: "locked", username: "user5", password: "Q7r8S9t0", phone: "0905678901", address: "Quận 6" },
    { id: 6, name: "Nguyễn Thị F", email: "user6@example.com", status: "active", username: "user6", password: "U1v2W3x4", phone: "0906789012", address: "Quận 7" },
    { id: 7, name: "Trần Thị B", email: "user7@example.com", status: "active", username: "user7", password: "Y5z6A7b8", phone: "0907890123", address: "Quận 8" },
    { id: 8, name: "Lê Thị G", email: "user8@example.com", status: "locked", username: "user8", password: "C9d0E1f2", phone: "0908901234", address: "Quận 10" },
    { id: 9, name: "Đặng Văn I", email: "user9@example.com", status: "active", username: "user9", password: "G3h4I5j6", phone: "0909012345", address: "Quận 11" },
    { id: 10, name: "Vũ Văn E", email: "user10@example.com", status: "active", username: "user10", password: "K7l8M9n0", phone: "0910123456", address: "Quận 12" },
    { id: 11, name: "Nguyễn Văn T", email: "user11@example.com", status: "active", username: "user11", password: "L1m2N3o4", phone: "0911234567", address: "Quận Tân Bình" },
    { id: 12, name: "Trần Thị A", email: "user12@example.com", status: "locked", username: "user12", password: "P5q6R7s8", phone: "0912345678", address: "Quận Tân Phú" },
    { id: 13, name: "Lê Văn X", email: "user13@example.com", status: "active", username: "user13", password: "T3u4V5w6", phone: "0913456789", address: "Quận Bình Tân" },
    { id: 14, name: "Nguyễn Thị Q", email: "user14@example.com", status: "active", username: "user14", password: "Z1a2B3c4", phone: "0914567890", address: "Quận Bình Thạnh" },
    { id: 15, name: "Đặng Văn M", email: "user15@example.com", status: "locked", username: "user15", password: "D5e6F7g8", phone: "0915678901", address: "Quận Gò Vấp" },
    { id: 16, name: "Trần Văn K", email: "user16@example.com", status: "active", username: "user16", password: "H3i4J5k6", phone: "0916789012", address: "Quận Phú Nhuận" },
    { id: 17, name: "Lê Thị H", email: "user17@example.com", status: "active", username: "user17", password: "L1m2N3o4", phone: "0917890123", address: "Quận 1" },
    { id: 18, name: "Nguyễn Văn D", email: "user18@example.com", status: "locked", username: "user18", password: "P5q6R7s8", phone: "0918901234", address: "Quận 3" },
    { id: 19, name: "Vũ Văn J", email: "user19@example.com", status: "active", username: "user19", password: "T3u4V5w6", phone: "0919012345", address: "Quận 4" },
    { id: 20, name: "Lê Văn F", email: "user20@example.com", status: "active", username: "user20", password: "X1y2Z3a4", phone: "0920123456", address: "Quận 5" },
];

var data = [];
function addData(){
    var id = data.length + 1;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var status = "active";
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("pulldown_menu").value;

    var item = {
        id : id,
        name : name,
        email : email,
        status : status,
        username : username,
        password : password,
        phone : phone,
        address : address
    };
    this.data.push(item);
    console.log(this.data);
}

function checkLogin(){
    var usernamelg = document.getElementById("usernamelg").value;
    var passwordlg = document.getElementById("passwordlg").value;

    for (let i = 0; i<users.length; i++){
        if (usernamelg === users[i].username && passwordlg === users[i].password){
            alert("Đăng nhập thành công!!!");
            return true;            
        }
        else{
            alert("Chưa đăng ký người dùng.");
            return false;
        }
    }
}