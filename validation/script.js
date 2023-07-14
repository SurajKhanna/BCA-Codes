function validateField(){
    console.log("HELLO")

    let commentFieldVariable = document.getElementById("comment").value
    let nameFieldVariable = document.getElementById("yourname").value
    let addressFieldVariable = document.getElementById("address").value
    let emailFieldVariable = document.getElementById("email").value

    let flag = 0

    if(commentFieldVariable == ""){
        alert("Please Fill Comment Field")
        flag = 1
    } else if(nameFieldVariable == ""){
        alert("Please Fill Name Field")
        flag = 1
    } else if(addressFieldVariable == ""){
        alert("Please Fill Address Field")
        flag = 1
    } 
    
    
    if(emailFieldVariable == ""){
        alert("Please Fill Email Field")
        flag = 1       
    } else {
        if(!emailFieldVariable.includes(".") || !emailFieldVariable.includes("@")) {
            alert("EMAIL NOT CORRECT")
        }
    }



    if (flag == 0) {
        document.getElementById("status").innerHTML = "<p>UPLOADED</p>"
    }

}

function validateNumber() {
    console.log("validate number")

    let numberFieldVariable = document.getElementById("number").value

    if(numberFieldVariable.length > 10) {
        alert("Number Cant be Greater than 10 Digits")
        document.getElementById("number").value = ""
    } else if(numberFieldVariable.length < 10) {
        alert("Number Cant be Lesser than 10 Digits")
        document.getElementById("number").value = ""
    }


    // if(numberFieldVariable.length > 10 && numberFieldVariable.length < 10) {
    //     alert("Invalid Input")
    // }
}