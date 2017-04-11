function getIndexToIns(arr, num) {
//1 insert num into array
  arr.push(num);
//2 sort array in ascending order
  arr.sort(function(a, b){
  return a - b;
});
//3 find the positon of num in sorted array. 4 return that position.
  return arr.indexOf(num);
}
console.log(getIndexToIns([2, 5, 10], 15));
