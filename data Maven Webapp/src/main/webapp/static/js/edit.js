var jform;
$(document).ready(function() {
	$.ajax({
		type : "POST",
		url : "/Lexicon/getwordType",
		dataType : 'json',
		success : function(data) {
			 $(data).each(function(index) {
				 var val = data[index];
				 $("#sort").append( "<option value="+val.sort+">"+val.sortname+"</option>" );
	         });
		}
	});
	
	jform = $('#jForm').bootstrapValidator({
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			word : {
				message : '分词名称无效',
				validators : {
					notEmpty : {
						message : '分词名称是必需的，不能是空的'
					}
				}
			},
			sort: {
				message : '分类无效',
				validators : {
					notEmpty : {
						message : '分类是必需的，不能是空的'
					}
				}
			},
		}
	});
	
	/**
	* 增加事件
	*/
	$('#dataTables tbody').on('click', 'button#add',
	function() {
		$('#jForm').data('bootstrapValidator').resetForm();// 重置表单验证数据
		$("input[type=reset]").trigger("click");//重置表单数据
		$("#idForm").hide();//ID表单隐藏
		$("#myModalLabel").text("增加分词");
		$("#myModal").modal("show");
	});

	/**
	* 修改事件
	*/
	$('#dataTables tbody').on('click', 'button#update',function() {
		// 防止第二次进入模块，数据填充到表单
		$('#jForm').data('bootstrapValidator').resetForm();// 重置表单验证数据
		$("input[type=reset]").trigger("click"); //重置表单数据
		$("#idForm").show();//ID表单显示
		$("#myModalLabel").text("修改分词");
		var data = table.api().row($(this).parents('tr')).data();
		$("#id").val(data.id);
		$("#word").val(data.word);
		$("#wordType").val(data.wordType);
		$("#pinyin").val(data.pinyin);
		$("#synonyms").val(data.synonyms);
		$("#sort").val(data.sort);
		$("#filename").val(data.filename);
		$("#myModal").modal("show");
	});

	/**
	* 删除按钮单击事件
	*/
	$('#dataTables tbody').on('click', 'button#trash',function() {
		var data = table.api().row($(this).parents('tr')).data();
		layer.confirm('你确定要进行删除操作？', {
			icon : 3,
			title : '警告'
		}, function(index) {
			var lay;
			var fv = {
				id : data.id
			};
			$.ajax({
				type : "POST",
				url : "/Lexicon/deleteWord",
				data : fv,
				dataType : 'json',
				beforeSend : function() {
					// 异步请求时spinner出现
					lay = layer.load();
				},
				success : function(data) {
					layer.close(lay);
					if (data.result) {// 成功
						layer.msg(data.msg,{
							 icon: 1,
						}, function(){
							table.api().ajax.reload();	
						}); 
					} else {// 失败
						layer.msg(data.msg,{
							icon : 5
						}, function(){
							table.api().ajax.reload();
						}); 
					}
				}
			});
		});
	});
	
});

//编辑
function edit() {
	
	jform.bootstrapValidator('validate');

	// 是否通过表单验证
	var isPass = jform.data('bootstrapValidator').validate().isValid();

	// 通过验证的动作
	if (isPass) {
		var lay;
		var form = $("form[id=jForm]");
		var options = {
			url : '/Lexicon/editWord',
			type : 'post',
			dataType : 'json',
			beforeSend : function() {
				// 异步请求时等待框出现
				lay = layer.load();
			},
			success : function(data) {
				layer.close(lay);
				$('#myModal').modal('hide');
				if (data.result) {// 成功
					layer.msg(data.msg,{
						 icon: 1,
					}, function(){
						table.api().ajax.reload();	
					}); 
				} else {// 失败
					layer.msg(data.msg,{
						icon : 5
					}, function(){
						table.api().ajax.reload();
					}); 
				}
			}
		};
		form.ajaxSubmit(options);
	}
}
