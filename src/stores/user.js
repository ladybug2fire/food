export default {
  state: {
    userInfo: {
      username: '星期三的猫'
    }
  },
  mutations: {
    logout (state) {
      state.userInfo = {}
    },
    logInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
  },
  getters: {
    username (state) {
      return state.userInfo.username
    },
    userInfo (state) {
      return state.userInfo
    }
  }
}
