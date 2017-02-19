<style lang="scss">
	footer {
		padding: 84px 0;
		height: 570px;
		background-color: #2e2e2c;
		.main {
			margin: 0 auto;
			width: 38%;
		}
		.work-box {
			h2 {
				font-size: 30px;
				color: #fff;
			}
			ul {
				margin-top: 30px;
				color: #6d6d6c;
				li {
					margin-bottom: 19px;
				}
				h3 {
					font-size: 30px;
				}
				p {
					position: relative;
					padding: 7.5px 0;
					font-size: 14px;
					&:after {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 10.5%;
						height: 1px;
						content: "";
						background-color: #fff;
					}
				}
			}
		}
	}
</style>
<template>
	<footer>
		<div class="main">
			<div class="work-box">
				<h2>Work</h2>
				<ul>
					<li>
						<h3>中国站</h3>
						<p>三亚 大理 青岛 香港</p>
					</li>
					<li>
						<h3>中国站</h3>
						<p>三亚 大理 青岛 香港</p>
					</li>
					<li>
						<h3>中国站</h3>
						<p>三亚 大理 青岛 香港</p>
					</li>
				</ul>
			</div>
			<div class="about-box"></div>
		</div>
	</footer>
</template>