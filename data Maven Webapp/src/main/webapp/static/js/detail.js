$(function() {
    Date.prototype.format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            //月份
            "d+": this.getDate(),
            //日
            "h+": this.getHours(),
            //小时
            "m+": this.getMinutes(),
            //分
            "s+": this.getSeconds(),
            //秒
            "q+": Math.floor((this.getMonth() + 3) / 3),
            //季度
            "S": this.getMilliseconds() //毫秒
        };

        if (/(y+)/.test(fmt))

        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

        for (var k in o)

        if (new RegExp("(" + k + ")").test(fmt))

        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

        return fmt;
    };

    function getDate(day) {
        var now = new Date();
        var nowdate = now.getTime();
        var editdate = new Date(nowdate - (day * 24 * 60 * 60 * 1000)).format("yyyy-MM-dd");
        return editdate;
    }

    var endTime = getDate(1); //昨天
    var startTime = getDate(8); //前七天
    $('#datetimeStart').val(startTime);
    $('#datetimeEnd').val(endTime);

    $(document).ready(function() {
        var options1 = {
            chart: {
                renderTo: 'container1',
                // DIV容器ID
                zoomType: 'x',
                spacingRight: 20,
                type: 'line' // 报表类型
            },
            // 报表名称
            title: {
                text: '搜索次数统计',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '处理请求次数(次)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '次'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            // x轴显示内容
            xAxis: {
                categories: []
            },
            // 数据来源 (多个对比的)
            series: [{
                name: '全网搜索总次数',
                data: []
            },
            {
                name: '问题搜索总次数',
                data: []
            },
            {
                name: '经验搜索总次数',
                data: []
            },
            {
                name: '知识搜索总次数',
                data: []
            },
            {
                name: '问题搜索无结果次数',
                data: []
            },
            {
                name: '经验搜索无结果次数',
                data: []
            },
            {
                name: '知识搜索无结果次数',
                data: []
            }]
        };

        var options2 = {
            chart: {
                renderTo: 'container2',
                // DIV容器ID
                zoomType: 'x',
                spacingRight: 20,
                type: 'line' // 报表类型
            },
            // 报表名称
            title: {
                text: '平均响应时间',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '响应时间(ms)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'ms'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            // x轴显示内容
            xAxis: {
                categories: []
            },
            // 数据来源 (多个对比的)
            series: [{
                name: '全网响应时间',
                data: []
            }]
        };
        var options2 = {
            chart: {
                renderTo: 'container2',
                // DIV容器ID
                zoomType: 'x',
                spacingRight: 20,
                type: 'line' // 报表类型
            },
            // 报表名称
            title: {
                text: '平均响应时间',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: true
            },
            yAxis: {
                title: {
                    text: '响应时间(ms)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: 'ms'
            },
            // x轴显示内容
            xAxis: {
                categories: []
            },
            // 数据来源 (多个对比的)
            series: [{
                name: '全网响应时间',
                data: []
            }]
        };
        var options3 = {
            chart: {
                renderTo: 'container3',
                // DIV容器ID
                type: 'line' // 报表类型
            },
            // 报表名称
            title: {
                text: '平均返回个数',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '返回个数(个)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '个'
            },
            // x轴显示内容
            xAxis: {
                categories: []
            },
            // 数据来源 (多个对比的)
            series: [{
                name: '全网平均返回个数',
                data: []
            }]
        };

        var options4 = {
            chart: {
                type: 'pie',
                renderTo: 'container4',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            // 报表名称
            title: {
                text: '全网搜索无结果占比',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.name + '</b>: <br>' + this.series.name + ':<b>' + Highcharts.numberFormat(this.percentage, 1) + '% </b>(' + Highcharts.numberFormat(this.y, 0, ',') + ' 次)';
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '百分比',
                data: [[], []]
            }]
        };

        var options5 = {
            chart: {
                type: 'pie',
                renderTo: 'container5',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            // 报表名称
            title: {
                text: '各搜索DB无结果占比',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.name + '</b>: <br>' + this.series.name + ':<b>' + Highcharts.numberFormat(this.percentage, 1) + '% </b>(' + Highcharts.numberFormat(this.y, 0, ',') + ' 次)';
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '百分比',
                data: [[], [], []]
            }]
        };

        var options6 = {
            chart: {
                type: 'pie',
                renderTo: 'container6',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            // 报表名称
            title: {
                text: '问题(DB)搜索无结果占比',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.name + '</b>: <br>' + this.series.name + ':<b>' + Highcharts.numberFormat(this.percentage, 1) + '% </b>(' + Highcharts.numberFormat(this.y, 0, ',') + ' 次)';
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '百分比',
                data: [[], []]
            }]
        };

        var options7 = {
            chart: {
                type: 'pie',
                renderTo: 'container7',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            // 报表名称
            title: {
                text: '经验(DB)搜索无结果占比',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.name + '</b>: <br>' + this.series.name + ':<b>' + Highcharts.numberFormat(this.percentage, 1) + '% </b>(' + Highcharts.numberFormat(this.y, 0, ',') + ' 次)';
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '百分比',
                data: [[], []]
            }]
        };

        var options8 = {
            chart: {
                type: 'pie',
                renderTo: 'container8',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            // 报表名称
            title: {
                text: '知识(DB)搜索无结果占比',
                x: -20 // center
            },
            subtitle: {
                text: 'Source:74,77服务器数据',
                x: -20
            },
            credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.point.name + '</b>: <br>' + this.series.name + ':<b>' + Highcharts.numberFormat(this.percentage, 1) + '% </b>(' + Highcharts.numberFormat(this.y, 0, ',') + ' 次)';
                }
            },
            /*tooltip: {
                     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                 },*/
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '百分比',
                data: [[], []]
            }]
        };
        var lay;
        fv = {
            'start': $('#datetimeStart').val(),
            'end': $('#datetimeEnd').val()
        };
        $.ajax({
            type: "POST",
            url: "/data/getSearchData",
            data: fv,
            dataType: 'json',
            beforeSend: function() {
                // 异步请求时spinner出现
                lay = layer.load();
            },
            success: function(json) {
                layer.close(lay);
                initChart(json);
            }
        });
        //开始时间插件
        $('#datetimeStart').datetimepicker({
            minView: 'month',
            language: 'zh-CN',
            startDate: "2016-01-14",
            endDate: endTime,
            format: 'yyyy-mm-dd',
            todayHighlight: true,
            initialDate: startTime,
            autoclose: 1,
        }).on("click",
        function(ev) { //限制开始时间大于结束时间
            $("#datetimeStart").datetimepicker("setEndDate", $("#datetimeEnd").val());
        }).on('changeDate',
        function(ev) {
            var start = new Date(ev.date.valueOf()).format("yyyy-MM-dd");
            var lay;
            fv = {
                'start': start,
                'end': $("#datetimeEnd").val()
            };
            $.ajax({
                type: "POST",
                url: "/data/getSearchData",
                data: fv,
                dataType: 'json',
                beforeSend: function() {
                    // 异步请求时spinner出现
                    lay = layer.load();
                },
                success: function(json) {
                    layer.close(lay);
                    initChart(json);
                }
            });
        });
        //结束时间插件
        $('#datetimeEnd').datetimepicker({
            minView: 'month',
            language: 'zh-CN',
            initialDate: endTime,
            format: 'yyyy-mm-dd',
            startDate: "2016-01-14",
            endDate: endTime,
            todayHighlight: true,
            autoclose: 1,
        }).on("click",
        function(ev) { //限制结束时间小于开始时间
            $("#datetimeEnd").datetimepicker("setStartDate", $("#datetimeStart").val());
        }).on('changeDate',
        function(ev) {
            var end = new Date(ev.date.valueOf()).format("yyyy-MM-dd");
            var lay;
            fv = {
                'start': $('#datetimeStart').val(),
                'end': end
            };
            $.ajax({
                type: "POST",
                url: "/data/getSearchData",
                data: fv,
                dataType: 'json',
                beforeSend: function() {
                    // 异步请求时spinner出现
                    lay = layer.load();
                },
                success: function(json) {
                    layer.close(lay);
                    initChart(json);
                }
            });
        });
        //初始化表格
        function initChart(json) {
            var i, len = json.length;
            options1.series[0].data = [];
            options1.series[1].data = [];
            options1.series[2].data = [];
            options1.series[3].data = [];
            options1.series[4].data = [];
            options1.series[5].data = [];
            options1.series[6].data = [];
            options2.series[0].data = [];
            options3.series[0].data = [];
            options4.series[0].data = [[], []];
            options5.series[0].data = [[], [], []];
            for (i = 0; i < len; i++) {
                // 赋值 series
                options1.series[0].data[i] = json[i].allQueryTimes;
                options1.series[1].data[i] = json[i].forHelpQueryTimes;
                options1.series[2].data[i] = json[i].experienceQueryTimes;
                options1.series[3].data[i] = json[i].knowledgeQueryTimes;
                options1.series[4].data[i] = json[i].forHelpFailTimes;
                options1.series[5].data[i] = json[i].experienceFailTimes;
                options1.series[6].data[i] = json[i].knowledgeFailTimes;
                options2.series[0].data[i] = json[i].avgQtime;
                options3.series[0].data[i] = json[i].avgHits;

                if (json[i].dateTime == $("#datetimeEnd").val()) {
                    options4.series[0].data[0][0] = '无结果次数';
                    options4.series[0].data[0][1] = options1.series[4].data[i]+options1.series[5].data[i]+options1.series[6].data[i];
                    options4.series[0].data[1][0] = '有结果次数';
                    options4.series[0].data[1][1] = json[i].allQueryTimes - options4.series[0].data[0][1];
                    options5.series[0].data[0][0] = '问题(DB)无结果次数';
                    options5.series[0].data[0][1] = json[i].forHelpFailTimes;
                    options5.series[0].data[1][0] = '经验(DB)无结果次数';
                    options5.series[0].data[1][1] = json[i].experienceFailTimes;
                    options5.series[0].data[2][0] = '知识(DB)无结果次数';
                    options5.series[0].data[2][1] = json[i].knowledgeFailTimes;
                    options6.series[0].data[0][0] = '有结果次数';
                    options6.series[0].data[0][1] = json[i].forHelpQueryTimes-json[i].forHelpFailTimes;
                    options6.series[0].data[1][0] = '无结果次数';
                    options6.series[0].data[1][1] = json[i].forHelpFailTimes;
                    options7.series[0].data[0][0] = '有结果次数';
                    options7.series[0].data[0][1] = json[i].experienceQueryTimes-json[i].experienceFailTimes;
                    options7.series[0].data[1][0] = '无结果次数';
                    options7.series[0].data[1][1] = json[i].experienceFailTimes;
                    options8.series[0].data[0][0] = '有结果次数';
                    options8.series[0].data[0][1] = json[i].knowledgeQueryTimes-json[i].knowledgeFailTimes;
                    options8.series[0].data[1][0] = '无结果次数';
                    options8.series[0].data[1][1] = json[i].knowledgeFailTimes;
                }
                // 对报表X轴显示名称赋值
                options1.xAxis.categories[i] = json[i].dateTime;
                options2.xAxis.categories[i] = json[i].dateTime;
                options3.xAxis.categories[i] = json[i].dateTime;
            }
            var chart1 = new Highcharts.Chart(options1);
            var chart2 = new Highcharts.Chart(options2);
            var chart3 = new Highcharts.Chart(options3);
            var chart4 = new Highcharts.Chart(options4);
            var chart5 = new Highcharts.Chart(options5);
            var chart6 = new Highcharts.Chart(options6);
            var chart7 = new Highcharts.Chart(options7);
            var chart8 = new Highcharts.Chart(options8);
        }
    });
});