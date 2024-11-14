function showSignUp() {
    document.getElementById('form-login').classList.add('hidden');
    document.getElementById('form-signup').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('form-signup').classList.add('hidden');
    document.getElementById('form-login').classList.remove('hidden');
}

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