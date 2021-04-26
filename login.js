    const $inputEmail = document.querySelector('[data-js="inputEmail"]')
    const $inputPassword = document.querySelector('[data-js="inputPassword"]')
    const $warningText = querySelector('[data-js="warningText"]')

    const LogIn = async () => {
        const data =  {
            "email":  $inputEmail.value,
            "password": $inputPassword.value
        }

        try {
            const response = await axios.post("https://reqres.in/api/login", data)

            const { token } = response.data

            localStorage.setItem("@token:netflix", token)

            window.location.href = "api.html"
            
        }catch (err) {
            
            $warningText.setAtribute("style", "display: block")

           // alert("Usuário ou senha inválidos")
        }
    }
 