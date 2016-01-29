$(document).ready(function() {
	
	var jform = $('#sform').bootstrapValidator({
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			'path' : {
				validators : {
					notEmpty : {
						message : '文件路径是必需的，不能是空的'
					}
				}
			}
		}
	});

	$('#validateBtn').click(function() {
		jform.bootstrapValidator('validate');
		// 是否通过表单验证
		var isPass = jform.data('bootstrapValidator').validate().isValid();
		// 通过验证的动作
		if (isPass) {
			var lay;
			var fv = {
				'path' : $("#path").val()
			};
			$.ajax({
				type : "POST",
				url : "/Lexicon/import",
				data : fv,
				dataType : 'json',
				beforeSend : function() {
					// 异步请求时等待框出现
					lay = layer.load(0);
				},
				success : function(data) {
					layer.close(lay);
					refresh(data);
				}
			});
		}
	});
});
$(function() {
	document.onkeydown = function(e) {
		var ev = document.all ? window.event : e;
		if (ev.keyCode == 13) {
			$('#validateBtn').click();
		}
	}
});
function refresh(data) {
	// 刷新当前页面
	if (data.result) {// 成功
		layer.alert(data.msg, {
			icon : 1,
			title : '成功'
		}, function(index) {
			layer.load();
			location.href = '/Lexicon/goImport';
		}); 
	} else {// 失败
		layer.alert(data.msg, {
			icon : 2,
			title : '失败'
		}, function(index) {
			layer.load();
			location.href = '/Lexicon/goImport';
		});
	}
}