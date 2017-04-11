function findLongestWord(str){
  var longest = 0;
  str = str.split(' ');
  for(var i = 0; i < str.length; i++){
    // console.log("longest = " + longest);
    // console.log("str[i].length = " + str[i].length);
    if(str[i].length > longest){
      longest = str[i].length;
    }
  }
  return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


function findLongestWord(str){
  str = str.split(" ");
  str = str.sort(function(a, b){
    return a.length - b.length;
  });
  return str[str.length - 1].length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
