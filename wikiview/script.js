$(document).ready(function(){
  $('#random').click(function(){window.open('https://en.wikipedia.org/wiki/Special:Random');})
  $('#searchbutton').click(function(){
	  
    var input = document.getElementById("frm1");
    input=input.elements[0].value;
    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+input +"&format=json&callback=?"; 
 $.getJSON(url,function(data) {
   var ans=(data.query.pages);
   var keys=(Object.keys(ans));
   var length=keys.length;
   var counter=0;
   var object=[{"animals":[]}];
   while (counter<length){
     
     var sub={};
     sub.title=(ans[keys[counter]].title);
     sub.extract=(ans[keys[counter]].extract);
     sub.url="http://en.wikipedia.org/?curid="+ keys[counter];
     object[0]["animals"][counter]=sub;
     counter=counter+1;
   }
    console.log(object[0])
    var source   = $("#result-template").html();
    var template = Handlebars.compile(source);
    var context = object[0];
    var html    = template(context);
    $("#results").html(html);
	$('body').append( '<script id="result-template" type="text/x-handlebars-template">')
	$('body').append('  </script> ')
      $('#result-template').append('<div class="container">{{#each animals}}<div class="panel panel-info marginbottom">  <div class="panel-heading"><h1><b><a href={{url}}>{{title}}</a></b></h1></div><div class="panel-body"><h4>{{extract}}</h4></div></div> {{/each}}</div>')
	$('#result-template').append('')

	
      
       
          
           
        
          
        
     
      
  

 
	
 })

});
});


