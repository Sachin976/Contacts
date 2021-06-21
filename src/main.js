require('./db/mongoose')
const express = require('express')
const path = require('path')
const hbs = require("hbs")
const router = require('../controller/router')
const port =3000

const publicDirectoryPath = path.join(__dirname,"../bin") 
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
const app =express()

app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
app.use(router)

app.listen(port,()=>{
    console.log("Server is up on port: " + port)
})

