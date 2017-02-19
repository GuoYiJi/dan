<style lang="scss" scoped>
	.welcome-right-aside {
    position: absolute;
    top: 1em;
    right: 0;
    display: inline-block;
    width: 14.4em;
    margin: 0 0 0 1em
}

.section {
    width: 100%;
    background-color: #fff;
    margin-bottom: 1em;
    border-radius: 2px
}

.section.bg-section {
    padding: 0;
    background-color: transparent;
    margin-bottom: .7em
}

.section .button {
    margin-bottom: .5em;
    border-radius: 3px;
    box-shadow: inset 0 -.2em 0 0 rgba(0,0,0,.05);
    font-size: .8em;
    text-align: left;
    padding: .8em .8em .8em 2em
}

.section .button.email-phone-button {
    text-align: center;
    padding: .8em
}

.section .button:hover {
    opacity: .8
}

.section .button:active {
    box-shadow: none;
    -webkit-transform: translateY(.1em);
    transform: translateY(.1em)
}

.fixed {
    position: fixed;
    width: 14.4em
}

.section-title {
    border-bottom: 1px solid #f1f1f1;
    height: 3em;
    line-height: 3em;
    padding-left: 1em;
    font-size: .9em
}

.section-content {
    padding: 1em
}

.section-content.tag-section-content {
    padding-bottom: .3em
}

.company-text {
    font-size: .8em;
    line-height: 1.5em;
    margin-top: 1.6em;
    margin-bottom: 0;
    color: hsla(0,0%,40%,.5)
}

.company-img {
    width: 10.6em;
    display: block;
    margin: auto
}

.tag-block {
    float: left;
    width: 50%;
    margin-bottom: .8em
}

.tag-block .tag {
    border-radius: 3em;
    background-color: #f4f6f3;
    color: #454645;
    padding: .2em .8em;
    cursor: pointer;
    border: none;
    -webkit-transition: color .1s,border-color .1s,background-color .1s;
    transition: color .1s,border-color .1s,background-color .1s
}

.tag-block .tag .icon-plus {
    color: #37c700
}

.tag-block .tag:hover {
    background-color: #37c700;
    color: #fff
}

.tag-block .tag:hover .icon-plus {
    color: #fff
}

.user-block {
    margin-bottom: 1em;
    position: relative
}

.user-block:last-child {
    margin-bottom: 0
}

.user-block .avatar {
    width: 1.5em;
    height: 1.5em;
    margin: .5em .5em .5em 0
}

.user-info {
    margin-top: .3em
}

.user-info .username {
    width: 9em;
    font-size: .8em;
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis
}

.user-info .username.no-title {
    margin-top: .7em
}

.user-info span {
    color: #909090;
    font-size: .7em
}

.follow-button {
    position: absolute;
    top: 0;
    right: 0;
    color: #37c700;
    font-size: .8em;
    cursor: pointer
}

.follow-button.no-title {
    top: .9em
}

.follow-button-span {
    margin-left: .3em
}

.translate-text {
    color: #007fff;
    margin-left: .5em;
    font-size: .9em
}

.icon-arrow {
    position: absolute;
    right: 1em;
    color: #007fff
}

.footer {
    position: relative;
    margin-bottom: 3em;
    margin-top: 1.5em
}

.footer .icons {
    width: 10em;
    margin: .7em auto
}

.footer .icons .icon-img {
    width: 1.5em;
    height: 1.5em;
    margin-left: .5em;
    margin-right: .5em
}

.footer .footer-title {
    color: #909090;
    font-size: .9em
}

.footer .footer-text {
    font-size: .8em;
    color: #909090;
    text-align: center
}

.footer .footer-text a {
    color: #909090
}

.footer .footer-text a:hover {
    opacity: .7
}

.wechat-icon {
    cursor: pointer;
    display: inline
}

.wechat-icon:hover .wechat-qr-box {
    opacity: 1;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg)
}

.wechat-qr-box {
    position: absolute;
    background: #fff;
    width: 10em;
    top: 4em;
    left: 5em;
    z-index: 2;
    padding: .8em 0 0;
    opacity: 0;
    border: 1px solid #ddd;
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg)
}

.qr-img {
    width: 100%
}

.recommend-tags {
    padding: 1em;
    min-height: 10em
}

.recommend-tag {
    width: 20%
}

.recommend-tag .tag-img {
    height: 3em;
    margin: .6em auto .3em;
    display: block
}

.recommend-tag .tag-text {
    font-size: .9em;
    line-height: 2em
}

.recommend-tag .subsctribe-button {
    width: 60%;
    text-align: center;
    padding: .2em .5em;
    background-color: transparent;
    border: 1px solid #37c700;
    color: #37c700;
    margin: .5em auto;
    font-size: .8em;
    line-height: 1.5em;
    border-radius: 2px;
    cursor: pointer
}

.recommend-tag .subsctribe-button:hover {
    background-color: #37c700;
    color: #fff
}

.login-section-text {
    font-size: .9em;
    line-height: 1.4em;
    margin-bottom: 1em;
    color: #333;
    font-weight: 700
}

.weibo-button {
    margin-left: 0;
    background-color: #d21a1a
}

.wechat-button {
    margin-left: 0;
    background-color: #37c700
}

.github-button {
    margin-left: 0;
    background-color: #4c4c4c
}

.email-phone-button {
    margin-left: 0;
    border: 1px solid #eaeaea;
    background-color: transparent;
    color: #007fff
}

.login-icon-img {
    height: 1.5em
}

.section-img {
    width: 100%;
    border-radius: 2px
}

.welcome-hero-cover {
    background-color: rgba(0,0,0,.6);
    z-index: 10;
    display: none
}

.welcome-hero-cover.open {
    display: block
}

.login-cover {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -10em;
    margin-left: -10em;
    width: 20em;
    min-height: 21em;
    background-color: #fff;
    z-index: 99;
    border-radius: 2px;
    border: 1px solid #f5f5f5;
    padding: 1.5em;
    display: none
}

.login-cover.open {
    display: block
}

.cover-transition {
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease
}

.cover-enter,.cover-leave {
    opacity: 0
}

.close-icon {
    position: absolute;
    top: .4em;
    right: .7em;
    color: #909090;
    font-size: 1.1em;
    cursor: pointer
}

.login-label {
    font-weight: 700;
    font-family: PingFangSC-Medium;
    font-size: 1.3em
}

.text-alert {
    color: #e22323;
    font-size: .8em;
    margin-top: .3em
}

.input-relative {
    -webkit-margin-before: .1em;
    -webkit-margin-after: .1em
}

.input-relative .welcome-input {
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    margin: .7em auto;
    padding: .8em .7em;
    font-size: 14px
}

.input-relative .welcome-input:focus {
    border: 1px solid #007fff
}

.input-relative .checkmark-icon {
    color: #37c700;
    position: absolute;
    right: 0;
    top: 0;
    padding: .8em .7em
}

.input-relative .validation-button {
    top: 0;
    padding: .7em 1em;
    color: #007fff;
    font-size: .9em
}

.input-relative .validation-button:disabled {
    color: #909090
}

.login-text {
    margin-bottom: 2em;
    position: relative;
    width: 100%;
    font-size: .8em
}

.login-text .to-register-text {
    line-height: 3;
    cursor: pointer;
    position: absolute;
    right: 0
}

.login-text .to-reset-password-text {
    line-height: 3;
    cursor: pointer
}

.welcome-large-btn {
    padding: .7em
}

.to-login-text {
    line-height: 3;
    cursor: pointer;
    font-size: .8em
}

.other-platform {
    text-align: center;
    margin-top: 1em
}

.other-platform .other-platform-text {
    font-size: .8em
}

.other-platform .other-platform-img {
    margin: 0 .5em;
    cursor: pointer
}

@media (max-width: 600px) {
    .container {
        width:100%
    }

    .header-logo-text,.tag-input-block,.welcome-center,.welcome-left-aside {
        display: none
    }

    .welcome-right-aside {
        position: relative;
        width: 90%;
        margin: auto;
        display: block
    }

    .section {
        padding: 2.5em
    }
}

@media (max-height: 800px) {
    .sections.fixed .tags-section {
        display:none
    }

    .app-img {
        margin: 1em auto .5em
    }
}

</style>
<template>
	<div class="welcome-right-aside"><div class="sections"><div class="section section-content"><div class="login-section-text">掘金 · 一个只有高手分享的技术社区，立即加入：</div><div class="button full-width weibo-button"><img src="https://gold-cdn.xitu.io/images/welcome/weibo-white.svg" class="login-icon-img inline"><span>使用微博登录</span></div><div class="button full-width wechat-button"><img src="https://gold-cdn.xitu.io/images/welcome/wechat-white.svg" class="login-icon-img inline"><span>使用微信登录</span></div><div class="button full-width github-button"><img src="https://gold-cdn.xitu.io/images/welcome/github-white.svg" class="login-icon-img inline"><span>使用 GitHub 登录</span></div><div class="button full-width email-phone-button">邮箱/手机注册</div><div class="text-center company-text">这些大厂的工程师也在用掘金</div><img src="https://gold-cdn.xitu.io/images/welcome/company@2x.png" class="company-img"></div><div class="section tags-section"><div class="section-title">关注这些标签下的优质文章</div><div class="section-content tag-section-content clearfix"><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>GitHub</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>设计模式</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>工具资源</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>黑科技</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>教程</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>JavaScript</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>移动开发</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>APP</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>开源</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>面试</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>程序员</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>算法</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>代码规范</span></div></div><div class="tag-block"><div class="tag"><i class="ion-android-add icon-plus"></i><span>性能</span></div></div></div></div></div><div class="section"><div class="section-title">和牛人一起用掘金</div><div class="section-content"><!--v-for-start--><div class="user-block clearfix"><img class="avatar float-left" src="https://dn-mhke0kuv.qbox.me/95d0aa9a8028f4407eed.png?imageView/2/w/100/h/100/q/80/format/png"><a href="https://gold.xitu.io/user/5656fe2260b2febec4b52f46"><div class="user-info float-left"><div class="username">前端外刊评论</div><span>前端架构师</span><span>&nbsp;@&nbsp;</span><!--v-if--><span>陆金所</span></div></a><div class="follow-button"><i class="ion-plus-round"></i><span class="follow-button-span">关注</span></div></div><div class="user-block clearfix"><img class="avatar float-left" src="https://user-gold-cdn.xitu.io/2016/11/29/61b7fe201520c7cea89fbec4229db8df"><a href="https://gold.xitu.io/user/570a0ff3c4c9710051b060b2"><div class="user-info float-left"><div class="username">刘欣</div><span>程序员</span><!--v-if--><span></span></div></a><div class="follow-button"><i class="ion-plus-round"></i><span class="follow-button-span">关注</span></div></div><div class="user-block clearfix"><img class="avatar float-left" src="https://dn-mhke0kuv.qbox.me/61de332e1a3fc6308f4f.jpg?imageView/1/w/100/h/100/q/80/format/png"><a href="https://gold.xitu.io/user/56ac70aa71cfe4005c0453ad"><div class="user-info float-left"><div class="username">猴子搬来的救兵</div><span>安卓高级研发工程师</span><span>&nbsp;@&nbsp;</span><!--v-if--><span>ofo</span></div></a><div class="follow-button"><i class="ion-plus-round"></i><span class="follow-button-span">关注</span></div></div><div class="user-block clearfix"><img class="avatar float-left" src="https://user-gold-cdn.xitu.io/2016/11/29/3668aaa6d2dd0389b3c213e8957c3425"><a href="https://gold.xitu.io/user/556eaf68e4b08ae2e1b1a7ff"><div class="user-info float-left"><div class="username no-title">唐巧_boy</div><span></span><!--v-if--><span></span></div></a><div class="follow-button no-title"><i class="ion-plus-round"></i><span class="follow-button-span">关注</span></div></div><!--v-for-end--></div></div><a href="https://gold.xitu.io/tag/%E6%8E%98%E9%87%91%E7%BF%BB%E8%AF%91%E8%AE%A1%E5%88%92" target="_blank"><div class="section section-content"><img src="https://gold-cdn.xitu.io/images/welcome/miner.svg" class="inline"><span class="translate-text">每周翻译优质文章</span><i class="ion-arrow-right-b icon-arrow"></i></div></a><div class="section bg-section"><a href="https://gold.xitu.io/extension" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/extension@2x.png" class="section-img"></a></div><div class="section bg-section"><a target="_blank" href="https://gold.xitu.io/entry/57bdb4c9c4c97100616574dc/detail"><img class="section-img" src="https://dn-mhke0kuv.qbox.me/e8966d2fbceeda1864a1.png"></a></div><div class="footer"><div class="text-center footer-title">关注我们</div><div class="icons"><a href="http://weibo.com/xitucircle" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/follow-weibo@2x.png" class="icon-img inline"></a><div class="wechat-icon"><img src="https://gold-cdn.xitu.io/images/welcome/follow-wechat@2x.png" class="icon-img inline"><div class="wechat-qr-box fade"><div class="qr-box-title text-muted text-center">微信扫一扫</div><img src="https://gold-cdn.xitu.io/images/xitujun-qr.jpg" class="qr-img"></div></div><a href="https://zhuanlan.zhihu.com/xitucircle" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/follow-zhuanlan@2x.png" class="icon-img inline"></a><a href="http://www.jianshu.com/users/5fc9b6410f4f/latest_articles" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/follow-jianshu@2x.png" class="icon-img inline"></a></div><div class="footer-text"><a href="/about" target="_blank">关于</a><span>&nbsp;·&nbsp;</span><a href="/i-want-u" target="_blank">招聘</a><span>&nbsp;·&nbsp;</span><a href="/partners" target="_blank">合作伙伴</a><br><a href="/sitemap.xml" target="_blank">Sitemap</a><span>&nbsp;·&nbsp;</span><a href="/explore/all" target="_blank">发现更多</a><span>&nbsp;·&nbsp;</span><span>©2017 掘金</span></div></div></div>
</template>