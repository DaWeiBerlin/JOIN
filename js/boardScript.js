let key;
let modal;
let ModalTask;

function saveModal(){
    modal = document.getElementById("modal").innerHTML
    modal = document.getElementById("ModalTask").innerHTML

}

function addTask(){
    document.getElementById("modal").style.display = "block"
}

function checkWindowWidth2() {
    if (window.innerWidth < 1300) {
        document.getElementById("AddTaskButton").innerHTML = "<div style='position: relative;bottom: 30px;right: 19px;'><img src='assets/img/plusblue.png'></div>"
        document.getElementById("Kanban2").style.display = "none"
        document.getElementById("Logo").style.display = "block"

    } else {
        document.getElementById("AddTaskButton").innerHTML = "Add Task +"
        document.getElementById("Kanban2").style.display = "flex"
        document.getElementById("Logo").style.display = "none"
    }
}

// Add an event listener for window resize
window.addEventListener('resize', checkWindowWidth2);



function assign() {
    assignvar == assigned.length
    if(assignvar == 0){
        document.getElementById("assigned3").innerHTML = "<div class='select'>Select Contacts to Assign</div>"
    }
    let contactContainer = document.getElementById("contactse");
    contactContainer.innerHTML = "";
    if (contactContainer.style.display === "none") {
        contactContainer.style.display = "flex";
    } else {
        contactContainer.style.display = "none";
        return;
    }
    let array = [];
    for (let r in response3) {
        let names = response3[r]["Name"];
        let color = response3[r]["Color"];
        array.push({ "name": names, "color": color });
    }
    sortArrayByKey(array, "name");
    for (let i = 0; i < array.length; i++) {
        let userName = array[i]["name"];
        let firstLetter = userName.charAt(0).toUpperCase();
        let secondLetter = "";
        
        let last = userName.lastIndexOf(" ");
        if (last !== -1) {
            secondLetter = userName.charAt(last + 1).toUpperCase();
        }
        contactContainer.innerHTML += `
            <div id="div${i}" style="display: flex; align-items: center; height: 40px; width: 100%; padding: 10px 10px; position: relative;">
                <div style="background-color:${array[i]["color"]}; width: 28px; height: 22px; filter: blur(0.1px); border-radius: 50%; margin-right: 10px; color: white; text-align: center; padding-top: 5px;">
                    ${firstLetter}${secondLetter}
                </div>
                <div>${userName}</div>
            </div>`;
        if (!assigned.includes(userName)) {
            document.getElementById(`div${i}`).innerHTML += `
                <div id="d${i}" style="position: absolute; right: 30px;" onclick="assign2('${userName}', 'd${i}')">
                    <img style="width: 18px;" src="assets/img/add.png" alt="">
                </div>`;
        }
    }
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

let todos = [];

const BASE_URL4 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
async function loadData2(){
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

function closeTask(){
    document.getElementById("ModalTask").style.display = "none"
    document.getElementById("ModalTask").innerHTML = `
    <div id="openTask">
        <div id="closeModalTask" onclick="closeTask()" style="cursor: pointer;"><img src="assets/img/close.png" alt="close" style="width: 20px;height: 20px;"></div>
        <div id="modalCategory"></div>
        <div id="modalTitle"></div>
        <div id="modalDescription"></div>
        <div id="modalDuedate"></div>
        <div id="modalPrio"></div>
        <div id="modalAssigned"></div>
        <div id="modalSubtasks"></div>
        <div id="modalButtons"></div>
    </div>
    `;
    document.getElementById("modal").innerHTML = `<div id="contentArea4">
            <div id="header2">Add Task</div>
            <div id="contentArea4Sub">
                <div id="leftSide">
                    <div id="leftSideSub">
                        <label for="Title">Title<sup style="color: #ff8090;">*</sup></label>
                        <textarea maxlength="80" name="Title" id="title2" placeholder="Enter a title"></textarea>
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <label for="Description">Description</label>
                        <textarea maxlength="2000" name="Description" id="description3" placeholder="Enter a Description"></textarea></div>
                    <div style="display: flex;flex-direction: column;font-size: 16px;">
                        <label for="">Assigned to</label>
                        <div onclick="assign()" id="assigned3" value="Select contacts to assign" type="search"><div class="select">Select Contacts to Assign</div></div>
                    <div id="assignButton2" onclick="assign()"><img src="assets/img/category_menu.png" alt=""></div>
                    <div id="contactse" style="display: none;"></div>
                </div>
            </div>
                <div id="verticalLine"></div>
                <div id="rightSide">
                    <div style="display: flex;flex-direction: column;">
                        <label for="DueDate" style="margin-bottom: 5px;">Due Date <sup style="color: #ff8090;">*</sup></label>
                        <input id="duedate" value="2024-08-24" type="date" style="border-radius: 5px;border: 1px solid grey;padding: 8px 6px;width: calc(100% - 50px);height: 24px;width: calc(100% - 13px);">
                    </div>
                    <div style="display: flex;flex-direction: column;margin-top: 17px;width: 100%;">
                        <label for="Prio" style="margin-bottom: 5px;">Prio</label>
                        <div id="Prio" style="display: flex;width: calc(100% - 50px);width: calc(100% + 0px);">
                            <div onclick="addPrio('urgent')" id="Urgente" style="width: calc(30%);margin-right: 5%;">
                                <button id="Urgenteb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 100%;background-color: white;border-radius: 5px;border: 1px solid grey;font-size: 17px;cursor: pointer;">
                                    <div>Urgent</div>
                                    <div>
                                        <img id="urgent" src="assets/img/urgent.png" alt="Urgent Prority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;">
                                    </div>
                                </button>
                            </div>
                            <div onclick="addPrio('medium')" id="Mediume" style="width: calc(30%);margin-right: 5%;">
                                <button id="Mediumeb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                    <div>Medium</div>
                                    <div><img id="medium" src="assets/img/medium.png" alt="Medium Priority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;"></div></button></div>
                            <div onclick="addPrio('low')" id="Lowe" style="width: calc(30%);">
                                <button id="Loweb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                    <div>Low</div>
                                    <div><img id="low" src="assets/img/low.png" alt="Low Priority Button" style="width: 30px;margin-left: 5px;position: relative;top: 2px;"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 17px;display: flex;flex-direction: column;/* position: relative; */top: 11px;">
                        <label for="Category" style="margin-bottom: 5px;width: 300px;">Category <sup style="color: #ff8090;">*</sup></label>
                        <div onclick="category()" id="category" type="search" value="" style="cursor: pointer;width: calc(100% - 22px);height: 20px;padding: 10px;border-radius: 5px;border: 1px solid grey;background-color: white;font-size: 17px;z-index: 1;"><span id="span">Select Task Category</span><div style="position: absolute;left: calc(100% - 30px);top: 217px;"><img id="menu" src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>  
                    </div>
                    <div id="categories" style="display: none;width: calc(100% - 22px);height: fit-content;background-color: white;padding: 10px;position: absolute;right: 0px;top: 228px;border: 1px solid grey;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 18px;z-index: 0;"></div>
                    <div id="tasks" style="margin: 17px 0;width: calc(100% - 12px);position: relative;left: 1px;top: 0px;"><label style="margin-top: 20px;" for="Subtasks">Subtasks</label>
                        <div style="position: relative;"><textarea placeholder="Add new subtask" name="Subtasks" id="subtasksv" style="width: calc(100% - 1px);height: 29px;resize: none;border-radius: 5px;margin-top: 5px;padding: 12px 0 0 10px;position: relative;z-index: 2;"></textarea><img src="" alt=""></div>
                        <div id="posiAdd" style="width: 14px;height: 14px;position: absolute;left: calc(100% + -19px);top: 36px;z-index: 3;"><img onclick="addsubtask()" src="assets/img/add.png" alt="add" style="cursor: pointer;width: 14px;right: -202px;"></div>
                        <div id="subtasks2" style="display: none;width: calc(100% - 11px);flex-direction: column;height: 60px;justify-content: space-between;padding: 17px 10px 0px;position: relative;bottom: 30px;border-width: 1px;border-style: solid;border-color: transparent grey grey;border-image: initial;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;overflow-y: scroll;scrollbar-width: none;"></div>
                    </div>
                    </div>
                </div>
            
            <div id="close2" onclick="closeModal()"><img src="assets/img/close.png" alt="close"></div>
        </div>
        <div id="buttonArea2">
            <button onclick="clearb()" style="background-color: #ffffff;display: flex;padding: 7px 15px;justify-content: center;align-items: center;border-radius: 5px;cursor: pointer;">Clear<img src="assets/img/close.png" alt="" style="width: 20px;margin-left: 5px;font-weight: 600;"></button>
            <button onclick="addTasks()" style="display: flex;justify-content: center;align-items: center;padding: 10px 15px;background-color: #2a3647;color: white;border-radius: 5px;border: 1px solid grey;margin-left: 15px;cursor: pointer;">Create Task<img src="assets/img/create.png" alt="" style="width: 20px;margin-left: 10px;"></button>
        </div>
        <div id="required"><sup style="color:#ff8090;">*</sup>This field is required</div>
    </div>`;
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

async function loadAccounts(){
    response7 = await fetch(BASE_URL6)
    response7 = await response7.json()
    for(r in response7){
        accounts.push(response7[r])
    }
    updateHTML()
}

let logoutcondi = 1
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
    document.getElementById("user").innerHTML = `<div>${firstLetter}${secondLetter}</div>`
}

let status2 = ""
function addTaskse(status3){
    document.getElementById("modal").style.display = "flex"
    status2 = status3
}

function searchTask(){
    let search = document.getElementById("textareaBoard").value.toLowerCase().trimEnd()
    let todos2 = []
    let todos3 = todos
    if(search == ""){
        todos2 = todos
    }else{
        for(let i = 0;i < todos.length;i++){
            let condi = 0
            for(let j = 0;j < todos[i]["assigned"].length;j++){
                if(todos[i]["assigned"][j].toLowerCase().includes(search)){
                    condi = 1
                }
            }
            if(todos[i]["category"].toLowerCase().includes(search)){
                condi = 1
            }
            if(todos[i]["description"].toLowerCase().includes(search)){
                condi = 1
            }
            if(todos[i]["duedate"].toLowerCase().includes(search)){
                condi = 1
            }
            if(todos[i]["prio"].toLowerCase().includes(search)){
                condi = 1
            }
            if(todos[i]["status"].toLowerCase().includes(search)){
                condi = 1
            }
            if(todos[i]["subtasks"]){
                for(let k = 0;k < todos[i]["subtasks"].length;k++){
                    if(todos[i]["subtasks"][k]["done"] === 1){
                        let done = "done"
                        if(done.toLowerCase().includes(search)){
                            condi = 1
                        }
                    }
                    if(todos[i]["subtasks"][k]["done"] === 0){
                        let done = "not done"
                        if(done.toLowerCase().includes(search)){
                            condi = 1
                        }
                    }
                    if(todos[i]["subtasks"][k]["subtask"].toLowerCase().includes(search)){
                        condi = 1
                    }
                }
            }
            if(todos[i]["title"].toLowerCase().includes(search)){
                condi = 1
            }
            if(condi == 1){
                todos2.push(todos[i])
            }
        }
    }
    todos = todos2
    updateHTML(todos)
    todos = todos3
}

function closeModal(){
    document.getElementById("modal").style.display = "none"
    document.getElementById("modal").innerHTML = /*html*/`<div id="contentArea4">
    <div id="header2">Add Task</div>
    <div id="contentArea4Sub">
        <div id="leftSide">
            <div id="leftSideSub">
                <label for="Title">Title<sup style="color: #ff8090;">*</sup></label>
                <textarea maxlength="80" name="Title" id="title2" placeholder="Enter a title"></textarea>
            </div>
            <div style="display: flex;flex-direction: column;">
                <label for="Description">Description</label>
                <textarea maxlength="2000" name="Description" id="description3" placeholder="Enter a Description"></textarea></div>
            <div style="display: flex;flex-direction: column;font-size: 16px;">
                <label for="">Assigned to</label>
                <div onclick="assign()" id="assigned3" value="Select contacts to assign" type="search"><div class="select">Select Contacts to Assign</div></div>
            <div id="assignButton2" onclick="assign()"><img src="assets/img/category_menu.png" alt=""></div>
            <div id="contactse"></div>
        </div>
    </div>
        <div id="verticalLine" style="position:absolute;top: 181px;left: calc(50% + 0px);width:1px;height: 310px;background-color: #a4a4a4;filter: drop-shadow(0px 0px 10px lightgrey);border-radius: 50%;"></div>
        <div id="rightSide">
            <div style="display: flex;flex-direction: column;">
                <label for="DueDate" style="margin-bottom: 5px;">Due Date <sup style="color: #ff8090;">*</sup></label>
                <input id="duedate" value="2024-08-24" type="date" style="border-radius: 5px;border: 1px solid grey;padding: 8px 6px;width: calc(100% - 50px);height: 24px;width: calc(100% - 13px);">
            </div>
            <div style="display: flex;flex-direction: column;margin-top: 17px;width: 100%;">
                <label for="Prio" style="margin-bottom: 5px;">Prio</label>
                <div id="Prio" style="display: flex;width: calc(100% - 50px);width: calc(100% + 0px);">
                    <div onclick="addPrio('urgent')" id="Urgente" style="width: calc(30%);margin-right: 5%;">
                        <button id="Urgenteb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 100%;background-color: white;border-radius: 5px;border: 1px solid grey;font-size: 17px;cursor: pointer;">
                            <div>Urgent</div>
                            <div>
                                <img id="urgent" src="assets/img/urgent.png" alt="Urgent Prority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;">
                            </div>
                        </button>
                    </div>
                    <div onclick="addPrio('medium')" id="Mediume" style="width: calc(30%);margin-right: 5%;">
                        <button id="Mediumeb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                            <div>Medium</div>
                            <div><img id="medium" src="assets/img/medium.png" alt="Medium Priority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;"></div></button></div>
                    <div onclick="addPrio('low')" id="Lowe" style="width: calc(30%);">
                        <button id="Loweb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                            <div>Low</div>
                            <div><img id="low" src="assets/img/low.png" alt="Low Priority Button" style="width: 30px;margin-left: 5px;position: relative;top: 2px;"></div>
                        </button>
                    </div>
                </div>
                <div id="buttonArea2">
                    <button onclick="clearb()" style="background-color: #ffffff;display: flex;padding: 7px 15px;justify-content: center;align-items: center;border-radius: 5px;cursor: pointer;">Clear<img src="assets/img/close.png" alt="" style="width: 20px;margin-left: 5px;font-weight: 600;"></button>
                    <button onclick="addTasks()" style="display: flex;justify-content: center;align-items: center;padding: 10px 15px;background-color: #2a3647;color: white;border-radius: 5px;border: 1px solid grey;margin-left: 15px;cursor: pointer;">Create Task<img src="assets/img/create.png" alt="" style="width: 20px;margin-left: 10px;"></button>
                </div>
                <div id="required"><sup style="color:#ff8090;">*</sup>This field is required</div>
        </div>
        <div style="margin-top: 17px;display: flex;flex-direction: column;/* position: relative; */top: 11px;">
            <label for="Category" style="margin-bottom: 5px;width: 300px;">Category <sup style="color: #ff8090;">*</sup></label>
            <div onclick="category()" id="category" type="search" value="" style="cursor: pointer;width: calc(100% - 22px);height: 20px;padding: 10px;border-radius: 5px;border: 1px solid grey;background-color: white;font-size: 17px;z-index: 1;"><span id="span">Select Task Category</span><div style="position: absolute;left: calc(100% - 30px);top: 217px;"><img id="menu" src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>  
        </div>
        <div id="categories" style="display: none;width: calc(100% - 22px);height: fit-content;background-color: white;padding: 10px;position: absolute;right: 0px;top: 228px;border: 1px solid grey;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 18px;z-index: 0;"></div>
        <div id="tasks" style="margin: 17px 0;width: calc(100% - 12px);position: relative;left: 1px;top: 0px;"><label style="margin-top: 20px;" for="Subtasks">Subtasks</label>
            <div style="position: relative;"><textarea placeholder="Add new subtask" name="Subtasks" id="subtasksv" style="width: calc(100% - 1px);height: 29px;resize: none;border-radius: 5px;margin-top: 5px;padding: 12px 0 0 10px;position: relative;z-index: 2;"></textarea><img src="" alt=""></div>
            <div id="posiAdd" style="width: 14px;height: 14px;position: absolute;left: calc(100% + -19px);top: 36px;z-index: 3;"><img onclick="addsubtask()" src="assets/img/add.png" alt="add" style="cursor: pointer;width: 14px;right: -202px;"></div>
            <div id="subtasks2" style="display: none;width: calc(100% - 11px);flex-direction: column;height: 60px;justify-content: space-between;padding: 17px 10px 0px;position: relative;bottom: 30px;border-width: 1px;border-style: solid;border-color: transparent grey grey;border-image: initial;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;overflow-y: scroll;scrollbar-width: none;"></div>
        </div>
    </div>
        
    </div>
    
    <div id="close2" onclick="closeModal()"><img src="assets/img/close.png" alt="close"></div>
</div>
</div>`;
    assigned = []
    title = ""
    description =""
    duedate =""
    prio = ""
    category1 = ""
    subtaskse = []
    closeTask();
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

async function addTasks(){
    let title = document.getElementById("title2").value
    let description = document.getElementById("description3").value
    let duedate = document.getElementById("duedate").value
    let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`;
    
    if(title != "" && description != "" && duedate != ""   && assigned != [] && prio != "" && category1 != ""){
    await fetch(accountUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "description": description,
            "assigned": assigned,
            "duedate": duedate,
            "prio":prio,
            "category":category1,
            "subtasks":subtaskse,
            "status":status2,
            "done":0
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error creating account:", error);
    });
    clearb() 
    document.getElementById("modal").style.display = "none"
    status2 = ""
    todos = []
    loadData2()
    document.getElementById("modal").innerHTML = `<div id="contentArea4">
            <div id="header2">Add Task</div>
            <div id="contentArea4Sub">
                <div id="leftSide">
                    <div id="leftSideSub">
                        <label for="Title">Title<sup style="color: #ff8090;">*</sup></label>
                        <textarea maxlength="80" name="Title" id="title2" placeholder="Enter a title"></textarea>
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <label for="Description">Description</label>
                        <textarea maxlength="2000" name="Description" id="description3" placeholder="Enter a Description"></textarea></div>
                    <div style="display: flex;flex-direction: column;font-size: 16px;">
                        <label for="">Assigned to</label>
                        <div onclick="assign()" id="assigned3" value="Select contacts to assign" type="search"><div class="select">Select Contacts to Assign</div></div>
                    <div id="assignButton2" onclick="assign()"><img src="assets/img/category_menu.png" alt=""></div>
                    <div id="contactse" style="display: none;"></div>
                </div>
            </div>
                <div id="verticalLine"></div>
                <div id="rightSide">
                    <div style="display: flex;flex-direction: column;">
                        <label for="DueDate" style="margin-bottom: 5px;">Due Date <sup style="color: #ff8090;">*</sup></label>
                        <input id="duedate" value="2024-08-24" type="date" style="border-radius: 5px;border: 1px solid grey;padding: 8px 6px;width: calc(100% - 50px);height: 24px;width: calc(100% - 13px);">
                    </div>
                    <div style="display: flex;flex-direction: column;margin-top: 17px;width: 100%;">
                        <label for="Prio" style="margin-bottom: 5px;">Prio</label>
                        <div id="Prio" style="display: flex;width: calc(100% - 50px);width: calc(100% + 0px);">
                            <div onclick="addPrio('urgent')" id="Urgente" style="width: calc(30%);margin-right: 5%;">
                                <button id="Urgenteb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 100%;background-color: white;border-radius: 5px;border: 1px solid grey;font-size: 17px;cursor: pointer;">
                                    <div>Urgent</div>
                                    <div>
                                        <img id="urgent" src="assets/img/urgent.png" alt="Urgent Prority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;">
                                    </div>
                                </button>
                            </div>
                            <div onclick="addPrio('medium')" id="Mediume" style="width: calc(30%);margin-right: 5%;">
                                <button id="Mediumeb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                    <div>Medium</div>
                                    <div><img id="medium" src="assets/img/medium.png" alt="Medium Priority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;"></div></button></div>
                            <div onclick="addPrio('low')" id="Lowe" style="width: calc(30%);">
                                <button id="Loweb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                    <div>Low</div>
                                    <div><img id="low" src="assets/img/low.png" alt="Low Priority Button" style="width: 30px;margin-left: 5px;position: relative;top: 2px;"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 17px;display: flex;flex-direction: column;/* position: relative; */top: 11px;">
                        <label for="Category" style="margin-bottom: 5px;width: 300px;">Category <sup style="color: #ff8090;">*</sup></label>
                        <div onclick="category()" id="category" type="search" value="" style="cursor: pointer;width: calc(100% - 22px);height: 20px;padding: 10px;border-radius: 5px;border: 1px solid grey;background-color: white;font-size: 17px;z-index: 1;"><span id="span">Select Task Category</span><div style="position: absolute;left: calc(100% - 30px);top: 217px;"><img id="menu" src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>  
                    </div>
                    <div id="categories" style="display: none;width: calc(100% - 22px);height: fit-content;background-color: white;padding: 10px;position: absolute;right: 0px;top: 228px;border: 1px solid grey;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 18px;z-index: 0;"></div>
                    <div id="tasks" style="margin: 17px 0;width: calc(100% - 12px);position: relative;left: 1px;top: 0px;"><label style="margin-top: 20px;" for="Subtasks">Subtasks</label>
                        <div style="position: relative;"><textarea placeholder="Add new subtask" name="Subtasks" id="subtasksv" style="width: calc(100% - 1px);height: 29px;resize: none;border-radius: 5px;margin-top: 5px;padding: 12px 0 0 10px;position: relative;z-index: 2;"></textarea><img src="" alt=""></div>
                        <div id="posiAdd" style="width: 14px;height: 14px;position: absolute;left: calc(100% + -19px);top: 36px;z-index: 3;"><img onclick="addsubtask()" src="assets/img/add.png" alt="add" style="cursor: pointer;width: 14px;right: -202px;"></div>
                        <div id="subtasks2" style="display: none;width: calc(100% - 11px);flex-direction: column;height: 60px;justify-content: space-between;padding: 17px 10px 0px;position: relative;bottom: 30px;border-width: 1px;border-style: solid;border-color: transparent grey grey;border-image: initial;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;overflow-y: scroll;scrollbar-width: none;"></div>
                    </div>
                    </div>
                </div>
            
            <div id="close2" onclick="closeModal()"><img src="assets/img/close.png" alt="close"></div>
        </div>
        <div id="buttonArea2">
            <button onclick="clearb()" style="background-color: #ffffff;display: flex;padding: 7px 15px;justify-content: center;align-items: center;border-radius: 5px;cursor: pointer;">Clear<img src="assets/img/close.png" alt="" style="width: 20px;margin-left: 5px;font-weight: 600;"></button>
            <button onclick="addTasks()" style="display: flex;justify-content: center;align-items: center;padding: 10px 15px;background-color: #2a3647;color: white;border-radius: 5px;border: 1px solid grey;margin-left: 15px;cursor: pointer;">Create Task<img src="assets/img/create.png" alt="" style="width: 20px;margin-left: 10px;"></button>
        </div>
        <div id="required"><sup style="color:#ff8090;">*</sup>This field is required</div>
    </div>`;
    } else{
        alert("Biite fülle alle Felder bis auf subtaks aus und wähle eine Priorität aus.")
    }
}

async function addTasks2(r){
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let duedate = document.getElementById("duedate").value

    let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks/${r}.json`;
    let response01 = await fetch(accountUrl)
    response01 = await response01.json()
    let status2 = response01["status"]
    if(title != "" && description != "" && duedate != ""   && assigned != [] && prio != "" && category1 != ""){
    await fetch(accountUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            "title": title,
            "description": description,
            "assigned": assigned,
            "duedate": duedate,
            "prio":prio,
            "category":category1,
            "subtasks":subtaskse,
            "status":status2,
            "done":0
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error creating account:", error);
    });
    clearb() 
    document.getElementById("modal").style.display = "none"
    status2 = ""
    todos = []
    loadData2()
    document.getElementById("modal").innerHTML = `<div id="contentArea4">
            <div id="header2" style="position: absolute;top: 60px;left: 160px;font-size: 50px;">Add Task</div>
            <div style="display: flex;justify-content: center;align-items: center;">
                <div id="leftSide" style="font-size: 16px;position: absolute;left: 160px;width: calc(50% - 160px);margin-bottom: 0px;top: 170px;">
                    <div style="display: flex;flex-direction: column;position: relative;bottom: 20px;">
                        <label for="Title">Title<sup style="color: #ff8090;">*</sup></label>
                        <textarea name="Title" id="title2" placeholder="Enter a title"></textarea>
                    </div>
                    <div style="display: flex;flex-direction: column;">
                        <label for="Description">Description</label>
                        <textarea name="Description" id="description" placeholder="Enter a Description" style="margin-bottom: 20px;resize: none;width: calc(100% - 65px);border-radius: 5px;height: 128px;padding: 10px;margin-top: 5px;"></textarea></div>
                    <div style="display: flex;flex-direction: column;font-size: 16px;">
                        <label for="">Assigned to</label>
                        <div onclick="assign()" id="assigned" value="Select contacts to assign" type="search" style="    width: calc(100% - 60px);
    border-radius: 5px;
    border: 1px solid grey;
    margin-top: 5px;
    height: 32px;
    padding: 4px 30px 4px 4px;
    background-color: white;
    font-size: 17px;
    z-index: 2;
    flex-wrap: wrap;
    overflow-x: auto;
    scrollbar-width: thin;"><div class="select">Select Contacts to Assign</div></div>
                    <div style="position: absolute;top: 294px;left: calc(100% - 70px);cursor: pointer;z-index: 2;" onclick="assign()"><img src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>
                    <div id="contactse" style="display: none;width: calc(100% - 41px);border: 1px solid grey;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;max-height: 95px;position: relative;bottom: 10px;border-top: 1px solid transparent;padding: 9px 0 0 0;overflow-y: scroll;scrollbar-width: none;"></div>
                </div>
            </div>
                <div id="verticalLine" style="position:absolute;top: 181px;left: calc(50% + 0px);width:1px;height: 310px;background-color: #a4a4a4;filter: drop-shadow(0px 0px 10px lightgrey);border-radius: 50%;"></div>
                <div id="rightSide" style="position: absolute;width: calc(50% - 200px);left: calc(50% + 40px);top: 150px;">
                    <div style="display: flex;flex-direction: column;">
                        <label for="DueDate" style="margin-bottom: 5px;">Due Date <sup style="color: #ff8090;">*</sup></label>
                        <input id="duedate" value="${today}" type="date" style="border-radius: 5px;border: 1px solid grey;padding: 8px 6px;width: calc(100% - 50px);height: 24px;width: calc(100% - 13px);">
                    </div>
                    <div style="display: flex;flex-direction: column;margin-top: 17px;width: 100%;">
                        <label for="Prio" style="margin-bottom: 5px;">Prio</label>
                        <div id="Prio" style="display: flex;width: calc(100% - 50px);width: calc(100% + 0px);">
                            <div onclick="addPrio('urgent')" id="Urgente" style="width: calc(30%);margin-right: 5%;">
                                <button id="Urgenteb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 100%;background-color: white;border-radius: 5px;border: 1px solid grey;font-size: 17px;cursor: pointer;">
                                    <div>Urgent</div>
                                    <div>
                                        <img id="urgent" src="assets/img/urgent.png" alt="Urgent Prority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;">
                                    </div>
                                </button>
                            </div>
                            <div onclick="addPrio('medium')" id="Mediume" style="width: calc(30%);margin-right: 5%;">
                                <button id="Mediumeb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                    <div>Medium</div>
                                    <div><img id="medium" src="assets/img/medium.png" alt="Medium Priority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;"></div></button></div>
                            <div onclick="addPrio('low')" id="Lowe" style="width: calc(30%);">
                                <button id="Loweb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                    <div>Low</div>
                                    <div><img id="low" src="assets/img/low.png" alt="Low Priority Button" style="width: 30px;margin-left: 5px;position: relative;top: 2px;"></div>
                                </button>
                            </div>
                        </div>
                </div>
                <div style="margin-top: 17px;display: flex;flex-direction: column;/* position: relative; */top: 11px;">
                    <label for="Category" style="margin-bottom: 5px;width: 300px;">Category <sup style="color: #ff8090;">*</sup></label>
                    <div onclick="category()" id="category" type="search" value="" style="cursor: pointer;width: calc(100% - 22px);height: 20px;padding: 10px;border-radius: 5px;border: 1px solid grey;background-color: white;font-size: 17px;z-index: 1;"><span id="span">Select Task Category</span><div style="position: absolute;left: calc(100% - 30px);top: 217px;"><img id="menu" src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>  
                </div>
                <div id="categories" style="display: none;width: calc(100% - 22px);height: fit-content;background-color: white;padding: 10px;position: absolute;right: 0px;top: 228px;border: 1px solid grey;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 18px;z-index: 0;"></div>
                <div id="tasks" style="margin: 17px 0;width: calc(100% - 12px);position: relative;left: 1px;top: 0px;"><label style="margin-top: 20px;" for="Subtasks">Subtasks</label>
                    <div style="position: relative;"><textarea placeholder="Add new subtask" name="Subtasks" id="subtasksv" style="width: calc(100% - 1px);height: 29px;resize: none;border-radius: 5px;margin-top: 5px;padding: 12px 0 0 10px;position: relative;"></textarea><img src="" alt=""></div>
                    <div id="posiAdd" style="width: 14px;height: 14px;position: absolute;left: calc(100% + -19px);top: 36px;"><img onclick="addsubtask()" src="assets/img/add.png" alt="add" style="cursor: pointer;width: 14px;right: -202px;"></div>
                    <div id="subtasks2" style="display: none;width: calc(100% - 11px);flex-direction: column;height: 60px;justify-content: space-between;padding: 17px 10px 0px;position: relative;bottom: 30px;border-width: 1px;border-style: solid;border-color: transparent grey grey;border-image: initial;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;overflow-y: scroll;scrollbar-width: none;"></div>
                </div>
            </div>
                
            </div>
            <div id="buttonArea2" style="display: flex;position: absolute;bottom: 50px;right: 160px;">
                <button onclick="addTasks2('${r}')" style="display: flex;justify-content: center;align-items: center;padding: 10px 15px;background-color: #2a3647;color: white;border-radius: 5px;border: 1px solid grey;margin-left: 15px;cursor: pointer;">Edit<img src="assets/img/create.png" alt="" style="width: 20px;margin-left: 10px;"></button>
            </div>
            <div id="required" style="position: absolute;bottom: 50px;left: 160px;"><sup style="color:#ff8090;">*</sup>This field is required</div>
            <div id="close2" onclick="closeModal()"><img src="assets/img/close.png" alt="close"></div>
        </div>
                                                `;
    } else{
        alert("Biite fülle alle Felder bis auf subtaks aus und wähle eine Priorität aus.")
    }
}

let currentDraggedElement;
let indexe = []
function updateHTML() {

    let ToDo = todos.filter(t => t['status'] == 'todo');
    document.getElementById('ToDo').innerHTML = ''
    for (let index = 0; index < ToDo.length; index++) {
        const element = ToDo[index];
        document.getElementById('ToDo').innerHTML += generateTodoHTML(element);
        indexe.push(index)
    }
    if(ToDo.length == 0){
        document.getElementById('ToDo').innerHTML += /*html*/`<div class="nothingInside">Nothing To Do</div>`
    }

    let InProgress = todos.filter(t => t['status'] == 'InProgress');
    document.getElementById('InProgress').innerHTML = ""
    for (let index = 0; index < InProgress.length; index++) {
        const element = InProgress[index];
        document.getElementById('InProgress').innerHTML += generateTodoHTML(element);
    }
    if(InProgress.length == 0){
        document.getElementById('InProgress').innerHTML += /*html*/`<div class="nothingInside">Nothing in Progress</div>`
    }

    let AwaitFeedback = todos.filter(t => t['status'] == 'AwaitFeedback');
    document.getElementById('AwaitFeedback').innerHTML = ""
    for (let index = 0; index < AwaitFeedback.length; index++) {
        const element = AwaitFeedback[index];
        document.getElementById('AwaitFeedback').innerHTML += generateTodoHTML(element);
    }
    if(AwaitFeedback.length == 0){
        document.getElementById('AwaitFeedback').innerHTML += /*html*/`<div class="nothingInside">No Feedback</div>`
    }
    
    let Done = todos.filter(t => t['status'] == 'Done');
    document.getElementById('Done').innerHTML = ""
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

async function openTask(c,t,d,dd,p,a,s,r){
    let s2 = s
    let a2 = a
    let p2 = p
    responses1 = await fetch("https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts.json")
    responses1 = await responses1.json()
    let deadline = dd
    let deadlined = deadline.slice(8)
    let deadlinem = deadline.slice(5,7)
    let deadliney = deadline.slice(0,4)
    deadline = `${deadlined}.${deadlinem}.${deadliney}`
    let names = []    
    let b = a.indexOf(",")
    while(b != -1){
        b = a.indexOf(",")
        let c = a.slice(0,b)
        a = a.slice(b)
        names.push(c)
        a = a.slice(1)
        if(a.indexOf(",") == -1){
            names.push(a)
            b = -1
        }
    }
    if(names.length == 0){
        names.push(a)
    }
    
    document.getElementById("ModalTask").style.display = "flex"

    let string = []
    let o = s.indexOf(",")
    while(o != -1){
        o = s.indexOf(",")
        let c = s.slice(0,o)
        s = s.slice(o)
        string.push(c)
        s = s.slice(1)
        if(s.indexOf(",") == -1){
            string.push(s)
            o = -1
        }
    }

    let string2 = ""
    for(let i = 0;i < string.length/2;i++){
        if(string[i] == "0"){
            string2 += `<div style="display: flex;margin-top: 5px;margin-left: 10px;"><div class="cubus" id="di${i}" onclick="subtaskDone('di${i}','${r}','${string[i + string.length/2]}')"></div><div id="task"><div>${string[i + string.length/2]}</div></div></div><br>`
        }else{
            string2 += `<div style="display: flex;margin-top: 5px;margin-left: 10px;"><div class="cubus" id="di${i}" onclick="subtaskDone('di${i}','${r}','${string[i + string.length/2]}')"><img id='hacken' src='assets/img/close.png'></div><div id="task"><div>${string[i + string.length/2]}</div></div></div><br>`
        }
    }
    
    let backc;
    if(c == "User Story"){
        backc = "#0038ff"
    }
    if(c== "Technical Task"){
        backc = "#1fd7c1"
    }
    p = p.charAt(0).toUpperCase() + p.slice(1)
    document.getElementById("modalCategory").innerHTML = /*html*/`<div id="story" style="background-color:${backc}">${c}</div>`
    document.getElementById("modalTitle").innerHTML = /*html*/`<div>${t}</div>`
    document.getElementById("modalDescription").innerHTML = /*html*/`<div>${d}</div>`
    document.getElementById("modalDuedate").innerHTML = /*html*/`<div style="display:flex">Due date: <div id="deadline">${deadline}</div></div>`
    document.getElementById("modalPrio").innerHTML = /*html*/`<div style="display:flex">Priority: <div id="priority">${p} <img src="assets/img/${p}.png" alt="Priority Logo"></div></div>`
    document.getElementById("modalAssigned").innerHTML = /*html*/`<div>Assigned To: <br><div id="assignedNames"></div></div>`
    if (s == 'undefined' || s == undefined) {
        // Handle the case where s is undefined or null
    } else {
        document.getElementById("modalSubtasks").innerHTML = /*html*/`<div>Subtasks:<br><div id="tasks" style="margin-top: 15px;margin-bottom: 10px;">${string2}</div></div>`;
    }
    document.getElementById("modalButtons").innerHTML = `<div id="part1" onclick="deleteTask('${r}')" style="cursor: pointer;"><div class="imgalign"><img style="width: 23px;height: 19px;" src="assets/img/bin_whiteback.png" alt=""></div><div class="ButtonText">Delete</div></div><div id="part2" onclick="EditTask('${c}','${t}','${d}','${dd}','${p2}','${a2}','${s2}','${r}')" style="cursor: pointer;"><div class="imgalign"><img style="width: 20px;height: 23px;" src="assets/img/edit_whiteback.png" alt=""></div><div class="ButtonText">Edit</div></div>`
    names = names.sort()
    let color = []
    for(let j = 0;j < names.length;j++){
        userName = names[j]
        for(r in responses1){
            if(userName == responses1[r]["Name"]){
                color.push(responses1[r]["Color"])
            }
        }
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
        document.getElementById("assignedNames").innerHTML += `<div style="display: flex;align-items: center;margin: 10px 0;"><div style="color: white;background-color: ${color[j]};padding: 10px;border-radius: 50%;margin-right: 10px;">${firstLetter}${secondLetter}</div><div>${names[j]}</div></div>`
    }
}

async function EditTask(c,t,d,dd,p2,a2,s2,r){
    document.getElementById("assigned3").innerHTML = ""
    document.getElementById("ModalTask").style.display = "none"
    document.getElementById("modal").style.display = "flex"
    document.getElementById("title").innerHTML = t
    document.getElementById("description").innerHTML = d
    let names = []    
    let b = a2.indexOf(",")
    while(b != -1){
        b = a2.indexOf(",")
        let c = a2.slice(0,b)
        a2 = a2.slice(b)
        names.push(c)
        a2 = a2.slice(1)
        if(a2.indexOf(",") == -1){
            names.push(a2)
            b = -1
        }
    }
    if(names.length == 0){
        names.push(a2)
    }    

    document.getElementById("duedate").value = dd
    addPrio(p2)

    let string = []
    let o = s2.indexOf(",")
    while(o != -1){
        o = s2.indexOf(",")
        let c = s2.slice(0,o)
        s2 = s2.slice(o)
        string.push(c)
        s2 = s2.slice(1)
        if(s2.indexOf(",") == -1){
            string.push(s2)
            o = -1
        }
    }
    for(let i = 0;i < string.length/2;i++){
        addsubtask2(string[i + string.length/2],string[i])
    }
    addCategory2(c)
    for(let i = 0;i < names.length;i++){
        assign2(names[i])
    }
    document.getElementById("buttonArea2").innerHTML = `
                <button onclick="addTasks2('${r}')" style="display: flex;justify-content: center;align-items: center;padding: 10px 15px;background-color: #2a3647;color: white;border-radius: 5px;border: 1px solid grey;margin-left: 15px;cursor: pointer;">Edit<img src="assets/img/create.png" alt="" style="width: 20px;margin-left: 10px;"></button>
            `;
    document.addEventListener('DOMContentLoaded', function() {
        assign()
    })
}

function show(){
    document.getElementById("subtasks").style.display = "flex"
    document.getElementById("subtasks").innerHTML = ""
}

async function subtaskDone(div,r,sub){
    let response9 = await fetch(`https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks/${r}.json`)
    response9 = await response9.json()
    let index = div.charAt(div.length -1)
    let done = 0
    for(let i = 0; i < response9["subtasks"].length;i++){
        if(sub == response9["subtasks"][i]["subtask"]){
            index = i
        }
    }
    if(document.getElementById(div).innerHTML == '<img id="hacken" src="assets/img/close.png">'){
        document.getElementById(div).innerHTML = "";
        done = 0
    }else{
        document.getElementById(div).innerHTML = "<img id='hacken' src='assets/img/close.png'>";
        done = 1
    }
    await fetch(`https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks/${r}/subtasks/${index}.json`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            "done":done,
            "subtask":sub
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


function AddTask(c,t,d,dd,p,a,s){
    document.getElementById("ModalTask").style.display = "none"
    openTask(c,t,d,dd,p,a,s)
}
 
async function deleteTask(r){
    let response = await fetch(`https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks/${r}.json`,{
        method: "DELETE", 
    });
    closeTask()
    document.getElementById("ToDo").innerHTML =""
    document.getElementById("InProgress").innerHTML =""
    document.getElementById("AwaitFeedback").innerHTML =""
    document.getElementById("Done").innerHTML =""
    todos = []
    loadData2()
}

function generateTodoHTML(element) {
    let userNames = ""
    let names = []
    let colors = []
    for(let i = 0;i < accounts.length ;i++){
        for(let j = 0;j < element["assigned"].length;j++){
            if(accounts[i]["Name"] == element["assigned"][j]){
                names.push(accounts[i]["Name"])
                colors.push(accounts[i]["Color"])
                }
            }
        }

    let sub;
    let subpercent;
    if(element["subtasks"]){
        let s =  element['subtasks'].length
        let sd = 0
        for(let i = 0;i < element["subtasks"].length;i++){
            if(element["subtasks"][i]["done"] == 1){
                sd += 1
            }
        }
        sub = `${sd}/${s}`
        subpercent = sd/s
    }
    
    if(element['assigned'].length > 0){
        for(let i = 0;i < element['assigned'].length;i++){
            let userName = element['assigned'][i]
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
            if(i == 0){
                userNames += `<div style="background-color:${colors[i]};width: 20px;height: 20px;border-radius: 50%;padding: 11px 10px 8px 10px;position: relative;right: 10px;top: 10px;border:2px solid white;" class="userName">${firstLetter}${secondLetter}</div>`

            }else{
                userNames += `<div style="background-color:${colors[i]};width: 20px;height: 20px;border-radius: 50%;padding: 11px 10px 8px 10px;position: relative;right: ${10 + 10*i}px;top: 10px;border:2px solid white" class="userName">${firstLetter}${secondLetter}</div>`
            }
        }
    }

    let color = ""
    if(element["category"] == "Technical Task"){
        color = "#1fd7c1"
    }else{
        color = "#0038ff"
    }

    let prio;
    if(element['prio'] == "urgent"){
        prio = "<div><img src='assets/img/urgent.png'></div>"
    } else if(element['prio'] == "medium"){
        prio = "<div><img src='assets/img/medium.png'></div>"
    } else if(element['prio'] == "low"){
        prio = "<div><img src='assets/img/low.png'></div>"
    }

    if(element["subtasks"]){
        let done = []
        let task = []
        let subtasks = []
        
        let length = Object.keys(element["subtasks"]).length
        for(let i = 0;i < length;i++){
            done.push(element["subtasks"][i]["done"])
            task.push(element["subtasks"][i]["subtask"])
        }
        subtasks.push(done)
        subtasks.push(task)
        let a = /*html*/`<div style="cursor:pointer" onclick="openTask(\'${element['category']}\',\'${element['title'].trimEnd()}\',\'${element['description']}\',\'${element['duedate']}\',\'${element['prio']}\',\'${element['assigned']}\',\'${subtasks}\',\'${element['r']}\')" draggable="true" ondragstart="startDragging(${element['id']})" class="todo">
                            <div style="background-color:${color}" class="category2">${element['category']}</div>
                            <div class="title">${element['title']}</div>
                            <div class="description">${element['description']}</div>
                            <div class="subtasks" id="subtasks"><div style="display: flex;width: calc(100% - 40px);position: relative;margin-right: 15px;"><div class="subbar"></div><div class="subbar2" style="width:calc(${subpercent*100}%)"></div></div>${sub}</div>
                            <div class="prio">${prio}</div>
                            <div class="assigned" id="assigned2">${userNames}</div>    
                        </div>`;
        return a
    }else {
        let a = /*html*/`<div style="cursor:pointer" onclick="openTask(\'${element['category']}\',\'${element['title']}\',\'${element['description']}\',\'${element['duedate']}\',\'${element['prio']}\',\'${element['assigned']}\',\'${element['subtasks']}\',\'${element['r']}\')" draggable="true" ondragstart="startDragging(${element['id']})" class="todo">
                            <div style="background-color:${color}" class="category2">${element['category']}</div>
                            <div class="title">${element['title']}</div>
                            <div class="description">${element['description']}</div>
                            <div class="prio">${prio}</div>
                            <div class="assigned" id="assigned2">${userNames}</div>    
                        </div>`;
        return a
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category2) {
    if(category2 == "ToDo"){
        category2 = "todo"
    }   
    todos[currentDraggedElement]['status'] = category2;
    let assigned = todos[currentDraggedElement]['assigned']
    let category1 = todos[currentDraggedElement]['category']
    let description = todos[currentDraggedElement]['description']
    let duedate = todos[currentDraggedElement]['duedate']
    let id = todos[currentDraggedElement]['id']
    let prio = todos[currentDraggedElement]['prio']
    let r = todos[currentDraggedElement]['r']
    let title = todos[currentDraggedElement]['title']
    let subtasks = todos[currentDraggedElement]['subtasks']
    updateHTML();
    saveBoard(todos[currentDraggedElement]['r'],category2,assigned,category1,description,duedate,id,prio,r,title,subtasks);
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

async function saveBoard(r,category2,assigned,category,description,duedate,id,prio,r,title,subtasks){
    if(category2 == "ToDo"){
        category2 = "todo"
    }   
    let contactKey = r;
    let url = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks/${contactKey}.json`;
    await fetch(url, {
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
            "subtasks":subtasks,
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

let subtaskse = []
let prio = ""
let assigned = []
let category1 = ""
function addSubtask(){
    tasks.push(document.getElementById("subtasks").value)
}

let urgent = 0
let medium = 0
let low = 0
function addPrio(prio2){
    prio = ""
    prio = prio2
    if(prio2 == "urgent"){
        if(urgent == 1){
            document.getElementById("Urgenteb").style.backgroundColor = "white"
            document.getElementById("urgent").setAttribute('src', 'assets/img/urgent.png');
            document.getElementById("Urgenteb").style.color="black";
            urgent = 0

        } else {
            document.getElementById("Urgenteb").style.backgroundColor = "rgb(255,61,0)"
            document.getElementById("urgent").setAttribute('src', 'assets/img/urgent_hover.png');
            document.getElementById("Urgenteb").style.color="white";
            document.getElementById("Mediumeb").style.backgroundColor = "white"
            document.getElementById("medium").setAttribute('src', 'assets/img/medium.png');
            document.getElementById("Mediumeb").style.color="black";
            document.getElementById("Loweb").style.backgroundColor = "white"
            document.getElementById("low").setAttribute('src', 'assets/img/low.png');
            document.getElementById("Loweb").style.color="black";
            urgent = 1
        }
    } else if(prio2 == "medium"){
        if(medium == 1){
            document.getElementById("Mediumeb").style.backgroundColor = "white"
            document.getElementById("medium").setAttribute('src', 'assets/img/medium.png');
            document.getElementById("Mediumeb").style.color="black";
            medium = 0
        } else {
            document.getElementById("Mediumeb").style.backgroundColor = "rgb(255,168,0)"
            document.getElementById("medium").setAttribute('src', 'assets/img/medium_hover.png');
            document.getElementById("Mediumeb").style.color="white";
            document.getElementById("Urgenteb").style.backgroundColor = "white"
            document.getElementById("urgent").setAttribute('src', 'assets/img/urgent.png');
            document.getElementById("Urgenteb").style.color="black";
            document.getElementById("Loweb").style.backgroundColor = "white"
            document.getElementById("low").setAttribute('src', 'assets/img/low.png');
            document.getElementById("Loweb").style.color="black";
            medium = 1
        } 
    } else if(prio2 == "low"){
        if(low == 1){
            document.getElementById("Loweb").style.backgroundColor = "white"
            document.getElementById("low").setAttribute('src', 'assets/img/low.png');
            document.getElementById("Loweb").style.color="black";
            low = 0
        } else {
            document.getElementById("Loweb").style.backgroundColor = "rgb(122,226,41)"
            document.getElementById("low").setAttribute('src', 'assets/img/low_hover.png');
            document.getElementById("Loweb").style.color="white";
            document.getElementById("Mediumeb").style.backgroundColor = "white"
            document.getElementById("medium").setAttribute('src', 'assets/img/medium.png');
            document.getElementById("Mediumeb").style.color="black";
            document.getElementById("Urgenteb").style.backgroundColor = "white"
            document.getElementById("urgent").setAttribute('src', 'assets/img/urgent.png');
            document.getElementById("Urgenteb").style.color="black";
            low = 1
        } 
    }
}

let response3;
const BASE_URL0 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/"
loadData("./accounts")
async function loadData(path=""){
    response3 = await fetch(BASE_URL0 + path + ".json")
    response3 = await response3.json()
    length = response3.length
}

async function loadData5(path=""){
    response3 = await fetch(BASE_URL0 + path + ".json")
    response3 = await response3.json()
}

let array = []
function assign() {
    assignvar == assigned.length
    if(assignvar == 0){
        document.getElementById("assigned3").innerHTML = "<div class='select'>Select Contacts to Assign</div>"
    }
    let contactContainer = document.getElementById("contactse");
    contactContainer.innerHTML = "";
    if (contactContainer.style.display === "none") {
        contactContainer.style.display = "flex";
    } else {
        contactContainer.style.display = "none";
        return;
    }
    let array = [];
    for (let r in response3) {
        let names = response3[r]["Name"];
        let color = response3[r]["Color"];
        array.push({ "name": names, "color": color });
    }
    sortArrayByKey(array, "name");
    for (let i = 0; i < array.length; i++) {
        let userName = array[i]["name"];
        let firstLetter = userName.charAt(0).toUpperCase();
        let secondLetter = "";
        
        let last = userName.lastIndexOf(" ");
        if (last !== -1) {
            secondLetter = userName.charAt(last + 1).toUpperCase();
        }
        contactContainer.innerHTML += `
            <div id="div${i}" style="display: flex; align-items: center; height: 40px; width: 100%; padding: 10px 10px; position: relative;">
                <div style="background-color:${array[i]["color"]}; width: 28px; height: 22px; filter: blur(0.1px); border-radius: 50%; margin-right: 10px; color: white; text-align: center; padding-top: 5px;">
                    ${firstLetter}${secondLetter}
                </div>
                <div>${userName}</div>
            </div>`;
        if (!assigned.includes(userName)) {
            document.getElementById(`div${i}`).innerHTML += `
                <div id="d${i}" style="position: absolute; right: 30px;" onclick="assign2('${userName}', 'd${i}')">
                    <img style="width: 18px;" src="assets/img/add.png" alt="">
                </div>`;
        }
    }
}

let index = 0
let assignvar = 0
function assign2(name,d){
    if(index < assigned.length){
        assign()
    }
    index += 1
    assignvar = assigned.length
    // assignvar += 1

    if(assignvar == 0){
        document.getElementById("assigned3").innerHTML = ""
    }
    console.log(d)
    assignvar += 1
    if(d != 'undefined'){
        let j;
        let flag = false
        let array2 = Object.keys(response3)
        array2 = array2.reverse()
        console.log(array2)
        console.log(response3)
        for(let i = 0;i < array2.length;i++){
            let index = array2.length -1 - i
            console.log(name)
            console.log(response3[array2[index]]["Name"])
            if(name == response3[array2[index]]["Name"]){
                j = i
                flag = true
                break
            }
        }
        assigned.push(name)
        document.getElementById("assigned3").innerHTML += /*html*/`<div id="e${assignvar}" class="assignFrame">${name} <img style="width: 15px;position: relative;left: 8px;top: 0px;" onclick="removeAssign('${name}', 'd${j}', 'e${assignvar}')" src="assets/img/close.png"></div>`
        if(flag == true){
            document.getElementById(`d${j}`).style.display = "none"
        }
    }else{
        assigned.push(name)
        document.getElementById("assigned3").innerHTML += /*html*/`<div id="e${assignvar}" class="assignFrame">${name} <img style="width: 15px;position: relative;left: 8px;top: 0px;" onclick="removeAssign('${name}', d, 'e${assignvar}')" src="assets/img/close.png"></div>`
        if(d){
            document.getElementById(d).style.display = "none"
        }
    }
}

function removeAssign(name, d , e){

    assigned = assigned.filter(assignedName => assignedName !== name)
    assignvar -= 1
    document.getElementById(e).style.display = "none"
    if(assignvar == 0){
        document.getElementById("assigned3").innerHTML = "<div class='select'>Select Contacts to Assign</div>"
    }else{
        assign()
    }
    
}

function sortArrayByKey(array2, Name){
    const filteredArr = array2.filter(item => item && item[Name] !== undefined);
    return filteredArr.sort((a, b) => {
        if (a[Name] < b[Name]) return -1;
        if (a[Name] > b[Name]) return 1;
        return 0;
    });
}

let closed = 1
let turn;
function category(){
    if(closed == 1){
        document.getElementById("tasks").style.zIndex = "-2"
        let x = document.getElementById("menu");
        turn += 180;
        x.style.transform = "rotate("+ (turn % 360) +"deg)"
        document.getElementById("categories").style.display = "flex"
        document.getElementById("categories").style.height = "fit-content"
        document.getElementById("categories").innerHTML = /*html*/`
            <div id="cagtegoriesInner">
                <div class="category" onclick="addCategory('TechnicalTask')" style="margin-top: 15px;margin-bottom: 10px">Technical Task</div>
                <div class="category" onclick="addCategory('UserStory')" style="margin-bottom: 5px">User Story</div>
            </div>
        `;
        closed = 0
    } else{
        document.getElementById("tasks").style.zIndex = "2"
        let x = document.getElementById("menu");
        turn += 180;
        x.style.transform = "rotate("+ (turn % 360) +"deg)"
        document.getElementById("categories").style.display = "none"
        document.getElementById("categories").style.height = "0px"
        closed = 1
    }
}

function addCategory(category2){
    if(category2 == "UserStory"){
        category1 = "User Story"
        category()
        document.getElementById("span").innerHTML ="User Story"
    }else{
        category1 = "Technical Task"
        category()
        document.getElementById("span").innerHTML ="Technical Task"
    }
}

function addCategory2(category2){
    if(category2 == "UserStory"){
        category1 = "User Story"
        document.getElementById("span").innerHTML ="User Story"
    }else{
        category1 = "Technical Task"
        document.getElementById("span").innerHTML ="Technical Task"
    }
}

function addsubtask(){
    if(document.getElementById("subtasksv").value != "" ){
        document.getElementById("subtasks2").style.display = "flex"
        let value = document.getElementById("subtasksv").value
        document.getElementById("subtasks2").innerHTML = ""
        document.getElementById("subtasksv").value = ""
        subtaskse.push({
            "subtask" : value,
            "done" : 0
        })
        
        for(let i = 0; i < subtaskse.length ; i++){
            document.getElementById("subtasks2").innerHTML +=/*html*/`
                <div class="sub" id="da${i}" ><div>${subtaskse[i]["subtask"]} </div><div><img onclick="removeSubtask('${subtaskse[i]['subtask']}')" src="assets/img/close.png" alt=""></div></div>`;
        }
    }else{return}
}

function addsubtask2(s,d){
    show()
    document.getElementById("subtasks2").style.display = "block"
    document.getElementById("subtasks2").innerHTML = ""
    subtaskse.push({
        "subtask" : s,
        "done" : d
    })
    for(let i = 0; i < subtaskse.length ; i++){
        document.getElementById("subtasks2").innerHTML +=/*html*/`
            <div class="sub" id="da${i}" ><div>${subtaskse[i]["subtask"]} </div><div><img onclick="removeSubtask('${subtaskse[i]['subtask']}')" src="assets/img/close.png" alt=""></div></div>`;
    }
}

function removeSubtask(value){
    subtaskse = removeItem(subtaskse, value)
    document.getElementById("subtasks2").innerHTML = ""
    if(subtaskse == undefined){
        subtaskse = []
        document.getElementById("subtasks2").style.display = "none"
    }
    else {
        for(let i = 0; i < subtaskse.length ; i++){
            document.getElementById("subtasks2").innerHTML +=/*html*/`
                <div class="sub" id="da${i}" ><div>${subtaskse[i]} </div><div><img onclick="removeSubtask('da${i}')" src="assets/img/close.png" alt=""></div></div>
            `;
        }
    }
}

function removeItem(array, itemToRemove) {
    const index = array.indexOf(itemToRemove);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function addTask(){
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let duedate = document.getElementById("duedate").value
    let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`; 
    
    if(title != "" && description != "" && duedate != ""   && assigned != [] && prio != "" && category1 != ""){
        fetch(accountUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "title": title,
                "description": description,
                "assigned": assigned,
                "duedate": duedate,
                "prio":prio,
                "category":category1,
                "subtasks":subtaskse,
                "status":"todo",
                "done":0
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error creating account:", error);
        });
        clearb()
        } else{
            alert("Biite fülle alle Felder bis auf subtaks aus und wähle eine Priorität aus.")
        }
}

function date(){
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("duedate").value = today
}
    

function clearb(){
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("leftSide").innerHTML = `
    <div style="display: flex;flex-direction: column;position: relative;bottom: 20px;">
                    <label for="Title">Title<sup style="color: #ff8090;">*</sup></label>
                    <textarea name="Title" id="title2" placeholder="Enter a title"></textarea>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <label for="Description">Description</label>
                    <textarea name="Description" id="description" placeholder="Enter a Description"></textarea></div>
                <div style="display: flex;flex-direction: column;font-size: 16px;">
                    <label for="">Assigned to</label>
                    <div onclick="assign()" id="assigned" value="Select contacts to assign" type="search"><div class="select">Select Contacts to Assign</div></div>
                <div id="assignImg" onclick="assign()"><img src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>
                <div id="contactse"></div>`;
    document.getElementById("rightSide").innerHTML = `
       <div style="display: flex;flex-direction: column;">
                    <label for="DueDate" style="margin-bottom: 5px;">Due Date <sup style="color: #ff8090;">*</sup></label>
                    <input id="duedate" type="date" style="border-radius: 5px;border: 1px solid grey;padding: 8px 6px;width: calc(100% - 50px);height: 42px;width: calc(100% - 11px);">
                </div>
                <div style="display: flex;flex-direction: column;margin-top: 17px;width: calc(100% - 11px);">
                    <label for="Prio" style="margin-bottom: 5px;">Prio</label>
                    <div id="Prio" style="display: flex;width: calc(100% - 50px);width: calc(100% + 0px);">
                        <div onclick="addPrio('urgent')" id="Urgente" style="width: calc(30%);margin-right: 5%;">
                            <button id="Urgenteb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 100%;background-color: white;border-radius: 5px;border: 1px solid grey;font-size: 17px;cursor: pointer;">
                                <div>Urgent</div>
                                <div>
                                    <img id="urgent" src="assets/img/urgent.png" alt="Urgent Prority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;">
                                </div>
                            </button>
                        </div>
                        <div onclick="addPrio('medium')" id="Mediume" style="width: calc(30%);margin-right: 5%;">
                            <button id="Mediumeb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                <div>Medium</div>
                                <div><img id="medium" src="assets/img/medium.png" alt="Medium Priority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;"></div></button></div>
                        <div onclick="addPrio('low')" id="Lowe" style="width: calc(30%);">
                            <button id="Loweb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;cursor: pointer;">
                                <div>Low</div>
                                <div><img id="low" src="assets/img/low.png" alt="Low Priority Button" style="width: 30px;margin-left: 5px;position: relative;top: 2px;"></div>
                            </button>
                        </div>
                    </div>
            </div>
            <div style="margin-top: 17px;display: flex;flex-direction: column;/* position: relative; */top: 11px;">
                <label for="Category" style="margin-bottom: 5px;width: 300px;">Category <sup style="color: #ff8090;">*</sup></label>
                <div onclick="category()" id="category" type="search" value="" style="cursor: pointer;width: calc(100% - 33px);height: 20px;padding: 10px;border-radius: 5px;border: 1px solid grey;background-color: white;font-size: 17px;z-index: 1;"><span id="span">Select Task Category</span><div style="position: absolute;left: calc(100% - 30px);top: 217px;right: 0px;"><img id="menu" src="assets/img/category_menu.png" alt="" style="width: 18px;position: relative;right: 10px;"></div>  
            </div>
            <div id="categories" style="display: none;width: calc(100% - 33px);height: fit-content;background-color: white;padding: 10px;position: absolute;right: 11px;top: 228px;border: 1px solid grey;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 18px;z-index: 0;"></div>
            <div id="tasks" style="margin: 17px 0;width: calc(100% - 12px);position: relative;left: 1px;top: 0px;"><label style="margin-top: 20px;" for="Subtasks">Subtasks</label>
                <div style="position: relative;"><textarea placeholder="Add new subtask" name="Subtasks" id="subtasksv" style="width: calc(100% - 1px);height: 44px;resize: none;border-radius: 5px;margin-top: 5px;padding: 12px 0 0 10px;position: relative;"></textarea><img src="" alt=""></div>
                <div id="posiAdd" style="width: 14px;height: 14px;position: absolute;left: calc(100% + -19px);top: 36px;"><img onclick="addsubtask()" src="assets/img/add.png" alt="add" style="cursor: pointer;width: 17px;position: relative;right: 9px;"></div>
                <div id="subtasks2" style="display: none;width: calc(100% - 11px);flex-direction: column;height: 60px;justify-content: space-between;padding: 17px 10px 0px;position: relative;bottom: 30px;border-width: 1px;border-style: solid;border-color: transparent grey grey;border-image: initial;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;overflow-y: scroll;scrollbar-width: none;"></div>
            </div>`;
    subtaskse = []
    prio = ""
    assigned = []
    category1 = ""
}