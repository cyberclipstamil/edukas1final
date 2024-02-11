function validate() {
    var user = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("inputPassword5").value;
    var passwordError = document.getElementById("passwordError");

  
    var users = ["lokesh", "vishwa"];
    var passwords = ["Lokesh12345", "Vishwa12345"];

    
    var isValid = false;
    for (var i = 0; i < users.length; i++) {
        if (user === users[i] && password === passwords[i]) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
      
        window.location.href = "admin.html";
    } else {
        passwordError.innerText = "Username or password incorrect"; 
    }
}


