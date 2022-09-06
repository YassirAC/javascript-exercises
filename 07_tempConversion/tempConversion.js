const ftoc = function(y) {
  
  x = (y-32)*(5/9);
  return Math.round(x*10)/10;

};

const ctof = function(x) {
  
  y = x*(9/5)+32;
  return Math.round(y*10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
