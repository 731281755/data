$(document).ready(function() {
	$.ajax({
		type : "POST",
		url : "/Lexicon/getJcsegConfig",
		dataType : 'json',
		success : function(data) {
			if (data != null) {
				$("#data").show();
			} else {
				$("#data").hide();
				$("#panel-body").html("<div class='alert alert-danger'>当前词库没有任何数据，不能进行在线分词操作，请先进行 <a href='/Lexicon/goImport' class='alert-link'>导入词库数据</a>操作!</div>");
			}
		}
	});
	
	/**
	 *表单验证
	 **/
	var jform = $('#sform').bootstrapValidator({
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			'content' : {
				validators : {
					notEmpty : {
						message : '分词内容是必需的，不能是空的'
					}
				}
			},
			'model' : {
				validators : {
					notEmpty : {
						message : '分词方式是必需的，不能是空的'
					}
				}
			}
		}
	});
	/**
	 *按钮单击事件
	 **/
	$('#validateBtn').click(function() {

		jform.bootstrapValidator('validate');

		// 是否通过表单验证
		var isPass = jform.data('bootstrapValidator').validate().isValid();
		// 通过验证的动作
		if (isPass) {
			var lay;
			fv = {
				'content' : $("#content").val(),
				'model' : $("#model").val()
			};
			$.ajax({
				type : "POST",
				url : "/Lexicon/analysis",
				data : fv,
				dataType : 'json',
				beforeSend : function() {
					// 异步请求时spinner出现
					lay = layer.load();
				},
				success : function(data) {
					layer.close(lay);
					var result="";
					var syn="";
					var length=data.length;
					for ( var i=0; i<length ; i++) {
						var str = "<font color=red>"+data[i].value+"</font>  |  ";
						result = result +str;
						if(data[i].syn!=null)
							syn = syn + "<font color=red>"+data[i].value+"</font>  " +"的同义词为:<b>" +data[i].syn+"</b></br>";
				    }
					$('#result').html(result);
					$('#syn').html(syn);
				}
			});
		}
	});
});
/**
 *监听回车事件
 **/
$(function() {
	document.onkeydown = function(e) {
		var ev = document.all ? window.event : e;
		if (ev.keyCode == 13) {
			$('#validateBtn').click();
		}
	};
});
