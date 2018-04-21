<template>
  <aside class="aside">
    <div class="aside-user">
      <div class="avatar">
        <img src="http://localhost:8081/static/head.png" alt="Daker">
      </div>
      <div class="profile">
        <h3 class="name">Daker</h3>
        <p class="email">做最坏的打算，做最多的努力</p>
      </div>
    </div>
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
  </aside>
</template>

<script>
  export default {
    name: 'mobile-aside'
  }
</script>

<style lang="scss" scoped>
  aside {
    display: block;
    overflow: auto;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    transform: scale(0.8, 0.8);
    transition: $mobile-aisde-transition;
    &.open {
      opacity: 1;
      transform: scale(1, 1);
      transition: $mobile-aisde-transition;
    }
    > .aside-user {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding: 1em;
      border-bottom: 1px solid darken($mobile-aside-bg, 5%);
      > .avatar {
        width: 35%;
        > img {
          max-width: 100%;
          border: 2px solid $module-bg;
        }
      }
      > .profile {
        color: $body-bg;
        width: 100%;
        > .name {
          font-weight: bold;
          margin-bottom: 1rem;
        }
        > .email {
          color: $primary;
          margin: 0;
          @include text-overflow();
        }
      }
    }
    > .aside-nav {
      width: 100%;
      .nav-list {
        padding: 0;
        margin: 0;
        .item {
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
          color: $module-bg;
          margin-bottom: .5em;
          &.app {
            margin-top: 1rem;
            color: $primary;
            &.link-active {
              background-color: transparent;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
          &:hover {
            color: $primary;
            background-color: $body-bg;
          }
          &.link-active {
            color: $primary;
            font-weight: bold;
            background-color: $body-bg;
          }
          .iconfont {
            width: 1em;
            margin-right: 1em;
            display: inline-block;
          }
        }
      }
    }
  }
</style>