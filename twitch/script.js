  $(document).ready(function(){
  var array=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin"];
  var length=array.length;
  var counter=0;
  var channel = '';
  channel=array[counter];

  function run(val){
    if(val=="watchlist"){
  for (var i = 0; i < array.length; i++) {
      
      (function(i) { // protects i in an immediately called function
        $.getJSON('https://api.twitch.tv/kraken/streams/' + array[i] + '?callback=?', function (data) {
          
          $('#results').append('<div class="container" id="'+array[i] +    '"></div>')
          $('#' +array[i]).append('<div class="bold">'+'<a href="" target="_blank" id="'+'url'+array[i]+'">'+ array[i]+'</a>'+ '</div>');
          if (data["stream"]===null){
          $('#' +array[i]).append('<div>'+"Offline"+ '</div>');
          }
          else if (data["stream"]===undefined)
          { $('#' +array[i]).append('<div>'+"Acc Deleted"+ '</div>');                                     }
          else{
            $('#' +array[i]).append('<div>'+"Online"+ '</div>');
            $('#' +array[i]).append('<div id="gamename">'+data.stream.game+ '</div>');
          }
        });
        $.getJSON('https://api.twitch.tv/kraken/channels/' + array[i] + '?callback=?', function (data) {
          if(data.url===undefined){ $('#' +array[i]).append('<img class="img-responsive col-xs-12 col-sm-12 col-md-12 col-xl-12"  src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg"></img>')               }
            else{
           $('#' +array[i]).append('<a href="" target="_blank" id="url2'+array[i] +'"><img class="img-responsive col-xs-12 col-sm-12 col-md-12 col-xl-12"  src="'+data.logo+'">'+ '</img></a>');
           $('#url'+array[i]).attr("href",data.url)
           $('#url2'+array[i]).attr("href",data.url)}
        });
      })(i);
  }
  }

  if(val=="online"){
  for (var i = 0; i < array.length; i++) {
    
      (function(i) { // protects i in an immediately called function
        $.getJSON('https://api.twitch.tv/kraken/streams/' + array[i] + '?callback=?', function (data) {
          if (data["stream"]!==null & data["stream"]!==undefined){
            $('#results').append('<div class="container" id="'+array[i] +    '"></div>')
          $('#' +array[i]).append('<div class="bold">'+'<a href="" target="_blank" id="'+'url'+array[i]+'">'+ array[i]+'</a>'+ '</div>');
            $('#' +array[i]).append('<div>'+"Online"+ '</div>');
            $('#' +array[i]).append('<div id="gamename">'+data.stream.game+ '</div>');
          }
        });

        $.getJSON('https://api.twitch.tv/kraken/channels/' + array[i] + '?callback=?', function (data) {
           $('#' +array[i]).append('<a href="" target="_blank" id="url2'+array[i] +'"><img class="img-responsive col-xs-12 col-sm-12 col-md-12 col-xl-12" src="'+data.logo+'">'+ '</img></a>');
           $('#url'+array[i]).attr("href",data.url)
           $('#url2'+array[i]).attr("href",data.url)
        });
      })(i);
  }
  }

  if(val=="offline"){
    for (var i = 0; i < array.length; i++) {
    
      (function(i) { // protects i in an immediately called function
        $.getJSON('https://api.twitch.tv/kraken/streams/' + array[i] + '?callback=?', function (data) {
          if (data["stream"]==null & data["stream"]!==undefined){
            $('#results').append('<div class="container" id="'+array[i] +    '"></div>')
          $('#' +array[i]).append('<div class="bold">'+'<a href="" target="_blank" id="'+'url'+array[i]+'">'+ array[i]+'</a>'+ '</div>');
            $('#' +array[i]).append('<div>'+"Offline"+ '</div>');
          }
        });

        $.getJSON('https://api.twitch.tv/kraken/channels/' + array[i] + '?callback=?', function (data) {
           $('#' +array[i]).append('<a href="" target="_blank" id="url2'+array[i] +'"><img class="img-responsive col-xs-12 col-sm-12 col-md-12 col-xl-12" src="'+data.logo+'">'+ '</img></a>');
           $('#url'+array[i]).attr("href",data.url)
           $('#url2'+array[i]).attr("href",data.url)
        });
      })(i);
  }
    
  }
  }

  $('#watchlist').click(function(){
    $('#results').empty();
    run("watchlist");
  })

  $('#online').click(function(){
    $('#results').empty();
    run("online");
  })

  $('#offline').click(function(){
    $('#results').empty();
    run("offline");
  })


  })