/* eslint-disable no-unused-vars */


function split(wholeArray) {
  let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2))
  let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2))

  return [firstHalf, secondHalf];
}

function merge(array1, array2){
  let outputArray = []
  //console.log(outputArray.length,array1.length,array2.length)
  let alength=array1.length+array2.length;
  while (outputArray.length < alength){
    let num;
    
    array1[0] < array2[0]? num = array1.shift() : num = array2.shift()
    outputArray.push(num)
  }

  return outputArray
}

function mergeSort(array) {

  let count=array.length
  while(count>1){
    let oldarr1=mergeSort(split(array)[0])
    let oldarr2=mergeSort(split(array)[1])
    count/2
    mergeSort(merge(oldarr1,oldarr2))
  }
  return 

}