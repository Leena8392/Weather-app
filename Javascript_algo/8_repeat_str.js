function repeatStringNumTimes(str, num) {
  if(num > 0){
    return str.repeat(num);
  }
  return "";
}
console.log(repeatStringNumTimes("abc", -2));
