<style lang="scss">
	.welcome-left-aside {
	    position: fixed;
	    top: 5em;
	    display: inline-block;
	    width: 140px
	}
	.aside-list {
	    color: #909090
	}

	.aside-list>li {
	    margin: 0 0 .3em;
	    padding: .4em .6em;
	    cursor: pointer;
	    -webkit-transition: color .3s;
	    transition: color .3s
	}

	.aside-list>li.true {
	    font-weight: 700
	}

	.aside-list>li.true,.aside-list>li:active,.aside-list>li:hover {
	    color: #007fff;
	    background-color: hsla(0,0%,87%,.2);
	    border-radius: 2px
	}

	.aside-list>li.true .active,.aside-list>li:active .active,.aside-list>li:hover .active {
	    display: inline-block
	}

	.aside-list>li .active,.aside-list>li.true .inactive,.aside-list>li:active .inactive,.aside-list>li:hover .inactive {
	    display: none
	}

	.aside-list>li .inactive {
	    display: inline-block
	}

	.aside-list .icon {
	    background-size: 100% 100%;
	    width: 1.5em;
	    height: 1.5em;
	    top: .2em
	}

	.aside-list .icon,.aside-list span {
	    display: inline-block;
	    position: relative
	}

	.aside-list span {
	    top: -.2em
	}

	.aside-list-span {
	    margin-left: .9em
	}
</style>
<template>
	<div class="welcome-left-aside">
		<ul class="aside-list">
			<li class="home true v-link-active">
				<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home_normal" class="inactive"></use></svg>
				<span class="aside-list-span">推荐</span>
			</li>
			<li class="android"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#android" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#android_normal" class="inactive"></use></svg><span class="aside-list-span">Android</span></li>
			<li class="frontend"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#frontend" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#frontend_normal" class="inactive"></use></svg><span class="aside-list-span">前端</span></li><li class="ios"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ios" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ios_normal" class="inactive"></use></svg><span class="aside-list-span">iOS</span></li><li class="backend"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backend" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backend_normal" class="inactive"></use></svg><span class="aside-list-span">后端</span></li><li class="design"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#design" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#design_normal" class="inactive"></use></svg><span class="aside-list-span">设计</span></li><li class="product"> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#product" class="active"></use><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#product_normal" class="inactive"></use></svg><span class="aside-list-span">产品</span></li>
		</ul>
		<a href="/app" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/app@2x.png" class="app-img"></a><a href="/rss" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/rss.svg" class="rss-img"></a>
	</div>
</template>