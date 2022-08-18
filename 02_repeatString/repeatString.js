const repeatString = function(str,num) {
    if (num === 0 || str === ''){
        return ''
    }
    else if (num < 0){
        return 'ERROR'
    }

    else if (num > 0){
        return str.repeat(num)
    }
    else{
        return 'undefined'
    }

    

};
const number = Math.floor(Math.random() * 1000)

repeatString('hey',number);

repeatString();

// Do not edit below this line
module.exports = repeatString;
