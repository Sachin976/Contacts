const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    first:{
        type:String,
        required:true,
        trim:true
    },
    last:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true
    },
    phonetic_surname:{
        type:String,
        trim:true
    },
    phonetic_middle_name:{
        type:String,
        trim:true
    },
    phonetic_first_name:{
        type:String,
        trim:true
    },
    nickname:{
        type:String,
        trim:true
    },
    fileas:{
        type:String,
        trim:true
    },
    company:{
        type:String,
        trim:true
    },
    department:{
        type:String,
        trim:true
    },
    title:{
        type:String,
        trim:true
    }
})
const Contact = mongoose.model("Contact",contactSchema)

module.exports = Contact

// const user = new User({
//     first:"sachin",
//     last:"sharma",
//     phone:"7017284451",
//     company:"kellton tech",
//     department:"trainee"

// }) 
// console.log(user)