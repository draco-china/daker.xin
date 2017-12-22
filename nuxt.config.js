module.exports = {
  build: {
    // 为JS和Vue文件定制babel配置。https://nuxtjs.org/api/configuration-build/#analyze
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  cache: {
    max: 10,
    maxAge: 600000
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' }
  ],
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'daker.xin',
    titleTemplate: '%s | daker.xin',
    htmlAttrs: {
      xmlns: 'http://www.w3.org/1999/xhtml',
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'author', content: 'Darker@hotmail.com' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'daker.xin ,前端技术开发,javascript技术' },
      { hid: 'description', name: 'description', content: '凡心所向 素履所往 生如逆旅 一苇以航' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        // async: 'async',
        // defer: 'defer',
        // type: 'text/javascript',
        // src: '/scripts/test.js'
        // innerHTML: ``
      }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  },
  offline: true, // true or https://github.com/NekR/offline-plugin/blob/master/docs/options.md
  plugins: [
    // { src: '~/plugins/axios.js'},
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/copy-right.js', ssr: false },
    { src: '~/plugins/baidu-seo-push.js', ssr: false },
    { src: '~/plugins/offline.js', ssr: false }
  ],
  render: {
    http2: true,
    resourceHints: true
  },
  router: {
    middleware: ['ssr-cookie'],
    linkActiveClass: 'active-link', // 链接激活时使用的 CSS 类名
    linkExactActiveClass: 'exact-active-link', // 当链接被精确匹配的时候应该激活的 class
    scrollBehavior(to, from, savedPosition) {
      // savedPosition is only available for popstate navigations.
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        // if no children detected
        if (to.matched.length < 2) {
          // scroll to the top of the page
          position = { x: 0, y: 0 }
        }
        else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
          // if one of the children has scrollToTop option set to true
          position = { x: 0, y: 0 }
        }
        // if link has anchor,  scroll to anchor by returning the selector
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    },
    extendRoutes(routes) {}
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#3dd4ff'
  }
}
