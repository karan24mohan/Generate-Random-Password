let password = document.getElementById("password");

function generatePassword() {
    let randomPassword = "";
    let possiblePassChar =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    for (let i = 0; i < 10; i++) {
        randomPassword += possiblePassChar.charAt(
            Math.floor(Math.random() * possiblePassChar.length)
        );
    }
    password.innerText = randomPassword;
}