const fs = require('fs')
//check if folder already exist
//create a new folder if that folder does not already exist

try{
    if(!fs.existsSync(`IOS`)){
    fs.mkdirSync(`IOS`)
    console.log('sucessful')
    }
} catch (error) {
   console.log(error) 
}