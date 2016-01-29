<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<title>美柚搜索管理系统-仪表盘</title>
<%@ include file="/static/public/public.inc"%>
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

	<div id="wrapper">

		<div id="page-wrapper">

			<div class="row">
				<div class="col-lg-3 col-md-6">
					<label>From</label> <input type="text" readonly id="datetimeStart"
						class="form-control">
				</div>
				<div class="col-lg-3 col-md-6">
					<label>End</label> <input type="text" readonly id="datetimeEnd"
						class="form-control">
				</div>
			</div>
			<p class="page-header"></p>
			<div class="row">
				<div class="col-lg-12 col-md-12 col-xs-12">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<i class="fa fa-bar-chart-o"></i> 搜索次数统计
						</div>
						<!-- /.panel-heading -->
						<div class="panel-body" id="panel-body">
							<div id="container1"></div>
						</div>
						<!-- /.panel-body -->
					</div>
				</div>
				
				
				

			
			
			</div>
		</div>
		<!-- /#page-wrapper -->
	</div>
	<!-- /#wrapper -->
</body>
</html>
