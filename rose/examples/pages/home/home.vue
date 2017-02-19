<style lang="scss">
  @import './index';
</style>
<template>
  <div class="welcome">
    <x-header v-on:toggle="handleToggle"></x-header>
    <div class="banner">
      <div class="banner__item current">
        <div class="banner__hd"></div>
        <div class="banner__bd">
          <img src="" alt="">
          <h3>情侣套餐</h3>
          <p>￥19999起 / 253对情侣的选择</p>
        </div>
      </div>
      <div class="banner__item"></div>
      <div class="banner__item"></div>
    </div>
    <div class="pic-box1"></div>
    <div class="pic-box2">
      <div class="pic-block pic-block-big">
        <div class="pic-item pic-item-1">
          <img src="./box2-1.jpg">
          <div class="bg"></div>
        </div>
        <ul class="pic-item clearfix">
          <li style="background-color: red;"></li>
          <li style="background-color: white;"></li>
          <li style="background-color: green;"></li>
          <li style="background-color: yellow;"></li>
        </ul>
      </div>
      <div class="pic-block pic-block-small clearfix">
        <div class="pic-item pic-item-3"><div class="bg"></div></div>
        <div class="pic-item pic-item-4"><div class="bg"></div></div>
      </div>
    </div>
    <div class="pic-box3"><img src="./box3.jpg" alt=""></div>
    <div class="pic-box4 clearfix">
      <div class="main clearfix">
        <h3 class="main__hd"></h3>
        <div class="main__bd">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
    }
  }
</script>
