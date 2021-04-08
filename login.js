//alert('Voce ganhou 1 milhão de bitcoins')
function logar(){
    var email = document.getElementById("Email");
    var senha = document.getElementById("Senha");

    if (email.value == "luanzito@master.com" && senha.value == "PaiTaOn"){
        localStorage.setItem(acesso, true);

        window.location.href = "inde.html";
    
    } else {
        alert("Usuário ou Senha Inválidos !!");
    }
}