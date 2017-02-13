<style lang="scss" scoped>
  

  header {
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      right: 0;
      background: #000;
      color: #fff;
      height: 4em
  }

  header .invite-tag {
      cursor: pointer;
      position: absolute;
      right: 5.18em;
      top: 4em;
      padding: .4em 1em .5em;
      background-color: #007fff;
      border-radius: 3px;
      z-index: 10
  }

  header .invite-tag:before {
      width: .8rem;
      height: .8rem;
      background-color: #007fff;
      content: '';
      position: absolute;
      left: 50%;
      margin-left: -.4rem;
      top: -.4rem;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg)
  }

  header .invite-tag .text {
      display: inline-block;
      font-size: .8em;
      color: #fff
  }

  header .invite-tag .close {
      cursor: pointer;
      display: inline-block;
      margin-left: 1em;
      position: relative;
      top: .05em;
      color: #fff
  }

  header .action {
      padding: 1.25em .75em;
      vertical-align: top
  }

  header .action-image {
      padding: 1em .75em
  }

  header .header-icon {
      font-size: 1.2em;
      line-height: 1.25em
  }

  header .dropdown-list {
      top: 4em;
      left: auto;
      right: 0
  }

  header .avatar-block {
      position: relative;
      height: 2em
  }

  header .avatar-block .have-new {
      position: absolute;
      top: -.1em;
      right: -.1em;
      background-color: #e22323;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      border: 1px solid #fff
  }

  header .avatar.inline {
      width: 2em;
      height: 2em
  }

  header .home-logo {
      height: 2em
  }
// header {
//   position: fixed;
//   z-index: 10;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 4em;
//   background-color: #000;
//   color: #fff;
//   .logo-text {
//     padding-left: 2.3em;
//     letter-spacing: .2em;
//     color: #fff;
//   }
//   @media (max-width: 600px) {
//       .logo-text {
//         display: none;
//       }
//   }
//   .actions {
//     float: left;
//     .item {
//       display: inline-block;
//       padding: 1.25em .75em;
//       vertical-align: top;
//       @at-root {
//         #{&}-image {
//           padding: 1em .75em;
//           img {
//             height: 2em;
//           }
//         }
//         #{&}-input {
//           padding: 1em .75em;
//           .tag-input-block {
//             border: 1px solid #ddd;
//             border-radius: 2px;
//             padding: 0 .5em;
//             width: 15em;
//           }
//           .tag-input {
//             padding: .5em;
//             border: 0;
//             color: rgba(0,0,0,.3);
//             font-size: .8em;
//             background-color: transparent;
//           }
//         }
//         @media (max-width: 600px) {
//           #{&}-input {
//             display: none;
//           }
//         }
//       }

//     }
//     &.search {
//       float: right;
//       .btns {
//         & > a {
//           display: inline-block;
//           padding: .15em .8em;
//           font-size: .9em;
//           color: #fff;
//           &.register {
//             padding-right: 0;
//           }
//           &.login {
//             padding: 0;
//           }
//         }
//       }
//     }
//   }
// }
</style>
<template>
  <header>
    <div class="container clearfix">
      <ul class="actions">
        <li class="action action-image"><a><img src="https://gold-cdn.xitu.io/images/logo-header.svg" alt=""></a></li>
        <li class="action"><span class="logo-text">高质量的技术社区</span></li>
      </ul>
      <ul class="actions secondary">
        <li class="action action-input">
          <div class="tag-input-block"><i class="ion-ios-search"></i><input type="input" placeholder="输入关键字搜索" class="tag-input"></div>
        </li>
        <li class="action"><button class="inline register-button">注册 ·&nbsp; </button><button class="inline login-button">登录</button></li>
      </ul>
    </div>
  </header>
</template>
