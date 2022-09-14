const express = require('express')
const people = require('./data')
const data = require("./data")


const app = express()
app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).send('Homepage')
})

//Crud
app.get('/data', (req, res) =>{
    res.status(200).send(data)
})// read operation

app.post('/data', ( req, res)=>{
    res.status(200).send("data")
    const person = req.body
    data.push(person)
    res.status(201).send(person)
})//create operation


app.get('/data/:personId', (req, res)=>{
    const id = req.params.personId
    const onePerson = data.find((person) => person.id === id )
    res.status(200).send(onePerson)
}) // req.params and read operation

app.put('/data/:personId', (req, res) =>{
    const payLoad = req.body
    const id = req.params.personId
    const onePerson = data.find((person) => person.id === id )
    onePerson.name = payLoad.name
    res.status(200).send(onePerson)
})// update Operation

app.delete('/data/:personId', (req, res) =>{
    const id = req.params.personId
    const newPeople= data.filter((person) => person.id !== Number(id) )
  
    res.status(200).send(newPeople)
})// update Operation


app.listen(5000, ()=>{
    console.log('Server is up and running')
})