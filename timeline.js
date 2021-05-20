const $inputTitle = document.querySelector('[data-js="inputTitle"]');
const $inputText = document.querySelector('[data-js="inputText"]');
const $inputImg = document.querySelector('[data-js="inputImg"]');
const $warningText = document.querySelector('[data-js="warningText"]');

const postar = async () => {
  const formData = new FormData();

  const token = localStorage.getItem("@token:netflix");

  const data = {
    title: $inputTitle.value,
    text: $inputText.value,
    images: $inputImg.files,
  };
  formData.append("title", data.title);
  formData.append("text", data.text);
  formData.append("images", data.images);

  Array.from(data.images).forEach((image) => {
    formData.append("images", image);
  });

  console.log(token);
  try {
    axios
      .post("http://localhost:3001/api/post/create/", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        alert("Successful post");
        console.log(response);
      })
      .catch(function (error) {
        alert("User is not authorized");
      });
  } catch (err) {
    $warningText.setAttribute("style", "display: block");
  }

  const actualBtn = document.getElementById("actual-btn");

  const fileChosen = document.getElementById("file-chosen");

  actualBtn.addEventListener("change", function () {
    fileChosen.textContent = this.files[0].name;
  });
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
