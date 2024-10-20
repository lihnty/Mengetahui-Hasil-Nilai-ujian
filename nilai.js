var nilai = prompt('Masukkan nilai:');

if(isNaN(nilai)) {
    alert('Input bukan angka, silakan masukkan nilai dalam bentuk angka.');
} else {
    nilai = Number(nilai);

    if(nilai >= 90) {
        alert('Grade: A');
    } else if(nilai >= 80 && nilai < 90) {
        alert('Grade: B');
    } else if(nilai >= 70 && nilai < 80) {
        alert('Grade: C');
    } else if(nilai >= 60 && nilai < 70) {
        alert('Grade: D');
    } else if(nilai >= 40 && nilai < 60) {
        alert('Grade: E');
    } else if(nilai >= 10 && nilai < 40) {
        alert('Grade: F');
    } else if(nilai < 10) {
        alert('Grade: F');
    } else {
        alert('Nilai tidak valid.');
    }
}
