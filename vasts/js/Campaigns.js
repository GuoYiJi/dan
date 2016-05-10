$(function() {

	$('#table1').tablesorter({
		widthFixed: true,
		showProcessing: true,
		headerTemplate: '{content} {icon}', // Add icon for various themes

		widgets: ['zebra', 'columnSelector', 'stickyHeaders', 'filter']
	});
	$.tablesorter.columnSelector.attachTo($('#table1'), '#popover-target');
	$('#popover')
		.popover({
			placement: 'left',
			html: true, // required if content has HTML
			content: $('#popover-target')
		});

	var imageMenuData = [
		[{
			text: "Edit Campaign", //修改
			func: function() {
				// var _$target;
				// _$target = $('.J_siderBar');
				// _$target.addClass('side-bar-open');
				// _$target.find('[data-target="close"]').on('click', function (){
				// 	_$target.removeClass('side-bar-open');
				// });
			}
		}],
		[{
			text: "Report", //看报表
	        data: [[{
	            text: "Report1",
	            func: function() {
	            }
	        }, {
	            text: "Report2",
	            func: function() {
	            }
	        }, {
	            text: "Report3",
	            func: function() {
	            }
	        }]]
		}],
		[{
			text: "Download", //看报表
	        data: [[{
	            text: "Download1",
		        data: [[{
		            text: "Download1.1",
		            func: function() {
		            }
		        }, {
		            text: "Download1.2",
		            func: function() {
		            }
		        }, {
		            text: "Download1.3",
		            func: function() {
		            }
		        }]]
	        }, {
	            text: "Download2",
	            func: function() {
	            }
	        }, {
	            text: "Download3",
	            func: function() {
	            }
	        }]]
		}],
		[{
			text: "Clone Campaign", //复制
			func: function() {
				var _clone, _$parent, name;
				_$parent = $(this).parent();
				_clone = _$parent.clone();
				$.modal({
					type: "html",
					title: "Clone Campaign",
					buttons: ["confirm", "cancel"],
					content: '<div class="form-line"><div class="form-control"><input class="jsName" type="text" value="" placeholder="请输入Name"><div class="form-error"></div></div></div>'
				}).on('modal:action', function(e) {
					if (!e.index) {
						name = $('.jsName').val();
						if (!name) {
							alert('请输入Name!');
							return false;
						}
						_clone.find('td:eq(1)').text(name);
						_clone.insertBefore(_$parent.parent().find('tr:first'));
						$("#table1 td").smartMenu(imageMenuData, {
							name: "td"
						});
					}
				});
			}
		}],
		[{
			text: "Copy Url", //复制Url
			func: function() {
				var _url = $(this).parent().find('td:first a').attr('href');
				copyToClipboard(_url);
			}
		}],
		[{
			text: "Preview", //预览
			func: function() {

			}
		}],
		[{
			text: "Delete", //删除
			func: function() {
				var r = confirm("确认删除吗？");
				if (r == true) {
					$(this).parent().remove();
				} else {
					return false;
				}
			}
		}]
	];

	var bodyMenuData = [
		[{
			text: "页面空白处点击是否冲突测试"
		}]
	];
	$("#table1 td").smartMenu(imageMenuData, {
		name: "td"
	});
});
