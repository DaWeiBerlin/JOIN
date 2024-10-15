function renderUserSymbol(){
    console.log("Hello")
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
    document.getElementById("user").innerHTML = `<div>${firstLetter}${secondLetter}</div>`
    document.getElementById("UserSummary").innerHTML = userName;
    
}
let deadline = ""
const BASE_URL3 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
loadData()
async function loadData(){
    let response4 = await fetch(BASE_URL3)
    response4 = await response4.json()
    loadtasks(response4)
}

let todo = 0
let done = 0
let urgent = []
let tasksInBoard = 0
let tasksInProgress = 0
let awaitingFeedback = 0
function loadtasks(tasks){
    for(t in tasks){
        console.log(tasks[t]["prio"])
        if(tasks[t]["status"] == "todo"){
            todo += 1
        }else if(tasks[t]["status"] == "done"){
            done += 1
        }else if(tasks[t]["status"] == "tasksInProgress"){
            tasksInProgress += 1
        }else if(tasks[t]["status"] == "awaitingFeedback"){
            awaitingFeedback += 1
        }
        if(tasks[t]["prio"] == "urgent"){
            urgent.push(tasks[t])
        }
        tasksInBoard += 1
    }
    
    if(urgent != []){
        sortDeadline(urgent)
    } else {
        deadline = "-"
    }
}



function sortDeadline(urgent){
    urgent.sort((a, b) => new Date(a.duedate) - new Date(b.duedate));
    deadline = urgent[0]["duedate"]
    let deadlined = deadline.slice(8)
    let deadlinem = deadline.slice(5,7)
    let deadliney = deadline.slice(0,4)
    deadline = `${deadlined}.${deadlinem}.${deadliney}`

    console.log(deadline)
    renderSummary()
}


function renderSummary(){
    console.log(urgent)
    document.getElementById("ToDoNumber").innerHTML = todo
    document.getElementById("DoneNumber").innerHTML = done
    document.getElementById("UrgentNumber").innerHTML = urgent.length
    document.getElementById("Deadline").innerHTML = deadline
    document.getElementById("TasksInBoard").innerHTML = tasksInBoard
    document.getElementById("TasksInProgress").innerHTML = tasksInProgress
    document.getElementById("AwaitingFeedback").innerHTML = awaitingFeedback
}
    

