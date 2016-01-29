$(document).ready(function() {
	window.location.href="/Lexicon/goDetail";
	var jform = $('#jform').bootstrapValidator({
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			'username' : {
				message : '用户名无效',
				validators : {
					notEmpty : {
						message : '用户名是必需的，不能是空的'
					},
					stringLength : {
						min : 4,
						max : 15,
						message : '用户名必须大于4且小于11个字符长'
					},
					regexp : {
						regexp : /^[a-zA-Z0-9]+$/,
						message : '用户名只能包含字母和数字'
					}
				}
			},
			'password' : {
				validators : {
					notEmpty : {
						message : '密码是必需的，不能是空的'
					},
					stringLength : {
						min : 4,
						max : 20,
						message : '密码必须大于4且小于15个字符长'
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
				'manager.username' : $("#username").val(),
				'manager.password' : $("#password").val()
			};
			lay = layer.load();
			location.href = '/Lexicon/goDetail';
			/*$.ajax({
				type : "POST",
				url : "/Order/login",
				data : fv,
				dataType : 'json',
				beforeSend : function() {
					// 异步请求时等待框出现
					lay = layer.load();
				},
				success : function(data) {
					layer.close(lay);
					var obj = eval('(' + data + ')');// 将一个字符串转化为json对象
					if (obj.result) {
						success(obj.msg);
					} else {
						mistake(obj.msg);
					}
				}
			});*/
		}
	});

	// 密码验证通过的方法
	function success(msg) {
		layer.load();
		location.href = '/Order/gomanage.action';
	}
	// 密码验证失败的方法
	function mistake(msg) {
		$('#error').html(msg);
	}
});