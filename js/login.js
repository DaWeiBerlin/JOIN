

function checkWindowWidth() {
    if (window.innerWidth < 1300) {
        document.getElementById("JoinOverlay").innerHTML = `<div><img src="assets/img/Joinlogovector.png" alt=""></div>`
        document.getElementById("JoinOverlay").style.backgroundColor = "#2a3647"
    } else {
        document.getElementById("JoinOverlay").innerHTML = `<div><img src='assets/img/JoinLogo.png' alt=''></div>`
    }

    if (window.innerHeight < 700) {
        document.getElementById("JoinLogo").innerHTML = `<img src='assets/img/LogoforFaviconconstruction.svg' alt=''>`
        document.getElementById("GuestloginButton").innerHTML = `Guest`;
    }else {
        document.getElementById("JoinLogo").innerHTML = `<img src="assets/img/JoinLogo.png" alt="">`
    }
}

// Add an event listener for window resize
window.addEventListener('resize', checkWindowWidth);


let remember2 = 0
let response0;
let ipad;
function updateAccount(r,response0,remember2){
    if(remember2 == 0){
        sessionStorage.setItem("name1", response0[r]["Name"])
        sessionStorage.setItem("email", response0[r]["Email"])
        sessionStorage.setItem("color", response0[r]["Color"])
        sessionStorage.setItem("r", r)

        let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts/${r}.json`; 
        fetch(accountUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
                "Name": response0[r]["Name"],
                "Email": response0[r]["Email"],
                "Password": response0[r]["Password"],
                "Color": response0[r]["Color"],
                "remember":"no",
                "ip":ipad
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
        summary() 
    } else if(remember2 == 1){
        localStorage.setItem("name1", response0[r]["Name"])
        localStorage.setItem("remember", "yes")
        localStorage.setItem("email", response0[r]["Email"])
        localStorage.setItem("color", response0[r]["Color"])
        localStorage.setItem("r", r)
        sessionStorage.setItem("name1", response0[r]["Name"])
        sessionStorage.setItem("email", response0[r]["Email"])
        sessionStorage.setItem("color", response0[r]["Color"])
        sessionStorage.setItem("r", r)
        let accountUrl = `https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts/${r}.json`; 
        fetch(accountUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
                "Name": response0[r]["Name"],
                "Email": response0[r]["Email"],
                "Password": response0[r]["Password"],
                "Color": response0[r]["Color"],
                "remember":"yes",
                "ip":ipad
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
        summary() 
    }   
} 


async function redirect(){
    resp = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=06453fddbb2a4cf4ac436c51f9f836b4')
    resp = await resp.json()
    console.log(resp)
    ipad = resp["ip"]
    login3()
}

function login3(){
    for(r in responses12){
        if(responses12[r]["ip"] == ipad && responses12[r]["remember"] == "yes") {
            let name = responses12[r]["Name"]
            let color = responses12[r]["Color"]
            let email = responses12[r]["Email"]
            localStorage.setItem("name1", name)
            localStorage.setItem("email", email)
            localStorage.setItem("color", color)
            localStorage.setItem("r", r)
            sessionStorage.setItem("name1", name)
            sessionStorage.setItem("email", email)
            sessionStorage.setItem("color", color)
            sessionStorage.setItem("r", r)
            summary()
        }
    }
}


let responses12;
async function Login(){
    responses12 = await fetch("https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/accounts.json")
    responses12 = await responses12.json()
    if(document.getElementById("JoinOverlay").style.display == "none"){
        document.getElementById("JoinOverlay").style.display = "flex"
    }
    redirect()
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
      });
    setTimeout(login, 4000)
  
}

function login(){
    if(document.getElementById("JoinOverlay").style.display == "flex"){
         document.getElementById("JoinOverlay").style.display = "none"
    }
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

const BASE_URL01 = "https://join-49eff-default-rtdb.europe-west1.firebasedatabase.app/"
function login2(){
    loadDataLogin("./accounts")
}

function guest(){
    localStorage.clear()
    localStorage.setItem("guest",true)
    location.href = "summary.html"
    localStorage.setItem("","")
}

function summary(){
    location.href = "summary.html"
}


async function loadDataLogin(path=""){
    response0 = await fetch(BASE_URL01 + path + ".json")
    response0 = await response0.json()
    loadContacts2(response0)
}

let LoginPassword = "";
let PasswordLength = 0;
let visible = 0;

function starLogin() {
    let pw = document.getElementById("Password").value;

    if (pw == "") {
        document.getElementById("replace").innerHTML = `<img id="password" src="assets/img/LockLogin.png" alt="">`;
    } else {
        if (visible == 0) {
            document.getElementById("replace").innerHTML = `<img style="cursor:pointer" id="password" onclick="changevis('1')" src="assets/img/nonvisible.png" alt="">`;
        } else {
            document.getElementById("replace").innerHTML = `<img style="cursor:pointer" id="password" onclick="changevis('0')" src="assets/img/visible.png" alt="">`;
        }
    }

    if (PasswordLength == 0 && pw.length >= 1) {
        LoginPassword = pw;
        PasswordLength = pw.length;
    } else if (pw.length < PasswordLength) {
        LoginPassword = LoginPassword.slice(0, -1);
        PasswordLength -= 1;
    } else if (pw.length > PasswordLength) {
        let newChar = pw.slice(-1); 
        LoginPassword += newChar;
        PasswordLength += 1;
    }

    if (visible == 0) {
        let stars = "●".repeat(PasswordLength);
        document.getElementById("Password").value = stars;
    } else {
        document.getElementById("Password").value = LoginPassword;
    }
}

function changevis(a) {
    visible = (a == "1") ? 1 : 0;
    document.getElementById("Password").value = LoginPassword;
    starLogin();
}

let LoginPasswordSign = "";
let PasswordLengthSign = 0;
let visible2 = 0

function starSignUp(){
    let pw = document.getElementById("SignUpPassword").value;
    if (pw == "") {
        document.getElementById("replace2").innerHTML = `<img id="pic3" src="assets/img/LockLogin.png" alt="">`;
    } else {
        if (visible2 == 0) {
            document.getElementById("replace2").innerHTML = `<img style="cursor:pointer" id="pic3" onclick="changevis2('1')" src="assets/img/nonvisible.png" alt="">`;
        } else {
            document.getElementById("replace2").innerHTML = `<img style="cursor:pointer" id="pic3" onclick="changevis2('0')" src="assets/img/visible.png" alt="">`;
        }
    }
    let LoginPasswordSign2 = LoginPasswordSign
    
    if (PasswordLengthSign == 0 && pw.length >= 1) {
        LoginPasswordSign = pw;
        PasswordLengthSign = pw.length;
    } else if (pw.length < PasswordLengthSign) {
        LoginPasswordSign = LoginPasswordSign.slice(0, -1);
        PasswordLengthSign -= 1;
    } else if (pw.length > PasswordLengthSign) {
        let newChar = pw.slice(-1);
        LoginPasswordSign += newChar;
        PasswordLengthSign += 1;
    }
    
    if (visible2 == 0) {
        let stars = "●".repeat(PasswordLengthSign);
        document.getElementById("SignUpPassword").value = stars;
    } else {
        document.getElementById("SignUpPassword").value = LoginPasswordSign2;
    }
}

function changevis2(a) {
    visible2 = (a == "1") ? 1 : 0;
    document.getElementById("SignUpPassword").value = LoginPassword;
    starSignUp();
}

let LoginPasswordConfirm = "";
let PasswordLengthConfirm = 0;

let visible3 = 0;

function starConfirmSignUp(){
    let pw = document.getElementById("ConfirmPassword").value;
    if (pw == "") {
        document.getElementById("replace3").innerHTML = `<img id="pic4" src="assets/img/LockLogin.png" alt="">`;
    } else {
        if (visible3 == 0) {
            document.getElementById("replace3").innerHTML = `<img style="cursor:pointer" id="pic4" onclick="changevis3('1')" src="assets/img/nonvisible.png" alt="">`;
        } else {
            document.getElementById("replace3").innerHTML = `<img style="cursor:pointer" id="pic4" onclick="changevis3('0')" src="assets/img/visible.png" alt="">`;
        }
    }

    if (PasswordLengthConfirm == 0 && pw.length >= 1) {
        LoginPasswordConfirm = pw;
        PasswordLengthConfirm = pw.length;
    } else if (pw.length < PasswordLengthConfirm) {
        LoginPasswordConfirm = LoginPasswordConfirm.slice(0, -1);
        PasswordLengthConfirm -= 1;
    } else if (pw.length > PasswordLengthConfirm) {
        let newChar = pw.slice(-1);  
        LoginPasswordConfirm += newChar;
        PasswordLengthConfirm += 1;
    }

    if (visible3 == 0) {
        let stars = "●".repeat(PasswordLengthConfirm);
        document.getElementById("ConfirmPassword").value = stars;
    } else {
        document.getElementById("ConfirmPassword").value = LoginPasswordConfirm
    }
}

function changevis3(a) {
    visible3 = (a == "1") ? 1 : 0;
    document.getElementById("ConfirmPassword").value = LoginPasswordConfirm;
    starConfirmSignUp();
}

let emails2 = 0
let block = 0
let b = 5000
let emails = []
let index2 = 0
function loadContacts2(response0) {
    if(block == 1){
        alert("Nach einem gescheiterten Loginversuch müssen ein paar sekunden vergehen, bis ein neuer Loginversuch durchführbar ist.")
    }
    if(block == 0){
        let length = Object.keys(response0).length
        let cubus = document.getElementById("cubus").innerHTML
        let condi = 0
        for(r in response0){
            index2 += 1
            emails.push(response0[r]["Email"])
            if(document.getElementById("Email").value.trimEnd() == response0[r]["Email"] && LoginPassword.trimEnd() == response0[r]["Password"] && cubus == '<img id="hacken" src="assets/img/close.png">'){
                
                updateAccount(r,response0,"1")
                condi = 1
            }else if( document.getElementById("Email").value.trimEnd() == response0[r]["Email"] && LoginPassword.trimEnd() == response0[r]["Password"] && condi == 0){
                console.log("Hello")
                // return
                updateAccount(r,response0,"0")
                condi = 1
            }else if(length == index2 && document.getElementById("Email").value.trimEnd() == response0[r]["Email"] && condi == 0){
                condi = 1
            }else if(length == index2 && document.getElementById("Email").value.trimEnd() != response0[r]["Email"] && LoginPassword.trimEnd() != response0[r]["Password"] && condi == 0){
                document.getElementById("Email").value = ""
                document.getElementById("Password").value = ""
                condi = 1
                alert("Das eingegebene Passwort und die Email-Adresse befinden sich nicht in der Datenbank")
                setTimeout(function(){
                    block = 0
                    condi = 0
                },b)
            }else if(document.getElementById("Email").value.trimEnd() == response0[r]["Email"] && LoginPassword.trimEnd() != response0[r]["Password"] && condi == 0){
                document.getElementById("Password").value = ""
                alert("Das eingegebene Passwort stimmt nicht mit der Email-Adresse überein.")
                b += Math.floor(Math.random() * 10000) + 4000.394121412141
                block = 1
                setTimeout(function(){
                    block = 0
                    condi = 0
                },b)
            } 
        }      
    }
}

function replace(){
    document.getElementById("password").setAttribute("sry","assets/img/")
}

async function signUp() {
    console.log("TEST")
    resp = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=06453fddbb2a4cf4ac436c51f9f836b4')
    resp = await resp.json()
    ipad = resp["ip"]
    if (LoginPasswordSign.length < 8) {
        alert("Das Passwort muss mindestens eine Länge von acht Zeichen haben!");
        return
    }
    
    let name2 = document.getElementById("SignUpName").value.trimEnd()
    let last2 = name2.lastIndexOf(" ")
    let condi;
    if(last2 == -1){
        condi = 0
        alert("Bitte gib einen Nachnamen ein und versuche es erneut.")
        return
    }else{
        condi = 1
    }

    const email = document.getElementById("SignUpEmail").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email) ) {
        condi = 1;
    } else {
        alert("Bitte gib eine gültige Emailadresse ein");
        document.getElementById("SignUpEmail").value
        condi = 0;
    }

    if(accept2 != true){
        alert("Bitte ließ die Privacy Policy und klicke auf den leeren Kasten neben dem Text, um dein Einverständnis für die Datenspeicherung zu geben.")
    }

    if(LoginPasswordConfirm != LoginPasswordSign){
        alert("Die Sicherheitsüberprüfung für das Passwort ist fehlgeschlagen. Bitte achte darauf, dass das Passwort in den beiden dazugehörigen Feldern überinstimmt.")
        document.getElementById("SignUpPassword").value = "";
        document.getElementById("ConfirmPassword").value = ""
    }
    if (accept2 == true && LoginPasswordConfirm == LoginPasswordSign && LoginPasswordSign.length >= 8 && condi == 1) {
        let name = document.getElementById("SignUpName").value;
        let email = document.getElementById("SignUpEmail").value;
        let password = LoginPasswordSign;
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

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
                "Color": color,
                "ip":ipad
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

        fetch(contactsUrl, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "Name": name,
                "Email": email,
                "Phone": "",
                "color": color
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        document.getElementById("SignUpName").value = "";
        document.getElementById("SignUpEmail").value = "";
        document.getElementById("SignUpPassword").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("ConfirmPassword").value = ""
        backToLogin("Konto wurde erstellt")
        console.log("Hello")
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


