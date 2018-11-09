function panggilPerulangan() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    //perulangan for
    // for (var i = 0; i < dataKota.length; i++) {
    //     console.log(dataKota[i]);
    //     console.log(i);
    //     console.log(dataKota);
    // };

    //perulangan foreach
    // dataKota.forEach(function (item, index, array) {
    //     console.log(item);
    //     console.log(index);
    //     console.log(array);
    // });

    //perulangan map
    dataKota.map(function (item, index, array) {
        console.log(item);
        console.log(index);
        console.log(array);
    })


}


panggilPerulangan();