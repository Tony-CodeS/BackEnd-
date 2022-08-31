const fs = require('fs')
const data = "I am an Operating sytem"
fs.writeFileSync('./IOS/index.txt', data, (error) =>{
    if (error){
        console.log(error)
    }
    console.log('done')
})

