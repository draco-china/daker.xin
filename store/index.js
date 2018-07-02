/*
*
* 根数据状态 存放全局数据和异步方法
*
*/
import Vue from 'vue'
import service from '~/plugins/axios'

// global actions
export const actions = {
  // 全局服务初始化
  nuxtServerInit (store, { params, route, req }) {
    // 检查设备类型
    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
    store.commit('option/SET_IS_MOBILE', isMobile)
    store.commit('option/SET_USER_AGENT', userAgent)

    const initAppData = [
      // 配置数据
      store.dispatch('loadAdminInfo'),
      store.dispatch('loadGlobalOption'),
      // 内容数据
      store.dispatch('loadTagList'),
      store.dispatch('loadCategories')
    ]
    // 如果不是移动端的话，则请求热门文章
    if (!isMobile) {
      initAppData.push(store.dispatch('loadHotArticles'))
    }
    return Promise.all(initAppData)
  },

  // 获取博主资料
  loadAdminInfo({ commit }) {
    commit('option/REQUEST_ADMIN_INFO')
    return service.get('/user').then(response => {
      const success = response.status && response.data && response.data.success
      if (success) {
        commit('option/REQUEST_ADMIN_INFO_SUCCESS', response.data)
      } else {
        commit('option/REQUEST_ADMIN_INFO_FAILURE')
      }
    }).catch(err => {
      commit('option/REQUEST_ADMIN_INFO_FAILURE', err)
    })
  },

  // 获取全局配置
  loadGlobalOption({ commit }) {
    commit('option/REQUEST_GLOBAL_OPTIONS')
    return service.get('/site').then(response => {
      const success = response.status && response.data && response.data.success
      if (success) {
        commit('option/REQUEST_GLOBAL_OPTIONS_SUCCESS', response.data)
      } else {
        commit('option/REQUEST_GLOBAL_OPTIONS_FAILURE')
      }
    }).catch(err => {
      commit('option/REQUEST_GLOBAL_OPTIONS_FAILURE', err)
    })
  },

  // 获取标签列表
  loadTagList({ commit }, params = { per_page: 160 }) {
    commit('tag/REQUEST_LIST')
    return service.get('/tag', { params }).then(response => {
      const success = response.status && response.data && response.data.success
      if (success) {
        commit('tag/GET_LIST_SUCCESS', response.data)
      } else {
        commit('tag/GET_LIST_FAILURE')
      }
    }).catch(err => {
      commit('tag/GET_LIST_FAILURE', err)
    })
  },

  // 获取分类列表
  loadCategories({ commit }, params = { per_page: 100 }) {
    commit('category/REQUEST_LIST')
    return service.get('/category', { params }).then(response => {
      const success = response.status && response.data && response.data.success
      if (success) {
        commit('category/GET_LIST_SUCCESS', response.data)
      } else {
        commit('category/GET_LIST_FAILURE')
      }
    }).catch(err => {
      commit('category/GET_LIST_FAILURE', err)
    })
  },

  // 获取最热文章列表
  loadHotArticles({ commit }) {
    commit('article/REQUEST_HOT_LIST')
    return service.get('/article', { params: { hot: 1 }}).then(response => {
      const success = response.status && response.data && response.data.success
      if (success) {
        commit('article/GET_HOT_LIST_SUCCESS', response.data)
      } else {
        commit('article/GET_HOT_LIST_FAILURE')
      }
    }).catch(err => {
      commit('article/GET_HOT_LIST_FAILURE', err)
    })
  },

  // 获取地图文章列表
  loadSitemapArticles({ commit }, params = { currentPage: 1 }) {
    commit('sitemap/REQUEST_ARTICLES')
    return service.get('/article', { params }).then(response => {
      const success = response.status && response.data && response.data.success
      const commitName =  `sitemap/GET_ARTICLES_SUCCESS`
      if (success) {
        commit(commitName, response.data)
      } else {
        commit('sitemap/GET_ARTICLES_FAILURE')
      }
    }).catch(err => {
      commit('sitemap/GET_ARTICLES_FAILURE', err)
    })
  },

  // 获取文章列表
  loadArticles({ commit }, params = { currentPage: 1 }) {
    if (Object.is(params.currentPage, 1)) {
      commit('article/CLEAR_LIST')
    }
    commit('article/REQUEST_LIST')
    return service.get('/article', { params }).then(response => {
      const success = response.status && response.data && response.data.success
      const loadMore = params.currentPage && params.currentPage > 1
      const commitName =  `article/${loadMore ? 'ADD' : 'GET'}_LIST_SUCCESS`
      if (success) {
        commit(commitName, response.data)
        if (loadMore && process.browser) {
          Vue.nextTick(() => {
            // scrollTo(window.scrollY + (window.innerHeight * 0.8), 300, { easing: easing['ease-in'] })
          })
        }
      } else {
        commit('article/GET_LIST_FAILURE')
      }
    }).catch(err => {
      commit('article/GET_LIST_FAILURE', err)
    })
  },

  // 获取文章详情
  loadArticleDetail({ commit }, params = {}) {
    commit('article/REQUEST_DETAIL')
    return service.get(`/article/${params.article_id}`).then(response => {
      const success = response.status && response.data && response.data.success
      if (success) {
        commit('article/GET_DETAIL_SUCCESS', response.data)
      } else {
        commit('article/GET_DETAIL_FAILURE')
      }
      return Promise.resolve(response.data)
    }, err => {
      commit('article/GET_DETAIL_FAILURE', err)
      return Promise.reject(err)
    })
  },
}
