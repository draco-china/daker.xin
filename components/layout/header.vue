<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container container">
        <div class="navbar-header">
          <h1 class="navbar-title">DAKER.XIN</h1>
          <h1 class="navbar-welcome">Welcome</h1>
          <!--<span class="navbar-slogan">Talk is cheap. Show me the code</span>-->
          <nuxt-link to="/" class="navbar-link"></nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header'
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
        .navbar-header {
          display: flex;
          height: $header-height;
          position: relative;
          width: 29em;
          align-items: center;
          @keyframes letterspacing {
            0% {
              filter:blur(.15em);
              letter-spacing: -.52em;
              opacity: 0;
            }
            100% {
              filter:blur(0);
              letter-spacing: .1em;
              opacity: 1;
            }
          }
          .navbar-title {
            color: $primary;
            animation: letterspacing 2.5s infinite alternate ease-in-out;
          }
          .navbar-welcome {
            @extend .navbar-title;
            opacity: 0;
            animation-delay: 2.5s;
          }
          .navbar-slogan {
            color: $primary;
            font-family: DINRegular, CenturyGothic;
          }
          .navbar-link {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>