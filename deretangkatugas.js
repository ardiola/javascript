function deretAngka(angka) {

    //var angka = 10;
    var newangka = 0;
    var hasilDeretAngka = ''

    for (var i = 1; i <= angka; i++) {
        //const element = array[i];
        if (i % 3 === 0 && i % 5 === 0) {
                hasilDeretAngka += 'NIOMIC '
            }
        else if (i % 3 === 0) {
            hasilDeretAngka += 'NIO '
            }
        else if (i % 5 === 0) {
            hasilDeretAngka += 'MIC '
            }
        else{
            hasilDeretAngka += i+' '
        }

    }

    return hasilDeretAngka;
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))

// deretAngka()