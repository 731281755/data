$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "/Lexicon/getJcsegConfig",
        dataType: 'json',
        success: function(data) {
            if (data != null) {
                $("#data").show();
                $.ajax({
                    type: "POST",
                    url: "/Lexicon/getDataImportStatus",
                    dataType: 'json',
                    success: function(data) {
                        if (data.status == "idle") {
                        	$("#infor").removeClass();
                        	$("#infor").addClass("alert alert-success alert-dismissable");
                        	$('#content').html(data.content + "(Duration:'" + data.time + "')");
                        	$('#committed').html("上次索引创建时间：" + data.committed);
                        }else if(data.status == "busy"){
                        	$("#infor").removeClass();
                        	$("#infor").addClass("alert alert-warning alert-dismissable");
                        	$('#content').html("<img src='static/images/loader.gif'>  索引创建中...");
                        	$('#committed').html("索引创建耗时：" + data.time2);
                        }
                        $('#lastTime').html("上次更新时间：" + data.date);
                        $('#else').html("<b>Requests: " + data.requests + ", Fetched: " + data.fetched + ", Skipped:" + data.skipped + ", Processed:" + data.processed+"</b>");
                    }
                });
            } else {
                $("#data").hide();
                $("#panel-body").html("<div class='alert alert-danger'>当前词库没有任何数据，不能进行索引重建操作，请先进行 <a href='/Lexicon/goImport' class='alert-link'>导入词库数据</a>操作!</div>");
            }
        }
    });

    /**
	 * 按钮单击事件
	 */
    $('#validateBtn').click(function() {
        // 通过验证的动作
        $.ajax({
            type: "POST",
            url: "/Lexicon/dataImport",
            success: function() {
            	$('#refreshBtn').click();
            }
        });

    });

    run();
    var interval;

    $("#auto").click(function() {
        run();
    });

    function run() {
        // 是否选中自动刷新
        var isChecked = $("#auto").is(":checked");
        if (isChecked) {
            interval = setInterval(chat, "1000");
        } else {
            clearTimeout(interval);
            $("#refreshSpan").removeClass();
    		$("#refreshSpan").addClass("glyphicon glyphicon-refresh");
        }
    }
    
    function chat() {
        $('#refreshBtn').click();
    }
    
    $('#refreshBtn').blur(function () {
    	$("#refreshSpan").removeClass();
		$("#refreshSpan").addClass("glyphicon glyphicon-refresh");
   	}) 
    /**
	 * 按钮单击事件
	 */
    $('#refreshBtn').click(function() {
    	$("#refreshSpan").removeClass();
    	$("#refreshSpan").addClass("glyphicon glyphicon-refresh");
        $.ajax({
            type: "POST",
            url: "/Lexicon/getDataImportStatus",
            dataType: 'json',
            success: function(data) {
            	$("#refreshSpan").removeClass();
            	$("#refreshSpan").addClass("glyphicon glyphicon-ok");
                if (data.status == "idle") {
                	$("#infor").removeClass();
                	$("#infor").addClass("alert alert-success alert-dismissable");
                	$('#content').html(data.content + "(Duration:'" + data.time + "')");
                	$('#committed').html("上次索引创建时间：" + data.committed);
                }else if(data.status == "busy"){
                	$("#infor").removeClass();
                	$("#infor").addClass("alert alert-warning alert-dismissable");
                	$('#content').html("<img src='static/images/loader.gif'>索引创建中...");
                	$('#committed').html("索引创建耗时：" + data.time2);
                }
                $('#lastTime').html("上次更新时间：" + data.date);
                $('#else').html("<b>Requests: " + data.requests + ", Fetched: " + data.fetched + ", Skipped:" + data.skipped + ", Processed:" + data.processed+"</b>");
            }
        });
    });
});