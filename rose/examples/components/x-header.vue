<style lang="scss">
  @import '../Common/styles/base/vars';
  .header {
    padding: 25px 60px;
    height: 110px;
    @at-root {
      #{&}__logo {
        $w: 175px;
        $h: 42px;
        float: left;
        margin-right: 65px;
        width: $w;
        height: $h;
        background: url(logo.png) no-repeat;
      }
      #{&}__list {
        float: left;
        padding: 15px;
        height: 100%;
        li {
          padding-right: 50px;
          float: left;
          height: 100%;
          &.current {
            position: relative;
            &:after {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 24px;
              height: 4px;
              background-color: #f18871;
              content: "";
            }
          }
          h3, p {
            display: inline-block;
          }
          h3 {
            font-size: 15px;
            color: #2f2f2d;
            font-weight: 600;
          }
          p {
            font-size: 12px;
            color: #2f2f2d;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="header">
    <div class="header__logo"></div>
    <ul class="header__list clearfix">
      <li class="current">
        <h3>去哪拍</h3>
        <p>三亚、泰国》</p>
      </li>
      <li>
        <h3>相信我</h3>
        <p>/ 了解七彩玫瑰</p>
      </li>
      <li>
        <h3>独一无二</h3>
        <p>/ 专属定制</p>
      </li>
      <li>
        <h3>找到我</h3>
        <p>/ 联络我们</p>
      </li>
    </ul>
  </div>
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
