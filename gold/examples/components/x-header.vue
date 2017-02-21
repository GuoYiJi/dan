<style lang="scss">
  header {
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      right: 0;
      background: #000;
      color: #fff;
      height: 4em;
  }
  header .action {
      padding: 1.25em .75em;
      vertical-align: top
  }

  header .action-image {
      padding: 1em .75em
  }
  header .header-logo-text {
    line-height: 62px;
    padding-top: 0;
    padding-bottom: 0;
    span {
      letter-spacing: .2em;
      padding-left: 2.3em;
      color: #fff;
    }
  }
</style>
<template>
  <header>
    <div class="container clearfix">
      <ul class="actions">
        <li class="action action-image"><a><img class="inline home-logo" src="https://gold-cdn.xitu.io/images/logo-header.svg" alt=""></a></li>
        <li class="action header-logo-text"><span>高质量的技术社区</span></li>
      </ul>
      <ul class="actions secondary">
        <li class="action action-input">
          <div class="tag-input-block"><i class="ion-ios-search"></i><input type="input" placeholder="输入关键字搜索" class="tag-input"></div>
        </li>
        <li class="action"><button class="inline register-button" @click="toggle('register')">注册 ·&nbsp; </button><button class="inline login-button" @click="toggle('login')">登录</button></li>
      </ul>
    </div>
  </header>
</template>
<script>
  export default {
    methods: {
      toggle(type){
        this.$emit('toggle', type)
      }
    }
  }
</script>
