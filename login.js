// Mengaktifkan tombol login
document.getElementById('login-btn').addEventListener('click', function() {
    // Mendapatkan nilai input username dan password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mengecek apakah input username dan password tidak kosong
    if (username !== '' && password !== '') {
        // Mengecek apakah username dan password sesuai dengan data yang tersimpan
        // (dalam contoh ini, saya tidak menggunakan data yang tersimpan, jadi Anda harus menggantikan dengan kode yang sesuai)
        if (username === 'admin' && password === 'password') {
            // Jika sesuai, maka login berhasil
            alert('Login Berhasil!');
        } else {
            // Jika tidak sesuai, maka login gagal
            alert('Login Gagal!');
        }
    } else {
        // Jika input username dan password kosong, maka login gagal
        alert('Username dan Password tidak boleh kosong!');
    }
});