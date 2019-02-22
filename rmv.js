const rmvDuplicates = function(arr){
  if(!Array.isArray(arr)) return 'bad input';
  let copyArr = arr.slice();
  for (let i=0; i<copyArr.length;i++){
    if(typeof copyArr[i]!=='number'){
      return 'incorrect data type'
    }
    for (let j=i+1; j < copyArr.length; j++){
      if (copyArr[i] === copyArr[j]){
        copyArr.splice(j, 1)
      }
    }
  };
  return copyArr;
}

const rmvDupsNewArr = function(arr){
  if(!Array.isArray(arr)) return 'bad input';
  let newArr = []
  for (let i=0; i<arr.length;i++){
    if(typeof arr[i]!=='number'){
      return 'incorrect data type'
    }
    if (!newArr.includes(arr[i])){
      newArr.push(arr[i])
    }
  };
  return newArr;
}

const rmvDupsSet = function(arr){
  if(!Array.isArray(arr)) return 'bad input';
  return [...new Set(arr)];
}

module.exports = {
 rmvDuplicates,
 rmvDupsNewArr
}
