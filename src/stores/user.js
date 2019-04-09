export default {
  state: {
    userInfo: {
      username: '星期三的猫',
      _id: '123123'
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
    userid (state) {
      return state.userInfo._id
    },
    username (state) {
      return state.userInfo.username
    },
    userInfo (state) {
      return state.userInfo
    }
  }
}
