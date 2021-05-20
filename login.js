    const $inputUsername = document.querySelector('[data-js="inputUsername"]')
    const $inputPassword = document.querySelector('[data-js="inputPassword"]')
    const $warningText = document.querySelector('[data-js="warningText"]')

    const LogIn = async () => {
        const data =  {
            "username":  $inputUsername.value,
            "password": $inputPassword.value
        }

        try {
            const response = await axios.post("http://localhost:3001/api/authenticate", data)
            const token = `Bearer ${response.data.token}`

            localStorage.setItem("@token:netflix", token)

            window.location.href = "api.html"
            
        } catch (err) {
            $warningText.setAttribute("style", "display: block")

        }
    }
 