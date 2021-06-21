const fs = require('fs')

const loadContacts = ()=>{
    const buffer = fs.readFileSync('./src/utils/contacts.json')
    const jsonData = buffer.toString()
    if(!jsonData){
        return []
    }
    const data = JSON.parse(jsonData)
    return data
}
const saveContacts = (data)=>{
    jsonData = JSON.stringify(data)
    fs.writeFileSync('./src/utils/contacts.json',jsonData)
}

module.exports = {
    loadContacts,
    saveContacts
}