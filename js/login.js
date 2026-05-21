function login() {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (email == "" || password == "") {
        alert("Email and Password must be filled in")
        return
    }

    let akun = JSON.parse(localStorage.getItem("akun")) || []

    let user = akun.find(
        u => u.email === email && u.password === password
    )

    if (!user) {
        alert("Wrong Email or Password / Account not registered")
        return
    }

    alert("Login Berhasil")
    localStorage.setItem("userLogin", JSON.stringify(user))
    window.location.href = "user.html"

} 