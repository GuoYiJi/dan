webpackJsonp([0,2],[function(t,i,s){t.exports=s(1)},function(t,i,s){(function(t){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var e=s(2),a=i(e),l=s(3),n=i(l),c=s(4),r=i(c),o=s(7),v=i(o);s(37),a.default.use(n.default);var _=new n.default({mode:"history",linkActiveClass:"active",base:t,routes:v.default});new a.default({render:function(t){return t(r.default)},router:_}).$mount("#app")}).call(i,"/")},,,function(t,i,s){var e=s(5)(null,s(6),null,null);t.exports=e.exports},,function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("router-view")},staticRenderFns:[]}},function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var a=s(8),l=e(a),n=[{path:"/",name:"/",component:l.default}];i.default=n},function(t,i,s){s(9);var e=s(5)(s(17),s(28),null,null);t.exports=e.exports},function(t,i){},,,,,,,,function(t,i,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var a=s(18),l=e(a),n=s(24),c=e(n);i.default={components:{"x-header":l.default,"x-footer":c.default},data:function(){return{show:!1,toggleType:"login"}},methods:{handleToggle:function(t){this.show=!this.show,this.toggleType=t},toggleAction:function(t){this.toggleType=t}},mounted:function(){var t=window.$;t(".voice_2 ul li").each(function(){0===t(this).index()&&(t(this).width("58%"),t(this).find(".unfold").animate({height:215},200),t(this).siblings().width("20.5%"),t(this).siblings().find(".unfold").animate({height:164},200))}),t(".voice_2 ul li").on("mouseover",function(){t(this).animate({width:"58%"},200),t(this).find(".unfold").animate({height:215},200),t(this).siblings().animate({width:"20.5%"},200),t(this).siblings().find(".unfold").animate({height:164},200)})}}},function(t,i,s){s(19);var e=s(5)(s(22),s(23),null,null);t.exports=e.exports},function(t,i){},,,function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={methods:{toggle:function(t){this.$emit("toggle",t)}}}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;t._self._c||i;return t._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"header"},[s("div",{staticClass:"header__logo"}),t._v(" "),s("ul",{staticClass:"header__list clearfix"},[s("li",{staticClass:"current"},[s("h3",[t._v("去哪拍")]),t._v(" "),s("p",[t._v("三亚、泰国》")])]),t._v(" "),s("li",[s("h3",[t._v("相信我")]),t._v(" "),s("p",[t._v("/ 了解七彩玫瑰")])]),t._v(" "),s("li",[s("h3",[t._v("独一无二")]),t._v(" "),s("p",[t._v("/ 专属定制")])]),t._v(" "),s("li",[s("h3",[t._v("找到我")]),t._v(" "),s("p",[t._v("/ 联络我们")])])])])}]}},function(t,i,s){s(25);var e=s(5)(null,s(27),null,null);t.exports=e.exports},function(t,i){},,function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;t._self._c||i;return t._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("footer",[s("div",{staticClass:"main"},[s("div",{staticClass:"work-box"},[s("h2",[t._v("Work")]),t._v(" "),s("ul",[s("li",[s("h3",[t._v("中国站")]),t._v(" "),s("p",[t._v("三亚 大理 青岛 香港")])]),t._v(" "),s("li",[s("h3",[t._v("中国站")]),t._v(" "),s("p",[t._v("三亚 大理 青岛 香港")])]),t._v(" "),s("li",[s("h3",[t._v("中国站")]),t._v(" "),s("p",[t._v("三亚 大理 青岛 香港")])])])]),t._v(" "),s("div",{staticClass:"about-box"})])])}]}},function(t,i,s){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("x-header",{on:{toggle:t.handleToggle}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("x-footer")],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"banner"},[e("div",{staticClass:"voice_2"},[e("ul",[e("li",{staticClass:"li1",attrs:{id:"li1"}},[e("div",{staticClass:"voice__hd"},[e("img",{attrs:{src:s(29),alt:""}})]),t._v(" "),e("div",{staticClass:"unfold"},[e("i"),t._v(" "),e("h3",[t._v("情侣套餐")]),t._v(" "),e("p",[t._v("￥19999起 / 253对情侣的选择")])])]),t._v(" "),e("li",{staticClass:"li2"},[e("div",{staticClass:"voice__hd"},[e("img",{attrs:{src:s(29),alt:""}})]),t._v(" "),e("div",{staticClass:"unfold"},[e("i"),t._v(" "),e("h3",[t._v("情侣套餐")]),t._v(" "),e("p",[t._v("￥19999起 / 253对情侣的选择")])])]),t._v(" "),e("li",{staticClass:"li3"},[e("div",{staticClass:"voice__hd"},[e("img",{attrs:{src:s(29),alt:""}})]),t._v(" "),e("div",{staticClass:"unfold"},[e("i"),t._v(" "),e("h3",[t._v("情侣套餐")]),t._v(" "),e("p",[t._v("￥19999起 / 253对情侣的选择")])])])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pic-box1"},[e("h3",{staticClass:"tit"}),t._v(" "),e("ul",[e("li",{staticClass:"current"},[e("img",{attrs:{src:s(30),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(30),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(30),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(30),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(30),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(30),alt:""}})])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pic-box2 clearfix"},[e("h3",{staticClass:"tit"}),t._v(" "),e("div",{staticClass:"pic-block pic-block-big"},[e("div",{staticClass:"pic-item pic-item-1"},[e("img",{attrs:{src:s(31)}}),t._v(" "),e("div",{staticClass:"bg"})]),t._v(" "),e("ul",{staticClass:"pic-item pic-item-2 clearfix"},[e("li",[e("img",{attrs:{src:s(32)}}),e("i",{staticClass:"num",staticStyle:{right:"0",top:"0"}},[t._v("02.")])]),t._v(" "),e("li",[e("img",{attrs:{src:s(33)}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(34)}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(32)}}),e("i",{staticClass:"num",staticStyle:{left:"0",top:"0"}},[t._v("03.")])])])]),t._v(" "),e("div",{staticClass:"pic-block pic-block-small clearfix"},[e("div",{staticClass:"pic-item pic-item-3"},[e("div",{staticClass:"bg"},[e("img",{attrs:{src:s(35)}})])]),t._v(" "),e("div",{staticClass:"pic-item pic-item-4"},[e("div",{staticClass:"bg"},[e("img",{attrs:{src:s(32)}}),e("i",{staticClass:"num",staticStyle:{left:"0",top:"0"}},[t._v("04.")])])])]),t._v(" "),e("div",{staticClass:"btns clearfix"},[e("i",{staticClass:"btn-prev"}),t._v(" "),e("i",{staticClass:"btn-next"})])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pic-box3"},[e("img",{attrs:{src:s(36),alt:""}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pic-box4 clearfix"},[e("div",{staticClass:"main clearfix"},[e("h3",{staticClass:"main__hd"}),t._v(" "),e("div",{staticClass:"main__bd"},[e("ul",[e("li",[e("img",{attrs:{src:s(29),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(29),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(29),alt:""}})]),t._v(" "),e("li",[e("img",{attrs:{src:s(29),alt:""}})])]),t._v(" "),e("div",{staticClass:"link"},[e("i")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("多个取景地可选，让你的拍旅更加夺目迷人！")])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ft-btns clearfix"},[s("div",{staticClass:"btn like"},[s("i"),t._v("喜欢，想要")]),t._v(" "),s("div",{staticClass:"btn share"},[s("i"),t._v("分享给好友")])])}]}},function(t,i,s){t.exports=s.p+"static/1.319323f.jpg"},function(t,i,s){t.exports=s.p+"static/1.493f7da.jpg"},function(t,i,s){t.exports=s.p+"static/box2-1.3cb8efc.jpg"},function(t,i,s){t.exports=s.p+"static/2.984d1d8.jpg"},function(t,i,s){t.exports=s.p+"static/3.53b708f.jpg"},function(t,i,s){t.exports=s.p+"static/4.9a23bd3.jpg"},function(t,i,s){t.exports=s.p+"static/5.7fb96db.jpg"},function(t,i,s){t.exports=s.p+"static/box3.f0a3aae.jpg"},function(t,i){}]);
//# sourceMappingURL=app.2f73311.js.map