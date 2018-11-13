function panggilNestedArray(value){
    // tulis jawabanmu disini

    value.map(function (item, index, array) {
        if (index % 3 === 0) {
            var coba = [];
            coba.splice(0,0,array[0][0])
            coba.splice(1,0,array[1][0])
            coba.splice(2,0,array[2][0])
            var coba1 = [];
            coba1.splice(0,0,array[0][1])
            coba1.splice(1,0,array[1][1])
            coba1.splice(2,0,array[2][1])
            var coba2 = [];
            coba2.splice(0,0,array[0][2])
            coba2.splice(1,0,array[1][2])
            coba2.splice(2,0,array[2][2])
            var coba3 = [];
            coba3.splice(0,0,array[0][3])
            coba3.splice(1,0,array[1][3])
            coba3.splice(2,0,array[2][3])
           
            var result = [coba,coba1,coba2,coba3];

            console.log(result);
        }
    })

        //console.log(arr);

   }
   
   var nestedArray = [
      [1,2,3,4],
      ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
      ['Facebook', 'Tesla', 'Microsoft', 'Apple']
   ]
   
   panggilNestedArray(nestedArray)

// console.log(panggilNestedArray(nestedArray))