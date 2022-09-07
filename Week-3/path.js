const path = require('path')

//console.log(path)

console.log(path.sep)

//path.join

const filePath = path.join('/content/', 'subfolder', 'readMe.txt')
console.log(filePath)
console.log(path.extname(filePath))


const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)