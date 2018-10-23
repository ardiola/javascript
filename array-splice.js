function panggilSplice(){
    var data = ['jakarta', 'bandung', 'cirebon', 'padang']
    console.log(data[0])

    data.splice(0,0,'tegal')
    return data
}


console.log(panggilSplice())