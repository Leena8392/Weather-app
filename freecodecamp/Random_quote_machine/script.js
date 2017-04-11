//when document is ready this code will go
 $(document).ready(function(){
   var quote;
   var author;

   function getQuote(){
     $.ajax({
        url:'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en',
        jsonp : 'jsonp',
        dataType: 'jsonp',
         data: {
         mathod: 'getQuote',
         lang: 'en',
         format: 'jsonp'
       },
       success: function(response) {
        quote = response.quoteText;
         author = response.quoteAuthor;
         $('#quote').text(quote);
          if(author){
           $('#author').text('-' + author);
          }else{
            $('#author').text('-unknown');
         }
         }
     });
   }
  getQuote();
   $('.get-quote').on('click', function(){

     getQuote();
   });
   $('.share-quote').on('click', function(){
   window.open("https://twitter.com/intent/tweet?text=" + quote + "-" + author);
 });

 });


// $(document).ready(function() {
//   var quote;
//   var author;
//  function getQ(){
//    $.ajax({
//      jsonp: "jsonp",
//      dataType: "jsonp",
//      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en",
//      success: function(response) {
//          $(".content").animate({opacity: '1'}, "slow");
//        quote = response.quoteText;
//        author = response.quoteAuthor;
//        $('#qBody').text("\"" + quote + "\"");
//        if (author) {
//        $("#qAuthor").text("by " + author);
//      } else {
//        $("#qAuthor").text("by Unknown");
//      }
//      }
//    });
//
//  } getQ();
//   $("#newQuote").on("click", function(event) {
//       $(".content").animate({opacity: '0'}, "slow" , function() {
//     event.preventDefault();
//     getQ();
//         });
//
//   });
//   $("#tweet").on("click", function(even) {
//     even.preventDefault();
//     window.open("http://twitter.com/intent/tweet?text="  + $("#qBody").text() + "-" + $("#qAuthor").text());
//   });
// });
