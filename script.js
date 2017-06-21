$(document).ready(function(){

  $("#Submit").click(function(){
    var cityVal = $("#city").val();

     if(cityVal != ''){
       $.ajax({

         url : 'http://api.openweathermap.org/data/2.5/weather?q=' + cityVal + "&units=metric" + "&appid=f2a1ee48bc4d41c6490a8c54d38d6809",
         type : "GET",
         dataType : "jsonp",
         success : function(data){
           var showVal = show(data);

           $("#show").html(showVal);
           $("#city").val('');
         }

       });
     }else{
       $('#error').html(alert('Field cannot be empty'));

       }
     });
});
function show(data){
  return "<h2>Current Weather for "+ data.name + "," +data.sys.country + "</h2>" +
        "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
        "<h3><strong>Description</strong> : <img style = 'width : 100px' src = 'http://openweathermap.org/img/w/"+ data.weather[0].icon +".png'> "+ data.weather[0].description + "</h3>" +
         "<h3><strong>Tempreture</strong>: "+ data.main.temp + "&deg;C" + "</h3>";

}
