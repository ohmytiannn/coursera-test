$(document).ready(function(){
	var tokens=["X","O"]
	var playertoken=""
	var comptoken=""
	var counter=0;
	var winzcounter=0;
	var playa=[0,0,0,0,0,0,0,0,0,0];


	

	function one(){
		 return $('#one').text(comptoken);
		
	}
	function two(){
	 return	$('#two').text(comptoken);
		
	}
	function three(){
	 return	$('#three').text(comptoken);
		
	}
	function four(){
	return	$('#four').text(comptoken);

	}
	function five(){
		return	$('#five').text(comptoken);
	
	}
	function six(){
		return	$('#six').text(comptoken);
	
	}
	function seven(){
		return	$('#seven').text(comptoken);
	
	}
	function eight(){
		return	$('#eight').text(comptoken);
	
	}
	function nine(){
		return	$('#nine').text(comptoken);
	
	}
	
	
	

	function win(){
		alert("Computer Wins");

		location.reload();
	}
	function draw(){
		alert("Draw");

		location.reload();
	}
		
	function fourthstepab(){
		if(playa.filter(function(age){return age==0}).length===7 & playa[2]===0){
			two();
			win();
		}
		else{
			six();
			win();
		}
	}
	function fourthstepac(){
		if(playa.filter(function(age){return age==0}).length===7 & playa[4]===0){
			four();
			win();
		}
		else{
			eight();
			win();
		}
	}
	function fourthstepad(){
				if(playa.filter(function(age){return age==0}).length===7 & playa[3]===0){
			three();
			win();
		}
		else{
			seven();
			draw();
		}
	}
	function fourthstepae(){
				if(playa.filter(function(age){return age==0}).length===7 & playa[2]===0){
			two();
			win();
		}
		else{
			five();
			win();
		}
	}
		function fourthstepbb(){
				if(playa.filter(function(age){return age==0}).length===7 & playa[7]===0){
			seven();
			win();
		}
		else{
			three();
			draw();
		}
	}

	function thirdstepa(){
		console.log("3",counter)
		var checker=$('#five').text();
		
		if (playa[5]!==1){
			five();
			win()
			}
		
			if(playa[7]===1 & playa[5]==1 & playa.filter(function(age){return age==0}).length===8){
				three();
					$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepab()
				})	;			

			}
			if(playa[3]===1 & playa[5]==1 & playa.filter(function(age){return age==0}).length===8){
				seven();
					$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepac()
				})	;	

			}
			if(playa[4]===1 & playa[5]==1 & playa.filter(function(age){return age==0}).length===8){
				six();
					$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepad()
				})	;

			}
			if(playa[2]===1 & playa[5]==1 & playa.filter(function(age){return age==0}).length===8){
				eight();
					$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepae()
				})	;		

			}
			if(playa[6]===1 & playa[5]==1 & playa.filter(function(age){return age==0}).length===8){
				four();
					$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepae()
				})	;

			}
			if(playa[8]===1 & playa[5]==1 & playa.filter(function(age){return age==0}).length===8){
				two();
					$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepad()
				})			;

			}	
		
	}
	
	function thirdstepb(){
		if(playa[4]===0){
			four();
			win();
		}
		if(playa[4]!==0 & playa.filter(function(age){return age==0}).length===8){
			three();
			$('.box').click(function(){
					$(this).text(playertoken);
					playa[$(this).attr("value")]=1
					return fourthstepbb()
		}
	}
	
	
	
	function secondstep(){
		
		var checker=$("#nine").text()
		
		if (playa[9]==0){ 
			nine() ;
		$('.box').click(function(){
			$(this).text(playertoken);
			playa[Number($(this).attr("value"))]=1
			return thirdstepa();
		})}
		else{ seven() ;
		$('.box').click(function(){
			$(this).text(playertoken);
			playa[Number($(this).attr("value"))]=1
			return thirdstepb()
		})		
				
		}
		
		
	}
	
	function firststep(){
		one();
		$('.box').click(function(){ 
			$(this).text(playertoken);
			playa[Number($(this).attr("value"))]=1
			alert(playa[9])	
			return secondstep()})	
		
	}
	
	
$('#x').click(function(){
	$('#choosetoken').hide();
	playertoken=tokens[0];
	comptoken=tokens[1];
	new firststep();
	counter=0
	winzcounter=0
})
$('#o').click(function(){
	$('#choosetoken').hide();
	playertoken=tokens[1];
	comptoken=tokens[0];
	firststep();
})




});
