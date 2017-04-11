$(document).ready(function(){
  getQuote();
  //  var random;
  //  var newQuote;
  //  var newAuthor;

  function getQuote(){
    var quote = ['The best preparation for tomorrow is doing your best today.', 'We must let go of the life we have planned, so as to accept the one that is waiting for us.', "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 'Happiness is not something you postpone for the future; it is something you design for the present.', "If opportunity doesn't knock, build a door."];
    var author = ['- H. Jackson Brown', '- Joseph Campbell', '- Jimmy Dean', 'Jim Rohn', 'Milton Berle'];

    random = Math.floor(Math.random()*quote.length);
    newQuote = quote[random];
    newAuthor = author[random];

   $("#quote").text(newQuote);
   $("#author").text(newAuthor);

}

  $("#newquote").on("click", function(){
    getQuote();

  });
  $("#twitterquote").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + newQuote + "-" + newAuthor);
  })
});
function ChangeColor()
{
document.body.style.backgroundColor='#d5dce8';
setTimeout("ChangeColor2()",1500);
}
  function ChangeColor2()
{
document.body.style.backgroundColor='#baa7ef';
setTimeout("ChangeColor3()",1500);
}
function ChangeColor3()
{
document.body.style.backgroundColor='#db5998';
setTimeout("ChangeColor4()",1500);
}
function ChangeColor4()
{
document.body.style.backgroundColor='#d0e0db';

}
