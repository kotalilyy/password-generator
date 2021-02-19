let empty = "";
let uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "*&^%$#@!()=+-_";

let pLength = document.getElementById("p-length");
let upperCase = document.getElementById("p-uppercase");
let lowerCase = document.getElementById("p-lowercase");
let pNumber = document.getElementById("p-number");
let pSymbol = document.getElementById("p-symbol");
let submit = document.getElementById("submit");
let password = document.getElementById("password");

submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (lowerCase.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";

    password.value = generatePassword(pLength.value, initialPassword)
});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

