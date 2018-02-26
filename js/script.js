function iniciar(){
    var nombre = document.getElementById('email');
    window.open("maps.html");
}

function verPass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
