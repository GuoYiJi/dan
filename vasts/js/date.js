$(function (){

	var dataparams = {

	    "bInfo": false, //页脚信息
	    "bPaginate": true, //自动宽度
	    "bPaginate": false,
	    "deferRender": true,
	    "processing": true,
	    "serverSide": true,
	    "searching": false,
	    "ordering": false,
	    "ajax": {
	        "url": "./?m=cam&a=ajaxdata",
	        "type": "POST",
	        "data": {
	            "start": moment().startOf("day").format("X"),
	            "end": moment().endOf('day').format("X")
	        }
	    },
	    "columns": [{
	        "data": null,
	        "defaultContent": "",
	        "class": "opr details-control"
	    }, {
	        "data": null,
	        "defaultContent": "",
	        "class": "opr"
	    }, {
	        "data": "name",
	        "defaultContent": "",
	        "class": "name_ajax opr"
	    }, {
	        "data": null
	    }, {
	        "data": "gvisit"
	    }, {
	        "data": "visit"
	    }, {
	        "data": "click"
	    }, {
	        "data": "cvr"
	    }, {
	        "data": "cpv"
	    }, {
	        "data": "CTR"
	    }, {
	        "data": "CR"
	    }, {
	        "data": "cost"
	    }, {
	        "data": "cvr_amt"
	    }, {
	        "data": "Profit"
	    }, {
	        "data": "ROI"
	    }, {
	        "data": null
	    }, {
	        "data": "EPV"
	    }, {
	        "data": "EPC"
	    }, {
	        "data": "ECPM"
	    }, ],
	    "columnDefs": [{
	            "render": function(data, type, row) {
	                return "<div class='source_id_" + data.source_id + "'>" + data.source + "</div>"
	            },
	            "targets": 3
	        }, {
	            "render": function(data, type, row) {
	                var info = "";

	                return "<div class='" + info + "'>" + data + "%</div>"
	            },
	            "targets": 9
	        }, {
	            "render": function(data, type, row) {
	                var info = "";

	                return "<div class='" + info + "'>" + data + "%</div>"
	            },
	            "targets": 10
	        }, {
	            "render": function(data, type, row) {
	                var info = "";

	                return "<div class='" + info + "'>$" + changeTwoDecimal_f(data) + "</div>"
	            },
	            "targets": 11
	        }, {
	            "render": function(data, type, row) {
	                var info = "";

	                return "<div class='" + info + "'>$" + changeTwoDecimal_f(data) + "</div>"
	            },
	            "targets": 12
	        }, {
	            "render": function(data, type, row) {
	                var info = "";
	                if (data < 0) {
	                    info = "danger";
	                } else if (data == 0) {
	                    info = ""
	                } else {
	                    info = "success";
	                }
	                return "<div class='" + info + "'>$" + data + "</div>"
	            },
	            "targets": 13
	        }, {
	            "render": function(data, type, row) {
	                return "<a class='btn-default copyurl' href='" + data.camurl + "'>Copy#" + data._id + "</a>";
	            },
	            "targets": 1
	        }, {
	            "render": function(data, type, row) {
	                return changeTwoDecimal_f(data) + "%";
	            },
	            "targets": 14
	        },

	        {
	            "render": function(data, type, row) {
	                return data.cloak + ' <div style="z-index:999;position:absolute;display:none;" id="show_men_' + data.id + '" class="btn-group show_men_" role="group" aria-label="Basic example">' +

	                    '<span><button type="button" class="btn btn-primary" onclick="window.open(\'/?m=cam&a=edit&id=' + data.id + '\')">Edit</button></span>' +

	                    '<span><button type="button"  class="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Status</button>' +

	                    '<ul class="dropdown-menu" role="menu">' +
	                    '<li><a target="_blank" href="/?m=report&a=download&cid=' + data.id + '">Download</a></li>' +
	                    '<li><a target="_blank" href="/?m=report&a=download2">Download2</a></li>' +
	                    '<li class=""><a  target="_blank" href="/?m=report&a=campaigns&cid=' + data.id + '">Campaigns</a></li>' +
	                    '<li class=""><a  target="_blank" href="/?m=report&a=campaigns_days&cid=' + data.id + '">Campaigns Days</a></li>' +
	                    '<li class=""><a  target="_blank" href="/?m=report&a=campaigns_hours&cid=' + data.id + '">Campaigns Hours</a></li>' +
	                    '<li class=""><a  target="_blank" href="/?m=report&a=days&cid=' + data.id + '">Days</a></li>' +
	                    '<li class=""><a  target="_blank" href="/?m=report&a=hours&cid=' + data.id + '">Hours</a></li>' +
	                    '<li><a target="_blank" href="/?m=report&a=campaigns_date&cid=' + data.id + '">Campaigns Date</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=paths&cid=' + data.id + '">Paths</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=landingpages&cid=' + data.id + '">LandingPages</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=landingpages2&cid=' + data.id + '">LandingPages2</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=offers&cid=' + data.id + '">Offers</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=offers2&cid=' + data.id + '">Offers2</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=network&cid=' + data.id + '">AffiliateNetwork</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=cap_offer">Cap Offers</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=convert&cid=' + data.id + '">Convert</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=trafficsource&cid=' + data.id + '">TrafficSource</a></li>' +
	                    '<li><a target="_blank" href="/?m=report&a=trafficsource2&cid=' + data.id + '">TrafficSource2</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=countrys&cid=' + data.id + '">Countrys</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=countrys2&cid=' + data.id + '">All Countrys</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=browsers&cid=' + data.id + '">Browsers</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=os&cid=' + data.id + '">OS</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=devices&cid=' + data.id + '">Devices</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=domains&cid=' + data.id + '">Domains</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=referers&cid=' + data.id + '">Referers</a></li>' +
	                    '<li><a  target="_blank" href="/?m=report&a=cc110&cid=' + data.id + '">C1-C10</a></li>' +
	                    '<li><a target="_blank" href="/?m=report&a=cc1102&cid=' + data.id + '">C1-C10_2</a></li>' +
	                    '</ul></span>' +
	                    '<span><button type="button"  class="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Download</button>' +

	                    '<ul class="dropdown-menu" role="menu">' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Today\')">c1 Today</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Yesterday\')">c1 Yesterday</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Last 3 Days\')">c1 Last 3 Days</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Last 7 Days\')">c1 Last 7 Days</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Last 30 Days\')">c1 Last 30 Days</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Last 180 Days\')">c1 Last 180 Days</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'This Month\')">c1 This Month</a></li>' +
	                    '<li><a target="_blank" href="javascript:download(\'/?m=report&a=cc110\',' + data.id + ',\'Last Month\')">c1 Last Month</a></li>' +

	                    '</ul></span>' +
	                    '<span><button type="button" class="btn btn-primary" onclick="window.open(\'/?m=monitor&cid=' + data.id + '\');">Monitor</button></span>' +
	                    '<span><button type="button" class="btn btn-primary" href="/?m=cam&a=copy&id=' + data.id + '" onclick="copy(this,\'' + data.name + '\',\'?m=cam\')">Clone</button></span>' +
	                    '<span><button type="button" class="btn btn-primary" href="/?m=cam&a=del&id=' + data.id + '" onclick="del(this)">Delete</button></span>' +

	                    '</div>';
	            },
	            "targets": 15
	        },
	        //{ "visible": false,  "targets": [ 0 ] }
	    ],
	    "footerCallback": function(row, data, start, end, display) {
	        var api = this.api(),
	            data;
	        showrequest(api);
	        var ttr = function(e) {
	            $(".show_men_").hide(function() {
	                document.body.onselectstart = document.body.oncontextmenu = function() {
	                    return true;
	                }
	            });
	            if (e.which == 3) {
	                $(".show_men_").hide();
	                var tr = $(this).closest('tr');
	                var row = api.row(tr);
	                var data = row.data();

	                var relativeX = e.pageX;
	                var relativeY = e.pageY;

	                $("#show_men_" + data.id).css("left", relativeX + "px");
	                $("#show_men_" + data.id).css("top", relativeY + "px");
	                $("#show_men_" + data.id).show();
	                $("#show_men_" + data.id).insertAfter($("#content"));
	            }

	            document.body.onselectstart = document.body.oncontextmenu = function() {
	                return false;
	            }
	            return false;
	        };
	        var enter = function(e) {
	            var tr = $(this).closest('tr');
	            var row = api.row(tr);
	            var data = row.data();
	            $(this).html('<input type="hidden" name="id" id="text_' + data.id + '_id" value="' + data.id + '"><input type="text" name="name" id="text_' + data.id + '_text" value="' + data.name + '"><input type="button" value="Enter" id="text_' + data.id + '"><input type="button" value="Cancel" id="c_text_' + data.id + '">');
	            $(this).unbind("click");
	            $(this).unbind("mousedown");
	            var ttis = $(this);
	            //$("#text_"+data.id).focus(function(e){
	            // });blur
	            $("#text_" + data.id).click(function(e) {
	                if ($("#" + $("#text_" + data.id).attr("id") + "_text").val() != data.name) {
	                    ajaxpost("/?m=cam&a=save", {
	                        "action": "ajax_rename",
	                        "name": $("#" + $(this).attr("id") + "_text").val(),
	                        "id": $("#" + $(this).attr("id") + "_id").val()
	                    }, function() {
	                        $("#text_" + data.id).unbind("click");
	                        ttis.html($("#" + $("#text_" + data.id).attr("id") + "_text").val());
	                        ttis.bind("mousedown", ttr);
	                        ttis.bind("click", enter);

	                    });
	                }
	            });
	            $("#c_text_" + data.id).click(function(e) {
	                $("#text_" + data.id).unbind("click");
	                ttis.html(data.name);
	                ttis.bind("mousedown", ttr);
	                setTimeout(function() {
	                    ttis.bind("click", enter);
	                }, 1000);

	            });

	        };
	        api.$(".name_ajax").click(enter);
	        api.$("td[class!=' opr']").mousedown(ttr);
	        $(".show_men_").click(function() {
	            document.body.onselectstart = document.body.oncontextmenu = function() {
	                return true;
	            }
	            $(this).hide();
	        });

	    },
	};
	ssParams = {
	    "timePicker24Hour": true,
	    "timePicker": true,
	    "timePickerIncrement": 1,
	    ranges: {
	        'Today': [moment().startOf("day"), moment().endOf('day')],
	        'Yesterday': [moment().subtract('days', 1).startOf("day"), moment().subtract('days', 1).endOf('day')],
	        'Last 7 Days': [moment().subtract('days', 6).startOf("day"), moment().endOf('day')],
	        'Last 30 Days': [moment().subtract('days', 29).startOf("day"), moment().endOf('day')],
	        'Last 180 Days': [moment().subtract('days', 179).startOf("day"), moment().endOf('day')],
	        'This Month': [moment().startOf('month'), moment().endOf('month')],
	        'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
	    },
	    "locale": {
	        "format": "MM/DD/YYYY HH:mm",
	    },
	    "startDate": ssDate,
	    "endDate": moment().endOf('day'),
	    "opens": "left",
	    "drops": "down",
	    "buttonClasses": "btn btn-sm",
	    "applyClass": "btn-success",
	    "cancelClass": "btn-default"
	};
	var dt = $("#example1").dataTable(dataparams);
	var ssDate = moment().format('MM/DD/YYYY 00:00');
	$('#demo').daterangepicker(ssParams, function(start, end, label) {
	    dt.api().clear();
	    dt.api().destroy();
	    //dataparams["ajax"]["data"]["cam_id"]=$("#cam_id").val();
	    dataparams["ajax"]["data"]["start"] = start.format("X");
	    dataparams["ajax"]["data"]["end"] = end.format("X");

	    $("#example1").dataTable(dataparams);

	});
});
