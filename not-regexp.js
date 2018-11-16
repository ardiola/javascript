function panggilRegexp(value) {
    // var ambilData = value.match(/\W/g); //mengambil semua karakter KECUALI huruf dan angka
    // var ambilData = value.match(/\D/g); //mengambil semua karakter dan spasi KECUALI angka
    // var ambilData = value.match(/\S/g); //mengambil karakter KECUALI SPASI
    // var ambilData = value.match(/ke/g); //Untuk mengambil kata “ke”
    // var ambilData = value.match(/[ke]/g); //untuk mengambil semua “k” dan karakter “e”
    // var ambilData = value.match(/[^ke]/g); //untuk mengambil karakter KECUALI karakter tertentu
    var ambilData = value.match(/[a-i]/g); //untuk mengambil karakter ANTARA karakter tertentu
    console.log(ambilData);
}


panggilRegexp("Bulan ke 1 sd ke 4");