export default {
  state: {
    userInfo: {
      username: '星期三的猫'
    }
  },
  mutations: { },
  actions: { },
  getters: {
    username (state) {
      return state.userInfo.username
    }
  }
}
