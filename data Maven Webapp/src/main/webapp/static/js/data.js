var table;
$(document).ready(function() {
	table = $('#dataTables').dataTable({
		"responsive": true,
		"serverSide": true,
		"processing": true,
		ordering: false,
		columns : [ 
		  		 {"data" : "id"},
		  		 {"data" : "word"}, 
		  		 {"data" : "wordType"},
		  		 {"data" : "pinyin"},
		  		 {"data" : "synonyms"}, 
		  		 {"data" : "sortname"},
		  		 {"data" : "filename"},
		  		 ],
		/* ordering : false, */
		"ajax": {
			"type": "POST",
			"url": "/Lexicon/getData",
			"data": function(d) {
				d.dataType = $.getUrlParam('dataType');
			},
			"dataSrc": function ( json ) {
				// 这里的json返回的是服务器的数据
				if(json.data.length > 0){
					$("#name").html("<i class='fa fa-image fa-cogs'></i> "+json.data[0].sortname+"词库数据管理");
					$("#head").html("<i class='fa fa-image fa-rss'></i> "+json.data[0].sortname+"词库数据列表");
				}else{
					$("#name").html("<i class='fa fa-image fa-cogs'></i>词库数据管理");
					$("#head").html("<i class='fa fa-image fa-rss'></i>词库数据列表");
				}
				return json.data;
			}
		},
		"columnDefs": [
		{
			/*"targets": [5],
		    "visible": false,*/
		},
		{
			"targets": 7,
			"data": null,
			"defaultContent": "<div class='btn-group'>" + "<button class='btn btn-default btn-xs' title='增加' id='add'><span class='fa fa-plus t fa-fw'></span></button>" + "<button class='btn btn-default btn-xs' title='修改' id='update'><span class='fa fa-edit fa-fw'></span></button>" + "<button class='btn btn-danger btn-xs' title='删除' id='trash'><span class='fa fa-trash-o fa-fw'></span></button>" + "</div>"
		}],
		"sPaginationType": "full_numbers",
		language: {
			"sProcessing": "玩命加载中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			"sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "没有检索到任何数据",
			"sLoadingRecords": "加载中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上一页",
				"sNext": "下一页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		}
	});

});
