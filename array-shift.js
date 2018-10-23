function panggilShift() {
    var kota = ['jakarta','bandung','malang','surabaya','makasar']

    console.log(kota)
    console.log("==================")

    // kota = kota.shift() //untuk mengilangkan data pertama pada array
    // console.log("==================")

    kota.shift()

    return kota
}

console.log(panggilShift())