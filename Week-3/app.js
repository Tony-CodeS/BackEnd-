
const http = require ('http')
const fs = require('fs')

const myServer = http.createServer((req, res) =>{
const data = fs.readFileSync('./assets/index.txt', 'utf-8')
res.end(data)
})

myServer.listen(4000, ()=>{
    console.log('server is launched')
})