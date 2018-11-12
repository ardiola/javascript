function balikKataTugas(kata) {

    var newdata = '';

    for (var i = kata.length; i--;) {
        newdata += kata[i];
    }

    return newdata
}



console.log(balikKataTugas("Niomic!"))     
console.log(balikKataTugas("JavaScript"))  
console.log(balikKataTugas("alohahola"))   
console.log(balikKataTugas("Jawa_Barat"))  
// balikKataTugas()