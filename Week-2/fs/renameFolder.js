const fs = require('fs')

fs.rename('./IOS', './Linux', (error) =>{
    if (error){
        console.log(error)
    }
    console.log('done')
})

