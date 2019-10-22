/* eslint-disable no-unused-vars */


function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2))
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2))

  return [firstHalf, secondHalf];
}

function merge(array1, array2){
  let outputArray = []
  while (outputArray.length < array1.length + array2.length){
    let num;
    array1[0] < array2[0]? num = array1.shift() : num = array2.shift()
    outputArray.push(num)
  }

  return outputArray
}
