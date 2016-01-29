$(document).ready(function() {
	$.ajax({
		type : "POST",
		url : "/Lexicon/getPicData",
		dataType : 'json',
		success : function(data) {
			$("#wordpress").html(data.wordpress);
		}
	});

});
