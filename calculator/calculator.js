function show()
{
	var element=document.getElementsByClassName("container");
	document.getElementById("start").style.display='none';
	for(var i=0; i<element.length; i++)
	{
		element[i].style.display = 'block';
	}
	timer()
}


function hide()
{
	var element=document.getElementsByClassName("container");
	document.getElementById("start").style.display='block';
	for(var i=0; i<element.length; i++)
	{
		element[i].style.display = 'none';
	}
}

function timer()
{
	let x=setInterval(tik,1000);
	function tik()
	{
		var time=document.getElementById("time");
		if(time.innerHTML>0)
		{
			let newTime=time.innerHTML-1;
			time.innerHTML=newTime;
		}
		else{
			
			hide()
			clearInterval(x);
			time.innerHTML=5;
			
		}
	}
}
  


function action()
{ 
	
	let fnum,snum,operator;
	const op=["+","-","*","/","%"];
	let fnumUi=document.getElementById("fnumUI");
	let snumUi=document.getElementById("snumUI");
	let opUi=document.getElementById("opUI");
	var input=document.getElementById("user_input");
	let scoreUi=document.getElementById("score");
	input.addEventListener("keypress",myFunction(event));
	function myFunction(event)
	{
		let answer=8;
		if(event.keyCode===13)
		{
			let user_ans=Number(input.value);
			input.value='';
			fnum=Number(Math.floor(Math.random()*20));
			snum=Number(Math.floor(Math.random()*20));
			operator=op[Math.floor(Math.random()*op.length)];
			fnumUi.innerHTML=fnum;
			snumUi.innerHTML=snum;
			opUi.innerHTML=operator;
			if(operator==="+"){
				answer=fnum + snum;
				if(answer===user_ans){
				scoreUi.innerHTML=Number(scoreUi.innerHTML)+3;
			}else{
				scoreUi.innerHTML=scoreUi.innerHTML-1;
			}
			}
			else if(operator==="-"){
				answer=fnum - snum;
				if(answer===user_ans){
				scoreUi.innerHTML=Number(scoreUi.innerHTML)+3;
			}else{
				scoreUi.innerHTML=scoreUi.innerHTML-1;
			}
			}
			else if(operator==="*"){
				answer=fnum * snum;
				if(answer===user_ans){
				scoreUi.innerHTML=Number(scoreUi.innerHTML)+3;
			}else{
				scoreUi.innerHTML=scoreUi.innerHTML-1;
			}
			}
			else if(operator==="/"){
				answer=fnum / snum;
				if(answer===user_ans){
				scoreUi.innerHTML=Number(scoreUi.innerHTML)+3;
			}else{
				scoreUi.innerHTML=scoreUi.innerHTML-1;
			}
			}
			else{
				answer=fnum % snum;
				if(answer===user_ans){
				scoreUi.innerHTML=Number(scoreUi.innerHTML)+3;
			}else{
				scoreUi.innerHTML=scoreUi.innerHTML-1;
			}
			}
			
		
		}
	}
}