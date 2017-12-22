# nuxt-express

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# lint test
$ npm run lint
```
## Todos 更新记录

## 目录结构
```
nuxt.js-blog/
   |
   ├──assets/                    * 需经webpack处理的静态资源
   |
   ├──components/                * 所有组件
   │   │
   │   │──common                 * 全局公共组件
   │   │
   │   └──layout                 * 布局组件
   │   │
   │   └──*****                  * 其他复用组件
   │
   │──middleware/                * Nuxt.js中间件，c/s渲染均会在路由改变前执行，需next/返回promise，支持异步
   |
   ├──filters/                   * 过滤器
   │
   ├──layouts/                   * Nuxt.js宿主元素布局模板，默认default，目前不可更改，error为渲染失败时的页面模板，目前不可指定layout属性
   |
   ├──pages/                     * Nuxt.js的页面文件，会根据文件生成路由
   │
   │──plugins/                   * 第三方组件 + 自有js库 + 其他插件性质的脚本
   │
   │──static/                    * 不经编译器处理的静态资源
   │
   │──store/                     * 全局数据状态管理
   │   │
   │   ├──*******                * 各数据模块
   │   │
   │   └──index                  * 根模块）
   │
   │──package.json               * 包信息
   │
   │──.eslintrc.js               * Eslint配置
   │
   │──.babelrc                   * Babel配置
   │
   │──.gitignore                 * Git忽略文件配置
   │
   │──nuxt.config.js             * Nuxt.js程序配置
   │
   │──backpack.config.js         * Nuxt.js程序入口文件配置（节省内存 + 优化内存）
   │
   │──ecosystem.config           * pm2部署配置（日志文件的路径需要自行修改）
   │
   └──.editorconfig              * 编码风格配置
```