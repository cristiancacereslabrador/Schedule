const saveContact = (db, contact) => {
    db.setItem(contact.id, JSON.stringify(contact))
    //window.location.href = '/'

}
const loadContacts = (db, parentNode) => {
    let loadKeys = Object.keys(db)
        // console.log(loadKeys)
    for (key of loadKeys) {
        // console.log(key)
        let contact = JSON.parse(db.getItem(key))
            //     console.log(contact.numero)
        createContact(parentNode, contact, db)
    }
}
const createContact = (parentNode, contact, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let emailContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contact.nombre
    numeroContacto.innerHTML = contact.numero
    emailContacto.innerHTML = contact.email
    iconoBorrar.innerHTML = 'delete'

    divContacto.classList.add('task')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () => {
        db.removeItem(contact.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(emailContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}
