<template>
  <div class="aside-nav">
    <nav class="nav-list">
      <nuxt-link :to="'/'" class="item" exact>
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </nuxt-link>
      <nuxt-link to="/category/code" class="item">
        <i class="iconfont icon-code"></i>
        <span>编程</span>
      </nuxt-link>

      <nuxt-link to="/category/think" class="item">
        <i class="iconfont icon-think"></i>
        <span>思考</span>
      </nuxt-link>
      <nuxt-link to="/project" class="item">
        <i class="iconfont icon-tool"></i>
        <span>项目</span>
      </nuxt-link>
      <nuxt-link to="/music" class="item">
        <i class="iconfont icon-netease-music"></i>
        <span>音乐</span>
      </nuxt-link>
      <nuxt-link to="/photo" class="item">
        <i class="iconfont icon-photo"></i>
        <span>照片</span>
      </nuxt-link>
      <nuxt-link to="/movie" class="item">
        <i class="iconfont icon-movie"></i>
        <span>电影</span>
      </nuxt-link>
      <nuxt-link to="/about" class="item">
        <i class="iconfont icon-user"></i>
        <span>关于</span>
      </nuxt-link>
      <nuxt-link to="/guestbook" class="item">
        <i class="iconfont icon-comment"></i>
        <span>留言</span>
      </nuxt-link>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'nav-view'
  }
</script>

<style lang="scss" scoped>
  .aside-nav {
    float: left;
    width: 11.5em;
    height: calc((100vh - 14.5em));
    @include clearfix();
    .nav-list {
      position: fixed;
      display: inline-block;
      width: 11.5em;
      top: 5.5em;
      // left: calc((100% - 75em) / 2);
      padding: 0;
      margin: 0;
      > .item {
        border: none;
        display: block;
        width: 100%;
        height: 3em;
        line-height: 3em;
        padding: 0 1em;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 1px;
        color: $secondary;
        margin-bottom: .5em;
        &:hover {
          color: $primary;
        }
        &.link-active {
          font-weight: bold;
          color: $primary;
          background-color: $module-bg;
        }
        .iconfont {
          width: 1em;
          margin-right: 1em;
          display: inline-block;
        }
      }
    }
  }
</style>