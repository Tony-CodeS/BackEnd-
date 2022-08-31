const fs = require('fs')

fs.rm('./Linux', {recursive:true}, (error) =>{
    if (error){
        console.log(error)
    }
    console.log('done')
})