//alert("JS Funcionando")
function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    //console.log(email.value + senha.value); 
    if (email == "admin@admin.com" && senha == "admin"){
        localStorage.setItem("acesso", true);
        window.location.href = "index.html"; 
    
    } else {
        alert("Usuário ou Senha Inválidos !!");
    }
}