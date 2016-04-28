/**
 * Theme: Adminto Admin Template
 * Author: Coderthemes
 * Module/App: Flot-Chart
 */

! function($) {
	"use strict";

	var FlotChart = function() {
		this.$body = $("body")
		this.$realData = []
	};

	//creates plot graph
	FlotChart.prototype.createPlotGraph = function(selector, data1, data2, labels, colors, borderColor, bgColor) {
		//shows tooltip
		function showTooltip(x, y, contents) {
			$('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
				position : 'absolute',
				top : y + 5,
				left : x + 5
			}).appendTo("body").fadeIn(200);
		}


		$.plot($(selector), [{
			data : data1,
			label : labels[0],
			color : colors[0]
		}, {
			data : data2,
			label : labels[1],
			color : colors[1]
		}], {
			series : {
				lines : {
					show : true,
					fill : true,
					lineWidth : 2,
					fillColor : {
						colors : [{
							opacity : 0.4
						}, {
							opacity : 0.4
						}]
					}
				},
				points : {
					show : false
				},
				shadowSize : 0
			},

			grid : {
				hoverable : true,
				clickable : true,
				borderColor : borderColor,
				tickColor : "#f9f9f9",
				borderWidth : 1,
				labelMargin : 10,
				backgroundColor : bgColor
			},
			legend : {
				position : "ne",
				margin : [0, -24],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
			},
			yaxis : {
				tickColor : '#f5f5f5',
				font : {
					color : '#bdbdbd'
				}
			},
			xaxis : {
				tickColor : '#f5f5f5',
				font : {
					color : '#bdbdbd'
				}
			},
			tooltip : true,
			tooltipOpts : {
				content : '%s: Value of %x is %y',
				shifts : {
					x : -60,
					y : 25
				},
				defaultTheme : false
			}
		});
	},
	//end plot graph

	//creates Pie Chart
	FlotChart.prototype.createPieGraph = function(selector, labels, datas, colors) {
		var data = [{
			label : labels[0],
			data : datas[0]
		}, {
			label : labels[1],
			data : datas[1]
		}, {
			label : labels[2],
			data : datas[2]
		}];
		var options = {
			series : {
				pie : {
					show : true
				}
			},
			legend : {
				show : true
			},
			grid : {
				hoverable : true,
				clickable : true
			},
			colors : colors,
			tooltip : true,
			tooltipOpts : {
				content : "%s, %p.0%"
			}
		};

		$.plot($(selector), data, options);
	},

	//returns some random data
	FlotChart.prototype.randomData = function() {
		var totalPoints = 300;
		if (this.$realData.length > 0)
			this.$realData = this.$realData.slice(1);

		// Do a random walk
		while (this.$realData.length < totalPoints) {

			var prev = this.$realData.length > 0 ? this.$realData[this.$realData.length - 1] : 50,
			    y = prev + Math.random() * 10 - 5;

			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}

			this.$realData.push(y);
		}

		// Zip the generated y values with the x values
		var res = [];
		for (var i = 0; i < this.$realData.length; ++i) {
			res.push([i, this.$realData[i]])
		}

		return res;
	}, FlotChart.prototype.createRealTimeGraph = function(selector, data, colors) {
		var plot = $.plot(selector, [data], {
			colors : colors,
			series : {
				grow : {
					active : false
				}, //disable auto grow
				shadowSize : 0, // drawing is faster without shadows
				lines : {
					show : true,
					fill : false,
					lineWidth : 2,
					steps : false
				}
			},
			grid : {
				show : true,
				aboveData : false,
				color : '#dcdcdc',
				labelMargin : 15,
				axisMargin : 0,
				borderWidth : 0,
				borderColor : null,
				minBorderMargin : 5,
				clickable : true,
				hoverable : true,
				autoHighlight : false,
				mouseActiveRadius : 20
			},
			tooltip : true, //activate tooltip
			tooltipOpts : {
				content : "Value is : %y.0" + "%",
				shifts : {
					x : -30,
					y : -50
				}
			},
			yaxis : {
				min : 0,
				max : 100,
				tickColor : '#f5f5f5',
				color : 'rgba(0,0,0,0.1)'
			},
			xaxis : {
				show : false,
				tickColor : '#f5f5f5'
			}
		});

		return plot;
	},
	//creates Donut Chart
	FlotChart.prototype.createDonutGraph = function(selector, labels, datas, colors) {
		var data = [{
			label : labels[0],
			data : datas[0]
		}, {
			label : labels[1],
			data : datas[1]
		}, {
			label : labels[2],
			data : datas[2]
		}, {
			label : labels[3],
			data : datas[3]
		}];
		var options = {
			series : {
				pie : {
					show : true,
					innerRadius : 0.7
				}
			},
			legend : {
				show : true,
				labelFormatter : function(label, series) {
					return '<div style="font-size:14px;">&nbsp;' + label + '</div>'
				},
				labelBoxBorderColor : null,
				margin : 50,
				width : 20,
				padding : 1
			},
			grid : {
				hoverable : true,
				clickable : true
			},
			colors : colors,
			tooltip : true,
			tooltipOpts : {
				content : "%s, %p.0%"
			}
		};

		$.plot($(selector), data, options);
	},
	//creates Combine Chart
	FlotChart.prototype.createCombineGraph = function(selector, ticks, labels, datas) {

		var data = [{
			label : labels[0],
			data : datas[0],
			lines : {
				show : true,
				fill : true
			},
			points : {
				show : true
			}
		}, {
			label : labels[1],
			data : datas[1],
			lines : {
				show : true
			},
			points : {
				show : true
			}
		}, {
			label : labels[2],
			data : datas[2],
			bars : {
				show : true
			}
		}];
		var options = {
			series : {
				shadowSize : 0
			},
			grid : {
				hoverable : true,
				clickable : true,
				tickColor : "#f9f9f9",
				borderWidth : 1,
				borderColor : "#eeeeee"
			},
			colors : ['#ff8acc', '#5b69bc', "#10c469"],
			tooltip : true,
			tooltipOpts : {
				defaultTheme : false
			},
			legend : {
				position : "ne",
				margin : [0, -24],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
			},
			yaxis : {
				tickColor : '#f5f5f5',
				font : {
					color : '#bdbdbd'
				}
			},
			xaxis : {
				ticks: ticks,
				tickColor : '#f5f5f5',
				font : {
					color : '#bdbdbd'
				}
			}
		};

		$.plot($(selector), data, options);
	},

	//initializing various charts and components
	FlotChart.prototype.init = function() {
		//Combine graph data
		var data24Hours = [[0, 201], [1, 520], [2, 337], [3, 261], [4, 157], [5, 95], [6, 200], [7, 250], [8, 320], [9, 500], [10, 152], [11, 214], [12, 364], [13, 449], [14, 558], [15, 282], [16, 379], [17, 429], [18, 518], [19, 470], [20, 330], [21, 245], [22, 358], [23, 74]];
		var data48Hours = [[0, 311], [1, 630], [2, 447], [3, 371], [4, 267], [5, 205], [6, 310], [7, 360], [8, 430], [9, 610], [10, 262], [11, 324], [12, 474], [13, 559], [14, 668], [15, 392], [16, 489], [17, 539], [18, 628], [19, 580], [20, 440], [21, 355], [22, 468], [23, 184]];
		var dataDifference = [[23, 727], [22, 128], [21, 110], [20, 92], [19, 172], [18, 63], [17, 150], [16, 592], [15, 12], [14, 246], [13, 52], [12, 149], [11, 123], [10, 2], [9, 325], [8, 10], [7, 15], [6, 89], [5, 65], [4, 77], [3, 600], [2, 200], [1, 385], [0, 200]];
		var ticks = [[0, "22h"], [1, ""], [2, "00h"], [3, ""], [4, "02h"], [5, ""], [6, "04h"], [7, ""], [8, "06h"], [9, ""], [10, "08h"], [11, ""], [12, "10h"], [13, ""], [14, "12h"], [15, ""], [16, "14h"], [17, ""], [18, "16h"], [19, ""], [20, "18h"], [21, ""], [22, "20h"], [23, ""]];
		var combinelabels = ["Last 24 Hours", "Last 48 Hours", "Difference"];
		var combinedatas = [data24Hours, data48Hours, dataDifference];

		this.createCombineGraph("#combine-chart #combine-chart-container", ticks, combinelabels, combinedatas);
	},

	//init flotchart
	$.FlotChart = new FlotChart, $.FlotChart.Constructor =
	FlotChart

}(window.jQuery),

//initializing flotchart
function($) {
	"use strict";
	$.FlotChart.init()
}(window.jQuery);

