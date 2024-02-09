let todoListe =[]
if(localStorage.getItem("todos") == null){
     todoListe =[]
}
else {
     todoListe = localStorage.getItem("todos").split(",");
}
console.log(todoListe)
const toDoListElement = document.getElementById("toDoList")

function todoHinzufuegen(todo) {
    const listElement = document.createElement("li");
    const toDoTextElement = document.createTextNode(todo)
    console.log(todoListe)
    listElement.appendChild(toDoTextElement);
    toDoListElement.appendChild(listElement);

}

for (let index = 0; index < todoListe.length; index = index + 1) {
    const todo = todoListe[index]
    todoHinzufuegen(todo)
}

document.getElementById("todo-hinzufuegen")
    .addEventListener("click", () => {
        const todo = document.getElementById("add-todo").value

        if (todo == "") {
            alert("Keine todo vorhanden")

        }
        else {
            todoHinzufuegen(todo)
            todoListe.push(todo);
            localStorage.setItem("todos", todoListe);
            document.getElementById("add-todo").value = ""
        }
    })
document.getElementById("add-todo")
    .addEventListener("keydown", (ev) => {
        const todo = document.getElementById("add-todo").value

        if (ev.key == "Enter") {
            if (todo == "") {
                alert("Keine todo vorhanden")
            }
            else {
                todoHinzufuegen(todo)
                todoListe.push(todo);
                localStorage.setItem("todos", todoListe);
                document.getElementById("add-todo").value = ""
            }
        }
    })




toDoListElement.addEventListener("click", (ev) => {
    const listElement = ev.target;
    const todo = listElement.textContent;
    todoListe = todoListe.filter((currentToDo) => currentToDo !== todo);
    listElement.remove();
    console.log(todo);
    localStorage.setItem("todos", todoListe);
})
