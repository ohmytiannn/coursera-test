
$('document').ready(function(){
var city="";
var country=""; 
var combined="";
  function roundoff(num){
     var bad=num.toString().split("");
     var lenght=bad.length;
    var checker=0;
    while (checker<lenght & bad[checker] !="."){
      checker++;}
    var front= Number(num.toString().substring(0,checker));  
    var back=num.toString().substring(Number(checker)+1,Number(checker)+3).split("");
    var first=back[0];
    var second=back[1];
    if (Number(second)>=5){
      first=Number(first)+1;
      }
    else{first=Number(first);}
    return(front+first/10);
    
    
  }
  function kelvincelsius(temperature){
    var ans=Number(temperature)-273.15;
    return roundoff(ans);
  }
  function kelvinfahrenheit(temperature){
    var ans=1.8*(Number(temperature)-273.15)+32;
    return roundoff(ans);

  }
  $.getJSON('http://ipinfo.io', function(data){
    city=data["city"];
    country=data["country"];
    combined=city.concat(',').concat(country);
    $("#city").text(combined);
    //creating the url//
    var url='http://api.openweathermap.org/data/2.5/weather?q='.concat(combined).concat('&APPID=').concat('b6a2ca2a1d5181b7ec31a8eb5438cde7');
 
    $.getJSON(url, function(date){
      $('#weather').text(date.weather[0].description);
      var icon="http://openweathermap.org/img/w/".concat(date.weather[0].icon).concat('.png');
      $('#icon').attr("src",icon);
      var temp=(date.main.temp);
      var tempmin= (date.main.temp_min);
      var tempmax= (date.main.temp_max);
      $('#temp').text(kelvincelsius(temp)+" "+"Celsius");
      var counter=1;
      $('#toggletemp').click(function(){
        if (Number(counter)%2!==0){
              $('#temp').text(kelvinfahrenheit(temp)+" "+"Fahrenheit");
              $('#toggletemp').text("Celsius");
              $('#toggletemp').attr("class","btn btn-danger");
        }
        else {
              $('#temp').text(kelvincelsius(temp)+" "+"Celsius") ;
              $('#toggletemp').text("Fahrenheit");
              $('#toggletemp').attr("class","btn btn-primary");
              
        }
        $("#temp").hide("slow", function(){
        $("#temp").show("slow");});
        counter=counter+1;
      });
    });
      
      
      
      
  });
 
  
  
  
  
  
});