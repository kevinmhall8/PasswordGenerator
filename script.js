//generate random password
const resultEl = document.getElementById("result");
const generateEl = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const randomFunc = {
    lower: getRandLower,
    upper: getRandUpper,
    number: getRandNumber,
    symbol: getRandSymbol,    
};

function getRandLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}
function copyPassword() {
    document.getElementById("result")
    // .select();
    document.execCommand("Copy");
    alert("Password has been copied.")
}

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length);
});

function generatePassword(lower, upper, number, symbol, length) {

    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;
    
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter (item => Object.values(item)[0]);

    if (typesCount === 0) {
        return "";
    }
    
    for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatePassword += randomFunc[funcName]();
    })
    }
     const finalPassword = generatePassword.slice (0, length);
     return finalPassword
    }


    


