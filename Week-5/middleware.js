
const sayHi =(req, res, next)=>{
const name = `try`
console.log(`Hi ${name}`)

next()
}

//errror handling middleware

const handleError =(err, req, res, next)=>{
    console.log(err)

    next()
}

module.exports = {sayHi, handleError}