<style lang="scss">
  @import './index';
</style>
<template>
  <div class="welcome">
    <x-header v-on:toggle="handleToggle"></x-header>
    <div class="main">
      <div class="container clearfix">
        <x-nav></x-nav>
        <div class="main-center welcome-center">
          <div class="top-wrapper">
            <h3>这是一个标题</h3>
            <div class="userinfo">
              <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
            </div>
            <div class="video-wrapper" id="video"></div>
            <script type="text/javascript" src="/ckplayer/ckplayer.js" charset="utf-8"></script>

            <script type="text/javascript">
                var flashvars={
                    f:'http://movie.ks.js.cn/flv/other/1_0.flv',
                    c:0
                };
                var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
                var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
                CKobject.embed('/ckplayer/ckplayer.swf','video','ckplayer_a1','100%','100%',true,flashvars,video,params);
            </script>
          </div>
          <div class="video-box">
            <div class="video__item">
              <div class="hd"><img src="./1.png"><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="./2.png"><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库开源库开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="./3(1).png"><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
            <div class="video__item">
              <div class="hd"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt=""><i>11:11</i></div>
              <div class="bd">
                <h3 class="nowrap-flex">33 个 2017 年必须了解的 iOS 开源库</h3>
                <div class="avatar"><img src="https://dn-mhke0kuv.qbox.me/4cbc64201313953bb45b.jpg?imageView/1/w/120/h/120/q/100/format/png" alt="">轩辕小羽 | 325k plays</div>
              </div>
            </div>
          </div>
          <div class="tag-container tag-box clearfix">
            <div class="tag__item"><img src="" alt="">#sex</div>
            <div class="tag__item"><img src="" alt="">#sexsexsex</div>
            <div class="tag__item"><img src="" alt="">#sex</div>
            <div class="tag__item"><img src="" alt="">#sexsexsex</div>
            <div class="tag__item"><img src="" alt="">#sexsexsex</div>
            <div class="tag__item"><img src="" alt="">#sex</div>
            <div class="tag__item"><img src="" alt="">#sexsexsex</div>
            <div class="tag__item"><img src="" alt="">#sex</div>
          </div>
          <div class="btns">
            <i class="disabled">PREV</i>
            <i class="link" style="margin-left: -5px"></i>
            <i class="current">2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
            <i>6</i>
            <i>7</i>
            <i>...</i>
            <i>10</i>
            <i>20</i>
            <i class="link" style="margin-right: -4px"></i>
            <i class="current">NEXT</i>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="banner__item"><img src="http://u1.img.mobile.sina.cn/public/files/image/600x150_img58aaaa71d3f1f.png"></div>
        <div class="banner__item"><img src="https://dn-mhke0kuv.qbox.me/e8966d2fbceeda1864a1.png"></div>
        <div class="banner__item"><img src="https://gold-cdn.xitu.io/images/welcome/extension@2x.png"></div>
      </div>
    </div>
    <div class="hero-cover welcome-hero-cover" :class="{ 'open': show }"></div>
    <div class="login-cover" :class="{ 'open': show }">
      <i class="ion-close-round close-icon" @click="show = false"></i>
      <span class="text-alert text-small float-right"></span>
      <div class="login" v-if="toggleType === 'login'">
        <label class="login-label">登录</label><p class="input-relative"><input type="text" name="emailOrPhone" placeholder="邮箱/手机" required="" class="welcome-input login-email-or-phone-inpput"></p><p class="input-relative"><input type="password" name="password" placeholder="密码" minlength="6" required="" class="welcome-input"></p><button class="fullwidth welcome-large-btn">登录</button><div class="login-text"><a href="/reset-password"><span class="to-reset-password-text">忘记密码</span></a><span class="to-register-text" @click.stop="toggleAction('register')">注册账户</span></div>
      </div>
      <div class="register" v-else>
        <label class="login-label">请先注册</label>
        <p class="input-relative">
          <input type="text" name="username" placeholder="昵称" maxlength="20" tabindex="1" required="" autofocus="" class="welcome-input register-username-input">
        </p>
        <p class="input-relative"><input type="text" name="phoneOrEmail" placeholder="邮箱/手机" tabindex="2" required="" class="welcome-input"></p><p class="input-relative"><input type="password" name="password" placeholder="密码" minlength="6" tabindex="4" required="" class="welcome-input"></p><button class="fullwidth welcome-large-btn">立即注册</button><div class="to-login-text text-center" @click.stop="toggleAction('login')">已有账号登录</div>
      </div>
    </div>
  </div>
</template>
<script>
  const $ = require('jquery')
  import xHeader from '../../components/x-header.vue'
  import xNav from '../../components/x-nav.vue'
  export default {
    components: {
      'x-header': xHeader,
      'x-nav': xNav
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
      $('.tag-container').rowGrid({minMargin: 10, maxMargin: 35, itemSelector: '.tag__item'})
    }
  }
</script>
