import {getUser} from '@/api/user'
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
  actions: {
    getUser ({commit, state}, payload) {
      getUser()
    }
  },
  getters: {
    username (state) {
      return state.userInfo.username
    }
  }
}
