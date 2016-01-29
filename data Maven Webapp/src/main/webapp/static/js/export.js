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
				$("#panel-body").html("<div class='alert alert-danger'>当前词库没有任何数据，不能进行数据导出操作，请先进行 <a href='/Lexicon/goImport' class='alert-link'>导入词库数据</a>操作!</div>");
			}
		}
	});
	
	$('#comBut').click(function() {
		var lay;
		var fv = {
			
		};
		$.ajax({
			type : "POST",
			url : "/Lexicon/export",
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

	});
});
$(function() {
	document.onkeydown = function(e) {
		var ev = document.all ? window.event : e;
		if (ev.keyCode == 13) {
			$('#comBut').click();
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
			location.href = '/Lexicon/goExport';
		});
	} else {// 失败
		layer.alert(data.msg, {
			icon : 2,
			title : '失败'
		}, function(index) {
			layer.load();
			location.href = '/Lexicon/goExport';
		});
	}
}