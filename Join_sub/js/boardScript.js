function addTask(){
    document.getElementById("modal").style.display = "block"
}

let todos = [];

const BASE_URL4 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
async function loadData(){
    let response5 = await fetch(BASE_URL4)
    response5 = await response5.json()
    let id = 0
    for(r in response5){
        response5[r]["id"] = id
        response5[r]["r"] = r
        todos.push(response5[r])
        id += 1
    }
    updateHTML(todos)
}


function logout(){
    localStorage.clear
    sessionStorage.clear    
}

function openArea(){
    if(document.getElementById("").style.display == "none"){
        document.getElementById("").style.display = "flex"
    } else{
        document.getElementById("").style.display = "none"
    }
}

function renderUserSymbol(){
    let userName = sessionStorage.getItem("name1") || localStorage.getItem("name1")
    let condition2 = true
    if(userName.length == 1){
        condition2 = true
        firstLetter = ""
    }
    if(condition2 == true){
        firstLetter = userName.charAt(0).toUpperCase()
        condition2 = false
    }
    userName = userName.trimEnd()
    let last = userName.lastIndexOf(" ")
    if(last == -1){
        secondLetter = ""
    }else{
        secondLetter = userName.charAt(last+1)
    } 
    if(userName.length == 0){
        firstLetter = ""
    }
    document.getElementById("user").innerHTML = "<div>${firstLetter}${secondLetter}</div>"
    
}

let currentDraggedElement;
let indexe = []
function updateHTML() {
    let ToDo = todos.filter(t => t['status'] == 'todo');

    document.getElementById('ToDo').innerHTML = '';
    document.getElementById('ToDo').innerHTML = '<div id="toDo"><div>To Do</div><div style="cursor: pointer;" onclick=`addTasks(ToDo)`><img src="assets/img/plus.png"></div></div>'
    for (let index = 0; index < ToDo.length; index++) {
        const element = ToDo[index];
        document.getElementById('ToDo').innerHTML += generateTodoHTML(element);
        indexe.push(index)
    }

    if(ToDo.length == 0){
        document.getElementById('ToDo').innerHTML += /*html*/`<div class="nothingInside">Nothing To Do</div>`
    }

    let InProgress = todos.filter(t => t['status'] == 'InProgress');

    document.getElementById('InProgress').innerHTML = '';
    document.getElementById('InProgress').innerHTML = "<div id='inProgress'><div>In Progress</div><div style='cursor: pointer;' onclick=`addTasks(InProgress)`><img src='assets/img/plus.png'></div></div>"

    for (let index = 0; index < InProgress.length; index++) {
        const element = InProgress[index];
        document.getElementById('InProgress').innerHTML += generateTodoHTML(element);
    }
    if(InProgress.length == 0){
        document.getElementById('InProgress').innerHTML += /*html*/`<div class="nothingInside">Nothing in Progress</div>`
    }

    let AwaitFeedback = todos.filter(t => t['status'] == 'AwaitFeedback');

    document.getElementById('AwaitFeedback').innerHTML = '';
    document.getElementById('AwaitFeedback').innerHTML = "<div id='awaitFeedback'><div>Await Feedback</div><div style='cursor: pointer;' onclick=`addTasks(AwaitFeedback)`><img src='assets/img/plus.png'></div></div>"

    for (let index = 0; index < AwaitFeedback.length; index++) {
        const element = AwaitFeedback[index];
        document.getElementById('AwaitFeedback').innerHTML += generateTodoHTML(element);
    }
    if(AwaitFeedback.length == 0){
        document.getElementById('AwaitFeedback').innerHTML += /*html*/`<div class="nothingInside">No Feedback</div>`
    }
    

    let Done = todos.filter(t => t['status'] == 'Done');

    document.getElementById('Done').innerHTML = '';
    document.getElementById('Done').innerHTML = "<div id='done'><div>Done</div><div style='cursor: pointer;' onclick=`addTasks(Done)`><img src='assets/img/plus.png'></div></div>"

    for (let index = 0; index < Done.length; index++) {
        const element = Done[index];
        document.getElementById('Done').innerHTML += generateTodoHTML(element);
    }
    if(Done.length == 0){
        document.getElementById('Done').innerHTML += /*html*/`<div class="nothingInside">Nothing Finished</div>`
    }
}


function startDragging(id) {
    currentDraggedElement = id;
}

function generateTodoHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['title']}</div>`;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category2) {
    todos[currentDraggedElement]['status'] = category2;
    let assigned = todos[currentDraggedElement]['assigned']
    let category1 = todos[currentDraggedElement]['category']
    let description = todos[currentDraggedElement]['description']
    let duedate = todos[currentDraggedElement]['duedate']
    let id = todos[currentDraggedElement]['id']
    let prio = todos[currentDraggedElement]['prio']
    let r = todos[currentDraggedElement]['r']
    let title = todos[currentDraggedElement]['title']
    updateHTML();
    saveBoard(todos[currentDraggedElement]['r'],category2,assigned,category1,description,duedate,id,prio,r,title);
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

function saveBoard(r,category2,assigned,category,description,duedate,id,prio,r,title){

    let contactKey = r;
    let url = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks/${contactKey}.json`;
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            "assigned":assigned,
            "category":category,
            "description":description,
            "duedate":duedate,
            "id":id,
            "prio":prio,
            "r":r,
            "status":category2,
            "title":title
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Data successfully updated:", data);
    })
    .catch(error => {
        console.error("Error updating data:", error);
    });
}
