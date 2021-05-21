const $inputTitle = document.querySelector('[data-js="inputTitle"]');
const $inputText = document.querySelector('[data-js="inputText"]');
const $inputImg = document.querySelector('[data-js="inputImg"]');
const $warningText = document.querySelector('[data-js="warningText"]');
const token = localStorage.getItem("@token:netflix");
const $card = document.querySelector('[data-js="card"]');
const $inputSearch = document.querySelector('[data-js="inputSearch"]');
var data = [];

$inputSearch.addEventListener("change", (event) =>
  findPosts(event.target.value)
);

function findPosts(value) {
  axios
    .get(`http://localhost:3001/api/post/find/${value}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      data = [...response.data];
      renderPosts(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
findPosts("");

function renderPosts(data) {
  $card.innerHTML = "";
  data.forEach((post) => {
    const $innerCard = document.createElement("div");
    $innerCard.setAttribute("class", "innerCard");
    $innerCard.setAttribute("data-js", "innerCard");
    console.log($innerCard);
    const img = new Image();
    img.src = post.image.url;
    img.className = "image";
    $innerCard.innerHTML = `
                <div style="z-index: 90">
                    <h1 class="title"> ${post.title}</h1>
                    <p class="text">${post.text}</p>
                </div>
            `;

    $card.appendChild($innerCard);
    $card.appendChild(img);
  });
}

const postar = async () => {
  const formData = new FormData();

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
