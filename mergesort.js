/* eslint-disable no-unused-vars */


function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2))
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2))

  return [firstHalf, secondHalf];
}

function merge(array1, array2){
  let outputArray = []
  let alength=array1.length+array2.length;
  while (outputArray.length < alength){
    let num;
    if (array1[0] < array2[0] || !array2[0]){
      num = array1.shift()
      outputArray.push(num)
    }
    else {
      num = array2.shift();
      outputArray.push(num)
    }
  }
  return outputArray
}

function mergeSort(array) {
  let result =[]
  let count= array.length
  if (count === 1){
    return array
  }
  else if(count>1){
    let oldarr1=mergeSort(split(array)[0])
    let oldarr2=mergeSort(split(array)[1])
    result = merge(oldarr1, oldarr2)
  }
  return result

}
