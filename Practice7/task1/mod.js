let a = 5

function some_exporting_function(){
    console.log('some exporting function')
}

exports.number = a
exports.func = some_exporting_function
