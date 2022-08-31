const fs = require('fs')

//synchronous
try{
    const data = fs.readFileSync('./IOS/index.txt', 'utf-8')
    console.log(data)
}catch (error){
    console.log(error)
}