<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container container">
        <div class="navbar-logo">
          <a href="/" class="logo"></a>
        </div>
        <div class="navbar-wrapper">
          <div class="nav-list">
            <nuxt-link :to="'/'" class="item" exact>
              <i class="iconfont icon-home"></i>
              <span>home</span>
            </nuxt-link>
            <nuxt-link to="/category/code" class="item">
              <i class="iconfont icon-code"></i>
              <span>code</span>
            </nuxt-link>
            <nuxt-link to="/category/think" class="item">
              <i class="iconfont icon-think"></i>
              <span>think</span>
            </nuxt-link>
            <nuxt-link to="/project" class="item">
              <i class="iconfont icon-tool"></i>
              <span>Project</span>
            </nuxt-link>
            <nuxt-link to="/about" class="item">
              <i class="iconfont icon-user"></i>
              <span>about</span>
            </nuxt-link>
            <nuxt-link to="/guestbook" class="item">
              <i class="iconfont icon-comment"></i>
              <span>guestbook</span>
            </nuxt-link>
            <!--<nuxt-link to="/sitemap" class="item">-->
              <!--<i class="iconfont icon-sitemap"></i>-->
              <!--<span>sitemap</span>-->
            <!--</nuxt-link>-->
          </div>
        </div>
        <div class="navbar-search">
          <input id="keyword"
                 required
                 list="keywords"
                 type="search"
                 name="search"
                 :class="`search-input${toggle ? '' : ' hide'}`"
                 placeholder="Search..."
                 v-model.trim="keyword"
                 @keyup.enter="toSearch">
          <a class="search-btn" @click="toggle = !toggle">
            <i :class="`iconfont${toggle ? ' icon-cancel' : ' icon-search'}`"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        keyword: '',
        toggle: false
      }
    },
    mounted() {
      if (Object.is(this.$route.name, 'search-keyword')) {
        this.keyword = this.$route.params.keyword
      }
    },
    methods: {
      toSearch() {
        const keyword = this.keyword
        const paramsKeyword = this.$route.params.keyword
        const isSearchPage = Object.is(this.$route.name, 'search-keyword')
        if (keyword && (isSearchPage ? !Object.is(paramsKeyword, keyword) : true)) {
          this.$router.push({name: 'search-keyword', params: {keyword}})
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: $header-height;
      background-color: $module-bg;
      z-index: 999;
      .navbar-container {
        height: $header-height;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navbar-logo {
          .logo {
            display: block;
            width: 110px;
            height: 36px;
            background: url(~/images/logo.svg) no-repeat center center;
            background-size: 100% 100%;
          }
        }
        .navbar-wrapper {
          .nav-list {
            > .item {
              border: none;
              padding: 0 1em;
              text-decoration: none;
              text-transform: uppercase;
              font-weight: 700;
              border-radius: 1px;
              color: $secondary;
              &:hover {
                color: $primary;
              }
              &.link-active {
                font-weight: bold;
                color: $primary;
              }
              .iconfont {
                width: 1em;
                margin-right: .5em;
                display: inline-block;
              }
            }
          }
        }
        .navbar-search {
          position: relative;
          width: 12em;
          text-align: right;

          .search-input {
            background: transparent;
            height: 2em;
            width: 12em;
            opacity: 1;
            border-bottom: .1em solid $secondary;
            transition: all .3s ease-in-out;
            &.hide {
              width: 0;
              padding: 0;
              opacity: 0;
            }
          }
          .search-btn {
            cursor: pointer;
            position: absolute;
            right: 0;
            line-height: 2em;
          }
        }
        .navbar-header {
          display: flex;
          height: $header-height;
          position: relative;
          width: 29em;
          align-items: center;
          .navbar-title {
            // color: $primary;
            display: block;
            text-decoration: none;
            text-align: center;
            line-height: 1.5;
            margin: 20px 0px;
            background-image: -webkit-linear-gradient(left,#3498db,#f47920 10%,#d71345 20%,#f7acbc 30%,#ffd400 40%,#3498db 50%,#f47920 60%,#d71345 70%,#f7acbc 80%,#ffd400 90%,#3498db);
            background-repeat: initial;
            color: transparent;
            -webkit-background-clip: text;
            background-size: 200% 100%;
            animation: slide 3s infinite linear;
            font-size: 2em;
            @keyframes slide {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: -100% 0;
              }
            }
          }
          .navbar-slogan {
            color: $primary;
            font-family: DINRegular, CenturyGothic;
          }
        }
      }
    }
  }

</style>