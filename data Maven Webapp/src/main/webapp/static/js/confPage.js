$(document).ready(function() {
	$.ajax({
		type : "POST",
		url : "/Lexicon/getJcsegConfig",
		dataType : 'json',
		success : function(data) {
			if (data != null) {
				$("p").addClass("text-success").css("font-weight","bold");
				$("#maxlen").html(data.MAX_LENGTH+'');
				$("#icnname").html(data.I_CN_NAME+'');
				$("#mixcnlen").html(data.MIX_CN_LENGTH+'');
				$("#pptmaxlen").html(data.PPT_MAX_LENGTH+'');
				$("#cnmaxlnadron").html(data.MAX_CN_LNADRON+'');
				$("#clearstopword").html(data.CLEAR_STOPWORD+'');
				$("#cnnumtoarabic").html(data.CNNUM_TO_ARABIC+'');
				$("#cnfratoarabic").html(data.CNFRA_TO_ARABIC+'');
				$("#nsthreshold").html(data.NAME_SINGLE_THRESHOLD);
				$("#keeppunctuations").html(data.keeppunctuations+'');
				$("#prefix").html(data.lexiconFilePrefix+'');
				$("#suffix").html(data.lexiconFileSuffix+'');
				$("#path").html(data.lexiconPath[0]+'');
				$("#autoload").html(data.autoload+'');
				$("#polltime").html(data.pollTime+'');
				$("#loadpos").html(data.LOAD_CJK_POS+'');
				$("#loadpinyin").html(data.LOAD_CJK_PINYIN+'');
				$("#loadsyn").html(data.LOAD_CJK_SYN+'');
				$("#keepunregword").html(data.KEEP_UNREG_WORDS+'');
				$("#ensencondseg").html(data.enSecondSeg+'');
				$("#stokenminlen").html(data.sTokenMinLen+'');
				$("#filepath").html(data.filepath+'');
			} else {
				$("#panel-body").html("<div class='alert alert-danger'>当前词库没有任何数据，请先进行 <a href='/Lexicon/goImport' class='alert-link'>导入词库数据</a>操作!</div>");
			}
		}
	});

});
