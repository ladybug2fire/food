export default {
  state: {
    userInfo: {
      username: '星期三的猫'
    }
  },
  mutations: {
    logout (state) {
      state.userInfo = {}
    }
  },
  actions: { },
  getters: {
    username (state) {
      return state.userInfo.username
    }
  }
}
