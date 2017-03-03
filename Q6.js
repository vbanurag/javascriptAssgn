var count=0;
var clock = setInterval(startClock, 1000);
function startClock(){
var today = new Date();
count++;
	if(count<10){
		document.getElementById('clockHour').innerHTML=""+today.getHours();
		document.getElementById('clockMin').innerHTML=":"+today.getMinutes();
		document.getElementById('clockSec').innerHTML=":"+today.getSeconds();
	}
	else{
		document.getElementById('clockHour').innerHTML="Service Completed";
		document.getElementById('clockMin').innerHTML=""
		document.getElementById('clockSec').innerHTML=""	
	}
}
