function openArea(){
    if(document.getElementById("AccountArea").style.display == "none"){
        document.getElementById("AccountArea").style.display = "flex"
    } else{
        document.getElementById("AccountArea").style.display = "none"
    }
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

function loginguest(){
    window.location.href = "index.html" 
}



function guest2(){
    let guest = localStorage.getItem("guest")
    if(guest == true){
        document.getElementById("logout").style.display = "none"
        document.getElementById("login").style.display = "flex"

        let user = "Guest Guest"
        let userName = user
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
    }else{
    }
}


    
