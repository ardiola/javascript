function panggilFilterParameters(value) {
    var arr = [
        {negara : 'indonesia', benua : 'asia'},
        {negara : 'jerman', benua : 'eropa'},
        {negara : 'spanyol', benua : 'eropa'},
        {negara : 'korea', benua : 'asia'},
        {negara : 'portugal', benua : 'eropa'},
        {negara : 'amerika serikat', benua : 'amerika'},
    ];

    var benuaEropa = arr.filter(function (item) {
        //do something
        return item.benua == value
    })

    console.log(benuaEropa)
}


panggilFilterParameters('eropa') //asia