describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([5, 3, 9, 7, 4]) ).toEqual( [[5, 3], [9, 7, 4]] );
    // your code here
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([3, 5] [4, 7, 9]) ).toEqual( [[3, 4, 5, 7, 9]] );
    // test the merging algorithm
  });
});
