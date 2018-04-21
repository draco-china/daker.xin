<template>
  <div id="app" v-cloak>
    <div id="app-aside" v-if="isMobile" :class="{ open: mobileSidebar }">
      <mobile-aside :class="{ open: mobileSidebar }"></mobile-aside>
    </div>
    <div id="app-mian" :class="{ open: mobileSidebar }" @click="closeMobileSidebar">
      <background v-if="!isMobile"></background>
      <header-view v-if="!isMobile"></header-view>
      <mobile-header v-if="isMobile"></mobile-header>
      <main id="main" :class="{ 'mobile-layout': isMobile, [$route.name]: true }">
        <transition name="module">
          <keep-alive>
            <nav-view v-if="!isMobile"></nav-view>
          </keep-alive>
        </transition>
        <div id="main-content" class="main-content" :class="{'full-column': fullColumn, 'mobile-layout': isMobile, [$route.name]: true}">
          <keep-alive>
            <nuxt></nuxt>
          </keep-alive>
        </div>
        <transition name="aside">
          <keep-alive>
            <aside-view v-if="!fullColumn && !isMobile"></aside-view>
          </keep-alive>
        </transition>
      </main>
      <footer-view></footer-view>
    </div>
  </div>
</template>

<script>
  import { MobileHeader, MobileAside } from '~/components/mobile'
  import { Background, Header, Footer, Aside, Nav } from '~/components/layout'

  export default {
    name: 'app',
    head() {
      return !this.isMobile ? {} : {
        bodyAttrs: {
          class: 'mobile'
        }
      }
    },
    components: {
      Background,
      HeaderView: Header,
      FooterView: Footer,
      AsideView: Aside,
      NavView: Nav,
      MobileHeader,
      MobileAside
    },
    computed: {
      isMobile() {
        return this.$store.state.option.isMobile
      },
      fullColumn() {
        return this.$store.state.option.fullColumn
      },
      mobileSidebar() {
        return this.$store.state.option.mobileSidebar
      }
    },
    methods: {
      closeMobileSidebar() {
        if (this.isMobile) {
          this.$store.commit('option/SET_MOBILE_SIDEBAR', false)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    color: $text;
    &[v-cloak] {
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }
  #app-mian {
    transition: $mobile-aisde-transition;
    &.open {
      transition: $mobile-aisde-transition;
      transform: translateX(68%);
    }
  }
  #app-aside {
    width: 68%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 9999;
    transform: translateX(-100%);
    transition: $mobile-aisde-transition;
    background-color: $mobile-aside-bg;
    &.open {
      overflow: hidden;
      transform: translateX(0);
      transition: $mobile-aisde-transition;
      -webkit-overflow-scrolling: touch;
    }
  }
  #main {
    position: relative;
    &.mobile-layout {
      width: $mobile-container-width;
    }
    .main-content {
      float: left;
      width: 42.5em;
      margin: 0 0 0 1em;
      position: relative;
      overflow: hidden;
      @include css3-prefix(transition, width .35s);
      @include clearfix();
      &.mobile-layout {
        width: 100%;
        margin: 0;
        padding: 1rem;
        padding-top: $navbar-height + 1;
      }
      &:-moz-full-screen {
        overflow-y: auto;
      }

      &:-webkit-full-screen {
        overflow-y: auto;
      }

      &:fullscreen {
        overflow-y: auto;
      }

      &.full-column {
        width: 62.5em;
        @include css3-prefix(transition, width .35s);
      }
      &.mobile-layout {
        width: 100%;
        margin: 0;
        padding: 1rem;
        padding-top: $navbar-height + 1;
      }
    }
  }
</style>