
var timer = 400;

//AJAX改变内容
var htmlobj;
function detailed(_this,id){
	htmlobj=$.ajax({url:''+id+'.html',async:false});
	$('.detailed').eq(_this).show().html(htmlobj.responseText).siblings('.work-td-show').hide();

	//加载圆点
	if( $('.loading').size() <= 0){
		$('body').append('<div class="loading" style=" "><img src="img/loading.gif" style=""></div>');
	}else{}
	setTimeout(function(){
		$('.loading').remove();
	},timer);
}

$(function(){

	//获取高度
	$('.work-td-border').each(function(){
		$(this).css('min-height',$('html').height());
	});

	//导航选项卡
	$('.nav-ul').on('click','.nav-li',function(){
		active($(this));
	});

	
	var htmlobj;
	//工作台选项卡
	$('.work-nav-ul').on('click','.work-nav-li',function(){
	
		//加载圆点
		if( $('.loading').size() <= 0){
			$('body').append('<div class="loading" style=" "><img src="img/loading.gif" style=""></div>');
		}else{
		}

		active($(this));
		var _this = $(this).index();
		//工作台AJAX改变内容	
		if( _this == 0 ){
			$('.work-td-show:eq('+_this+')').show().siblings('.work-td-show').hide();
		}else{
			if( !$(this).hasClass('workAjax') ){
				htmlobj=$.ajax({url:''+$(this).attr('id')+'.html',async:false});
				$('.work-td-show:eq('+_this+')').show().html(htmlobj.responseText).siblings('.work-td-show').hide();
				$(this).addClass('workAjax');
			}else{
				$('.work-td-show:eq('+_this+')').show().siblings('.work-td-show').hide();
			}
			//加载圆点
			setTimeout(function(){
				$('.loading').remove();
			},timer);
		}
		//加载圆点
		setTimeout(function(){
			$('.loading').remove();
		},timer);
	});



	//显示隐藏
	function active(obj,active){
		obj.addClass('active').siblings().removeClass('active');
	}



	//新建订单 确认订单
	$(document).on('click','.nextone',function(){
		order('two','center');
	});
	//新建订单 付款购买
	$(document).on('click','.nexttwo',function(){
		order('three','right');
	});

	//新建订单 下一步
	function order(obj,num){
		$('.new-order-main-'+obj+'').show().siblings('.new-order-main').hide();
		$('.new-header-'+num+'').addClass('active').siblings().removeClass('active');
		$('.new-order-left').each(function(){
			$(this).height( $(this).next('.new-order-tab').height() );
		})
	}

	//新建询价 下一步
	$(document).on('click','.inquiryNext',function(){
		inquiry('right',1);
	});


	//新建询价 上一步
	$(document).on('click','.inquiry-up',function(){
		inquiry('left',0);
	});

	//新建询价 下/上一步
	function inquiry(obj,num){
		$('.new-inquiry .new-header-'+obj+'').addClass('active').siblings().removeClass('active');
		$('.inquiry-block:eq('+num+')').show().siblings('.inquiry-block').hide();
		$('.purchase-tab-left').each(function(){	//获取分解询价 列表的高度
			$(this).height( $(this).next('.purchase-tab-right').height() );
		})
	}

	//新建询价 改变颜色
	$(document).on('change','.new-inquiry select',function(){
		$(this).css('color','#000');
	});


	//企业认证 提交按钮
	$(document).on('click','.validateBtn',function(){
		$('.validate-block-two').show().siblings('.validate-block-one').hide();
	});


	//nav-app
	// var navAdd = true;
	// $('.nav-add').on('click',function(){

	// 	$('.nav-tab-wrap').toggle();

	// 	if( navAdd ){
	// 		$('.nav-tab').animate({top : 80},200);
	// 		navAdd=false;
	// 	}else{
	// 		$('.nav-tab').animate({top : -140},200);
	// 		navAdd = true;
	// 	}

	// });

	// $('.nav-app').on('click',function(){
	// 	if( $(this).hasClass('active') ){

	// 		$(this).removeClass('active');
	// 	}else{
	// 		$(this).addClass('active');
	// 	}
	// });
	// 
	
	


});

$(function (){
	// 删除
	$('.not-add').on('click', function (){
		if (!$('.J_checkboxs:checked').length) {
			alert('还没有选择哦！');
			return false;
		}
		$('.J_checkboxs').each(function (){
			if ($(this).prop('checked')) {
				$(this).parent('td').parent('tr').remove();
			}
		});
		if (!$('.J_checkboxs').length) {
			$('.J_parentCheck').prop('checked', false);
		}
	});

	// 全选，反选
	
	$('.J_parentCheck').on('click', function (){
		if ($(this).prop('checked')) {
			$('.J_checkboxs').prop('checked', true);
		} else {
			$('.J_checkboxs').prop('checked', false);
		}
		
	});
	$('.J_checkboxs').on('click', function (){
		$('.J_checkboxs').each(function (){
			$('.J_checkboxs').each(function (){
				if (!$(this).prop('checked')) {
					$('.J_parentCheck').prop('checked', false);
					return false;
				}
				$('.J_parentCheck').prop('checked', true);
				
			})
		});
	});

	// 票数倒序
	$('.J_sort').on('click', function (){
		var _arr, _sortIndex;
		_arr = [];
		$('[data-toggle="sort"]').each(function (){
			_arr.push($(this));
		});
		if ($(this).prop('checked')) {
			_sortIndex = -1;
		} else {
			_sortIndex = 1;
		}
		_arr.sort(function (a, b){
			var _price1, _price2;
			_price1 = a.find('td').eq(6).text();
			_price2 = b.find('td').eq(6).text();
			if (_price1 > _price2) {
				return _sortIndex;
			} else if (_price1 < _price2) {
				return -_sortIndex;
			} else {
				return 0;
			}
		})
		$('[data-toggle="sort"]').remove();
		$(_arr).each(function (){
			$('.J_parentSort').append($(this));
		})
	});
});




