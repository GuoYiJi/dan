$(function (){
	// 搜索框
	var $search = $('.J_search');
	$('.J_formControl').on('focus', function (){
	  $search.addClass('open');
	}).on('blur', function (){
	  $search.removeClass('open');
	});

	$('.menu-dropdown, .dropdown-submenu').on('click', function (event){
	  var $target = $(this);

	  if ($target.hasClass('open')) {
	    $target.removeClass('open');
	  } else {
	    $target.addClass('open');
	  }
	  event.stopPropagation();
	});

	// nav-toggle
	$('.navbar-toggle').on('click', function (){
		var o = $('.page-header .header-menu');
		o.is(":visible") ? o.slideUp(300) : o.slideDown(300)
	});
});