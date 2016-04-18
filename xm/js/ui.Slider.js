// 轮播图
+function ($){
	var _default = {
		index: 0,
		time: 3000,
		speed: 0
	};

	function Slider(ele, options){
		this.options = $.extend({}, _default, options);
		this.ele = ele;
		this.children = ele.find('[data-toggle="slider"]');
		this.init();
	}

	Slider.prototype = {
		init: function (){
			this._on();
			this._init();
		},
		_init: function (){
			var _width, _length;
			_width = this.width = this.ele.outerWidth();
			_length = this.length = this.children.length;
			this.$parent = this.ele.find('ul');
			this.$parent.width(_length * _width);

		},
		move: function (dire){
			var _opt, _this, _iTarget;
			_this = this;
			_opt = _this.options;
			_iTarget = dire === 'prev' ? (Math.abs(_opt.index) === 0 ? (-(_this.length - 1) * _this.width) : (--_opt.index * _this.width)) : (Math.abs(_opt.index) === _this.length - 1 ? 0 : (--_opt.index * _this.width));
			_this.$parent.animate({
				left: _iTarget
			}, _this.time);
			_this.options.index = _opt.index;
			_this.arrow(Math.abs(_opt.index));
		},
		arrow: function (index){
			this.ele.find('[data-toggle="arrow-item"]').removeClass('active');
			this.ele.find('[data-toggle="arrow-item"]').eq(index).addClass('active');
		},
		channge: function (){

		},
		_on: function (){
			var _opt, _this, _ele;
			_this = this;
			_opt = _this.options;
			_ele = _this.ele;
			_ele.find('[data-toggle="prev"]').on('click', function (){
				_this.move('prev');
			});
			_ele.find('[data-toggle="next"]').on('click', function (){
				_this.move('next');
			})

		}
	}
	$.fn.Slider = function (options){
		return new Slider($(this), options);
	}
}(jQuery);