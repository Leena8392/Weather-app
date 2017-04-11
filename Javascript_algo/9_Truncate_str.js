function truncateString(str, num) {
  if(str.length > num){
    if(num <= 3){
    return str.slice(0, num) + "...";
  }else {
    str = str.slice(0, num - 3) + "...";
   }
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
