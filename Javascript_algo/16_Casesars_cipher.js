//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) {

  var result = [];
  for(var i = 0; i <str.length; i++){
    var newstr = str.charCodeAt(i);
    if(newstr >= 65 && newstr <= 77){
      newstr += 13;
    }else if(newstr >= 78 && newstr <= 90){
      newstr -= 13;
     }
     result.push(String.fromCharCode(newstr));
    }
  return result.join('');
}
console.log(rot13("SERR PBQR PNZC"));
