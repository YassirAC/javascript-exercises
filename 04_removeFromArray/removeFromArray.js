const removeFromArray = function(...args) {
    // first argument is the array which is pulled out of the argument with args[0]
    const array = args[0];
    // create a new empty array below
    const newArray = [];
    // the forEach is used to go through the array
    array.forEach((item) => {
     if (!args.includes(item)){
        newArray.push(item);
    } 
    });

    return newArray;






};



// Do not edit below this line
module.exports = removeFromArray;
