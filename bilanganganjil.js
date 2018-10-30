function panggilBilanganGanjil(){
    var bilanganGanjil = []

    for (i = 0; i < 30; i++) {
       if (i % 2 !== 0) {
           bilanganGanjil.push(i)
       }
    }

    return bilanganGanjil
}

console.log(panggilBilanganGanjil())