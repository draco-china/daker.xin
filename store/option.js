/**
 * 全局设置数据状态
 */

export const state = () => {
  return {
    // 页面的栏目展示类型（3栏/2栏）
    fullColumn: false,
    errorColumn: false,

    // 是否为移动端
    isMobile: false,

    // 移动端侧边栏
    mobileSidebar: false,

    // ua
    userAgent: ''
  }
}

export const mutations = {

  // 设置UA
  SET_USER_AGENT(state, action) {
    state.userAgent = action
  },

  // 设置是否移动端状态
  SET_IS_MOBILE (state, action) {
    state.isMobile = action
  },

  // 设置栏目结构
  SET_FULL_COLUMU(state, action) {
    state.fullColumn = action
  },

  // 切换移动端侧边栏
  SET_MOBILE_SIDEBAR(state, action) {
    state.mobileSidebar = action
  }
}
