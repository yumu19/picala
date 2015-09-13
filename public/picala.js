var url = "";

$(function(){
	$('#hee').get(0).addEventListener("click", hee, false);
	$('#great').get(0).addEventListener("click", great, false);
	$('#www').get(0).addEventListener("click", www, false);
	$('#question').get(0).addEventListener("click", question, false);
})

var server = "http://localhost:3000/push?type=";

function hee(){
	url = server + "hee";
	$.get(url);
}

function great(){
	url = server + "great";
	$.get(url);
}

function www(){
	url = server + "www";
	$.get(url);
}

function question(){
	url = server + "question";
	$.get(url);
}
