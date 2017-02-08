<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 4em;
  background-color: #000;
  color: #fff;
  .logo-text {
    padding-left: 2.3em;
    letter-spacing: .2em;
    color: #fff;
  }
  @media (max-width: 600px) {
      .logo-text {
        display: none;
      }
  }
  .actions {
    float: left;
    .item {
      display: inline-block;
      padding: 1.25em .75em;
      vertical-align: top;
      @at-root {
        #{&}-image {
          padding: 1em .75em;
          img {
            height: 2em;
          }
        }
        #{&}-input {
          padding: 1em .75em;
          .tag-input-block {
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 0 .5em;
            width: 15em;
          }
          .tag-input {
            padding: .5em;
            border: 0;
            color: rgba(0,0,0,.3);
            font-size: .8em;
            background-color: transparent;
          }
        }
        @media (max-width: 600px) {
          #{&}-input {
            display: none;
          }
        }
      }

    }
    &.search {
      float: right;
      .btns {
        & > a {
          display: inline-block;
          padding: .15em .8em;
          font-size: .9em;
          color: #fff;
          &.register {
            padding-right: 0;
          }
          &.login {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
<template>
  <header>
    <div class="container clearfix">
      <ul class="actions">
        <li class="item item-image"><a><img src="https://gold-cdn.xitu.io/images/logo-header.svg" alt=""></a></li>
        <li class="item"><span class="logo-text">高质量的技术社区</span></li>
      </ul>
      <ul class="actions search">
        <li class="item item-input">
          <div class="tag-input-block"><i class="ion-ios-search"></i><input type="input" placeholder="输入关键字搜索" class="tag-input"></div>
        </li>
        <li class="item btns"><a class="register" href="javascript:;">注册 ·  </a><a class="login" href="javascript:;">登录</a></li>
      </ul>
    </div>
  </header>
</template>
