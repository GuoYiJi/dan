<style lang="scss">
  @import './index';
</style>
<template>
  <div class="container">
    <x-header v-on:toggle="handleToggle"></x-header>
    <div class="banner">

      <div class="voice_2">
        <ul>
          <li class="li1" id="li1">
            <div class="voice__hd">
              <img src="./box2/1.jpg" alt="">
            </div>
            <div class="unfold">
              <i></i>
              <h3>情侣套餐</h3>
              <p>￥19999起 / 253对情侣的选择</p>
            </div>
          </li>
          <li class="li2">
            <div class="voice__hd">
              <img src="./box2/1.jpg" alt="">
            </div>
            <div class="unfold">
              <i></i>
              <h3>情侣套餐</h3>
              <p>￥19999起 / 253对情侣的选择</p>
            </div>
          </li>
          <li class="li3">
            <div class="voice__hd">
              <img src="./box2/1.jpg" alt="">
            </div>
            <div class="unfold">
              <i></i>
              <h3>情侣套餐</h3>
              <p>￥19999起 / 253对情侣的选择</p>
            </div>
          </li>
        </ul>         
      </div>
    </div>
    <div class="pic-box1">
      <h3 class="tit"></h3>
      <ul>
        <li class="current"><img src="./box1/1.jpg" alt=""></li>
        <li><img src="./box1/1.jpg" alt=""></li>
        <li><img src="./box1/1.jpg" alt=""></li>
        <li><img src="./box1/1.jpg" alt=""></li>
        <li><img src="./box1/1.jpg" alt=""></li>
        <li><img src="./box1/1.jpg" alt=""></li>
      </ul>
    </div>
    <div class="pic-box2 clearfix">
      <h3 class="tit"></h3>
      <div class="pic-block pic-block-big">
        <div class="pic-item pic-item-1">
          <img src="./box2-1.jpg">
          <div class="bg"></div>
        </div>
        <ul class="pic-item pic-item-2 clearfix">
          <li><img src="./box2/2.jpg"><i class="num" style="right: 0; top: 0;">02.</i></li>
          <li><img src="./box2/3.jpg"></li>
          <li><img src="./box2/4.jpg"></li>
          <li><img src="./box2/2.jpg"><i class="num" style="left: 0; top: 0;">03.</i></li>
        </ul>
      </div>
      <div class="pic-block pic-block-small clearfix">
        <div class="pic-item pic-item-3"><div class="bg"><img src="./box2/5.jpg"></div></div>
        <div class="pic-item pic-item-4"><div class="bg"><img src="./box2/2.jpg"><i class="num" style="left: 0; top: 0;">04.</i></div></div>
      </div>
      <div class="btns clearfix">
        <i class="btn-prev"></i>
        <i class="btn-next"></i>
      </div>
    </div>
    <div class="pic-box3"><img src="./box3.jpg" alt=""></div>
    <div class="pic-box4 clearfix">
      <div class="main clearfix">
        <h3 class="main__hd"></h3>
        <div class="main__bd">
          <ul>
            <li><img src="./box2/1.jpg" alt=""></li>
            <li><img src="./box2/1.jpg" alt=""></li>
            <li><img src="./box2/1.jpg" alt=""></li>
            <li><img src="./box2/1.jpg" alt=""></li>
          </ul>
          <div class="link"><i></i></div>
          <div class="desc">多个取景地可选，让你的拍旅更加夺目迷人！</div>
        </div>
      </div>
    </div>
    <div class="ft-btns clearfix">
      <div class="btn like"><i></i>喜欢，想要</div>
      <div class="btn share"><i></i>分享给好友</div>
    </div>
    <x-footer></x-footer>
  </div>
</template>
<script>
  import $ from 'jQuery'
  import xHeader from '../../components/x-header.vue'
  import xFooter from '../../components/x-footer.vue'
  export default {
    components: {
      'x-header': xHeader,
      'x-footer': xFooter,
    },
    data() {
      return {
        show: false,
        toggleType: 'login'
      }
    },
    methods: {
      handleToggle(type){
        this.show = !this.show
        this.toggleType = type
      },
      toggleAction(type){
        this.toggleType = type
      }
    },
    mounted(){
      $(".voice_2 ul li").each(function(){
        if ($(this).index() === 0) {
          $(this).width('58%');
          $(this).find(".unfold").animate({ height: 215 }, 200);
          $(this).siblings().width('20.5%');
          $(this).siblings().find(".unfold").animate({ height: 164 }, 200);
        }
      })
      $(".voice_2 ul li").on('mouseover', function(){
        // var li_index = $(this).index();
        $(this).animate({ width: '58%' }, 200);
        $(this).find(".unfold").animate({ height: 215 }, 200);

        $(this).siblings().animate({ width: '20.5%'}, 200);
        $(this).siblings().find(".unfold").animate({ height: 164 }, 200);
      })
    }
  }
</script>
