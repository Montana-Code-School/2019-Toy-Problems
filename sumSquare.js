module.exports = function sumSquare(number){
  if(typeof number !== 'number'){
    return "gimme dat square sum"
  }
  const squareOfSum = Math.pow(((number*(number+1))/2), 2);

  let sumOfSquare = 0;
  for (let i = 1; i <= number; i++) {
    sumOfSquare += Math.pow(i, 2);
  }
  return squareOfSum - sumOfSquare;
}