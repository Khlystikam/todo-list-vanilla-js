let tasks  = [
    {id: 1, title: "Написать Unit тесты", completed: false},
    {id: 2, title: "Деплой на staging", completed: true},
    {id: 3, title: "Исправить баги", completed: false},
]

let nextId = tasks.length + 1;
const divMainTodo = document.querySelector(".todo-list-wrapper");

// функция обновления списка на фронте
function updateTaskArray(){
    divMainTodo.innerHTML = "";
    updateListTodo();
}

// функция удаления строки из массива по id и обновления списка
function deletTaremoveTask(tasks, id){
    tasks.splice(id, 1);
    updateTaskArray();
}

// функция изменения completed по id и обновления списка
function toggleTask(tasks, id){
    if (tasks[id].completed === true){
        tasks[id].completed = false;
    } else {
        tasks[id].completed = true;
    }

    updateTaskArray();
}

// фугкция вывода списка в консоле разработчика и обновления его при изминении
function listTasks(tasks) {
    console.clear();
    tasks.forEach(todo => {
        let completed = todo.completed === true ? "[X]" : "[ ]";

        console.log(completed + " " + todo.id + ". " + todo.title);
    })
}

// обновление списка
const updateListTodo = () => {
    idDelet = 0;

    tasks.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.className = "todo-item";

        const button = document.createElement("button");
        button.className = "todo-item__btn";
        button.textContent = "-";
        button.id = idDelet;
        button.onclick  = () => deletTaremoveTask(tasks, button.id);
        idDelet += 1;

        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "todo-item__input";
        input.checked = todo.completed;
        input.onclick  = () => toggleTask(tasks, button.id);

        const text = document.createElement("p");
        text.className = "todo-item__p";
        text.textContent = todo.title;


        todoItem.appendChild(input);
        todoItem.appendChild(text);
        todoItem.appendChild(button);
        divMainTodo.appendChild(todoItem);

        listTasks(tasks);
    });
}

// добавление новой записи
function addTaskFunc (){
    // проверка нет ли пустого input
    if (!title.trim()) return;

    let title = document.getElementById('todo-input__text').value;

    const addTask = (id, tasks, title) => {
        tasks.push({id: id, title: title, completed: false});
        updateTaskArray();
    }

    addTask(nextId++, tasks, title);
    document.getElementById('todo-input__text').value = "";
}

updateListTodo();