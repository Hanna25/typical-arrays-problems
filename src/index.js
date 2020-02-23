
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0 ){
    return 0
  } 
  let minNumber = array[0]
  for (let i = 1; i < array.length; i++){
    if (minNumber > array[i]){
       minNumber = array[i]
    }     
  }
  return minNumber
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0 ){
    return 0
  } 
  let minNumber = array[0]
  for (let i = 1; i < array.length; i++){
    if (minNumber < array[i]){
       minNumber = array[i]
    }     
  }
  return minNumber
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0 ){
    return 0
  } 
  let minNumber = array[0]
  for (let i = 1; i < array.length; i++){
   minNumber += array[i]         
  }
  return minNumber / array.length
}