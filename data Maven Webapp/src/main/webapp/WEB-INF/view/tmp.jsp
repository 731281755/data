

<!DOCTYPE html>
<%@ pagecontentType="text/html;charset=utf-8" %>
<html lang="zh-CN">
<head>
<title>美柚</title>

<meta charset="utf-8">
<link type="image/x-icon" href="static/images/favicon.ico"
	rel="shortcut icon">
<!-- jQuery -->
<script type="text/javascript"
	src="static/bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript"
	src="static/bower_components/jquery/dist/jquery-form.js"></script>

<!-- Bootstrap 核心 CSS -->
<link rel="stylesheet"
	href="static/bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet"
	href="static/bower_components/bootstrap/dist/css/bootstrap-theme.css"></link>
<script type="text/javascript"
	src="static/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<!-- 表单验证css -->
<link rel="stylesheet"
	href="static/bower_components/validator/dist/css/bootstrapValidator.min.css"></link>
<script type="text/javascript"
	src="static/bower_components/validator/dist/js/bootstrapValidator.min.js"></script>

<!-- 滚动菜单核心文件  -->
<link rel="stylesheet"
	href="static/bower_components/metisMenu/dist/metisMenu.min.css">
<script type="text/javascript"
	src="static/bower_components/metisMenu/dist/metisMenu.min.js"></script>

<!-- DataTables CSS -->
<link rel="stylesheet"
	href="static/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css">
<!-- DataTables Responsive CSS -->
<link rel="stylesheet"
	href="static/bower_components/datatables-responsive/css/dataTables.responsive.css">
<!-- DataTables JavaScript -->
<script
	src="static/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
<script
	src="static/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>

<!-- 	公共js文件，加载获取URL参数的方法 -->
<script type="text/javascript" src="static/js/public.js"></script>

<!-- 定制样式 CSS -->
<link rel="stylesheet" href="static/dist/css/sb-admin-2.css">
<script type="text/javascript" src="static/dist/js/sb-admin-2.js"></script>

<!-- 图标样式文件  -->
<link rel="stylesheet"
	href="static/bower_components/font-awesome/css/font-awesome.min.css">

<script type="text/javascript"
	src="static/bower_components/layer/layer.js"></script>

<script type="text/javascript"
	src="static/bower_components/highcharts/highcharts.js"></script>
<script type="text/javascript"
	src="static/bower_components/highcharts/exporting.js"></script>
<script type="text/javascript"
	src="static/bower_components/highcharts/highcharts-3d.js"></script>

<link rel="stylesheet"
	href="static/bower_components/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css"></link>
<script type="text/javascript"
	src="static/bower_components/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript"
	src="static/bower_components/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"
	charset="UTF-8"></script>
<script type="text/javascript" src="static/js/detail.js"></script>
</head>

<body>

 
	<div class="row">
		<div class="col-lg-3 col-md-6" style="position:fixed; left:200px; top:50px;" >
			<label>From</label> <input type="text" readonly id="datetimeStart"
				class="form-control">
		</div>
		<div class="col-lg-3 col-md-6" style="position:fixed; left:1000px; top:50px;">
			<label>End</label> <input type="text" readonly id="datetimeEnd"
				class="form-control">
		</div>
	</div>

		<div class="col-lg-6 col-md-6 col-xs-12" style="height: 29px; width: 1355px; position:fixed; left:200px; top:400px;"  >
			<div class="panel panel-success">
				<div class="panel-heading">
					<i class="fa fa-bar-chart-o"></i> 搜索响应时间统计
				</div>
				<!-- /.panel-heading -->
				<div class="panel-body" id="panel-body">
					<div id="container2"></div>
				</div>
				<!-- /.panel-body -->
			</div>
		</div>
		
</body>
</html>
