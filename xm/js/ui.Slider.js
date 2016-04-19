// 轮播图
+function ($){
	var _default = {
		index: 0,
		time: 500,
		delay: 3000,		// 间隔几秒轮播一次
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
			this.autoChange();
		},
		_init: function (){
			var _width, _length;
			_width = this.width = this.ele.outerWidth();
			_length = this.length = this.children.length;
			this.$parent = this.ele.find('ul');
			this.$parent.width(_length * _width);
			this._off = true;

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
		change: function (index){
			var _this;
			_this = this;
			index = _this.options.index = (index + _this.length) % _this.length;
			clearTimeout(_this.tick);
			if (!_this._off) {
				return ;
			}
			_this._off = false;
			_this.$parent.animate({
				left: -(index * _this.width)
			}, _this.options.time, function (){
				_this._off = true;
				_this.autoChange();
			})
			_this.ele.find('[data-toggle="arrow-item"]').eq(index).addClass('active').siblings().removeClass('active');
		},
		autoChange: function (){
			var _this;
			_this = this;
			_this.tick = setTimeout(function (){
				_this.change(_this.options.index + 1);
			}, _this.options.delay);
		},
		_on: function (){
			var _opt, _this, _ele;
			_this = this;
			_opt = _this.options;
			_ele = _this.ele;
			_ele.find('[data-toggle="prev"]').on('click', function (){
				_this.change(_opt.index - 1);
			});
			_ele.find('[data-toggle="next"]').on('click', function (){
				_this.change(_opt.index + 1);
			});
			_ele.find('[data-toggle="arrow-item"]').on('click', function (){
				_this.change($(this).index());
			});

		}
	}
	$.fn.Slider = function (options){
		return new Slider($(this), options);
	}
}(jQuery);