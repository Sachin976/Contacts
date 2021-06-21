const express = require('express')
const Contact = require("../models/contact")
const {loadContacts,saveContacts} = require('../src/utils/contacts')
const router = express.Router() 

router.get('', async (req,res)=>{
    res.render('index',{
        title: "Contacts"
    })
})

router.get('/addContact',async(req,res)=>{
    res.render("AddContact",{
        title: "Add contact"
    })
})

router.get('/contact',async (req,res)=>{
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
router.get('/add',async(req,res)=>{
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


router.get('/contacts',(req,res)=>{
    const contacts = loadContacts()
    res.send({contacts})
})

module.exports = router

