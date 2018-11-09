function panggilFilter() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];

    var numberdata = [1,3,4,6,9];

    //memfilter yg bilangan ganjil saja
    var arrganjil = numberdata.filter(function (el) {
        return el % 2 !== 0
    })

    // dataKota.filter(function (item, index, array) {
    //     console.log(item)
    //     console.log(index)
    //     console.log(array)
    //     // console.log(tes)
    // })

    console.log(arrganjil)

}

panggilFilter()