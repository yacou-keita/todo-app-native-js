import { fruitList } from "./data.js"



const body = document.querySelector("body")
const ul = document.createElement("ul")

const form = document.createElement("form")
const input = document.createElement("input")
input.type = "text"
input.placeholder = "ajouter une tâche"
const btn = document.createElement("button")
btn.type = "submit"
btn.append("Ajouter")
const small = document.createElement("small")
small.className = 'error-message'




form.appendChild(input)
form.appendChild(btn)
body.appendChild(form)
body.appendChild(small)
body.appendChild(ul)

form.className = 'form'
input.className = "input"
btn.className = "btn"
ul.className = "item-box"

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const tache = input.value
    if (!tache) {
        errorMessage()
        return
    }
    clearErrorMessage()
    fruitList.push(tache)
    createListItem(tache)
    input.value = ""
})

fruitList.forEach(fruit => createListItem(fruit))

function createListItem(fruit) {
    const li = document.createElement("li")
    const div = document.createElement("div")
    const liBtn = document.createElement("button")
    liBtn.type = "button"
    const LiInput = document.createElement("input")
    LiInput.type = "checkbox"
    liBtn.append("X")
    liBtn.className = "item-btn"
    li.className = "item"
    div.appendChild(LiInput)
    div.append(fruit)
    div.className = "item-left"
    li.appendChild(div)
    li.appendChild(liBtn)
    ul.appendChild(li)
}

function errorMessage() {
    small.append("Veuillez saissir une tâche.")
}

function clearErrorMessage() {
    small.innerHTML =""
}

