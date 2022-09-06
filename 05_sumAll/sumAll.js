const sumAll = function(x,y) {

    let sum = 0;

if(!Number.isInteger(x) || !Number.isInteger(y)){
    return 'ERROR';
}

else if(y>x && x>0){
    for(i = x; i <= y; i++){
            sum = sum + i;

    }
}
else if(x>y && y>0){
    for(i = y; i <= x; i++){
        sum = sum + i;

}
}
else{
    return 'ERROR';
}
return sum;

}
    





// Do not edit below this line
module.exports = sumAll;
