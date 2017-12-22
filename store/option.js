/*
*
* 全局设置数据状态
*
*/

export const state = () => {
  return {
    // 是否为移动端
    isMobile: false,
    // ua
    userAgent: ''
  }
}

export const getters = {
  isMobile: state => state.isMobile
}

export const mutations = {

  // 设置是否移动端状态
  SET_IS_MOBILE (state, action) {
    state.isMobile = action
  },

  // 设置UA
  SET_USER_AGENT (state, action) {
    state.userAgent = action
  }
}
