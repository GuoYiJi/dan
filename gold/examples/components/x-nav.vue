<style lang="scss">
	.left-aside {
		margin-top: 1em;
		float: left;
		width: 140px;
	}
	@media (max-width: 810px) {
		.left-aside {
			display: none;
		}
	}
</style>
<template>
	<div class="welcome-left-aside left-aside">
		<ul class="aside-list">
			<li class="home true v-link-active">
				<span class="aside-list-span">推荐</span>
			</li>
			<li class="android"><span class="aside-list-span">Android</span></li>
			<li class="frontend"><span class="aside-list-span">前端</span></li><li class="ios"><span class="aside-list-span">iOS</span></li><li class="backend"><span class="aside-list-span">后端</span></li><li class="design"><span class="aside-list-span">设计</span></li>
			<li class="product"><span class="aside-list-span">产品</span></li>
		</ul>
		<a href="/app" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/app@2x.png" class="app-img"></a><a href="/rss" target="_blank"><img src="https://gold-cdn.xitu.io/images/welcome/rss.svg" class="rss-img"></a>
	</div>
</template>