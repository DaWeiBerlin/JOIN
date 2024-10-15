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
const BASE_URL = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/"
loadData("./accounts")

async function loadData(path=""){
    response3 = await fetch(BASE_URL + path + ".json")
    response3 = await response3.json()
    length = response3.length
}

let array = []
function assign(){
    document.getElementById("contactse").innerHTML = ""
    if(document.getElementById("contactse").style.display == "none"){
        document.getElementById("contactse").style.display = "flex"
    } else{
        document.getElementById("contactse").style.display = "none"
        document.getElementById("contactse").innerHTML = ""
    }
    
    for(r in response3){
        var names = response3[r]["Name"]
        let b = response3[r]["Color"]
        array.push({
            "name":names,
            "color":b
        })
    }
    sortArrayByKey(array, "name")
    
    for(let i = 0; i < array.length; i++){
        let userName = array[i]["name"]
        let condition2 = true
        let firstLetter = ""
        let secondLetter = ""
        
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
        } else {
            secondLetter = userName.charAt(last + 1)
        } 
        if(userName.length == 0){
            firstLetter = ""
        }
        document.getElementById("contactse").innerHTML += /*html*/`
        <div style="display: flex;align-items: center;height: 40px;width: 100%;">
            <div style="background-color:${array[i]["color"]};width: 28px;height: 22px;filter: blur(0.1px);border-radius: 50%;margin-right: 10px;color: white;text-align: center;padding-top: 5px;">${firstLetter}${secondLetter}</div>
            <div>${array[i]["name"]}</div>
            <div id="d${i}" style="position: absolute;right: 8px;" onclick="assign2('${array[i]['name']}', 'd${i}')"><img style="width: 18px;" src="assets/img/add.png" alt=""></div>
        </div>`;
    }
    array = []
}

let assignvar = 0
function assign2(name, d){
    if(assignvar == 0){
        document.getElementById("assigned").innerHTML = ""
    }
    assigned.push(name)
    document.getElementById("assigned").innerHTML += /*html*/`<div id="e${assignvar}" class="assignFrame">${name} <img style="width:20px;height=20px;" onclick="removeAssign('${name}', '${d}', 'e${assignvar}')" src="assets/img/close.png"></div>`
    document.getElementById(d).style.display = "none"
    assignvar += 1
}

function removeAssign(name, d, e){
    console.log(e)
    assigned = assigned.filter(assignedName => assignedName !== name)
    assignvar -= 1
    document.getElementById(e).style.display = "none"
    if(assignvar == 0){
        document.getElementById("assigned").innerHTML = "Select Contacts to Assign"
    }
    assign()
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
        // document.getElementById("category").style.zIndex = "3"
        // document.getElementById("categories").style.zIndex = "2"
        let x = document.getElementById("menu");
        turn += 180;
        x.style.transform = "rotate("+ (turn % 360) +"deg)"
        document.getElementById("categories").style.display = "flex"
        document.getElementById("categories").style.height = "fit-content"
        document.getElementById("categories").innerHTML = /*html*/`
            <div id="cagtegoriesInner">
                <div class="category" onclick="addCategory('TechnicalTask')" style="margin-top: 15px;margin-bottom: 10px;">Technical Task</div>
                <div class="category" onclick="addCategory('UserStory')" style="margin-bottom: 5px;">User Story</div>
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

function addsubtask(){
    if(document.getElementById("subtasksv").value != "" ){
        document.getElementById("subtasks").style.display = "flex"
        let value = document.getElementById("subtasksv").value
        document.getElementById("subtasks").innerHTML = ""
        document.getElementById("subtasksv").value = ""
        subtaskse.push({
            "subtask" : value,
            "done" : 0
        })
        for(let i = 0; i < subtaskse.length ; i++){
            document.getElementById("subtasks").innerHTML +=/*html*/`
                <div class="sub" id="da${i}" ><div>${subtaskse[i]} </div><div><img onclick="removeSubtask('${subtaskse[i]}')" src="assets/img/close.png" alt=""></div></div>
            `;
        }
    }else{
        return
    }
}

function removeSubtask(value){
    subtaskse = removeItem(subtaskse, value)
    document.getElementById("subtasks").innerHTML = ""
    if(subtaskse == undefined){
        subtaskse = []
        document.getElementById("subtasks").style.display = "none"
    }
    else {
        for(let i = 0; i < subtaskse.length ; i++){
            document.getElementById("subtasks").innerHTML +=/*html*/`
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
            "status":"todo"
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
    })
    .catch(error => {
        console.error("Error creating account:", error);
    });
    clearb()
    } else{
        alert("Biite fülle alle Felder bis auf subtaks aus und wähle eine Priorität aus.")
    }
}

function clearb(){
    document.getElementById("leftSide").innerHTML = `
    <div style="display: flex;flex-direction: column;">
                <label for="Title">Title<sup style="color: #ff8090;">*</sup></label>
                <textarea name="Title" id="title" placeholder="Enter a title"></textarea>
            </div>
            <div style="display: flex;flex-direction: column;">
                <label for="Description">Description</label>
                <textarea name="Description" id="description" placeholder="Enter a Description" style=" margin-bottom: 20px;resize: none;width: 100%;border-radius: 5px;height: 128px;padding: 10px;margin-top: 5px;"></textarea></div>
            <div style="display: flex;flex-direction: column;font-size: 16px;">
                <label for="">Assigned to</label>
                <div onclick="assign()" id="assigned" value="Select contacts to assign" type="search" style="
                width: calc(100% - 24px);
                border-radius: 5px;
                border: 1px solid grey;
                margin-top: 5px;
                height: 17px;
                padding: 12px;
                background-color: white;
                font-size: 17px;
                ">Select Contacts to Assign</div>
            <div style="position: absolute;top: 297px;left: calc(100% - 26px);" onclick="assign()"><img src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>
            <div id="contactse" style="display: none;">
            </div>
    
    `;
    document.getElementById("rightSide").innerHTML = `
        <div style="display: flex;flex-direction: column;">
                <label for="DueDate" style="margin-bottom: 5px;">Due Date <sup style="color: #ff8090;">*</sup></label>
                <input id="duedate" type="date" style="border-radius: 5px;border: 1px solid grey;padding: 8px 6px;width: calc(100% - 50px);height: 42px;">
            </div>
            <div style="display: flex;flex-direction: column;margin-top: 17px;">
                <label for="Prio" style="margin-bottom: 5px;">Prio</label>
                <div id="Prio" style="display: flex;width: calc(100% - 50px);">
                    <div onclick="addPrio('urgent')" id="Urgente" style="width: calc(30%);margin-right: 5%;">
                        <button id="Urgenteb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 100%;background-color: white;border-radius: 5px;border: 1px solid grey;font-size: 17px;">
                            <div>Urgent</div>
                            <div>
                                <img id="urgent" src="assets/img/urgent.png" alt="Urgent Prority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;">
                            </div>
                        </button>
                    </div>
                    <div onclick="addPrio('medium')" id="Mediume" style="width: calc(30%);margin-right: 5%;">
                        <button id="Mediumeb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;">
                            <div>Medium</div>
                            <div><img id="medium" src="assets/img/medium.png" alt="Medium Priority Button" style="width: 30px;position: relative;top: 1px;margin-left: 5px;"></div></button></div>
                    <div onclick="addPrio('low')" id="Lowe" style="width: calc(30%);">
                        <button id="Loweb" style="display: flex;align-items: center;justify-content: center;height: 50px;width: 93px;border-radius: 5px;border: 1px solid grey;background-color: white;width: 100%;font-size: 17px;">
                            <div>Low</div>
                            <div><img id="low" src="assets/img/low.png" alt="Low Priority Button" style="width: 30px;margin-left: 5px;position: relative;top: 2px;"></div>
                        </button>
                    </div>
                </div>
        </div>
            <div style="margin-top: 17px;display: flex;flex-direction: column;">
                <label for="Category" style="margin-bottom: 5px;width: 300px;">Category <sup style="color: #ff8090;">*</sup></label>
                <div onclick="category()" id="category" type="search" value="" style="width: calc(100% - 70px);height: 20px;padding: 10px;border-radius: 5px;border: 1px solid grey;background-color: white;font-size: 17px;z-index: 1;">Select Task Category<div style="position: absolute;left: calc(100% - 77px);top: 217px;"><img id="menu" src="assets/img/category_menu.png" alt="" style="width: 18px;"></div>
                
            </div>
            <div id="categories" style="display: none;width: calc(100% - 70px);height: fit-content;background-color: white;padding: 10px;position: absolute;right: 48px;top: 233px;border: 1px solid rgb(255, 255, 255);border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;font-size: 18px;z-index: 0;">
            </div>
            <div id="tasks" style="margin: 17px 0;width: calc(100% - 50px);position: relative;left: 1px;z-index: -2;"><label style="margin-top: 20px;" for="Subtasks">Subtasks</label>
                <div style="position: relative;"><textarea placeholder="Add new subtask" name="Subtasks" id="subtasksv" style="width: 100%;height: 42px;resize: none;border-radius: 5px;margin-top: 5px;padding: 12px 0 0 10px;position: relative;"></textarea><img src="" alt=""></div>
                <div id="posiAdd" style="width: 14px;height: 14px;position: absolute;left: calc(100% + -27px);top: 36px;"><img onclick="addsubtask()" src="assets/img/add.png" alt="add" style="width: 14px;right: -202px;"></div>
                <div id="subtasks" style="display: none;"></div>
            </div>
            
            
        </div>
    `;
    subtaskse = []
    prio = ""
    assigned = []
    category1 = ""
    console.log(title)
    console.log(description)
    console.log(duedate)
    console.log(assigned)
    console.log(prio)
    console.log(category1)
    console.log(subtaskse)
}