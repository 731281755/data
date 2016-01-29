$(document).ready(function() {
	$.ajax({
		type : "POST",
		url : "/Lexicon/getComUrl",
		dataType : 'json',
		success : function(data) {
			if (data != null) {
				$("#data").show();
				$('#newEvaluateUrl').attr('href',data.newEvaluateUrl); 
				$('#oldEvaluateUrl').attr('href',data.oldEvaluateUrl); 
			} else {
				$("#data").hide();
				$("#panel-body").html("<div class='alert alert-danger'>对比环境的URL在classpath的配置文件lexicon.properties文件中没有配置!</div>");
			}
		}
	});
});

 