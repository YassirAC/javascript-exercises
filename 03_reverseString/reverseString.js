const reverseString = function(text) {
    let splitString = text.split('')
    let reverseString = splitString.reverse()
    let reversedString = reverseString.join('')

    return reversedString;


};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
