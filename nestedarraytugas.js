function panggilNestedArray(value){
    // tulis jawabanmu disini

    // value.map(function (item, index, array) {
    //     if (index % 3 === 0) {
    //         var coba = [];
    //         coba.splice(0,0,array[0][0])
    //         coba.splice(1,0,array[1][0])
    //         coba.splice(2,0,array[2][0])
    //         var coba1 = [];
    //         coba1.splice(0,0,array[0][1])
    //         coba1.splice(1,0,array[1][1])
    //         coba1.splice(2,0,array[2][1])
    //         var coba2 = [];
    //         coba2.splice(0,0,array[0][2])
    //         coba2.splice(1,0,array[1][2])
    //         coba2.splice(2,0,array[2][2])
    //         var coba3 = [];
    //         coba3.splice(0,0,array[0][3])
    //         coba3.splice(1,0,array[1][3])
    //         coba3.splice(2,0,array[2][3])
           
    //         var result = [coba,coba1,coba2,coba3];

    //         console.log(result);
    //     }
    // })

    var arr = [];
    var arr1 = []
    var arr2 = []
    var arr3 = []
    var arr4 = []
    var arr5 = []
    var arr6 = []

    var data1 = '';

    var arr = value.filter((item, index, array) => {
        
       
        if (index === 0 ) {
            arr1 = array[0]
            for (var i = 0; i < arr1.length; i++) {
                arr4 += arr1[i]
                //console.log(arr4)
            }

            data1 = arr4;

            console.log(data1);
           
        }
        else if (index === 1) {
            arr2 = array[1]
            for (var i = 0; i < arr2.length; i++) {
                arr5 = arr2[i]
                // console.log(arr5)
            }
            //console.log(arr2)
        }
        else {
            arr3 = array[2]
            for (var i = 0; i < arr3.length; i++) {
                arr6 = arr3[i]
                //console.log(arr6)
            }
            //console.log(arr3)
        }
        
        
        // console.log(data1)
        // var arr4 = arr1
        // console.log(arr4)
        

        return arr ;
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