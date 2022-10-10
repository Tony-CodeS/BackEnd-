const http = require('http')

//console.log(http)

const server = http.createServer((req, res)=>{
res.write('home')
res.end()
//HomePage
//About US
// Contact US
//Error page
//    console.log(req.url)
//     if (req.url === '/'){
//         res.end('Homepage')
//         } else if(req.url === "/about"){
//             res.end('About US page')
//         } else if(req.url === "/contact"){
//             res.end('Your contact page')
//         }
//         else{
//             res.end('404 page not found')
//         }
 
})
server.listen(5000, ()=>{
    console.log('server is running')
})



