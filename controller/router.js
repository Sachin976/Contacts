const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const hbs = require("hbs")
const fs = require('fs')
const Contact = require("../models/contact")
const {loadContacts,saveContacts} = require('./utils/contacts')
const { response } = require('express')


const publicDirectoryPath = path.join(__dirname,"../bin") 
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
const port =3000

const connectionURL = "mongodb+srv://Sachin97659:<password>@cluster0.edxeh.mongodb.net/Contacts?retryWrites=true&w=majority"
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
const app =express()
app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', async (req,res)=>{
    res.render('index',{
        title: "Contacts"
    })
})
app.get('/addContact',async(req,res)=>{
    res.render("AddContact",{
        title: "Add contact"
    })
})

app.get('/contact',async (req,res)=>{
    const contact = await Contact.findById(req.query.id)
    let name = contact.first + " " + contact.last
    res.render('Info',{
        title: name,
        phone: contact.phone,
        phonetic_first_name : contact.phonetic_first_name,
        phonetic_middle_name : contact.phonetic_middle_name,
        phonetic_surname : contact.phonetic_surname,
        nickname : contact.nickname,
        company : contact.company,
        department : contact.department,
        Title : contact.title,
        fileas : contact.fileas
    })

})
app.get('/add',async(req,res)=>{
    let users = loadContacts()
    const contact = await new Contact(req.query)
    const name = req.query.first + " " + req.query.last
    try{
        await contact.save()
        const id = contact._id.toString()
        users.push({name,id})
        saveContacts(users)
        res.send({contact})
    }catch(error){
        console.log(error)
        res.send({error})
    }
})


app.get('/contacts',(req,res)=>{
    const contacts = loadContacts()
    res.send({contacts})
})
app.listen(port,()=>{
    console.log("Server is up on port: " + port)
})

