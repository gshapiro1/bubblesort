function bubbleSort(array) {
    if(array.length <= 1){
        return array;
    }else{
       return swap(array);
    }
  }
  function swap (array){
     let swapped = false;
     let newArr = array
        for(let i = 0; i <= array.length - 2; i++){
            if(newArr[i] > newArr[i + 1]){
                swapped = true;
                let placeholder = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = placeholder;
            }
        }
        if (swapped === true){
            newArr = swap(newArr);
        }
        return newArr;
  }
