<template>
  <header class="header">
    <nav class="nav">
      <ul class="topbar-nav">
        <li><nuxt-link to="/">首页</nuxt-link></li>
        <li><a href="lw-article.html">标准文章</a></li>
        <li><a href="lw-img.html">图片库</a></li>
        <li><a href="lw-article-fullwidth.html">全宽页面</a></li>
        <li><a href="lw-timeline.html">存档</a></li>
      </ul>
      <form class="am-topbar-form am-topbar-right am-form-inline" role="search">
        <div class="am-form-group">
          <input type="text" class="am-form-field am-input-sm" placeholder="搜索">
        </div>
      </form>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  @import '~assets/scss/variables';
  .header {
    background-color: $module-bg;
    width: 100%;
    .nav {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $header-height;
      ul {
        li {
          float: left;
          padding: 0 1em;
        }
      }
    }
  }
</style>