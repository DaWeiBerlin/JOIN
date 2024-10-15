function updatePassword(r,response3){
    localStorage.setItem("name1", response3[r]["Name"])
    localStorage.setItem("email", response3[r]["Email"])
    localStorage.setItem("color", response3[r]["Color"])
    summary()
}

