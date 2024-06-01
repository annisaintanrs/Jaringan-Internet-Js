document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== '' && password !== '') {
        if (username === 'admin' && password === 'password') {
            alert('Login Berhasil!');
        } else {
            alert('Login Gagal!');
        }
    } else {
        alert('Username dan Password tidak boleh kosong!');
    }
});
