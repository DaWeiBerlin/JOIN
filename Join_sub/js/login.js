let remember2 = 0
function updatePassword(r,response3,remember2){

    console.log(remember2)
    if(remember2 == 0){
        sessionStorage.setItem("name1", response3[r]["Name"])
        sessionStorage.setItem("email", response3[r]["Email"])
        sessionStorage.setItem("color", response3[r]["Color"])
        summary() 
    } else if(remember2 == 1){
        localStorage.setItem("name1", response3[r]["Name"])
        localStorage.setItem("remember", "yes")
        localStorage.setItem("email", response3[r]["Email"])
        localStorage.setItem("color", response3[r]["Color"])
        sessionStorage.setItem("name1", response3[r]["Name"])
        sessionStorage.setItem("email", response3[r]["Email"])
        sessionStorage.setItem("color", response3[r]["Color"])
        summary() 
    }   
}

function Login(){
    
    if(document.getElementById("JoinOverlay").style.display == "none"){
        document.getElementById("JoinOverlay").style.display = "flex"
    }
    setTimeout(login, 4000)
}

function login(){
    if(document.getElementById("JoinOverlay").style.display == "flex"){
         document.getElementById("JoinOverlay").style.display = "none"
    }
    loadData("./contacts")
}

let accept1 = false
function remember(){
    if(accept1 == true){
        document.getElementById("cubus").innerHTML = ""
        accept1 = false
    } else{
        document.getElementById("cubus").innerHTML = "<img id='hacken' src='assets/img/close.png'>"
        accept1 = true
    }
}

function signup(){
    if(document.getElementById("SignUpModal").style.display == "none"){
        document.getElementById("SignUpModal").style.display = "flex"
    }else{
        document.getElementById("SignUpModal").style.display = "none"
    }
}

let response3;
const BASE_URL = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/"
function login2(){
    loadData("./accounts")
}

function guest(){
    location.href = "summary.html"
}

function summary(){
    location.href = "summary.html"
}


async function loadData(path=""){
    response3 = await fetch(BASE_URL + path + ".json")
    response3 = await response3.json()
    loadContacts2(response3)
}

let LoginPassword = "";
let PasswordLength = 0;

function starLogin(){
    let pw = document.getElementById("Password").value;

    if (PasswordLength == 0 && pw.length >= 1) {
        LoginPassword = pw;
        PasswordLength = pw.length;
    } else if (pw.length < PasswordLength) {
        LoginPassword = LoginPassword.slice(0, -1);
        PasswordLength -= 1;
    } else if (pw.length > PasswordLength) {
        let newChar = pw.slice(-1);  // Get the last character entered
        LoginPassword += newChar;
        PasswordLength += 1;
    }
    let stars = "*".repeat(PasswordLength);
    document.getElementById("Password").value = stars;

}

let LoginPasswordSign = "";
let PasswordLengthSign = 0;

function starSignUp(){
    let pw = document.getElementById("SignUpPassword").value;

    if (PasswordLengthSign == 0 && pw.length >= 1) {
        LoginPasswordSign = pw;
        PasswordLengthSign = pw.length;
    } else if (pw.length < PasswordLengthSign) {
        LoginPasswordSign = LoginPasswordSign.slice(0, -1);
        PasswordLengthSign -= 1;
    } else if (pw.length > PasswordLengthSign) {
        let newChar = pw.slice(-1);  // Get the last character entered
        LoginPasswordSign += newChar;
        PasswordLengthSign += 1;
    }

    let stars = "*".repeat(PasswordLengthSign);
    document.getElementById("SignUpPassword").value = stars;

}

let LoginPasswordConfirm = "";
let PasswordLengthConfirm = 0;

function starConfirmSignUp(){
    let pw = document.getElementById("ConfirmPassword").value;

    if (PasswordLengthConfirm == 0 && pw.length >= 1) {
        LoginPasswordConfirm = pw;
        PasswordLengthConfirm = pw.length;
    } else if (pw.length < PasswordLengthConfirm) {
        LoginPasswordConfirm = LoginPasswordConfirm.slice(0, -1);
        PasswordLengthConfirm -= 1;
    } else if (pw.length > PasswordLengthConfirm) {
        let newChar = pw.slice(-1);  // Get the last character entered
        LoginPasswordConfirm += newChar;
        PasswordLengthConfirm += 1;
    }

    let stars = "*".repeat(PasswordLengthConfirm);
    document.getElementById("ConfirmPassword").value = stars;
}

function loadContacts2(response3) {
    let cubus = document.getElementById("cubus").innerHTML
    console.log(cubus)
    for(r in response3){
        console.log(response3[r]["Email"])
        console.log(response3[r]["Password"])
        if(document.getElementById("Email").value.trimEnd() == response3[r]["Email"] && LoginPassword.trimEnd() == response3[r]["Password"] && cubus == '<img id="hacken" src="assets/img/close.png">'){
            updatePassword(r,response3,"1")
            console.log("1")
        } else if( document.getElementById("Email").value.trimEnd() == response3[r]["Email"] && LoginPassword.trimEnd() == response3[r]["Password"]){
            updatePassword(r,response3,"0")
        }
    }    
}


function signUp() {
        if (LoginPasswordSign.length < 8) {
        alert("Das Passwort muss mindestens eine Länge von acht Zeichen haben!");
        return; // Exit the function if the password is too short
    }
    if (accept2 == true && LoginPasswordConfirm == LoginPasswordSign && LoginPasswordSign.length >= 8) {
        let name = document.getElementById("SignUpName").value;
        let email = document.getElementById("SignUpEmail").value;
        let password = LoginPasswordSign; // Use the confirmed password
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generates a random hex color

        let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts.json`; 
        let contactsUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/contacts.json`;

        fetch(accountUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "Name": name,
                "Email": email,
                "Password": password,
                "Color": color
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

        // Post to contacts
        fetch(contactsUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "Name": name,
                "Email": email,
                "Phone": "",
                "Color": color
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
        
        });

        // Reset form fields
        document.getElementById("SignUpName").value = "";
        document.getElementById("SignUpEmail").value = "";
        document.getElementById("SignUpPassword").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
    } else {
        alert("Please ensure all fields are filled correctly and passwords match.");
    }
}

let accept2 = false;
function accept(){
    if(accept2 == true){
        document.getElementById("cubus2").innerHTML = ""
        accept2 = false
    } else{
        document.getElementById("cubus2").innerHTML = "<img id='hacken2' src='assets/img/close.png'>"
        accept2 = true
    }
}

function backToLogin(){
    if(document.getElementById("SignUpModal").style.display == "none"){
        document.getElementById("SignUpModal").style.display = "flex"
    }else{
        document.getElementById("SignUpModal").style.display = "none"
    }
}
