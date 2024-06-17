function test() {
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    
    localStorage.setItem("usernme", uid);
    localStorage.setItem("password", pw);
    localStorage.setItem("email", email);

    var user = localStorage.getItem("usernme");
    var pass = localStorage.getItem("password");
    var em = localStorage.getItem("email");

    alert("Username: " + user + "\nPassword: " + pass + "\nEmail: " + em);
}


