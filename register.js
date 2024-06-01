document.getElementById('register-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    if (username !== '' && email !== '' && password !== '' && cpassword !== '') {
        if (password === cpassword) {
            alert('Registrasi Berhasil!');
        } else {
            alert('Password dan Confirm Password tidak sesuai!');
        }
    } else {
        alert('Username, Email, Password, dan Confirm Password tidak boleh kosong!');
    }
});
