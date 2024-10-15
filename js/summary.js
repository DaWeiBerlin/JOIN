let userName
function renderUserSymbol(){
    userName = sessionStorage.getItem("name1") || localStorage.getItem("name1")
    console.log(userName)
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
async function loadDataSum(){
    let response4 = await fetch(BASE_URL3)
    response4 = await response4.json()
    loadtasks(response4)
    console.log("Hello")
}

let todo = 0
let done = 0
let urgent = []
let tasksInBoard = 0
let tasksInProgress = 0
let awaitingFeedback = 0
function loadtasks(tasks){
    for(t in tasks){
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
    if(!urgent){
        deadline = "-"
        renderSummary()
    }else if(urgent.length > 0){

        sortDeadline(urgent)
    }
}

document.addEventListener('DOMContentLoaded', function() {
})



function logout() {
    let key = sessionStorage.getItem("r") || localStorage.getItem("r")
    let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts/${key}.json`;
    fetch(accountUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            "Name": response7[key]["Name"],
            "Email": response7[key]["Email"],
            "Password": response7[key]["Password"],
            "Color": response7[key]["Color"],
            "remember": "no",
            "ip": response7[key]["ip"]
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Logout successful:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    localStorage.clear();
    sessionStorage.clear();
    setTimeout(function(){
        window.location.href = "index.html"
    },500)
}

function sortDeadline(urgent){
    urgent.sort((a, b) => new Date(a.duedate) - new Date(b.duedate));
    console.log(urgent)
    deadline = urgent[0]["duedate"]
    let deadlined = deadline.slice(8)
    let deadlinem = deadline.slice(5,7)
    let deadliney = deadline.slice(0,4)
    deadline = `${deadlined}.${deadlinem}.${deadliney}`
    renderSummary()
}


function renderSummary(){
    document.getElementById("ToDoNumber").innerHTML = todo
    document.getElementById("DoneNumber").innerHTML = done
    document.getElementById("UrgentNumber").innerHTML = urgent.length
    document.getElementById("Deadline").innerHTML = deadline
    document.getElementById("TasksInBoard").innerHTML = tasksInBoard
    document.getElementById("TasksInProgress").innerHTML = tasksInProgress
    document.getElementById("AwaitingFeedback").innerHTML = awaitingFeedback
}

let responses1;
let today;
async function redirect(){
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    responses1 = await fetch("https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts.json")
    responses1 = await responses1.json()
    let name3 = sessionStorage.getItem("name1") || localStorage.getItem("name1")
    for(r in responses1){
        if(responses1[r]["Name"] == name3){
            key = r
        }
    }
    resp = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=06453fddbb2a4cf4ac436c51f9f836b4')
    resp = await resp.json()
    ipad = resp["ip"]
    login3()
}

let response7;
let accounts = []
const BASE_URL6 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts.json"
async function loadAccounts3(){
    response7 = await fetch(BASE_URL6)
    response7 = await response7.json()
    for(r in response7){
        accounts.push(response7[r])
    }
}

async function login3(){
    for(r in responses1){
        if(responses1[r]["ip"] == ipad && responses1[r]["remember"] == "yes") {
            let name = responses1[r]["Name"]
            let color = responses1[r]["Color"]
            let email = responses1[r]["Email"]
            localStorage.setItem("name1", name)
            localStorage.setItem("email", email)
            localStorage.setItem("color", color)
            sessionStorage.setItem("name1", name)
            sessionStorage.setItem("email", email)
            sessionStorage.setItem("color", color)
        }else {
            let name = localStorage.getItem["Name"]
            let name2 = sessionStorage.getItem["Name"]
            let condi = 0
            if(sessionStorage.length == 0){
                window.location.href = "index.html"
                condi = 1
            }else if(name != undefined && condi == 0){
                continue
            }else if(name2 != undefined && condi == 0){
                continue
            }
        }
    renderUserSymbol()
    }
}
    

