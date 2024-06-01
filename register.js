// Mengaktifkan tombol register
document.getElementById('register-btn').addEventListener('click', function() {
    // Mendapatkan nilai input username, email, password, dan cpassword
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    // Mengecek apakah input username, email, password, dan cpassword tidak kosong
    if (username !== '' && email !== '' && password !== '' && cpassword !== '') {
        // Mengecek apakah password dan cpassword sesuai
        if (password === cpassword) {
            // Jika sesuai, maka registrasi berhasil
            alert('Registrasi Berhasil!');
        } else {
            // Jika tidak sesuai, maka registrasi gagal
            alert('Password dan Confirm Password tidak sesuai!');
        }
    } else {
        // Jika input username, email, password, dan cpassword kosong, maka registrasi gagal
        alert('Username, Email, Password, dan Confirm Password tidak boleh kosong!');
    }
});