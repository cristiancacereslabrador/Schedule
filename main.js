const names = document.querySelector('.name')
const number = document.querySelector('.number')
const email = document.querySelector('.email')
const btnAddTask = document.querySelector('.add-task')
const listTasks = document.querySelector('.list-tasks')

// btnAddTask.onClick(console.log(nombre))
const db = window.localStorage

btnAddTask.onclick = () => {
    let contact = {
            id: Math.random(1, 100),
            name: names.value,
            number: number.value,
            email: email.value,
        }
        // console.log(contact)
    saveContact(db, contact)
}
loadContacts(db, listTasks)