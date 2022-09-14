const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.status(200).send('Homepage')
})

app.get('/About', (req, res) =>{
    res.status(200).send('About')
})
app.get('/Contact', (req, res) =>{
    res.status(200).send('Contact')
})

app.get('*', (req, res) =>{
    res.status(404).send('Page not found')
})

app.listen(5000, ()=>{
    console.log('Server is up and running')
})