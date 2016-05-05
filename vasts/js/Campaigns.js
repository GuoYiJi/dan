$(function() {

	$('#table1').tablesorter({
		widthFixed: true,
		showProcessing: true,
		headerTemplate: '{content} {icon}', // Add icon for various themes

		widgets: ['zebra', 'columnSelector', 'stickyHeaders', 'filter'],

		widgetOptions: {
			// extra class name added to the sticky header row
			stickyHeaders: '',
			// number or jquery selector targeting the position:fixed element
			stickyHeaders_offset: 0,
			// added to table ID, if it exists
			stickyHeaders_cloneId: '-sticky',
			// trigger "resize" event on headers
			stickyHeaders_addResizeEvent: true,
			// if false and a caption exist, it won't be included in the sticky header
			stickyHeaders_includeCaption: true,
			// The zIndex of the stickyHeaders, allows the user to adjust this to their needs
			stickyHeaders_zIndex: 2,
			// jQuery selector or object to attach sticky header to
			stickyHeaders_attachTo: null,
			// jQuery selector or object to monitor horizontal scroll position (defaults: xScroll > attachTo > window)
			stickyHeaders_xScroll: null,
			// jQuery selector or object to monitor vertical scroll position (defaults: yScroll > attachTo > window)
			stickyHeaders_yScroll: null,

			// scroll table top into view after filtering
			stickyHeaders_filteredToTop: true

			// *** REMOVED jQuery UI theme due to adding an accordion on this demo page ***
			// adding zebra striping, using content and default styles - the ui css removes the background from default
			// even and odd class names included for this demo to allow switching themes
			// , zebra   : ["ui-widget-content even", "ui-state-default odd"]
			// use uitheme widget to apply defauly jquery ui (jui) class names
			// see the uitheme demo for more details on how to change the class names
			// , uitheme : 'jui'
		}
	});
	$.tablesorter.columnSelector.attachTo($('#table1'), '#popover-target');
	$('#popover')
		.popover({
			placement: 'left',
			html: true, // required if content has HTML
			content: $('#popover-target')
		});


	window.includeCaption = true;
	// removed jQuery UI theme because of the accordion!
	$('link.theme').each(function() {
		this.disabled = true;
	});

	var themes = 'blue default green grey ice black-ice dark dropbox metro-dark',
		i, o = '',
		t = themes.split(' ');
	for (i = 0; i < t.length; i++) {
		o += '<option value="' + t[i] + '">' + t[i] + '</option>';
	}

	$('select:first')
		.append(o)
		.change(function() {
			var theme = $(this).val().toLowerCase(),
				// ui-theme is added by the themeswitcher
				files = $('link.theme').each(function() {
					this.disabled = true;
				})
			files.filter('.' + theme).each(function() {
				this.disabled = false;
			});
			$('table')
				.removeClass('tablesorter-' + t.join(' tablesorter-'))
				.addClass('tablesorter-' + (theme === 'black-ice' ? 'blackice' : theme));
		}).change();

	var _font = '';
	$('#table1 th').each(function() {
		_font += '<option value="' + $(this).text() + '">' + $(this).text() + '</option>';
		$('.table1_th').html(_font);
	});
	var imageMenuData = [
		[{
			text: "Edit Campaign", //修改
			func: function() {
				var _$target;
				_$target = $('.J_siderBar');
				_$target.addClass('side-bar-open');
				_$target.find('[data-target="close"]').on('click', function (){
					_$target.removeClass('side-bar-open');
				});
			}
		}],
		[{
			text: "Report", //看报表
			func: function() {

			}
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
					content: '<div class="form-line"><div class="form-control"><input class="jsName" type="text" value="" placeholder="请输入优惠码"><div class="form-error"></div></div></div>'
				}).on('modal:action', function(e) {
					if (!e.index) {
						name = $('.jsName').val();
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
