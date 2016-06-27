
$(document).ready(function(){

	var breakk=0;
	var session=0;
	var runtimer=true;
	var sessionevent=true;
		session=25;breakk=5;$('#event').text('Session Time:'+25);$('#one').text(breakk);$('#two').text(session)
	$('button').click(function(){
		if($(this).text()=="-"){
			if ($(this).attr('info')=="1"){
				breakk=breakk-1;
				$('#one').text(breakk);
				;runtimer=true; $('#start').attr("class","btn btn-danger") ;$('#start').text("Start");
												if (sessionevent!==true){$('#event').text('Break Time:'+breakk)}
			}
			else{
				session=session-1
				$('#two').text(session);
				;runtimer=true; $('#start').attr("class","btn btn-danger") ;$('#start').text("Start");
								if (sessionevent===true){$('#event').text('Session Time:'+session)}
			}
		}
		else{
			if ($(this).attr('info')=="1"){
				breakk=breakk+1;
				$('#one').text(breakk);
				;runtimer=true; $('#start').attr("class","btn btn-danger") ;$('#start').text("Start");
																if (sessionevent!==true){$('#event').text('Break Time:'+breakk)}
				
			}
			else{
				session=session+1;
				$('#two').text(session);
				;runtimer=true; $('#start').attr("class","btn btn-danger") ;$('#start').text("Start");
				if (sessionevent===true){$('#event').text('Session Time:'+session)}
			}
		}	
	});

$("#start").click(function(){
	var sessionsec=session*60
	var breakksec=breakk*60
	var a=setInterval(function(){        
	if(session>0 & runtimer===false)
	{sessionsec=sessionsec-1;$('#event').text("Session Time:"+(session-1)+" Minutes "+sessionsec%60+" Seconds");if (sessionsec%60===0){session=session-1} }
	else if(session===0 &breakk>0 & runtimer===false){
		  sessionevent=false;
			breakksec=breakksec-1;$('#event').text("Break time:"+(breakk-1)+" Minutes "+breakksec%60+" Seconds");;if (breakksec%60===0){breakk=breakk-1}
		}
	else if(breakk===0){$('#event').text("Session Complete")}
  else{clearInterval(a)}
																												 },1000)

		if (runtimer===false){;runtimer=true; $('#start').attr("class","btn btn-danger") ;$('#start').text("Start");}
	else{runtimer=false; $('#start').attr("class","btn btn-success") ;$('#start').text("Stop");}
	console.log(runtimer,breakk)
	});
	$('#reset').click(function(){runtimer=true;session=25;breakk=5;$('#event').text('Session Time:'+25);$('#one').text(breakk);$('#two').text(session);sessionevent=true});
});
