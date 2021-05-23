const $form = document.querySelector('[data-js="formButton"]');
const $formInput = document.querySelector('[data-js="formInput"]');
const $warningText = document.querySelector('[data-js="warningText"]');
const token = localStorage.getItem("@token:netflix");

$form.addEventListener("click", (event) => pesquisarFilme(event));

function pesquisarFilme(event) {
  event.preventDefault();

  buscarFilmes($formInput.value);
  $formInput.value = "";
}

if (!token) {
  window.location.href = "login.html";
}

const buscarFilmes = async (filmePesquisa) => {
  try {
    if (!token) {
      alert("Faça login antes de buscar");
      window.location.href = "login.html";
      return;
    }

    const response = await axios.get(
      `https://www.omdbapi.com/?s=${filmePesquisa}&apikey=79e3fb1d`
    );

    const { Search } = response.data;

    const filmes = [...Search];
    showFilmes(filmes);
    $warningText.setAttribute("style", "display: none");
  } catch (error) {
    $warningText.setAttribute("style", "display: block");
    console.log(error);
  }
};
function showFilmes(filmes) {
  const $card = document.querySelector('[data-js="card"]');

  // Retorna apenas 1 filme

  const $innerCard = document.createElement("div");
  $innerCard.setAttribute("class", "card");
  $innerCard.innerHTML = `
            <div style="z-index: 90">
                <h1>${filmes[0].Title} - ${filmes[0].Year}</h1>
                <img src=${filmes[0].Poster} alt="${filmes[0].Title}"/>
            </div>
        `;

  $card.appendChild($innerCard);
}
