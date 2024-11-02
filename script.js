function showSignUp() {
    document.getElementById('form-login').classList.add('hidden');
    document.getElementById('form-signup').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('form-signup').classList.add('hidden');
    document.getElementById('form-login').classList.remove('hidden');
}