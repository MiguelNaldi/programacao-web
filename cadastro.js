const $inputEmail = document.querySelector('[data-js="inputEmail"]')
const $inputPassword = document.querySelector('[data-js="inputPassword"]')
const $inputSobrenome = document.querySelector('[data-js="inputSobrenome"]')
const $inputNome = document.querySelector('[data-js="inputNome"]')
const $inputuserName = document.querySelector('[data-js="inputuserName"]')
const $inputAdm = document.querySelector('[data-js="inputAdm"]')

const $warningText = document.querySelector('[data-js="warningText"]')


const Cadastro = async () => {
    const data =  {
        "email":  $inputEmail.value,
        "password": $inputPassword.value,
        "userName": $inputuserName.value,
        "firstName": $inputNome.value,
        "sobrenome": $inputSobrenome.value,
        "administrador": $inputAdm.checked


        }
        console.log(data)

    try {
        const response = await axios.post("http://localhost:3001/api/register", data)
        const token = `Bearer ${response.data.token}`

        localStorage.setItem("@token:netflix", token)

        window.location.href = "login.html"
        
    } catch (err) {
        $warningText.setAttribute("style", "display: block")

    }
}
