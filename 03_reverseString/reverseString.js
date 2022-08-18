const reverseString = function(text) {
    let splitString = text.split('')
    let reverseString = splitString.reverse()
    let reversedString = reverseString.join('')

    return reversedString;


};

reverseString('hello');
reverseString('123! abc!');
// Do not edit below this line
module.exports = reverseString;
