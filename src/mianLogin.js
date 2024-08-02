

function clickMy() {
    let userName = document.getElementById("userName");
    let myPassord = document.getElementById("password");
    let result = document.getElementById("strong");

    if (userName.value != "") {
        userName.style.borderColor = "darkorchid";
    }
    else {
        userName.style.borderColor = "red";
    }
    if (userName.value <= "") {
        result.innerHTML = "";
    }
    else if (userName.value <= 100) {
        result.innerHTML = "True";
    }
    else if (userName.value <= 200) {
        result.innerHTML = "Flse";
    }
    else {
        result.innerHTML = "";
    }


    if (myPassord.value != "") {
        myPassord.style.borderColor = "darkorchid";
    }
    else {
        myPassord.style.borderColor = "red";
    }

   
}

