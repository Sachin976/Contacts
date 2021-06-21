const addForm = document.querySelector("#add-contact")
const Firstname = document.querySelector("#First-name")
const Surname = document.querySelector("#Surname")
const Phone = document.querySelector("#Phone")
const Phoneticsurname = document.querySelector("#Phonetic-surname")
const Phoneticmiddlename = document.querySelector("#Phonetic-middle-name")
const Phoneticfirstname = document.querySelector("#Phonetic-first-name")
const Nickname = document.querySelector("#Nickname")
const Fileas = document.querySelector("#File-as")
const Company = document.querySelector("#Company")
const Department = document.querySelector("#Department")
const Title = document.querySelector("#Title")
const file = document.querySelector('#file')

addForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const url =`add?first=${Firstname.value}&last=${Surname.value}&phone=${Phone.value}&phonetic_surname=${Phoneticsurname.value}&phonetic_middle_name=${Phoneticmiddlename.value}&phonetic_first_name=${Phoneticfirstname.value}&nickname=${Nickname.value}&company=${Company.value}&department=${Department.value}&title=${Title.value}&fileas=${Fileas.value}`
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                alert(data.error)
                return location.href = "/"
            }
            alert("Contact saved successfully")
            location.href = "/"
        })
    })
})