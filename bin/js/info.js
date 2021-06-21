// const {id} = Qs.parse(location.search,{ignoreQueryPrefix:true})
// const text1 = document.querySelector('#text1')
// const text2 = document.querySelector('#text2')
// const text3 = document.querySelector('#text3')
// const text4 = document.querySelector('#text4')
// const text5 = document.querySelector('#text5')
// const text6 = document.querySelector('#text6')
// const text7 = document.querySelector('#text7')
// const text8 = document.querySelector('#text8')
// const text9 = document.querySelector('#text9')
// const text10 = document.querySelector('#text10')
// const text11 = document.querySelector('#text11')

// fetch(`/contactInfo?id=${id}`).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             alert(data.error)
//             return location.href = "/"
//         }
//         text1.textContent = "Name : " + data.contact.first + " " + data.contact.last
//         text2.textContent = "Phone : " + data.contact.phone 
//         text3.textContent = "Phonetic first name : " + data.contact.phonetic_first_name
//         text4.textContent = "Phonetic middle name : " + data.contact.phonetic_middle_name
//         text5.textContent = "Phonetic surname : " + data.contact.phonetic_surname
//         text6.textContent = "Nickname : " + data.contact.nickname
//         text7.textContent = "Company : " + data.contact.company
//         text8.textContent = "Department : " + data.contact.department
//         text9.textContent = "Title : " + data.contact.title
//         text10.textContent = "File as : " + data.contact.fileas
//     })
// })