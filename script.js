function addTodo() {
    let todoInput = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList");

    if(todoInput.value.trim() !== "") {

        let listItem = document.createElement("li");
        listItem.draggable = true;
        listItem.className = "todo-item";

        let div = document.createElement("div");
        div.textContent = todoInput.value;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";

        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

        editButton.addEventListener("click", () => {
            if (editButton.textContent === "Edit") {
                    div.contentEditable = true;
                    editButton.textContent = "Save";
                }
            else if (editButton.textContent === "Save") {
                    div.contentEditable = false;
                    editButton.textContent = "Edit";
                }
        })
        
        // if (editButton.textContent === "Edit") {
        //     editButton.addEventListener("click", () => {
        //         div.contentEditable = true;
        //         editButton.textContent = "Save";
        //     });
        // }

        // else if (editButton.textContent === "Save") {
        //     editButton.addEventListener("click", () => {
        //         editButton.textContent = "Edit";
        //         div.contentEditable = false;
        //     });
        // }

        
        // editButton.addEventListener("click", (e) => {
        //     const li = listItem.parentNode;
        //     if(e.target.textContent === "Edit") {
        //         const span = li.firstElementChild;
        //         const input = document.createElement("input");
        //         input.type = "text";
        //         input.value = span.textContent;
        //         li.insertBefore(input, span);
        //         li.removeChild(span);
        //         editButton.textContent = "Save";
        //     }
        //     else if (e.target.textContent === "Save") {
        //         const input = li.firstElementChild;
        //         const span = document.createElement("span");
        //         span.textContent = input.value;
        //         li.insertBefore(span, input);
        //         li.removeChild(input);
        //         button.textContent = "Edit";
        //     }
        //     });


        listItem.append(div);
        listItem.append(editButton, deleteButton);
        todoList.appendChild(listItem);

        listItem.addEventListener("dragstart", () => {
            listItem.classList.add("dragging");
        });

        listItem.addEventListener("dragend", () => {
            listItem.classList.remove("dragging");
        });

        listItem.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        listItem.addEventListener("dragenter", (e) => {
            e.preventDefault();
            let draggingItem = document.querySelector(".dragging");

            if(draggingItem !== listItem) {
                todoList.insertBefore(draggingItem, listItem);
        }
    });
        todoInput.value = "";
        }

    else {
        alert("Write some text");
    }
}

document.getElementById("addButton").addEventListener("click", addTodo);

document.getElementById("deleteAllButton").addEventListener("click", () => {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
});

document.getElementById("todoInput").addEventListener("keypress", (event)=> {
    if(event.key === "Enter") {
        addTodo();
    }
});