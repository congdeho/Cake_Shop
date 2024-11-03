function showSignUp() {
    document.getElementById('form-login').classList.add('hidden');
    document.getElementById('form-signup').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('form-signup').classList.add('hidden');
    document.getElementById('form-login').classList.remove('hidden');
}

var users = [
    { id: 1, name: "Trần Văn H", email: "user1@example.com", status: "active", username: "user1", password: "A1b2C3d4" },
    { id: 2, name: "Nguyễn Văn A", email: "user2@example.com", status: "active", username: "user2", password: "E5f6G7h8" },
    { id: 3, name: "Lê Văn C", email: "user3@example.com", status: "locked", username: "user3", password: "I9j0K1l2" },
    { id: 4, name: "Nguyễn Thị R", email: "user4@example.com", status: "active", username: "user4", password: "M3n4O5p6" },
    { id: 5, name: "Lê Văn O", email: "user5@example.com", status: "locked", username: "user5", password: "Q7r8S9t0" },
    { id: 6, name: "Nguyễn Thị F", email: "user6@example.com", status: "active", username: "user6", password: "U1v2W3x4" },
    { id: 7, name: "Trần Thị B", email: "user7@example.com", status: "active", username: "user7", password: "Y5z6A7b8" },
    { id: 8, name: "Lê Thị G", email: "user8@example.com", status: "locked", username: "user8", password: "C9d0E1f2" },
    { id: 9, name: "Đặng Văn I", email: "user9@example.com", status: "active", username: "user9", password: "G3h4I5j6" },
    { id: 10, name: "Vũ Văn E", email: "user10@example.com", status: "active", username: "user10", password: "K7l8M9n0" },
    { id: 11, name: "Nguyễn Văn T", email: "user11@example.com", status: "active", username: "user11", password: "L1m2N3o4" },
    { id: 12, name: "Trần Thị A", email: "user12@example.com", status: "locked", username: "user12", password: "P5q6R7s8" },
    { id: 13, name: "Lê Văn X", email: "user13@example.com", status: "active", username: "user13", password: "T3u4V5w6" },
    { id: 14, name: "Nguyễn Thị Q", email: "user14@example.com", status: "active", username: "user14", password: "Z1a2B3c4" },
    { id: 15, name: "Đặng Văn M", email: "user15@example.com", status: "locked", username: "user15", password: "D5e6F7g8" },
    { id: 16, name: "Trần Văn K", email: "user16@example.com", status: "active", username: "user16", password: "H3i4J5k6" },
    { id: 17, name: "Lê Thị H", email: "user17@example.com", status: "active", username: "user17", password: "L1m2N3o4" },
    { id: 18, name: "Nguyễn Văn D", email: "user18@example.com", status: "locked", username: "user18", password: "P5q6R7s8" },
    { id: 19, name: "Vũ Văn J", email: "user19@example.com", status: "active", username: "user19", password: "T3u4V5w6" },
    { id: 20, name: "Lê Văn F", email: "user20@example.com", status: "active", username: "user20", password: "X1y2Z3a4" },
    { id: 21, name: "Nguyễn Thị Z", email: "user21@example.com", status: "active", username: "user21", password: "C5d6E7f8" },
    { id: 22, name: "Trần Văn L", email: "user22@example.com", status: "locked", username: "user22", password: "H9i0J1k2" },
    { id: 23, name: "Lê Văn Y", email: "user23@example.com", status: "active", username: "user23", password: "A1b2C3d4" },
    { id: 24, name: "Nguyễn Văn N", email: "user24@example.com", status: "active", username: "user24", password: "E5f6G7h8" },
    { id: 25, name: "Đặng Văn V", email: "user25@example.com", status: "locked", username: "user25", password: "I9j0K1l2" },
    { id: 26, name: "Nguyễn Thị K", email: "user26@example.com", status: "active", username: "user26", password: "M3n4O5p6" },
    { id: 27, name: "Nguyễn Thị A", email: "user27@example.com", status: "inactive", username: "user27", password: "A1b2C3d4" },
  { id: 28, name: "Nguyễn Văn B", email: "user28@example.com", status: "active", username: "user28", password: "B2c3D4e5" },
  { id: 29, name: "Nguyễn Thị C", email: "user29@example.com", status: "active", username: "user29", password: "C3d4E5f6" },
  { id: 30, name: "Nguyễn Văn D", email: "user30@example.com", status: "inactive", username: "user30", password: "D4e5F6g7" },
  { id: 31, name: "Nguyễn Thị E", email: "user31@example.com", status: "active", username: "user31", password: "E5f6G7h8" },
  { id: 32, name: "Nguyễn Văn F", email: "user32@example.com", status: "active", username: "user32", password: "F6g7H8i9" },
  { id: 33, name: "Nguyễn Thị G", email: "user33@example.com", status: "inactive", username: "user33", password: "G7h8I9j0" },
  { id: 34, name: "Nguyễn Văn H", email: "user34@example.com", status: "active", username: "user34", password: "H8i9J0k1" },
  { id: 35, name: "Nguyễn Thị I", email: "user35@example.com", status: "inactive", username: "user35", password: "I9j0K1l2" },
  { id: 36, name: "Nguyễn Văn J", email: "user36@example.com", status: "active", username: "user36", password: "J0k1L2m3" },
  { id: 37, name: "Nguyễn Thị K", email: "user37@example.com", status: "active", username: "user37", password: "K1l2M3n4" },
  { id: 38, name: "Nguyễn Văn L", email: "user38@example.com", status: "inactive", username: "user38", password: "L2m3N4o5" },
  { id: 39, name: "Nguyễn Thị M", email: "user39@example.com", status: "active", username: "user39", password: "M3n4O5p6" },
  { id: 40, name: "Nguyễn Văn N", email: "user40@example.com", status: "inactive", username: "user40", password: "N4o5P6q7" },
  { id: 41, name: "Nguyễn Thị O", email: "user41@example.com", status: "active", username: "user41", password: "O5p6Q7r8" },
  { id: 42, name: "Nguyễn Văn P", email: "user42@example.com", status: "inactive", username: "user42", password: "P6q7R8s9" },
  { id: 43, name: "Nguyễn Thị Q", email: "user43@example.com", status: "active", username: "user43", password: "Q7r8S9t0" },
  { id: 44, name: "Nguyễn Văn R", email: "user44@example.com", status: "active", username: "user44", password: "R8s9T0u1" },
  { id: 45, name: "Nguyễn Thị S", email: "user45@example.com", status: "inactive", username: "user45", password: "S9t0U1v2" },
  { id: 46, name: "Nguyễn Văn T", email: "user46@example.com", status: "active", username: "user46", password: "T0u1V2w3" },
  { id: 47, name: "Nguyễn Thị U", email: "user47@example.com", status: "inactive", username: "user47", password: "U1v2W3x4" },
  { id: 48, name: "Nguyễn Văn V", email: "user48@example.com", status: "active", username: "user48", password: "V2w3X4y5" },
  { id: 49, name: "Nguyễn Thị W", email: "user49@example.com", status: "inactive", username: "user49", password: "W3x4Y5z6" },
  { id: 50, name: "Nguyễn Văn X", email: "user50@example.com", status: "active", username: "user50", password: "X4y5Z6a7" },
  { id: 51, name: "Nguyễn Thị Y", email: "user51@example.com", status: "inactive", username: "user51", password: "Y5z6A7b8" },
  { id: 52, name: "Nguyễn Văn Z", email: "user52@example.com", status: "active", username: "user52", password: "Z6a7B8c9" },
  { id: 53, name: "Nguyễn Thị A", email: "user53@example.com", status: "inactive", username: "user53", password: "A7b8C9d0" },
  { id: 54, name: "Nguyễn Văn B", email: "user54@example.com", status: "active", username: "user54", password: "B8c9D0e1" },
  { id: 55, name: "Nguyễn Thị C", email: "user55@example.com", status: "inactive", username: "user55", password: "C9d0E1f2" },
  { id: 56, name: "Nguyễn Văn D", email: "user56@example.com", status: "active", username: "user56", password: "D0e1F2g3" },
  { id: 57, name: "Nguyễn Thị E", email: "user57@example.com", status: "active", username: "user57", password: "E1f2G3h4" },
  { id: 58, name: "Nguyễn Văn F", email: "user58@example.com", status: "inactive", username: "user58", password: "F2g3H4i5" },
  { id: 59, name: "Nguyễn Thị G", email: "user59@example.com", status: "active", username: "user59", password: "G3h4I5j6" },
  { id: 60, name: "Nguyễn Văn H", email: "user60@example.com", status: "inactive", username: "user60", password: "H4i5J6k7" },
  { id: 61, name: "Nguyễn Thị I", email: "user61@example.com", status: "active", username: "user61", password: "I5j6K7l8" },
  { id: 62, name: "Nguyễn Văn J", email: "user62@example.com", status: "inactive", username: "user62", password: "J6k7L8m9" },
  { id: 63, name: "Nguyễn Thị K", email: "user63@example.com", status: "active", username: "user63", password: "K7l8M9n0" },
  { id: 64, name: "Nguyễn Văn L", email: "user64@example.com", status: "inactive", username: "user64", password: "L8m9N0o1" },
  { id: 65, name: "Nguyễn Thị M", email: "user65@example.com", status: "active", username: "user65", password: "M9n0O1p2" },
  { id: 66, name: "Nguyễn Văn N", email: "user66@example.com", status: "inactive", username: "user66", password: "N0o1P2q3" },
  { id: 67, name: "Nguyễn Thị O", email: "user67@example.com", status: "active", username: "user67", password: "O1p2Q3r4" },
  { id: 68, name: "Nguyễn Văn P", email: "user68@example.com", status: "inactive", username: "user68", password: "P2q3R4s5" },
  { id: 69, name: "Nguyễn Thị Q", email: "user69@example.com", status: "active", username: "user69", password: "Q3r4S5t6" },
  { id: 70, name: "Nguyễn Văn R", email: "user70@example.com", status: "inactive", username: "user70", password: "R4s5T6u7" },
  { id: 71, name: "Nguyễn Thị S", email: "user71@example.com", status: "active", username: "user71", password: "S5t6U7v8" },
  { id: 72, name: "Nguyễn Văn T", email: "user72@example.com", status: "inactive", username: "user72", password: "T6u7V8w9" },
  { id: 73, name: "Nguyễn Thị U", email: "user73@example.com", status: "active", username: "user73", password: "U7v8W9x0" },
  { id: 74, name: "Nguyễn Văn V", email: "user74@example.com", status: "inactive", username: "user74", password: "V8w9X0y1" },
  { id: 75, name: "Nguyễn Thị W", email: "user75@example.com", status: "active", username: "user75", password: "W9x0Y1z2" },
  { id: 76, name: "Nguyễn Văn X", email: "user76@example.com", status: "inactive", username: "user76", password: "X0y1Z2a3" },
  { id: 77, name: "Nguyễn Văn A", email: "user77@example.com", status: "inactive", username: "user77", password: "A2b3C4d5" },
  { id: 78, name: "Nguyễn Thị B", email: "user78@example.com", status: "active", username: "user78", password: "B3c4D5e6" },
  { id: 79, name: "Nguyễn Văn C", email: "user79@example.com", status: "inactive", username: "user79", password: "C4d5E6f7" },
  { id: 80, name: "Nguyễn Thị D", email: "user80@example.com", status: "active", username: "user80", password: "D5e6F7g8" },
  { id: 81, name: "Nguyễn Văn E", email: "user81@example.com", status: "inactive", username: "user81", password: "E6f7G8h9" },
  { id: 82, name: "Nguyễn Thị F", email: "user82@example.com", status: "active", username: "user82", password: "F7g8H9i0" },
  { id: 83, name: "Nguyễn Văn G", email: "user83@example.com", status: "inactive", username: "user83", password: "G8h9I0j1" },
  { id: 84, name: "Nguyễn Thị H", email: "user84@example.com", status: "active", username: "user84", password: "H9i0J1k2" },
  { id: 85, name: "Nguyễn Văn I", email: "user85@example.com", status: "inactive", username: "user85", password: "I0j1K2l3" },
  { id: 86, name: "Nguyễn Thị J", email: "user86@example.com", status: "active", username: "user86", password: "J1k2L3m4" },
  { id: 87, name: "Nguyễn Văn K", email: "user87@example.com", status: "inactive", username: "user87", password: "K2l3M4n5" },
  { id: 88, name: "Nguyễn Thị L", email: "user88@example.com", status: "active", username: "user88", password: "L3m4N5o6" },
  { id: 89, name: "Nguyễn Văn M", email: "user89@example.com", status: "inactive", username: "user89", password: "M4n5O6p7" },
  { id: 90, name: "Nguyễn Thị N", email: "user90@example.com", status: "active", username: "user90", password: "N5o6P7q8" },
  { id: 91, name: "Nguyễn Văn O", email: "user91@example.com", status: "inactive", username: "user91", password: "O6p7Q8r9" },
  { id: 92, name: "Nguyễn Thị P", email: "user92@example.com", status: "active", username: "user92", password: "P7q8R9s0" },
  { id: 93, name: "Nguyễn Văn Q", email: "user93@example.com", status: "inactive", username: "user93", password: "Q8r9S0t1" },
  { id: 94, name: "Nguyễn Thị R", email: "user94@example.com", status: "active", username: "user94", password: "R9s0T1u2" },
  { id: 95, name: "Nguyễn Văn S", email: "user95@example.com", status: "inactive", username: "user95", password: "S0t1U2v3" },
  { id: 96, name: "Nguyễn Thị T", email: "user96@example.com", status: "active", username: "user96", password: "T1u2V3w4" },
  { id: 97, name: "Nguyễn Văn U", email: "user97@example.com", status: "inactive", username: "user97", password: "U2v3W4x5" },
  { id: 98, name: "Nguyễn Thị V", email: "user98@example.com", status: "active", username: "user98", password: "V3w4X5y6" },
  { id: 99, name: "Nguyễn Văn W", email: "user99@example.com", status: "inactive", username: "user99", password: "W4x5Y6z7" },
  { id: 100, name: "Nguyễn Thị X", email: "user100@example.com", status: "active", username: "user100", password: "X5y6Z7a8" },
  { id: 101, name: "Nguyễn Văn Y", email: "user101@example.com", status: "inactive", username: "user101", password: "Y6z7A8b9" },
  { id: 102, name: "Nguyễn Thị Z", email: "user102@example.com", status: "active", username: "user102", password: "Z7a8B9c0" },
  { id: 103, name: "Nguyễn Văn A", email: "user103@example.com", status: "inactive", username: "user103", password: "A8b9C0d1" },
  { id: 104, name: "Nguyễn Thị B", email: "user104@example.com", status: "active", username: "user104", password: "B9c0D1e2" },
  { id: 105, name: "Nguyễn Văn C", email: "user105@example.com", status: "inactive", username: "user105", password: "C0d1E2f3" },
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

    var item = {
        id : id,
        name : name,
        email : email,
        status : status,
        username : username,
        password : password,
        phone : phone
    };
    this.data.push(item);
    // console.log(this.data);
}

function checkLogin(){
    var usernamelg = document.getElementById("usernamelg").value;
    var passwordlg = document.getElementById("passwordlg").value;

    for (let i = 0; i<users.length; i++){
        if (usernamelg === users[i].username && passwordlg === users[i].password){
            alert("Dang nhap thanh cong!!!");
            return true;            
        }
        else{
            alert("Chua dang ky nguoi dung.");
            return false;
        }
    }
}
