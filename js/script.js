// Menambahkan event listener ke formulir untuk menangani pengiriman formulir
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah perilaku pengiriman formulir default

    // Mengambil nilai dari formulir
    const age = parseFloat(document.getElementById('age').value); // Mengambil dan mengonversi input usia menjadi angka
    const gender = document.getElementById('gender').value; // Mengambil nilai jenis kelamin yang dipilih
    const height = parseFloat(document.getElementById('height').value) / 100; // Mengambil tinggi badan, mengonversi dari cm ke meter
    const weight = parseFloat(document.getElementById('weight').value); // Mengambil dan mengonversi input berat badan menjadi angka

    // Validasi input
    if (isNaN(age) || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Silakan masukkan nilai yang valid.'); // Menampilkan pesan jika ada input yang tidak valid
        return; // Keluar dari fungsi jika validasi gagal
    }

    // Menghitung BMI
    const bmi = weight / (height * height); // Menghitung BMI menggunakan rumus: berat badan / tinggi badan^2
    const roundedBMI = bmi.toFixed(2); // Membulatkan BMI hingga 2 angka di belakang koma

    // Menentukan kategori BMI
    let bmiCategory; // Variabel untuk menyimpan kategori BMI
    let bmiCategoryDetail; // Variabel untuk menyimpan detail kategori

    if (bmi < 18.5) {
        bmiCategory = "Anda dalam kategori"; // Bagian pertama dari kategori
        bmiCategoryDetail = "Kekurangan Berat Badan"; // Bagian kedua dari kategori
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = "Anda dalam kategori"; // Bagian pertama dari kategori
        bmiCategoryDetail = "Berat Badan Normal"; // Bagian kedua dari kategori
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = "Anda dalam kategori"; // Bagian pertama dari kategori
        bmiCategoryDetail = "Kelebihan Berat Badan"; // Bagian kedua dari kategori
    } else {
        bmiCategory = "Anda dalam kategori"; // Bagian pertama dari kategori
        bmiCategoryDetail = "Obesitas"; // Bagian kedua dari kategori
    }

    // Menampilkan hasil
    document.getElementById('bmiCategory').textContent = bmiCategory; // Menampilkan bagian pertama dari kategori
    document.getElementById('bmiCategoryDetail').textContent = bmiCategoryDetail; // Menampilkan bagian kedua dari kategori
    document.getElementById('bmiValue').textContent = `BMI Anda adalah: ${roundedBMI}`; // Menampilkan nilai BMI
    document.getElementById('bmiExplanation').textContent = `Indeks Massa Tubuh (BMI) Anda adalah ${roundedBMI}, yang termasuk dalam kategori: ${bmiCategoryDetail}.`; // Menjelaskan hasil BMI
    document.getElementById('bmiAdvice').textContent = getAdvice(bmi); // Menampilkan saran berdasarkan BMI
    document.getElementById('result').style.display = 'block'; // Menampilkan bagian hasil
});

// Fungsi untuk mendapatkan saran berdasarkan BMI
function getAdvice(bmi) {
    if (bmi < 18.5) {
        return "Disarankan untuk meningkatkan asupan kalori dan melakukan pemeriksaan kesehatan."; // Saran untuk kekurangan berat badan
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Anda berada dalam berat badan yang sehat. Terus jaga pola makan dan gaya hidup sehat."; // Saran untuk berat badan normal
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Disarankan untuk mempertimbangkan program penurunan berat badan dan melakukan pemeriksaan kesehatan."; // Saran untuk kelebihan berat badan
    } else {
        return "Disarankan untuk segera melakukan konsultasi dengan dokter dan merencanakan program penurunan berat badan."; // Saran untuk obesitas
    }
}
