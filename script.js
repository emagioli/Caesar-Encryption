let alphabetArray = createAlphabetArray();

function createAlphabetArray() {
    let upperCaseACode = 65;
    let upperCaseZCode = 90;

    let alphabetArray = [];

    for (let i = upperCaseACode; i <= upperCaseZCode; i++) {
        let currentChar = String.fromCharCode(i);
        alphabetArray.push(currentChar);
    }

    return alphabetArray;
}
function correctKey(inputKey) {
    let correctedKey;

    inputKey < 0 ?
        correctedKey = 26 - ((inputKey * (-1)) % 26)
        : correctedKey = inputKey % 26;

    return correctedKey;
}
function encryptText(text, inputKey) {

    let upperCaseText = text.toUpperCase();

    let encryptedText = "";

    let key = correctKey(inputKey);

    for (let i = 0; i < text.length; i++) {

        let currentChar = upperCaseText[i];

        encryptedText += getConvertedLetter(currentChar, key);
    }

    return encryptedText;
}
function getConvertedLetter(char, key) {

    let charCode = char.charCodeAt(0);

    if (charCode < 65 || charCode > 90) {
        return char;
    }
    else {
        let convertedCharCode = charCode + key;
        if (convertedCharCode > 90) {
            convertedCharCode = convertedCharCode % 90 + 64;
        }
        char = String.fromCharCode(convertedCharCode);
    }
    return char
}

let message = "Aw shit! Here we go again!";

let encryptedMessage = encryptText(message, 1);

console.log(encryptedMessage);