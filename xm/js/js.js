
$(function(){

	//下拉更多
	$('.top-more').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});


	// 轮播图
	$('.J_slider').Slider();

		//选项卡
	$('.main-twoHead li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.main-twoBlock').eq($(this).index()).show().siblings('.main-twoBlock').hide();
	});

	$('.main-threeHead li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.main-threeBlock').eq($(this).index()).show().siblings('.main-threeBlock').hide();
	});;

	//img
	$('.main-twoImg').hover(
		function(){
			$(this).find('.main-twoPopup').css('top',2);
		},function(){
			$(this).find('.main-twoPopup').css('top',-40);
		}
	);

});