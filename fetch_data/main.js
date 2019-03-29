var main_url = 'http://abcdefg.com/a.php?p=';

var id = null;
var all = 9999;
var ai = 1;

id = setInterval(function () {
	if (ai >= all) {
        clearInterval(id);
    }
	
	var local_url = main_url+ai;
	$.get(local_url, function(data){
		var old_results = localStorage.getItem("results");
		localStorage.setItem("results", old_results+data);
		console.log(ai + "done");
	});
	
	ai++;
},1000);
