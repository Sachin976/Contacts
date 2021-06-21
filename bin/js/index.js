const $contacts = document.querySelector('#contacts')

fetch('/contacts').then((response)=>{
    response.json().then((data)=>{
        const contacts = data.contacts
        if(!contacts[0]){
            return $contacts.insertAdjacentHTML('beforeend',"<p>No contacts to show</p>")
        }
        for(let i=0;i < contacts.length;i++){
            $contacts.insertAdjacentHTML('beforeend',`<a href='/contact?id=${contacts[i].id}'>${contacts[i].name}</a><br>`)
        }
    })
})
