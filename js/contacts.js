let API_URL = "https://join-d67a5-default-rtdb.europe-west1.firebasedatabase.app/";
let contactsData = [];
let contactColors = {};

const colors = [
    '#A8A8A8', '#D1D1D1', '#CDCDCD', '#007CEE', '#FF7A00', '#FF5EB3', 
    '#6E52FF', '#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FFA35E', 
    '#FC71FF', '#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646', '#FFBB2B'
];

function checkWindowWidth2() {
    let condi = 0
    if (window.innerWidth < 700 && window.innerHeight < 800 && condi == 0) {
        document.getElementById("ContactArea").style.height = "calc(100% - 130px)"
        document.getElementById("ContactArea2").style.display = "none"
        document.getElementById("ContactArea2").style.display = "none"
        document.getElementById("ContactArea2").style.left = 0
        document.getElementById("ContactArea2").style.width = "100%"
        document.getElementById("ContactArea2").style.height = "calc(100% - 129px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 30px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 254px)"
        document.getElementById("ContactArea3").style.left = "0"
        document.getElementById("ContactArea3").style.zIndex = "4"
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        document.getElementById("NavLeft").style.flexDirection = "row"
        condi = 1
    }
    if (window.innerWidth < 700 && window.innerHeight > 800 && condi == 0) {
        document.getElementById("ContactArea2").style.display = "none"
        document.getElementById("ContactArea3").style.display = "none"
        document.getElementById("ContactArea2").style.left = 0
        document.getElementById("ContactArea2").style.width = "100%"
        document.getElementById("ContactArea2").style.height = "calc(100% - 129px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 30px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 254px)"
        document.getElementById("ContactArea3").style.left = "0"
        document.getElementById("ContactArea3").style.zIndex = "4"
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        document.getElementById("NavLeft").style.flexDirection = "row"
        condi = 1
    }

    if (window.innerWidth > 700 && window.innerWidth < 1300 && window.innerHeight > 800 && condi == 0) {
        document.getElementById("ContactArea2").style.display = "block"
        document.getElementById("ContactArea2").style.left = 360
        document.getElementById("ContactArea").style.height = "calc(100% - 130px)"

        document.getElementById("ContactArea2").style.width = "calc(100% - 360px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 129px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 410px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 336px)"
        document.getElementById("ContactArea3").style.left = "360"
        document.getElementById("ContactArea3").style.zIndex = "4"
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        document.getElementById("NavLeft").style.flexDirection = "row"
        condi = 1
    }
    
    if (window.innerWidth < 1300 && window.innerHeight > 800 && condi == 0) {
        document.getElementById("ContactArea").style.left = "0"
        document.getElementById("ContactArea2").style.left = "360"
        document.getElementById("ContactArea2").style.display = "none"
        document.getElementById("ContactArea").style.height = "calc(100% - 130px)"
        document.getElementById("ContactArea2").style.width = "calc(100% - 360px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 129px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 410px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 335px)"
        document.getElementById("ContactArea3").style.left = "360"
        document.getElementById("ContactArea3").style.zIndex = "4"
        document.getElementById("NavLeft").style.flexDirection = "row"
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        document.getElementById("NavLeft").style.flexDirection = "column"
        condi = 1
    }



    if (window.innerWidth < 1300 && window.innerHeight < 800 && condi == 0) {
        document.getElementById("ContactArea2").style.left = "360"
        document.getElementById("ContactArea2").style.display = "block"
        document.getElementById("ContactArea3").style.display = "block"
        document.getElementById("ContactArea").style.height = "calc(100% - 130px)"
        document.getElementById("ContactArea2").style.width = "calc(100% - 360px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 130px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 410px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 320px)"
        document.getElementById("ContactArea3").style.left = "360"
        document.getElementById("ContactArea3").style.zIndex = "4"
        document.getElementById("NavLeft").style.flexDirection = "row"
        document.getElementById("Navbar").style.height = "70px"
        document.getElementById("Navbar").style.width = "100%"

        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        document.getElementById("NavLeft").style.flexDirection = "row"
        condi = 1
    }

    if (window.innerWidth > 1300 && window.innerHeight < 800 && condi == 0) {
        console.log("Hello")
        document.getElementById("header").style.left = "0"
        document.getElementById("ContactArea2").style.left = "360"
        document.getElementById("ContactArea2").style.display = "block"
        document.getElementById("ContactArea3").style.display = "block"
        document.getElementById("ContactArea").style.height = "calc(100% - 130px)"
        document.getElementById("ContactArea2").style.width = "calc(100% - 360px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 130px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 410px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 320px)"
        document.getElementById("ContactArea3").style.left = "360"
        document.getElementById("ContactArea3").style.zIndex = "4"
        document.getElementById("NavLeft").style.flexDirection = "row"
        document.getElementById("Navbar").style.height = "70px"
        document.getElementById("Navbar").style.width = "100%"

        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "column";
        }
        document.getElementById("NavLeft").style.flexDirection = "row"
        condi = 1
    }

    

    if (window.innerWidth < 1300){
        document.getElementById("ContactArea").style.left = "0"
        document.getElementById("ContactArea").style.top = "60px"
    }

    if (window.innerWidth > 1300 && window.innerHeight > 800 && condi == 0) {
        document.getElementById("ContactArea2").style.left = "580"
        document.getElementById("ContactArea2").style.width = "calc(100% - 580px)"
        document.getElementById("ContactArea").style.height = "calc(100% - 75px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 90px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 640px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 328px)"
        document.getElementById("ContactArea3").style.left = "580"
        document.getElementById("ContactArea3").style.zIndex = "4"
        document.getElementById("NavLeft").style.flexDirection = "column"
        document.getElementById("ContactArea").style.clipPath = "none"
        document.getElementById("ContactArea").style.zIndex = "3"
        document.getElementById("ContactArea").style.left = "230px"
        document.getElementById("ContactArea").style.top = "90px"


        condi = 1
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "row";
        }
    }

    if (window.innerWidth > 1300 && window.innerWidth < 2000 && window.innerHeight < 800 && condi == 0) {
        document.getElementById("ContactArea").style.top = "50px"
        document.getElementById("ContactArea2").style.left = "580"
        document.getElementById("ContactArea2").style.width = "calc(100% - 580px)"
        document.getElementById("ContactArea").style.height = "calc(100% - 50px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 50px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 640px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 328px)"
        document.getElementById("ContactArea3").style.left = "580"
        document.getElementById("ContactArea3").style.zIndex = "4"
        document.getElementById("NavLeft").style.flexDirection = "column"
        document.getElementById("Navbar").style.left = "0"
        document.getElementById("Navbar").style.width = "230px"
        document.getElementById("Navbar").style.height = "100%"
        document.getElementById("ContactArea").style.clipPath = "none"

        condi = 1
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "row";
        }
    }

    
    if (window.innerWidth < 500) {
        document.getElementById("help").style.display = "none"
    } else {
        document.getElementById("help").style.display = "block"
    }
    if (window.innerWidth > 2000 && window.innerHeight < 800 && condi == 0){
        document.getElementById("ContactArea").style.top = "50px"
        document.getElementById("ContactArea2").style.left = "580"
        document.getElementById("ContactArea2").style.width = "calc(100% - 580px)"
        document.getElementById("ContactArea").style.height = "calc(100% - 50px)"
        document.getElementById("ContactArea2").style.height = "calc(100% - 50px)"
        document.getElementById("ContactArea3").style.width = "calc(100% - 640px)"
        document.getElementById("ContactArea3").style.height = "calc(100% - 328px)"
        document.getElementById("ContactArea3").style.left = "580"
        document.getElementById("ContactArea3").style.zIndex = "4"
        document.getElementById("NavLeft").style.flexDirection = "column"
        document.getElementById("Navbar").style.left = "0"
        document.getElementById("Navbar").style.width = "230px"
        document.getElementById("Navbar").style.height = "100%"
        document.getElementById("ContactArea").style.clipPath = "none"

        condi = 1
        var elements = document.getElementsByClassName("NavGap");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.flexDirection = "row";
        }
    }
}

window.addEventListener('resize', checkWindowWidth2);

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
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

async function fetchData() {
    let response = await fetch(API_URL + ".json");
    if (!response.ok) {
        throw new Error('Error');
    }
    let data = await response.json();
    if (!Array.isArray(data)) {
        throw new Error('Error');
    }
    return data;
}

function groupContacts(contacts) {
    return contacts.reduce((grouped, contact) => {
        let firstLetter = contact.Name[0].toUpperCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(contact);
        return grouped;
    }, {});
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

let response7;
let accounts = []
const BASE_URL6 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts.json"
async function loadAccounts(){
    response7 = await fetch(BASE_URL6)
    response7 = await response7.json()
    for(r in response7){
        accounts.push(response7[r])
    }
}

function renderContacts(groupedContacts) {
    let contacts = document.getElementById('contactlist');
    contacts.innerHTML = '';
    for (let letter in groupedContacts) {
        contacts.innerHTML += `<h3>${letter}</h3><div class="vector">`;
        for (let contact of groupedContacts[letter]) {
            let initials = getInitials(contact.Name);
            let color = getRandomColor();
            contactColors[contactsData.indexOf(contact)] = color;

            contacts.innerHTML += /*html*/ `
                <div class="single-contact" onclick="showContactDetails(${contactsData.indexOf(contact)})">
                    <div class="contact-icon" style="background-color: ${color};">${initials}</div>
                    <div>
                        <h3>${contact.Name}</h3>
                        <a href="mailto:${contact.Email}">${contact.Email}</a>
                    </div>
                </div>
                <br>
            `;
        }
        contacts.innerHTML += `</div>`;
    }
}

// async function loadData3() {
//     try {
//         contactsData = await fetchData();
//         contactsData.sort((a, b) => a.Name.localeCompare(b.Name));
//         let groupedContacts = groupContacts(contactsData);
//         renderContacts(groupedContacts);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

function showContactDetails(index) {
    let contact = contactsData[index];
    let color = contactColors[index];
    
    let chosenContact = document.getElementById('chosenContacts');
    chosenContact.style.display = 'block';

    let contactIcon = chosenContact.querySelector('.contact-icon');
    let contactName = chosenContact.querySelector('.contact-name');
    let emailAddress = chosenContact.querySelector('.email-address');
    let phoneNumber = chosenContact.querySelector('.phone-number');

    contactIcon.innerText = getInitials(contact.Name);
    contactIcon.style.backgroundColor = color;
    contactName.innerText = contact.Name;
    emailAddress.innerText = contact.Email;
    phoneNumber.innerText = contact.Phone;
}

function getInitials(name) {
    let nameParts = name.split(' ');
    let initials = '';
    for (let i = 0; i < nameParts.length; i++) {
        initials += nameParts[i].charAt(0).toUpperCase();
    }
    return initials;
}

function init() {
    loadData3();
}


function deleteContact(){
    document.getElementById("Name").value = ""
    document.getElementById("Email").value = ""
    document.getElementById("Phone").value = ""
    document.getElementById("userText").innerHTML = `<img src='assets/img/Joinlogovector.svg'>`
}

let color;
let length;
function saveContact(r,color2,div1,div2,div3){
    document.getElementById("missing").innerHTML = ""
    let Name = document.getElementById("Name").value
    let Email = document.getElementById("Email").value
    let Phone = document.getElementById("Phone").value
    if(Name != "" || Email != "" || Phone != ""){

    if(r != null){
        postData(`/contacts/${r}`,
        {
            "Name":Name,
            "Email":Email,
            "Phone":Phone,
            "color":color2
        });
    } else{
        postData(`/contacts`,
        {
            "Name":Name,
            "Email":Email,
            "Phone":Phone,
            "color":color
        });
    }
    
    document.getElementById("Name").value = ""
    document.getElementById("Email").value = ""
    document.getElementById("Phone").value = ""
    document.getElementById("userText").innerHTML = `<img src='assets/img/Joinlogovector.svg'>`

    loadData3('./contacts',div1,div2,div3)
    if(document.getElementById("contactModal").style.display == "flex"){
        document.getElementById("contactModal").style.display = "none"
    }}
// }else{
//     if(document.getElementById("Name").value == ""){
//         document.getElementById("missing").innerHTML += /*html*/`
            
//         `;
//     }
//     if(document.getElementById("Email").value == ""){
//         document.getElementById("missing").innerHTML += /*html*/`
            
//         `;
//     }
//     if(document.getElementById("Phone").value == ""){
//         document.getElementById("missing").innerHTML += /*html*/`
            
//         `;
//     }
// }
}

async function deleteData(path=""){
    let response = await fetch(BASE_URL + path + ".json",{
        method: "DELETE", 
    });
    loadData3('./contacts')
    document.getElementById("ContactArea3").innerHTML=""
    return response = await response.json()
}

function openContactSheet(){
    let letters = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("UserLogo").style.backgroundColor = color
    document.getElementById("userText").innerHTML = `<img src='assets/img/Joinlogovector.svg'>`
    document.getElementById("button").innerHTML =`<button style="background-color: white;border: none;" type="submit" onclick="saveContact()"><img id="save" src="assets/img/save.png" alt=""></button>`
    if(document.getElementById("contactModal").style.display == "none"){
        document.getElementById("contactModal").style.display = "flex"
    }
}

function closeb(){
    document.getElementById("Name").value = ""
    document.getElementById("Email").value = ""
    document.getElementById("Phone").value = ""
    document.getElementById("userText").innerHTML = `<img src='assets/img/Joinlogovector.svg'>`
    if(document.getElementById("contactModal").style.display == "flex"){
        document.getElementById("contactModal").style.display = "none"
    }
}

function changeBorder(container){
    document.getElementById(container).style.borderBlockColor = "#29abe2"
}

let firstLetter;
let secondLetter;
let condition2 = true
function renderUser(){
    let userName = document.getElementById("Name").value
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
    if(userName.length == 0){
        document.getElementById("userText").innerHTML = `<img src='assets/img/Joinlogovector.svg'>`
    }else{
        document.getElementById("userText").innerHTML = `${firstLetter}${secondLetter}`
    }  
}

const BASE_URL = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/"
async function loadData3(path="",div1,div2,div3){
    let response = await fetch(BASE_URL + path + ".json")
    response = await response.json()
    length = response.length
    loadContacts(response,div1,div2,div3)
}


const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
let a = 0
let diva = [];
let diva2 = [];
let diva3 = [];
function loadContacts(response,div1,div2,div3) {
    console.log(response)
    const array2 = [{}]
    document.getElementById("contacts").innerHTML = ""
    for(r in response){
        response[r]["r"] = r
        array2.push(response[r])
    }
    const groupedData = groupByFirstLetter(array2);
    let index = 0;
    for(let i = 0 ; i < alphabet.length;i++){
        let array3 = []
        if(groupedData[alphabet[i]] == undefined){
            a += 1
        }else{
            document.getElementById("contacts").innerHTML += /*html*/`
            <div style="margin-left: 25px;margin-bottom: 15px;">${alphabet[i]}</div>
            <hr>
            `;
            for(let j = 0 ;j < groupedData[alphabet[i]].length;j++){
                array3.push(groupedData[alphabet[i]][j])
            }
        }
        let sortedData = sortArrayByKey(array3, 'Name');
        
        for(let k = 0;k < sortedData.length; k++){  
            let condition2 = true
            let userName = sortedData[k]["Name"]
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
            
            document.getElementById("contacts").innerHTML += `
            <div id="a${index}" style="display:flex;cursor:pointer;" onclick="openContact('${sortedData[k]['color']}','${sortedData[k]['Name']}','${sortedData[k]['Email']}','${sortedData[k]['Phone']}','${sortedData[k]['r']}','a${index}','b${index}','NameLeft${index}')">
                <div id="b${index}" class="round" style="background-color:${sortedData[k]["color"]};color:white;"> <div>${firstLetter}${secondLetter}</div></div>
                <div style="padding-top:15px">
                    <div id="NameLeft${index}">${sortedData[k]["Name"]}</div>
                    <a style="color:#007cee">${sortedData[k]["Email"]}</a>
                </div>
            </div><br>
        `;
        index += 1
        }
    }
    if(div1 != undefined){
        div2 = `b${div2.slice(1)}`
        if(diva.length > 0){
            document.getElementById(diva3[0]).style.color = "black"
            document.getElementById(diva[0]).style.backgroundColor = "white"
            document.getElementById(diva[0]).style.borderRadius = "10px";
            document.getElementById(diva2[0]).style.border = "3px solid white";
            diva = []
            diva2 = []
            diva3 = []
        }
        diva.push(div1)
        diva2.push(div2)
        diva3.push(div3)
        document.getElementById(diva3[0]).style.color = "white"
        document.getElementById(div1).style.backgroundColor = "#2a3647"
        document.getElementById(div1).style.borderRadius = "10px";
        document.getElementById(div2).style.border = "3px solid white";
    }
}
let divb = [];
let divb2 = [];
let divb3 = [];

function closeContact(){
    document.getElementById("ContactArea2").style.display ="none"
    document.getElementById("ContactArea3").style.display ="none"
    document.getElementById("closeC").style.display ="none"
    document.getElementById("ContactArea2").style.zIndex ="3"
    document.getElementById("ContactArea3").style.zIndex ="3"
    document.getElementById("ContactArea2").style.backgroundColor ="#f6f7f8"
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

function openContact(color,name,email,phone,r,div,div2,div3){

    if(window.innerWidth < 700){
        document.getElementById("ContactArea2").style.display ="block"
        document.getElementById("ContactArea2").style.backgroundColor ="white"
        document.getElementById("closeC").style.display ="block"
        document.getElementById("ContactArea2").style.width ="100%"
        document.getElementById("ContactArea2").style.zIndex ="4"
        document.getElementById("ContactArea3").style.display ="block"
        document.getElementById("ContactArea3").style.left ="0"
        document.getElementById("ContactArea3").style.width ="calc(100% - 30px)"
        document.getElementById("ContactArea3").style.zIndex ="4"

    }else{
        document.getElementById("ContactArea2").style.display ="block"
        document.getElementById("ContactArea3").style.display ="block"
        document.getElementById("closeC").style.display ="none"
    }

    if(divb.length > 0){
        document.getElementById(divb3[0]).style.color = "black"
        document.getElementById(divb[0]).style.backgroundColor = "white"
        document.getElementById(divb[0]).style.borderRadius = "10px";
        document.getElementById(divb2[0]).style.border = "3px solid white";
        divb = []
        divb2 = []
        divb3 = []
    }
    divb.push(div)
    divb2.push(div2)
    divb3.push(div3)
    document.getElementById(divb3[0]).style.color = "white"
    document.getElementById(div).style.backgroundColor = "#2a3647"
    document.getElementById(div).style.borderRadius = "10px";
    document.getElementById(div2).style.border = "3px solid white";
    let userName = name
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
    document.getElementById("ContactArea3").innerHTML = `
        <div id="Contact"><div id="ContactLogo" style="background-color:${color}"><div>${firstLetter}${secondLetter}</div></div><div id="element"><div id="ContactName">${name}</div><div id="div1"><div id="div2" onclick="editer('${color}','${name}','${email}','${phone}','${r}','${div}','${div2}','${div3}')" style="cursor:pointer"><div><img id="img_size" src="assets/img/Edit.png"></div><div>Edit</div></div><div onclick="deleteData('/contacts/${r}')"  id="div3" style="cursor:pointer"><div><img id="img_size" src="assets/img/delete2.png"></div><div>Delete</div></div></div></div></div>
        <div id="style">Contact Information</div><br>
        <div id="gapfont">Email</div>   
        <a style="color:#29abe2;text-decoration:none;" href="mailto:">${email}</a>
        <div id="gapfont">Phone</div>
        <div><a href="tel:${phone}">${phone}</a></div>
    `;     
}

function editer(color,name,email,phone,r,div1,div2,div3){
    if(document.getElementById("contactModal").style.display == "none"){
        document.getElementById("contactModal").style.display = "flex"
    }
    document.getElementById("UserLogo").style.backgroundColor = color
    document.getElementById("Name").value = name
    document.getElementById("Email").value = email
    document.getElementById("Phone").value = phone
    document.getElementById("button").innerHTML = `<button style="background-color: white;border: none;" type="submit" onclick="saveContacte('${r}','${color}','${div1}','${div2}','${div3}')"><img id="save" src="assets/img/save.png" alt=""></button>`
    renderUser()
}

function handleSubmit(event) {
    event.preventDefault();
    }

    function saveContacte(a, b, c, d, e) {
        document.getElementById("missing").innerHTML = ""
        if(document.getElementById("Name").value != "" ||
        document.getElementById("Email").value != "" ||
        document.getElementById("Phone").value != ""){

        

        let color = document.getElementById("UserLogo").style.backgroundColor;
        let name = document.getElementById("Name").value;
        let email = document.getElementById("Email").value;
        let phone = document.getElementById("Phone").value;

        let contactKey = a;

        let url = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/contacts/${contactKey}.json`;

        fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
                "Name": name,
                "Email": email,
                "Phone": phone,
                "color": color
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
            condi = false
            loadData3('./contacts');
            openContact(color,name,email,phone,a,c,d,e)
            document.getElementById("ContactArea3").innerHTML = ""
            
            if(document.getElementById("contactModal").style.display == "flex"){
                document.getElementById("contactModal").style.display = "none"
            }
        })
        .catch(error => {
            console.error("Error updating data:", error);
        });
        document.getElementById("Name").value = ""
        document.getElementById("Email").value = ""
        document.getElementById("Phone").value = ""
        document.getElementById("userText").innerHTML = `<img src='assets/img/Joinlogovector.svg'>`
    }else{
    if(document.getElementById("Name").value == ""){
        document.getElementById("missing").innerHTML += /*html*/`
            
        `;
    }
    if(document.getElementById("Email").value == ""){
        document.getElementById("missing").innerHTML += /*html*/`
            
        `;
    }
    if(document.getElementById("Phone").value == ""){
        document.getElementById("missing").innerHTML += /*html*/`
            
        `;
    }
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


function sortArrayByKey(array2, Name){
    // Filtert das Array, um nur Objekte mit dem angegebenen Schlüssel zu behalten
    const filteredArr = array2.filter(item => item && item[Name] !== undefined);
    // Sortiert das gefilterte Array nach dem angegebenen Schlüssel
    return filteredArr.sort((a, b) => {
        if (a[Name] < b[Name]) return -1;
        if (a[Name] > b[Name]) return 1;
        return 0;
    });
}

function groupByFirstLetter(array2){
    return array2.reduce((acc, item) => {
        if (item && item.Name) {
        const firstLetter = item.Name[0].toUpperCase(); // Erster Buchstabe, groß geschrieben
        if (!acc[firstLetter]) {
            acc[firstLetter] = []; // Erstellt ein neues Array für den Buchstaben
        }
        acc[firstLetter].push(item); // Fügt das Objekt dem Array des Buchstabens hinzu
        }
        return acc;
    }, {});
    }

async function postData(path="", data={}){
    let response = await fetch(BASE_URL + path + ".json",{
        method: "POST",
        header: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
    });
    return response = await response.json()
}
document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById('divLeft1');
    const imageElement5 = document.getElementById('Picture1');
    imageElement.addEventListener('mouseover', function() {
        imageElement5.src = "assets/img/summary_blue.png";
    });
    imageElement.addEventListener('mouseout', function() {
        imageElement5.src = "assets/img/SummaryLogo.png";
    });

    const imageElement2 = document.getElementById('divLeft2');
    const imageElement6 = document.getElementById('Picture2');
    imageElement2.addEventListener('mouseover', function() {
        imageElement6.src = "assets/img/addTask_blue.png";
    });
    imageElement2.addEventListener('mouseout', function() {
        imageElement6.src = "assets/img/AddTaskLogo.png";
    });

    const imageElement3 = document.getElementById('divLeft3');
    const imageElement7 = document.getElementById('Picture3');
    imageElement3.addEventListener('mouseover', function() {
        imageElement7.src = "assets/img/board_blue.png";
    });
    imageElement3.addEventListener('mouseout', function() {
        imageElement7.src = "assets/img/BoardLogo.png";
    });

    const imageElement4 = document.getElementById('divLeft4');
    const imageElement8 = document.getElementById('Picture4');
    imageElement4.addEventListener('mouseover', function() {
        imageElement8.src = "assets/img/contacts_blue.png";
    });
    imageElement4.addEventListener('mouseout', function() {
        imageElement8.src = "assets/img/ContactsLogo.png";
    });
});
