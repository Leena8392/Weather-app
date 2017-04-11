function palindrome(str){
  var replaceStr = str.replace(/[^1-9a-zA-Z]+9/g, "").toLowerCase();
  var reverseStr = str.split('').reverse().join('');

  if(str.replaceStr == str.reverseStr){
    return true;
  }else{
  return false
}
}
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
