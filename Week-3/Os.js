// Operating system module 
// gives information about the operating system like memory e.t.c
// core modules are modules that come with node, they are inbuilt or embedded with Node

const os = require ('os')
//  console.log(os)


const userInfo = os.userInfo()
console.log(userInfo)

// const uptime = `your system uptime is ${os.uptime()} seconds`
// console.log(uptime)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS)

