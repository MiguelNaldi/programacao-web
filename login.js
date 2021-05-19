    const $inputEmail = document.querySelector('[data-js="inputEmail"]')
    const $inputPassword = document.querySelector('[data-js="inputPassword"]')
    const $warningText = document.querySelector('[data-js="warningText"]')

    const LogIn = async () => {
        const data =  {
            "username":  $inputEmail.value,
            "password": $inputPassword.value
        }

        try {
            const response = await axios.post("http://localhost:3001/api/authenticate", data)
            const { token } = response.data

            localStorage.setItem("@token:netflix", token)

            window.location.href = "api.html"
            
        } catch (err) {
            $warningText.setAttribute("style", "display: block")

        }
    }
 