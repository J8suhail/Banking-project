
function validatePassword(){
    let userPassword = document.forms["signupForm"]["userPassword"].value;
    let lowerCaseCheck = /[a-z]/g;
    let upperCaseCheck = /[A-Z]/g;
    let numberCheck = /[0-9]/g;
    if(userPassword.match(lowerCaseCheck)){
        document.getElementById("passwordErrorLC").innerText="lowercase provided";
    } else {
        document.getElementById("passwordErrorLC").innerText="lowercase required";
    }
    if(userPassword.match(upperCaseCheck)){
        document.getElementById("passwordErrorUC").innerText="uppercase provided";
    } else {
        document.getElementById("passwordErrorUC").innerText="uppercase required";
    }
    if(userPassword.match(numberCheck)){
        document.getElementById("passwordErrorN").innerText="number provided";
    } else {
        document.getElementById("passwordErrorN").innerText="number required";
    }
}
