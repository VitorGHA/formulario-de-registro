function validateEmail(email) {
    const validEmail = /\w{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}/;
    if (!validEmail.test(email)) {
        throw new Error("E-mail inválido");
    }
}

function validatePassowrd(password) {
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!validPassword.test(password)) {
        throw new Error("Senha inválida");
    }
}

function validarRegistro() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        validateEmail(email);
        validatePassowrd(password);
    } catch (error) {
        alert(error.message);
        return false;
    }

    alert("Registro realizado com sucesso!");
    return true;
}