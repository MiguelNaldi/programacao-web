document.getElementById("formulario").addEventListener("submit", pesquisarFilme);

function pesquisarFilme(e){
    alert("Funcionando Função Pesquisar filme");
    e.preventDefault();
}

function buscarFilmes(filmePesquisa){
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=79e3fb1d' + filmePesquisa)
    .then(funcion (response)){
        console.log(response);
        var filmes = response.data.Search;
        var mostrarFilmes = '';

        for (var i = 0; i < filmes.lenght; i++){
            mostrarFilmes += 
        }
    }

    document.getElementById("filmes").innerHTML = mostrarFilmes;
    .catch(function (error) {
        console.log(error);
        
    });

}

function filmeDetalhes(id){
    sessionStorage.setItem(filmeID, id);
    window.location = "detalhes.html";
    return false;
    
}