const $form = document.querySelector('[data-js="formButton"]')
const $formInput = document.querySelector('[data-js="formInput"]')

$form.addEventListener("click", event => pesquisarFilme(event));

function pesquisarFilme(event){
    event.preventDefault();

    buscarFilmes($formInput.value)
    $formInput.value = ""
}

const buscarFilmes = async filmePesquisa => {
    try{
        const response = await axios.get(`http://www.omdbapi.com/?s=${filmePesquisa}&apikey=79e3fb1d`)

        const { Search } = response.data

        const filmes = [...Search]
        showFilmes(filmes)

    }catch(error){
        alert("Filme não encontrado")
        console.log(error)
    }
}
function showFilmes(filmes){
    const $card = document.querySelector('[data-js="card"]')

    // Retorna apenas 1 filme

        const $innerCard = document.createElement("div");
        $innerCard.setAttribute("class", "card")
        $innerCard.innerHTML = `
            <div style="z-index: 90">
                <h1>${filmes[0].Title} - ${filmes[0].Year}</h1>
                <img src=${filmes[0].Poster} alt="${filmes[0].Title}"/>
            </div>
        `
    
        $card.appendChild($innerCard)

    
    
    // Retorna até 10 filmes
  
    // filmes.forEach((film) => {
    //     const $innerCard = document.createElement("div");
    //     $innerCard.setAttribute("class", "card")
    //     $innerCard.innerHTML = `
    //         <div style="z-index: 90">
    //             <h1>${film.Title} - ${film.Year}</h1>
    //             <img src=${film.Poster} alt="${film.Title}"/>
    //         </div>
    //     `
    
    //     $card.appendChild($innerCard)
    // })

}