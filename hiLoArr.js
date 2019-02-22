
const checkMe = function(){
  return true;
}

const getHiLoFrmArray = function(arr){
  if(!Array.isArray(arr)) return {error: 'bad input'};

  let obj = {
    high: null,
    low: null,
  }
//[1, 2, 3, 4, 5]
  for (let index = 0; index < arr.length; index++) {
    if(obj.high === null){
      obj.high = arr[index]
    }
    if(obj.low === null){
      obj.low = arr[index]
    }
    if(arr[index] > obj.high){
      obj.high = arr[index]
    }
    if(arr[index] < obj.low){
      obj.low = arr[index]
    }
  }

  return obj;
}

module.exports = {
  checkMe,
  getHiLoFrmArray,
}
