//alert("JS Funcionando")
function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    console.log(email.value + senha.value); 
    if (email.value == "luanzito@master.com" && senha.value == "ReiDelas"){
        localStorage.setItem("acesso", true);
        window.location.href = "index.html"; 
        alert("Login Bem sucedido !!")
    
    } else {
        alert("Usuário ou Senha Inválidos !!");
    }
}