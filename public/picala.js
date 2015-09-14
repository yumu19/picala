var url = "";

$(function(){
	$('#hee').get(0).addEventListener("click", hee, false);
	$('#great').get(0).addEventListener("click", great, false);
	$('#www').get(0).addEventListener("click", www, false);
	$('#question').get(0).addEventListener("click", question, false);
})
var host = "http://localhost"; //デプロイする環境のIPアドレスまたはFQDN
var port = "3000"; //デプロイする環境のnode.js(app.js)の待ち受けポート
var server = host +":"+ port + "/push?type=";

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
