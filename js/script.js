document.getElementById("button-id").addEventListener("click", function () {
    const getEmail = document.getElementById("email-field");
    const emailField = getEmail.value;
    const getPass = document.getElementById("pass-field");
    const passField = getPass.value;

    window.location.href = "banking.html";
})