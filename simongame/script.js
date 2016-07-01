$(document).ready(function(){
	var number=0;
	var arrayy=[];
	var round=1;
	var str="";
	var playing=false;
	var on=false;
	var subround=1;
	var strctmode=false;
	function generaterandom(length){
		var x=0;
		while(x<length){
			arrayy[x]=Math.floor((Math.random() * 4) + 1);
			x=x+1;
		}	
	}

	function replacer(classs,numm,replacecontent){
		var checker=$(classs).attr("class");
			if(numm%2===0){
				checker=checker+" "+replacecontent;
				$(classs).attr("class",checker );
			}
			else{
				checker=checker.replace(replacecontent,"");
				$(classs).attr("class",checker );
			}
	}
		function togglegamebuttons(integer){
		replacer('.topleft',integer,"disabled");
		replacer('.topright',integer,"disabled");
		replacer('.btmright',integer,"disabled");
		replacer('.btmleft',integer,"disabled");
		// odd number to toggle on //even to off
	}
	function switcher(val){
		var colorchange="";
		var classss="";
			 	switch(val){
					case 1:
						colorchange="green";
						classss='.topleft';
						break;
					case 2:
						colorchange="red";
						classss='.topright';
						break;
					case 3:
						colorchange="yellow";
						classss='.btmleft';
						break;
					case 4:
						colorchange="blue";
						classss='.btmright';
						break;
				}
		return [colorchange,classss]
	}
		function playsequence(limit){
		var counter=0;
		var y=arrayy[counter];
	  var start=setInterval(function(){
			  playing=true;
			  y=arrayy[counter];
			var matrix =switcher(Number(y))
			document.getElementById(matrix[0]).play()
			replacer(matrix[1],2,matrix[0])
			counter++
			
			setTimeout(function() {replacer(matrix[1],1,matrix[0])},500)
			
			if(counter==limit | on===false ){
				
				clearInterval(start)
				playing=false;
				
			}		
						if(playing===false & on==true ){
				togglegamebuttons(1)
			}
		},1000);

	}
				function reset(){		 	
		subround=1;
		 	round=1;
		 	$('.round').text(round);
		 	generaterandom(20);
		 	str="";
		  strctmode=false;
		  $('#strict').html('<b>N</b>');
		 if (playing===false){
			round=1
		  playsequence(1)}
	}
	function checksequence(buttonpressedinteger,string1,buttonpressed){
		var checker=string1.substring(Number(buttonpressedinteger-1),Number(buttonpressedinteger));
		
		if (subround<round){
			if (buttonpressed==checker)
				{
				 subround++;
				}
			else{
				alert("wrong");
				subround=1;
				if (strctmode===true){round=1;
							$('.round').text(round)	
							subround==0;
							playsequence(round)								
														 }
			}		
		}
		else{if (buttonpressed==checker ){ 
			if (round==20){alert("done") 
				reset();		 
									 }
			else{togglegamebuttons(2);
			subround=1 ;
			round++ ;
			playsequence(round);
			$('.round').text(round)	 }
																		 }
				else{alert("wrong");
				subround=1;
				if (strctmode===true){round=1;
						$('.round').text(+round)		
						subround==0;
						playsequence(round)									
														 }
						}
				}
	}
	
	 $('#onoff').click(function()
			{
		 	number++;
			replacer('#restart',number,"disabled");replacer('#start',number,"disabled");replacer('#strict',number,"disabled")
			if (number%2===0){on=false;
					$('.round').text("");						 
					togglegamebuttons(2);						 }
		 	else{on=true;
					$('.round').html("<b>--</b>");
					}	
			})
	 $('#start').click(function()
			{
				reset();
	 		})
	$(".game").click(function()
			{ var valuee=$(this).attr("value");
				checksequence(subround,arrayy.join(""),valuee)
			})
	$(".game").mousedown(function(){
				var valuee=$(this).attr("value");
				var matrix = switcher(Number(valuee)) 
			replacer(matrix[1],2,matrix[0]);
			document.getElementById(matrix[0]).play()
		})		
	$(".game").mouseup(function(){
				var valuee=$(this).attr("value");
				var matrix=switcher(Number(valuee))
				replacer(matrix[1],1,matrix[0])
	})
	$('#strict').click(function(){
		if (strctmode==true){
			strctmode=false;
			$('#strict').html('<b>N</b>');
		}
		else{strctmode=true;
				$('#strict').html('<b>H</b>');
				}
	}
					)
  
});
