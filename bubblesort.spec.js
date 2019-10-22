//THIS SORTS AN EMPTY ARRAY
describe('Bubble Sort', function(){
    beforeEach(function () {
        swapCounter = 0; // replace existing `tootsiepop['lick']` method
      });
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
        //swap = 0
    });
    it('handles an single array', function(){
        expect( bubbleSort([5]) ).toEqual( [5] );
        //swap = 0
    });
    it('handles an double array', function(){
        expect( bubbleSort([9, 5]) ).toEqual( [5, 9] );
        //swap = 1
    });
    it('handles an multiple numbers in array', function(){
        expect( bubbleSort([2,6,8,5,4,9]) ).toEqual( [2,4,5,6,8,9] );
        //swap = 5
        expect( bubbleSort([6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6] );
        //swap = 15
       
        
    });
        
    it('handles already sorted array', function(){
        expect( bubbleSort([4,6,8,13]) ).toEqual( [4,6,8,13] );
        //swap = 0
    
    });
     
  });